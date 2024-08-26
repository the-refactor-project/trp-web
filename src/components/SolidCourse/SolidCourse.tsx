"use client";

import * as amplitude from "@amplitude/analytics-browser";
import Image from "next/image";

const SolidCourse = (): React.ReactElement => {
  const registerDownload = (course: string) => {
    amplitude.logEvent("Clicado download del dossier de " + course);
  };

  return (
    <>
      <section className="section single-course">
        <h1 className="section__title">
          Ingeniería en el Software: SOLID & Design Patterns
        </h1>
        <Image
          src="/images/gafas-large.webp"
          className="single-course__cover single-course__cover--desktop"
          alt="Unas gafas sobre un portátil, la parte de pantalla que se ve a través de ellas aparece enfocada"
          width="1200"
          height="533"
        />
        <Image
          src="/images/gafas-mobile.webp"
          className="single-course__cover"
          alt="Unas gafas sobre un portátil, la parte de pantalla que se ve a través de ellas aparece enfocada"
          loading="lazy"
          width="500"
          height="533"
        />
        <p className="section__subtitle">
          Un curso que te va a permitir{" "}
          <strong>impulsar tu carerra de developer</strong> completando tus
          conocimientos con las bases necesarias para desarrollar grandes
          aplicaciones.
        </p>
        <p className="section__subtitle">
          <strong>Plazas abiertas</strong>.
        </p>
        <p className="section__subtitle">
          Esta formación es <strong>bonificable por Fundae</strong>.
        </p>
        <div className="section__actions">
          <a href="/contacto" className="button button--solid button--large">
            Infórmate
          </a>
          <a
            href="/docs/Dossier Ingeniería en el Software SOLID & Design Patterns.pdf"
            className="button button--outline button--large"
            onClick={() =>
              registerDownload(
                "Ingeniería en el Software SOLID & Design Patterns",
              )
            }
            download
          >
            Descarga el dossier
          </a>
        </div>
        <section className="block">
          <h2 className="block__title">Este curso es para ti:</h2>
          <ul className="block__items">
            <li className="block__item">
              <Image
                src="/images/tdd.webp"
                alt="Formadora explicando TDD en una pizarra"
                className="block__image"
                loading="lazy"
                width="720"
                height="400"
              />
              <p className="block__item-text">
                Si ya sabes programar pero sientes que{" "}
                <strong>los/as demás saben más que tú</strong>. Este curso te
                dará las bases que necesitas para{" "}
                <strong>sentirte seguro/a</strong>.
              </p>
            </li>
            <li className="block__item">
              <Image
                src="/images/diagramas-uml.webp"
                alt="Diagramas UML"
                className="block__image"
                loading="lazy"
                width="360"
                height="200"
              />
              <p className="block__item-text">
                Si tienes inquietud por saber aplicar bien los{" "}
                <strong>principios SOLID</strong> y las bases de la{" "}
                <strong>Programación Orientada a Objetos</strong>.
              </p>
            </li>
            <li className="block__item">
              <Image
                src="/images/developer-girl.webp"
                alt="Chica de espaldas programando en un portátil"
                className="block__image"
                loading="lazy"
                width="720"
                height="400"
              />
              <p className="block__item-text">
                Si quieres aplicar a <strong>posiciones de más nivel</strong> o{" "}
                <strong>impulsar tu carrera</strong> dentro de tu empresa.
              </p>
            </li>
          </ul>
        </section>
        <div className="block">
          <h2 className="block__title">¿Cómo lo hacemos?</h2>
          <section className="highlights">
            <div className="highlights__text">
              <i className="highlights__icon">
                <Image
                  src="/icons/frustracion.png"
                  alt="Persona con frustración"
                  width="128"
                  height="128"
                />
              </i>
              <div>
                <p>
                  En <strong>The Refactor Project</strong> conocemos muy bien la
                  sensación que tienes si has estudiado un FP o un bootcamp y
                  sientes que te falta conocimiento de fundamentos de
                  programación para poder{" "}
                  <strong>desarrollar aplicaciones de gran tamaño</strong>.
                </p>
                <p>
                  Por eso hemos diseñado este curso para que puedas{" "}
                  <strong>complementar tus conocimientos</strong> y{" "}
                  <strong>sentirte seguro/a</strong> a la hora de{" "}
                  <strong>enfrentarte a las aplicaciones reales</strong>.
                </p>
              </div>
            </div>
            <div className="highlights__text">
              <i className="highlights__icon">
                <Image
                  src="/icons/ingeniero-software.png"
                  alt="Persona con gafas usando un ordenador"
                  width="128"
                  height="128"
                />
              </i>
              <p>
                Nuestro equipo docente te instruirá en{" "}
                <strong>las bases de la programación</strong> y te guiará para
                que puedas <strong>aplicarlas en tu día a día</strong> como
                developer. Te enseñaremos a{" "}
                <strong>pensar como un/a ingeniero/a de software</strong>.
              </p>
            </div>
            <div className="highlights__text">
              <i className="highlights__icon">
                <Image
                  src="/icons/estructuras-de-datos.png"
                  alt="Gráfico de árbol"
                  width="128"
                  height="128"
                />
              </i>
              <p>
                Estructuras de datos, patrones de diseño, métricas del software,
                técnicas de refactoring. Todo eso que ves a los demás aplicar y
                que crees que te falta. <strong>Te lo enseñamos</strong>.
              </p>
            </div>
            <div className="highlights__text">
              <i className="highlights__icon">
                <Image
                  src="/icons/escalera-mecanica.png"
                  alt="Escalera mecánica"
                  width="128"
                  height="128"
                />
              </i>
              <p>
                Este curso te va a ayudar a impulsar tu carrera y a poder optar
                a posiciones de más nivel.
              </p>
            </div>
          </section>
          <section className="block">
            <h2 className="block__title">Preguntas más frecuentes</h2>
            <ul className="accordion">
              <li className="accordion__item accordion__item--collapsed">
                <h3 className="accordion__title">
                  ¿Qué nivel de programación necesito para hacer este curso?
                </h3>
                <div className="accordion__content">
                  <p>
                    Este curso es ideal si ya sabes programar pero sientes que
                    te faltan bases para ascender en tu carrera. Se requiere que
                    sepas programar con algún lenguaje fuertemente tipado.
                  </p>
                  <p>
                    El módulo previo de nivelación te ayudará a reforzar
                    aquellas partes donde más lo necesites.
                  </p>
                </div>
              </li>
              <li className="accordion__item accordion__item--collapsed">
                <h3 className="accordion__title">
                  ¿El curso es online o presencial?
                </h3>
                <div className="accordion__content">
                  <p>El curso es 100% online, con clases en directo.</p>
                </div>
              </li>
            </ul>
            <li className="accordion__item accordion__item--collapsed">
              <h3 className="accordion__title">¿Hay prueba de acceso?</h3>
              <div className="accordion__content">
                <p>Sí, hay una prueba para acceder al curso.</p>
              </div>
            </li>
            <li className="accordion__item accordion__item--collapsed">
              <h3 className="accordion__title">
                ¿La prueba de acceso me compromete a algo?
              </h3>
              <div className="accordion__content">
                <p>
                  La prueba de acceso es totalmente gratuita y no te compromete
                  a nada ni con el curso ni con la escuela.
                </p>
              </div>
            </li>
            <li className="accordion__item accordion__item--collapsed">
              <h3 className="accordion__title">¿Cuánto cuesta el curso?</h3>
              <div className="accordion__content">
                <p>
                  El precio del curso es de 2.500€. Si eres exalumno/a tienes un
                  descuento de 500€.
                </p>
                <p>
                  Este curso es <strong>bonificable por Fundae</strong>.
                </p>
              </div>
            </li>
            <li className="accordion__item accordion__item--collapsed">
              <h3 className="accordion__title">
                ¿Hay opciones de financiación?
              </h3>
              <div className="accordion__content">
                <p>
                  Sí, hay opciones para financiar el curso. Ponte en contacto
                  con nosotros y vemos tu caso.
                </p>
              </div>
            </li>
          </section>
        </div>
      </section>
    </>
  );
};

export default SolidCourse;
