import crypto from "node:crypto";
import mailchimp, { searchMembers } from "@mailchimp/mailchimp_marketing";
import { ContactData } from "../../components/ContactForm/ContactForm";
import { ContactsClientStructure } from "./types";

mailchimp.setConfig({
  apiKey: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER,
});

class MailchimpContactsClient implements ContactsClientStructure {
  async addOrUpdateContact(contactData: ContactData): Promise<void> {
    const searchResponse = await this.findContactByEmail(contactData.email);

    if (this.contactExists(searchResponse)) {
      await this.updateContact(contactData);
    } else {
      await this.addContact(contactData);
    }
  }

  private async addContact({
    email,
    name,
    phone,
    course,
    message,
  }: ContactData): Promise<void> {
    await mailchimp.lists.addListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE!,
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          MMERGE2: course,
          FNAME: name,
          PHONE: phone,
          MMERGE3: message,
        },
      },
    );
  }

  private async updateContact({
    name,
    email,
    phone,
    course,
    message,
  }: ContactData): Promise<void> {
    await mailchimp.lists.updateListMember(
      process.env.NEXT_PUBLIC_MAILCHIMP_AUDIENCE!,
      this.hashEmail(email),
      {
        merge_fields: {
          FNAME: name,
          MMERGE2: course,
          PHONE: phone,
          MMERGE3: message,
        },
      },
    );
  }

  private hashEmail(email: string): string {
    return crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
  }

  private async findContactByEmail(
    email: string,
  ): Promise<searchMembers.SearchMembersSuccessResponse> {
    const response = (await mailchimp.searchMembers.search(
      email,
    )) as searchMembers.SearchMembersSuccessResponse;

    return response;
  }

  private contactExists(
    searchResponse: searchMembers.SearchMembersSuccessResponse,
  ): boolean {
    return searchResponse.exact_matches.members.length > 0;
  }
}

export default MailchimpContactsClient;
