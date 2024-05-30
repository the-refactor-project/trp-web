import { Metadata } from "next";
import ContactForm from "../../components/ContactForm/ContactForm";
import "./ContactPage.scss";

export const metadata: Metadata = {
  title:
    "Contacta con nosotros o inscríbete a los cursos - The Refactor Project",
  description:
    "Escríbenos para solicitar información sobre los cursos de programación o para apuntarte a uno de ellos.",
};

const ContactPage = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
