import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./StaffPage.scss";

export const metadata: Metadata = {
  title: "Nuestro equipo - The Refactor Project",
  description:
    "Nuestro equipo humano está formado por grandes profesionales que te ayudarán a aprender a programar.",
};

const StaffPage = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <section className="section">
          <h1 className="section__title">Equipo</h1>
          <p className="section__lead">
            Éste es el equipo humano que hace posible{" "}
            <strong>The Refactor Project</strong>. Aquí podrás conocer a las
            personas que día a día le ponen pasión a cada curso o evento que
            hacemos en la escuela.
          </p>
          <section className="staff">
            <ul className="staff__members">
              <li>
                <article className="member">
                  <div className="member__picture">
                    <Image
                      src="/images/mario-gonzalez.webp"
                      alt="Mario González"
                      width="200"
                      height="200"
                    />
                    <h3 className="member__name">Mario González</h3>
                    <p className="member__role">Lead Teacher</p>
                  </div>
                  <p className="member__description">
                    He acompañado tanto a equipos de desarrollo en las empresas,
                    como a alumnos de programación que querían empezar o
                    especializarse. Llevo años preguntándome cada día si me
                    gusta más mi trabajo de web developer o de formador. Aún no
                    tengo la respuesta.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/mariogl/"
                    target="_blank"
                    rel="noopener"
                    className="member__link"
                  >
                    LinkedIn
                  </Link>
                </article>
              </li>
              <li>
                <article className="member">
                  <div className="member__picture">
                    <Image
                      src="/images/alex-gonzalez.webp"
                      alt="Alex González"
                      width="200"
                      height="200"
                    />
                    <h3 className="member__name">Alex González</h3>
                    <p className="member__role">Lead Teacher</p>
                  </div>
                  <p className="member__description">
                    Crafting con el Software desde hace mas de 10 años. He
                    trabajado en grandes proyectos y he visto muchas formas de
                    trabajar y escribir código. Formador y mentor de developers.
                    Viajar y el karting son otras de mis pasiones.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/alejandro-gonzalez-santiago"
                    target="_blank"
                    rel="noopener"
                    className="member__link"
                  >
                    LinkedIn
                  </Link>
                </article>
              </li>
              <li>
                <article className="member">
                  <div className="member__picture">
                    <Image
                      src="/images/natalia-gherardi.webp"
                      alt="Natalia Gherardi"
                      width="200"
                      height="200"
                    />
                    <h3 className="member__name">Natalia Gherardi</h3>
                    <p className="member__role">Assistant Teacher</p>
                  </div>
                  <p className="member__description">
                    Developer y semi-socióloga. Me encanta enseñar y acompañar a
                    la gente en su proceso de aprendizaje. Veo la programación
                    como un constante acertijo lógico, y eso hace que me guste.
                    Inquieta, argentina y viajera. Si alguna vez no me
                    encuentras, probablemente esté en algún lugar del mundo,
                    buscando un nuevo desafío.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/natalia-ramirez-gherardi"
                    target="_blank"
                    rel="noopener"
                    className="member__link"
                  >
                    LinkedIn
                  </Link>
                </article>
              </li>
              <li>
                <article className="member">
                  <div className="member__picture">
                    <Image
                      src="/images/marianella-bruzzo.webp"
                      alt="Marianella Bruzzo"
                      width="200"
                      height="200"
                    />
                    <h3 className="member__name">Marianella Bruzzo</h3>
                    <p className="member__role">Campus Manager</p>
                  </div>
                  <p className="member__description">
                    Desde siempre he sido una apasionada de la comunicación en
                    todas sus formas. Por ello, he buscado continuamente
                    involucrarme en actividades que me brinden nuevos
                    conocimientos y herramientas para mejorar mi capacidad de
                    diálogo. Mi lema es &quot;la curiosidad como motor&quot;, y
                    con este espíritu, estaré a tu lado en la escuela para
                    apoyarte en tu emocionante camino de aprendizaje en el mundo
                    de la programación.
                  </p>
                  <Link
                    href="https://www.linkedin.com/in/marianellabruzzoin"
                    target="_blank"
                    rel="noopener"
                    className="member__link"
                  >
                    LinkedIn
                  </Link>
                </article>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </main>
  );
};

export default StaffPage;
