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
              Estudia nuestro{" "}
              <strong>Bootcamp de Programación Web Full Stack</strong>
            </h2>
            <p>
              ¿Quieres dedicarte a la programación y no tienes experiencia
              previa?
            </p>
            <p>
              Si lo que buscas es un <strong>cambio profesional</strong>, entra
              y mira.
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
