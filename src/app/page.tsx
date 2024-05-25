import Image from "next/image";
import "../styles/_hero.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className="main-content">
      <section
        className="section section--full-viewport hero hero--home"
        data-testid="hero"
      >
        <Image
          className="hero__background"
          src="/images/classroom.webp"
          width="945"
          height="630"
          alt="Dos alumnos en el curso de Crafting de Desarrollo Web"
          priority
        />
        <div className="container">
          <div className="hero__content">
            <h2 className="section__title">
              Curso Crafting en Desarrollo Web Profesional
            </h2>
            <div className="hero__text">
              <p>
                ¿Quieres dedicarte a la programación y no tienes experiencia
                previa?
              </p>
              <p>
                Nuestro curso es <strong>más que un bootcamp</strong>. Entra y
                mira.
              </p>
            </div>
            <Link
              href="/cursos/crafting-en-desarrollo-web-profesional"
              className="button button--outline"
            >
              Más información
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
