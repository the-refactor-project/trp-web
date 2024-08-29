import MailchimpContactsClient from "../../../contacts/client/MailchimpContactsClient";
import { ContactData } from "../../../contacts/client/types";

const mailchimpContactsClient = new MailchimpContactsClient();

export async function POST(request: Request) {
  const contactData = (await request.json()) as ContactData;
  contactData.email = (contactData as any).MERGE0;

  await mailchimpContactsClient.addOrUpdateContact(contactData);

  return Response.json({});
}
