import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "Curso Crafting en Desarrollo Web Profesional en Barcelona - The Refactor Project",
  description:
    "Aprende el oficio de developer desde cero en Barcelona. 4 meses de formación intensiva en desarrollo web avanzado.",
};

const CraftingPage = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <section className="section single-course">
          <h1 className="section__title">
            Crafting en Desarrollo Web Profesional
          </h1>
          <Image
            src="/images/programando-fondo.webp"
            className="single-course__cover single-course__cover--desktop"
            alt="Manos escribiendo muy rápidamente en un portátil"
            width="1200"
            height="533"
          />
          <Image
            src="/images/programando.webp"
            className="single-course__cover"
            alt="Manos escribiendo muy rápidamente en un portátil"
            loading="lazy"
            width="500"
            height="533"
          />
          <p className="section__subtitle">
            Más que un <strong>bootcamp de programación</strong>. Un curso que
            te llevará <strong>desde cero</strong> al nivel que buscan las{" "}
            <strong>empresas de programación</strong> en un/a junior.
          </p>
          <p className="section__subtitle">
            <strong>Plazas disponibles</strong> para la edición de septiembre.
          </p>
          <p className="section__subtitle">
            También tienes la opción de no pagar nada y empezar a pagar a plazos{" "}
            <strong>cuando encuentres trabajo</strong>.
          </p>
          <div className="section__actions">
            <a href="/contacto" className="button button--solid button--large">
              Infórmate
            </a>
            <a
              href="/docs/Dossier Crafting en Desarrollo Web Profesional.pdf"
              className="button button--outline button--large"
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
                  src="/images/programando-formulario-registro.webp"
                  alt="Alumno desarrollando un formulario de registro"
                  className="block__image"
                  loading="lazy"
                  width="360"
                  height="200"
                />
                <p className="block__item-text">
                  Si <strong>nunca has programado antes</strong> y{" "}
                  <strong>quieres trabajar de ello</strong>. Te preparamos y te
                  damos el nivel necesario.
                </p>
              </li>
              <li className="block__item">
                <Image
                  src="/images/teacher-pointing-out-code.webp"
                  alt="Profesor enseñando código JavaScript en una pantalla"
                  className="block__image"
                  loading="lazy"
                  width="720"
                  height="400"
                />
                <p className="block__item-text">
                  Si ya programabas pero quieres aprender{" "}
                  <strong>las buenas prácticas</strong> y los{" "}
                  <strong>principios de programación</strong>.
                </p>
              </li>
              <li className="block__item">
                <Image
                  src="/images/equipo.webp"
                  alt="Un grupo de developers alrededor de una mesa"
                  className="block__image"
                  loading="lazy"
                  width="720"
                  height="400"
                />
                <p className="block__item-text">
                  Si vienes de producto y quieres aprender a{" "}
                  <strong>comunicarte con los equipos de desarrollo</strong>.
                </p>
              </li>
            </ul>
          </section>
          <div className="block">
            <h2 className="block__title">El día a día</h2>
            <Image
              src="/images/classroom2.webp"
              alt="Tres alumnos en clase"
              width="1200"
              height="505"
            />
            <h3>¿Cómo es la rutina del curso?</h3>
            <p className="block__text">
              Durante el módulo 1 del curso trabajarás en remoto. Cada lunes se
              te abrirá un reto que tiene diferentes entregas, y tendrás que
              finalizarlo antes del domingo por la noche.{" "}
              <strong>4 semanas, 4 retos</strong>. A lo largo de este módulo
              iremos calentando motores para ir trabajando las bases del{" "}
              <strong>desarrollo web con TypeScript</strong>. También irás
              conociendo al equipo a través de nuestro canal de Discord.
            </p>
            <p className="block__text">
              En el módulo 2 del curso ya estamos a <strong>full time</strong> y
              en nuestra oficina de <strong>Gràcia</strong>. Todos los días de
              la semana menos el miércoles, que trabajaremos en remoto desde
              casa. Además de entrenarte para tu próximo trabajo, podrás
              disfrutar de las instalaciones y de los patios para tomar el aire
              fresco.
            </p>
            <p className="block__text">
              En este módulo 2 estamos <strong>3 meses</strong> entrenando las
              habilidades que esperan de ti las{" "}
              <strong>empresas de desarrollo de software</strong>. 3 meses
              intensos donde <strong>respirarás código</strong> y{" "}
              <strong>buenas prácticas</strong>.
            </p>
          </div>
          <div className="block">
            <h2 className="block__title">¿Cómo lo hacemos?</h2>
            <section className="highlights">
              <div className="highlights__text">
                <i className="highlights__icon">
                  <Image
                    src="/icons/edificio.png"
                    alt="Edificio de oficinas"
                    width="128"
                    height="128"
                  />
                </i>
                <div>
                  <p>
                    En <strong>The Refactor Project</strong> estamos
                    constantemente <strong>en contacto con las empresas</strong>{" "}
                    del sector para ir ajustando nuestros programas a lo que el
                    mercado necesita.
                  </p>
                  <p>
                    Es por esta razón que cuando finalices el curso tendrás un
                    conjunto de habilidades y conocimientos totalmente enfocados
                    a ayudarte a{" "}
                    <strong>encontrar trabajo como developer</strong>.
                  </p>
                </div>
              </div>
              <div className="highlights__text">
                <i className="highlights__icon">
                  <Image
                    src="/icons/maletin.png"
                    alt="Mano ofreciendo un maletín"
                    width="128"
                    height="128"
                  />
                </i>
                <p>
                  Desde tu primer día todos los esfuerzos de nuestro equipo irán
                  destinados a que cuando llames a las puertas del mercado
                  laboral,{" "}
                  <strong>
                    las empresas no te vean como un/a junior cualquiera
                  </strong>
                  , sino como alguien{" "}
                  <strong>totalmente adaptado/a a su manera de trabajar</strong>{" "}
                  y preparado/a para{" "}
                  <strong>
                    integrarse rápidamente en equipos de alto rendimiento
                  </strong>
                  .
                </p>
              </div>
              <div className="highlights__text">
                <i className="highlights__icon">
                  <Image
                    src="/icons/entrevista.png"
                    alt="Entrevista de trabajo"
                    width="128"
                    height="128"
                  />
                </i>
                <p>
                  Habrás escuchado que actualmente hay muchos juniors buscando
                  trabajo. Te podemos asegurar que tú{" "}
                  <strong>no serás como el resto</strong> y que el impacto que
                  producirás en las <strong>entrevistas de trabajo</strong> no
                  será el mismo que el de los demás.
                </p>
              </div>
              <div className="highlights__text">
                <i className="highlights__icon">
                  <Image
                    src="/icons/equipo.png"
                    alt="Manos unidas formando un equipo"
                    width="128"
                    height="128"
                  />
                </i>
                <p>
                  En definitiva, si estás buscando{" "}
                  <strong>tu primer trabajo como developer</strong>, éste es tu
                  curso.
                </p>
              </div>
            </section>
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
                  No necesitas tener ningún conocimiento previo. Este curso está
                  diseñado para que cualquier persona pueda hacerlo, desde cero.
                </p>
                <p>
                  El primer módulo de introducción sirve para que llegues a la
                  parte presencial habiendo rodado ya lo suficiente con el
                  código.
                </p>
              </div>
            </li>
            <li className="accordion__item accordion__item--collapsed">
              <h3 className="accordion__title">
                ¿El curso es online o presencial?
              </h3>
              <div className="accordion__content">
                <p>
                  El primer módulo del curso dura 4 semanas y es en remoto, sin
                  clases. Lo puedes ir haciendo a tu ritmo desde donde quieras,
                  siempre que dispongas de conexión a internet.
                </p>
                <p>
                  El segundo módulo dura 12 semanas y es presencial, en
                  Barcelona capital.
                </p>
              </div>
            </li>
          </ul>
          <li className="accordion__item accordion__item--collapsed">
            <h3 className="accordion__title">¿Hay prueba de acceso?</h3>
            <div className="accordion__content">
              <p>
                Sí, hay una prueba para acceder al curso. Te daremos los
                materiales para preparártela.
              </p>
            </div>
          </li>
          <li className="accordion__item accordion__item--collapsed">
            <h3 className="accordion__title">
              ¿La prueba de acceso me compromete a algo?
            </h3>
            <div className="accordion__content">
              <p>
                La prueba de acceso es totalmente gratuita y no te compromete a
                nada ni con el curso ni con la escuela.
              </p>
            </div>
          </li>
          <li className="accordion__item accordion__item--collapsed">
            <h3 className="accordion__title">¿Cuánto cuesta el curso?</h3>
            <div className="accordion__content">
              <p>El precio del curso es de 5.900€.</p>
            </div>
          </li>
          <li className="accordion__item accordion__item--collapsed">
            <h3 className="accordion__title">¿Hay opciones de financiación?</h3>
            <div className="accordion__content">
              <p>
                Sí, hay opciones para financiar el curso, incluyendo la de no
                pagar nada hasta encontrar trabajo. Ponte en contacto con
                nosotros y vemos tu caso.
              </p>
            </div>
          </li>
        </section>
      </div>
    </main>
  );
};

export default CraftingPage;
