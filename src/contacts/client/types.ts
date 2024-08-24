import { ContactData } from "../../components/ContactForm/ContactForm";

export interface ContactsClientStructure {
  addOrUpdateContact: (contactData: ContactData) => Promise<void>;
}
