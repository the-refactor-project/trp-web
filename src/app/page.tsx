import Image from "next/image";
import Link from "next/link";
import Courses from "../components/Courses/Courses";
import Reviews from "../components/Reviews/Reviews";
import { Metadata } from "next";
import HeroHome from "../components/HeroHome/HeroHome";
import "../styles/_hero.scss";

export const metadata: Metadata = {
  title:
    "The Refactor Project - Cursos de programación presenciales y online en Barcelona",
  description:
    "Aprende la profesión de programador de la mano de un senior developer en un bootcamp intensivo presencial, o potencia tu carrera realizando uno de nuestros cursos online avanzados.",
};

export default function HomePage() {
  return (
    <main className="main-content">
      <HeroHome />
      <div className="container">
        <Courses />
        <section id="opiniones">
          <Reviews />
        </section>
        <section className="section section--centered">
          <h2 className="section__title">Nuestros partners</h2>
          <ul className="logos">
            <li className="logo">
              <Link
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo__image-container">
                  <Image
                    className="logo__image"
                    src="/images/logos-clientes/logo-mongodb.svg"
                    alt="mongoDB"
                    width="200"
                    height="54"
                  />
                </div>
                mongoDB
              </Link>
            </li>
            <li className="logo">
              <Link
                href="https://bcasapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo__image-container">
                  <Image
                    className="logo__image"
                    src="/images/logos-clientes/logo-bcas.png"
                    alt="Bcas"
                    width="200"
                    height="52"
                  />
                </div>
                Bcas
              </Link>
            </li>
            <li className="logo">
              <Link
                href="https://savvily.es/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo__image-container">
                  <Image
                    className="logo__image"
                    src="/images/logos-clientes/logo-savvily.png"
                    alt="savvily"
                    width="200"
                    height="42"
                  />
                </div>
                savvily
              </Link>
            </li>
          </ul>
        </section>
        <section className="section section--centered">
          <h2 className="section__title">Confían en nosotros</h2>
          <ul className="logos">
            <li className="logo">
              <Link
                href="https://www.bonarea.com/es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo__image-container">
                  <Image
                    className="logo__image"
                    src="/images/logos-clientes/logo-bonarea.svg"
                    alt="bonÀrea"
                    width="165"
                    height="35"
                  />
                </div>
                bonÀrea
              </Link>
            </li>
            <li className="logo">
              <Link
                href="https://crowd.digital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo__image-container">
                  <Image
                    className="logo__image"
                    src="/images/logos-clientes/logo-crowd.digital.svg"
                    alt="crowd.digital"
                    width="200"
                    height="33"
                  />
                </div>
                crowd.digital
              </Link>
            </li>
            <li className="logo">
              <Link
                href="https://www.mediamarktsaturn.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo__image-container">
                  <Image
                    className="logo__image"
                    src="/images/logos-clientes/logo-mediamarkt-saturn.svg"
                    alt="MediaMarkt Saturn"
                    width="200"
                    height="200"
                  />
                </div>
                MediaMarkt Saturn
              </Link>
            </li>
            <li className="logo">
              <Link
                href="https://www.cadt.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo__image-container">
                  <Image
                    className="logo__image"
                    src="/images/logos-clientes/logo-cadt-software-drafting.webp"
                    alt="CADT Software & Drafting"
                    width="200"
                    height="103"
                  />
                </div>
                CADT Software & Drafting
              </Link>
            </li>
            <li className="logo">
              <Link
                href="https://www.grupodigital.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo__image-container">
                  <Image
                    className="logo__image"
                    src="/images/logos-clientes/logo-grupo-digital.webp"
                    alt="Grupo Digital"
                    width="200"
                    height="69"
                  />
                </div>
                Grupo Digital
              </Link>
            </li>
            <li className="logo">
              <Link
                href="https://www.safetyio.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="logo__image-container">
                  <Image
                    className="logo__image"
                    src="/images/logos-clientes/logo-safety-io.webp"
                    alt="Safety io"
                    width="200"
                    height="70"
                  />
                </div>
                Safety io
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
