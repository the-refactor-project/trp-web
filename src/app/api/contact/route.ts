import crypto from "node:crypto";
import mailchimp, { searchMembers } from "@mailchimp/mailchimp_marketing";
import { ContactData } from "../../../components/ContactForm/ContactForm";
import MailchimpContactsClient from "../../../contacts/client/MailchimpContactsClient";

const mailchimpContactsClient = new MailchimpContactsClient();

export async function POST(request: Request) {
  const contactData = (await request.json()) as ContactData;

  await mailchimpContactsClient.addOrUpdateContact(contactData);

  return Response.json({});
}
