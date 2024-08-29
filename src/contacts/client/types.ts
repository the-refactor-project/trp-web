export interface ContactData {
  email: string;
  phone: string;
  name: string;
  course: string;
  message: string;
  privacy: boolean;
}

export interface ContactsClientStructure {
  addOrUpdateContact: (contactData: ContactData) => Promise<void>;
}
