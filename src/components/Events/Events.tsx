import Image from "next/image";
import Link from "next/link";

const Events = (): React.ReactElement => {
  return (
    <section className="section">
      <h2 className="section__title">Eventos</h2>
      <ul className="events-list">
        <li>
          <article className="event">
            <Link
              href="https://www.meetup.com/the-refactor-project-programando-juntos-as/events/306238335"
              target="_blank"
            >
              <Image
                src="/images/taller-introduccion-a-la-programacion-2025-03.jpg"
                alt="Taller Introducción a la Programación"
                className="event__image"
                width="611"
                height="304"
              />
            </Link>
            <h2 className="event__name">Introducción a la Programación Web</h2>
            <div className="event__metadata">
              <span className="event__date">15 de marzo a las 10h</span>
              <span className="event__who">Con Mario González</span>
              <span className="event__type">Taller presencial</span>
              <span className="event__price">Gratis</span>
            </div>
            <div className="event__description">
              <p>
                Taller gratuito para quienes estáis pensando en dedicaros a la
                programación o simplemente queréis trastear con código, y no lo
                habéis hecho nunca antes.
              </p>
              <p>
                Si quieres empezar a aprender programación, apúntate a nuestro
                taller gratuito presencial de Introducción a la Programación
                Web, donde podrás empezar a jugar con JavaScript y ver qué
                posibilidades ofrece esto de la programación.
              </p>
            </div>
            <div className="event__actions">
              <Link
                href="https://www.meetup.com/the-refactor-project-programando-juntos-as/events/306238335"
                target="_blank"
                className="button button--solid"
              >
                Inscríbete
              </Link>
            </div>
          </article>
        </li>
        <li>
          <article className="event">
            <Link
              href="https://www.meetup.com/es-ES/the-refactor-project-programando-juntos-as/events/304503671"
              target="_blank"
            >
              <Image
                src="/images/taller-introduccion-a-la-programacion2.jpg"
                alt="Taller Introducción a la Programación"
                className="event__image"
                width="611"
                height="304"
              />
            </Link>
            <h2 className="event__name">Introducción a la Programación Web</h2>
            <div className="event__metadata">
              <span className="event__date">23 de noviembre a las 10h</span>
              <span className="event__who">Con Mario González</span>
              <span className="event__type">Taller presencial</span>
              <span className="event__price">Gratis</span>
            </div>
            <div className="event__description">
              <p>
                Taller para quienes estáis pensando en dedicaros a la
                programación o simplemente queréis trastear con código, y no lo
                habéis hecho nunca antes.
              </p>
              <p>
                Si quieres empezar a aprender programación, apúntate a nuestro
                taller gratuito presencial de Introducción a la Programación
                Web, donde podrás empezar a jugar con JavaScript y ver qué
                posibilidades ofrece esto de la programación.
              </p>
            </div>
            <div className="event__actions">
              <Link
                href="https://www.meetup.com/es-ES/the-refactor-project-programando-juntos-as/events/304503671"
                target="_blank"
                className="button button--solid"
              >
                Inscríbete
              </Link>
            </div>
          </article>
        </li>
        <li>
          <article className="event">
            <Link
              href="https://www.meetup.com/the-refactor-project-programando-juntos-as/events/303230760"
              target="_blank"
            >
              <Image
                src="/images/taller-html-css.png"
                alt="Taller Introducción a HTML y CSS"
                className="event__image"
                width="611"
                height="304"
              />
            </Link>
            <h2 className="event__name">Taller de introducción a HTML y CSS</h2>
            <div className="event__metadata">
              <span className="event__date">28 de septiembre a las 10h</span>
              <span className="event__who">Con Mario González</span>
              <span className="event__type">Taller presencial</span>
              <span className="event__price">Gratis</span>
            </div>
            <div className="event__description">
              <p>
                Taller para aprender (o practicar si ya sabes) desarrollo web
                con HTML y CSS.
              </p>
              <p>
                Si te apetece pasar la mañana construyendo una web y aprendiendo
                cómo funciona HTML y CSS, apúntate a nuestro taller y vente con
                tu portátil a pasarlo bien..
              </p>
            </div>
            <div className="event__actions">
              <Link
                href="https://www.meetup.com/the-refactor-project-programando-juntos-as/events/303230760"
                target="_blank"
                className="button button--solid"
              >
                Inscríbete
              </Link>
            </div>
          </article>
        </li>
        <li>
          <article className="event">
            <Link
              href="https://www.meetup.com/es-ES/the-refactor-project-programando-juntos-as/events/303059793"
              target="_blank"
            >
              <Image
                src="/images/Clase gratuita de TypeScript Avanzado.png"
                alt="Clase gratuita de TypeScript Avanzado"
                className="event__image"
                width="611"
                height="304"
              />
            </Link>
            <h2 className="event__name">
              Clase gratuita de TypeScript Avanzado
            </h2>
            <div className="event__metadata">
              <span className="event__date">28 de agosto a las 19h</span>
              <span className="event__who">Con Mario González</span>
              <span className="event__type">Clase en directo</span>
              <span className="event__price">Gratis</span>
            </div>
            <div className="event__description">
              <p>
                Clase en directo abierta para quien quiera asistir. Pensada para
                quienes ya han trabajado con TypeScript y quieren ver cómo
                aplicar tipados más complejos.
              </p>
            </div>
            <div className="event__actions">
              <Link
                href="https://www.meetup.com/es-ES/the-refactor-project-programando-juntos-as/events/303059793"
                target="_blank"
                className="button button--solid"
              >
                Inscríbete
              </Link>
            </div>
          </article>
        </li>
        <li>
          <article className="event">
            <Link
              href="https://www.meetup.com/es-ES/the-refactor-project-programando-juntos-as/events/301711330/"
              target="_blank"
            >
              <Image
                src="/images/taller-ux-ui.png"
                alt="Taller Fundamentos de UX/UI para developers"
                className="event__image"
                width="611"
                height="304"
              />
            </Link>
            <h2 className="event__name">
              Fundamentos de UX/UI para developers
            </h2>
            <div className="event__metadata">
              <span className="event__date">29 de junio a las 10h</span>
              <span className="event__who">Con Mario González</span>
              <span className="event__type">Taller presencial</span>
              <span className="event__price">Gratis</span>
            </div>
            <div className="event__description">
              <p>
                Taller dirigido a developers que tocan front y que quieren
                entender mejor esa zona de intersección entre diseñadores/as y
                developers.
              </p>
              <p>
                Design tokens, figma, tipografías, paletas de colores,
                antipatrones en UI, buenas prácticas en formularios,
                accesibilidad... Repasaremos conceptos y herramientas que nos
                son útiles a la hora de trabajar en el front.
              </p>
            </div>
            <div className="event__actions">
              <Link
                href="https://www.meetup.com/es-ES/the-refactor-project-programando-juntos-as/events/301711330/"
                target="_blank"
                className="button button--solid"
              >
                Inscríbete
              </Link>
            </div>
          </article>
        </li>
        <li>
          <article className="event">
            <Link
              href="https://www.meetup.com/the-refactor-project-programando-juntos-as/events/301618995/"
              target="_blank"
            >
              <Image
                src="/images/taller-introduccion-a-la-programacion.png"
                alt="Taller Introducción a la Programación"
                className="event__image"
                width="611"
                height="304"
              />
            </Link>
            <h2 className="event__name">Introducción a la Programación</h2>
            <div className="event__metadata">
              <span className="event__date">20 de julio a las 10h</span>
              <span className="event__who">Con Mario González</span>
              <span className="event__type">Taller presencial</span>
              <span className="event__price">Gratis</span>
            </div>
            <div className="event__description">
              <p>
                Taller para quienes estáis pensando en dedicaros a la
                programación o simplemente queréis trastear con código, y no lo
                habéis hecho nunca antes.
              </p>
              <p>
                Si quieres empezar a aprender programación, apúntate a nuestro
                taller gratuito presencial de Introducción a la Programación
                Web, donde podrás empezar a jugar con JavaScript y ver qué
                posibilidades ofrece esto de la programación.
              </p>
            </div>
            <div className="event__actions">
              <Link
                href="https://www.meetup.com/the-refactor-project-programando-juntos-as/events/301618995/"
                target="_blank"
                className="button button--solid"
              >
                Inscríbete
              </Link>
            </div>
          </article>
        </li>
        <li>
          <article className="event">
            <Link
              href="https://www.meetup.com/es-ES/the-refactor-project-programando-juntos-as/events/301193428/"
              target="_blank"
            >
              <Image
                src="/images/taller-docker.png"
                alt="Taller presencial Dockeriza tu aplicación"
                className="event__image"
                width="611"
                height="304"
              />
            </Link>
            <h2 className="event__name">Dockeriza tu aplicación</h2>
            <div className="event__metadata">
              <span className="event__date">Fecha por determinar</span>
              <span className="event__who">Con Benjamin Rae</span>
              <span className="event__type">Taller presencial</span>
              <span className="event__price">18€</span>
            </div>
            <div className="event__description">
              <p>
                Aprenderemos cómo funciona Docker y cuáles son los fundamentos
                básicos de esta tecnología.
              </p>
              <p>
                Comprenderás cómo trabajar con imágenes, qué opciones hay para
                desplegar con Docker y qué mínimos de seguridad tenemos que
                tener en cuenta con los contenedores.
              </p>
            </div>
            <div className="event__actions">
              <Link
                href="https://www.meetup.com/es-ES/the-refactor-project-programando-juntos-as/events/301193428/"
                target="_blank"
                className="button button--solid"
              >
                Inscríbete
              </Link>
            </div>
          </article>
        </li>
        <li>
          <article className="event">
            <Link href="/contacto">
              <Image
                src="/images/taller-tdd.png"
                alt="Taller presencial TDD"
                className="event__image"
                width="611"
                height="304"
              />
            </Link>
            <h2 className="event__name">TDD</h2>
            <div className="event__metadata">
              <span className="event__date">Fecha por determinar</span>
              <span className="event__who">
                Con Lorena Martínez y Benjamin Rae
              </span>
              <span className="event__type">Taller presencial</span>
              <span className="event__price">18€</span>
            </div>
            <div className="event__description">
              <p>
                Aprenderemos a aplicar a nuestra código la metodología Test
                Driven Development y desgranaremos mediante problemas prácticos
                cuáles son sus pasos.
              </p>
              <p>
                Harás tu código mucho más fiable enfocando primero sus
                funcionalidades y luego su implementación.
              </p>
            </div>
            <div className="event__actions">
              <Link href="/contacto" className="button button--solid">
                Inscríbete
              </Link>
            </div>
          </article>
        </li>
        <li>
          <article className="event">
            <Link href="/contacto">
              <Image
                src="/images/taller-testing-frontend.png"
                alt="Taller presencial Testing en Frontend"
                className="event__image"
                width="611"
                height="304"
              />
            </Link>
            <h2 className="event__name">Testing en Frontend</h2>
            <div className="event__metadata">
              <span className="event__date">Fecha por determinar</span>
              <span className="event__who">Con Lorena Martínez</span>
              <span className="event__type">Taller presencial</span>
              <span className="event__price">18€</span>
            </div>
            <div className="event__description">
              <p>
                En este taller veremos cómo testear el front desde la
                perspectiva del usuario y poniendo en el centro la
                accesibilidad.
              </p>
              <p>
                Haremos un repaso por los diferentes matchers de Jest y
                mockearemos API REST con ayuda de MSW.
              </p>
            </div>
            <div className="event__actions">
              <Link href="/contacto" className="button button--solid">
                Inscríbete
              </Link>
            </div>
          </article>
        </li>
      </ul>
    </section>
  );
};

export default Events;
