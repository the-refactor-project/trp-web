import Image from "next/image";
import Link from "next/link";
import "./Services.scss";

const Services = (): React.ReactElement => {
  return (
    <>
      <section className="section section--centered">
        <h1 className="section__title">Servicios para empresas</h1>
        <p className="section__subtitle">
          Ayudamos a empresas a mejorar su presencia digital y formar a sus
          equipos
        </p>
        <p className="section__text">
          En The Refactor Project no solo formamos a futuros developers. También
          ofrecemos servicios especializados para empresas que buscan mejorar su
          tecnología, accesibilidad web y capacitar a sus equipos.
        </p>
      </section>

      <section className="services">
        <div className="services__grid">
          {" "}
          <article className="service">
            <div className="service__icon">
              <Image
                src="/images/computer.webp"
                alt="Desarrollo de aplicaciones"
                width="80"
                height="80"
              />
            </div>
            <h2 className="service__title">Desarrollo de aplicaciones</h2>
            <p className="service__description">
              Desarrollamos aplicaciones web y móviles modernas, escalables y
              mantenibles. Utilizamos las mejores prácticas de la industria,
              TypeScript, testing automatizado y metodologías ágiles para
              entregar software de calidad.
            </p>
            <ul className="service__features">
              <li>Aplicaciones web con React, Next.js y TypeScript</li>
              <li>APIs REST y GraphQL</li>
              <li>Aplicaciones móviles con React Native</li>
              <li>Arquitectura moderna y escalable</li>
              <li>Testing automatizado y CI/CD</li>
              <li>Código limpio y mantenible</li>
            </ul>
            <div className="service__cta">
              <Link href="/contacto" className="button button--outline">
                Solicitar presupuesto
              </Link>
            </div>
          </article>{" "}
          <article className="service">
            <div className="service__icon">
              <Image
                src="/icons/equipo.png"
                alt="Accesibilidad web"
                width="80"
                height="80"
              />
            </div>
            <h2 className="service__title">Accesibilidad web</h2>
            <p className="service__description">
              Realizamos auditorías de accesibilidad web completas y ofrecemos
              soluciones para que tu sitio web cumpla con las normativas WCAG
              2.1 y sea accesible para todas las personas.
            </p>
            <ul className="service__features">
              <li>Auditorías de accesibilidad según WCAG 2.1</li>
              <li>Implementación de mejoras de accesibilidad</li>
              <li>Formación en accesibilidad para equipos</li>
              <li>Testing con usuarios con discapacidad</li>
              <li>Certificación de cumplimiento normativo</li>
              <li>Soporte técnico continuo</li>
            </ul>
            <div className="service__cta">
              <Link href="/contacto" className="button button--outline">
                Solicitar auditoría
              </Link>
              <a
                href="/docs/Dossier Accesibilidad Web.pdf"
                className="button button--solid"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver dossier
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--centered">
        <h2 className="section__title">¿Por qué elegirnos?</h2>
        <div className="section__items">
          <div className="highlight">
            <div className="highlight__icon">
              <Image
                src="/icons/equipo.png"
                alt="Equipo especializado"
                width="64"
                height="64"
              />
            </div>
            <h3>Equipo especializado</h3>
            <p>
              Contamos con desarrolladores senior con experiencia en empresas
              tecnológicas y conocimiento profundo de las mejores prácticas del
              sector.
            </p>
          </div>
          <div className="highlight">
            <div className="highlight__icon">
              <Image
                src="/icons/ingeniero-software.png"
                alt="Calidad garantizada"
                width="64"
                height="64"
              />
            </div>
            <h3>Calidad garantizada</h3>
            <p>
              Aplicamos metodologías ágiles, testing automatizado y code reviews
              para asegurar la máxima calidad en todos nuestros desarrollos.
            </p>
          </div>
          <div className="highlight">
            <div className="highlight__icon">
              <Image
                src="/icons/maletin.png"
                alt="Orientación al negocio"
                width="64"
                height="64"
              />
            </div>
            <h3>Orientación al negocio</h3>
            <p>
              Entendemos las necesidades de tu empresa y ofrecemos soluciones
              técnicas que impulsan el crecimiento de tu negocio.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--centered section--discover">
        <h2 className="section__title">¿Tienes un proyecto en mente?</h2>
        <p className="section__text">
          Cuéntanos qué necesitas y te ayudaremos a encontrar la mejor solución
          técnica para tu empresa. Trabajamos con startups, pymes y grandes
          corporaciones.
        </p>
        <div className="section__actions">
          <Link
            href="/contacto"
            className="button button--outline button--large"
          >
            Contacta con nosotros
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
