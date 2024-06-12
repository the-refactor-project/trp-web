import Image from "next/image";
import Link from "next/link";
import "./Courses.scss";

const Courses = (): React.ReactElement => {
  return (
    <section className="section courses" id="cursos" data-testid="courses">
      <h2 className="section__title">Nuestros cursos</h2>
      <ul className="courses-list">
        <li className="courses-list__featured">
          <article className="course">
            <Image
              src="/images/programando-fondo.webp"
              className="course__image course__image--desktop"
              alt="Manos escribiendo muy rápidamente en un portátil"
              loading="lazy"
              width="1200"
              height="533"
            />
            <Image
              src="/images/programando.webp"
              className="course__image"
              alt="Manos escribiendo muy rápidamente en un portátil"
              loading="lazy"
              width="500"
              height="533"
            />
            <div className="course__info">
              <h3 className="course__title">
                Crafting en Desarrollo Web Profesional
              </h3>
              <dl className="course__data-list">
                <div className="course__data">
                  <dt className="course__data-name">Formato híbrido</dt>
                  <dd className="course__data-value">
                    25% remoto
                    <br />
                    75% presencial
                  </dd>
                </div>
                <div className="course__data">
                  <dt className="course__data-name">Duración</dt>
                  <dd className="course__data-value">
                    1 mes remoto
                    <br />3 meses presencial
                  </dd>
                </div>
              </dl>
              <span className="section__floating">
                Paga cuando empieces a trabajar
              </span>
              <div className="section__actions">
                <Link
                  href="/cursos/crafting-en-desarrollo-web-profesional"
                  className="button button--solid button--large"
                >
                  Ver curso
                </Link>
                <a
                  href="/docs/Dossier Crafting en Desarrollo Web Profesional.pdf"
                  className="button button--outline button--large"
                  download
                >
                  Descarga el dossier
                </a>
              </div>
            </div>
          </article>
        </li>
        <li className="courses-list__featured">
          <article className="course course--inverse">
            <Image
              src="/images/gafas-large.webp"
              className="course__image course__image--desktop"
              alt="Unas gafas sobre un portátil, la parte de pantalla que se ve a través de ellas aparece enfocada"
              loading="lazy"
              width="1200"
              height="533"
            />
            <Image
              src="/images/gafas-mobile.webp"
              className="course__image"
              alt="Unas gafas sobre un portátil, la parte de pantalla que se ve a través de ellas aparece enfocada"
              loading="lazy"
              width="500"
              height="533"
            />
            <div className="course__info">
              <h3 className="course__title">
                Ingeniería en el Software: SOLID & Design Patterns
              </h3>
              <dl className="course__data-list">
                <div className="course__data">
                  <dt className="course__data-name">Formato</dt>
                  <dd className="course__data-value">100% online</dd>
                </div>
                <div className="course__data">
                  <dt className="course__data-name">Duración</dt>
                  <dd className="course__data-value">
                    2 semanas a tu ritmo
                    <br />
                    13 semanas clases en directo
                  </dd>
                </div>
              </dl>
              <span className="section__floating">
                <strong>Curso bonificable por Fundae</strong>
              </span>
              <div className="section__actions">
                <Link
                  href="/cursos/ingenieria-en-el-software-solid-design-patterns"
                  className="button button--solid button--large"
                >
                  Ver curso
                </Link>
                <a
                  href="/docs/Dossier Ingeniería en el Software SOLID & Design Patterns.pdf"
                  className="button button--outline button--large"
                  download
                >
                  Descarga el dossier
                </a>
              </div>
            </div>
          </article>
        </li>
        <li>
          <article className="course" id="typescript-avanzado">
            <Image
              src="/images/Curso-De-JavaScript-a-TypeScript.png"
              width="653"
              height="325"
              alt="Curso De JavaScript a TypeScript"
              loading="lazy"
            />
            <h3 className="course__title">De JavaScript a TypeScript</h3>
            <dl className="course__data-list">
              <div className="course__data">
                <dt className="course__data-name">Formato online</dt>
                <dd className="course__data-value">
                  En la plataforma{" "}
                  <Link href="https://www.gather.town/" target="_blank">
                    Gather
                  </Link>
                </dd>
              </div>
              <div className="course__data">
                <dt className="course__data-name">Duración</dt>
                <dd className="course__data-value">
                  12 horas
                  <br />
                  (4 sesiones de 3 horas)
                </dd>
              </div>
            </dl>
            <div className="section__actions">
              <Link
                href="/contacto"
                className="button button--solid button--large"
              >
                Infórmate
              </Link>
              <a
                href="/docs/Dossier de JS a TS.pdf"
                className="button button--outline button--large"
                download
              >
                Descarga el dossier
              </a>
            </div>
          </article>
        </li>
        <li>
          <article className="course" id="typescript-avanzado">
            <Image
              src="/images/Curso-TypeScript-Avanzado.png"
              width="653"
              height="325"
              alt="Curso de TypeScript Avanzado"
              loading="lazy"
            />
            <h3 className="course__title">TypeScript Avanzado</h3>
            <dl className="course__data-list">
              <div className="course__data">
                <dt className="course__data-name">Formato online</dt>
                <dd className="course__data-value">
                  En la plataforma{" "}
                  <Link href="https://www.gather.town/" target="_blank">
                    Gather
                  </Link>
                </dd>
              </div>
              <div className="course__data">
                <dt className="course__data-name">Duración</dt>
                <dd className="course__data-value">
                  12 horas
                  <br />
                  (4 sesiones de 3 horas)
                </dd>
              </div>
            </dl>
            <div className="section__actions">
              <Link
                href="/contacto"
                className="button button--solid button--large"
              >
                Infórmate
              </Link>
              <a
                href="/docs/Dossier TypeScript Avanzado.pdf"
                className="button button--outline button--large"
                download
              >
                Descarga el dossier
              </a>
            </div>
          </article>
        </li>
        <li>
          <article className="course">
            <Image
              src="/images/Curso-Desarrollo-con-Angular.png"
              width="653"
              height="325"
              alt="Curso Desarrollo con Angular"
              loading="lazy"
            />
            <h3 className="course__title">Desarrollo con Angular</h3>
            <dl className="course__data-list">
              <div className="course__data">
                <dt className="course__data-name">Formato online</dt>
                <dd className="course__data-value">
                  En la plataforma{" "}
                  <Link href="https://www.gather.town/" target="_blank">
                    Gather
                  </Link>
                </dd>
              </div>
              <div className="course__data">
                <dt className="course__data-name">Duración</dt>
                <dd className="course__data-value">
                  12 horas
                  <br />
                  (4 sesiones de 3 horas)
                </dd>
              </div>
            </dl>
            <div className="section__actions">
              <Link
                href="/contacto"
                className="button button--solid button--large"
              >
                Infórmate
              </Link>
              <a
                href="/docs/Dossier Desarrollo con Angular.pdf"
                className="button button--outline button--large"
                download
              >
                Descarga el dossier
              </a>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default Courses;
