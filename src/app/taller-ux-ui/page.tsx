import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fundamentos de UX/UI para developers - The Refactor Project",
};

const UxUiWorkshop = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <section className="section section--full-viewport section--centered">
          <h3 className="section__title">
            Fundamentos de UX/UI para developers
          </h3>
          <div className="section__text">
            <h2>Ejercicios</h2>
            <p>
              UX Research:&nbsp;
              <Link href="https://userinyerface.com/" target="_blank">
                userinyerface
              </Link>
            </p>
            <p>
              Formulario feedback:{" "}
              <Link
                href="https://github.com/the-refactor-project/taller-ux-ui-feedback"
                target="_blank"
              >
                Repo GitHub
              </Link>
            </p>
            <p>
              <Link href="https://www.menti.com/alwyv8ungzdq" target="_blank">
                Encuesta feedback
              </Link>
            </p>
            <p>
              Diapos:
              <br />
              <iframe
                src="https://slides.com/mariogl/ux-ui-for-developers/embed?style=dark&byline=hidden&share=hidden"
                width="576"
                height="420"
                title="UX for developers"
                allowFullScreen
                style={{ border: 0 }}
              ></iframe>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default UxUiWorkshop;
