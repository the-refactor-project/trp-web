import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Contacta con nosotros o inscríbete a los cursos - The Refactor Project",
  description:
    "Escríbenos para solicitar información sobre los cursos de programación o para apuntarte a uno de ellos.",
};

const ThanksPage = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <section className="section section--full-viewport section--centered">
          <h3 className="section__title">
            Gracias por contactar con The Refactor Project
          </h3>
          <div className="section__text">
            <p>En poco tiempo te responderemos. ¡Hasta pronto! 😊</p>
          </div>
          <div className="section__actions">
            <Link href="/" className="button button--solid">
              Seguir navegando
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ThanksPage;
