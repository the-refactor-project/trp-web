import Link from "next/link";
import Image from "next/image";
import "./HeroHome.scss";

const HeroHome = (): React.ReactElement => {
  return (
    <section className="hero-home" data-testid="hero">
      <div className="container">
        <div className="hero-home__contents">
          <div className="hero-home__text">
            <h2 className="hero-home__title">
              Nuestros cursos <strong>mejoran tu forma de programar</strong>
            </h2>
            <p>
              ¿Quieres formar a tus equipos en buenas prácticas de desarrollo?
            </p>
            <p>
              ¿Necesitas profundizar en alguna tecnología o metodología de
              programación?
            </p>
          </div>
          <div className="hero-home__actions">
            <Link
              href="/cursos/bootcamp-de-programacion-web-full-stack"
              className="button button--outline"
            >
              Más información
            </Link>
            <Link href="#opiniones" className="button button--outline">
              Opiniones
            </Link>
          </div>
        </div>
        <div className="hero-home__image">
          <Image
            src="/images/clean-code.jpg"
            width="945"
            height="630"
            alt="Estudiantes en el Bootcamp de Programación Web Full Stack"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
