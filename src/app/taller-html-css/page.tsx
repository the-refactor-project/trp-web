import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taller Introducción a HTML y CSS - The Refactor Project",
};

const IntroWorkshop = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <section className="section section--full-viewport section--centered">
          <h3 className="section__title">Taller Introducción a HTML y CSS</h3>
          <div className="section__text">
            <a
              href="https://slides.com/mariogl/introduccion-a-html-y-css"
              target="_blank"
            >
              Diapositivas del taller
            </a>
            <a
              href="https://stackblitz.com/edit/stackblitz-starters-1bwj44?file=index.html"
              target="_blank"
            >
              Starter
            </a>
            <a href="https://es.imgbb.com/" target="_blank">
              Subir fotos
            </a>
            <a href="https://coolors.co/generate" target="_blank">
              Generador de paletas de colores
            </a>
            <a href="https://cheatsheets.shecodes.io/html" target="_blank">
              Chuleta HTML
            </a>
            <a href="https://cheatsheets.shecodes.io/css" target="_blank">
              Chuleta CSS
            </a>
            <a
              href="https://docs.google.com/document/d/1HeCYpei8f0xg96XFzXb9cEp5OWG5f9rpBWzfa2gsbU4/edit?usp=sharing"
              target="_blank"
            >
              Ejercicio final
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default IntroWorkshop;
