import { Metadata } from "next";
import Courses from "../../components/Courses/Courses";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Cursos de programación presenciales y online en Barcelona - The Refactor Project",
  description:
    "Potencia tus habilidades como programador/a con nuestros cursos de iniciación, coding bootcamps y avanzados. Tanto si quieres buscar trabajo como developer fullstack como si ya trabajas y quieres ampliar tus conocimientos para ascender en tu carrera.",
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
