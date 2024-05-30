import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "¿Se puede aprender a programar en cuatro meses? - The Refactor Project",
  description:
    "Damos algunas respuestas al debate de si los bootcamps de programación pueden enseñarte a programar en un tiempo reducido",
};

const BlogPost3Page = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <section className="section">
          <article className="post">
            <header className="post__header">
              <Link href="/blog" style={{ display: "block", marginBottom: 20 }}>
                Volver al índice del blog
              </Link>
              <h1 className="post__title">
                ¿Se puede aprender a programar en cuatro meses?
              </h1>
              <p className="post__author">
                Por <strong>Mario González</strong>
              </p>
              <Image
                className="post__image"
                src="/images/portatil.webp"
                width="1200"
                height="631"
                alt="Un portátil"
              />
            </header>
            <div className="post__content">
              <p>
                Cuando hace una década empezaron a proliferar los{" "}
                <strong>bootcamps de programación</strong>, empezó también a
                extenderse el debate sobre ese tipo de formación. En un lado del
                ring, quienes defendían que era imposible aprender una
                disciplina tan compleja y técnica como la programación en tan
                poco tiempo. En el otro, quienes afirmaban que, si se hacía
                bien, era posible.
              </p>
              <h2 id="a-programar-se-aprende-con-los-años">
                A programar se aprende con los años
              </h2>
              <p>
                La realidad es que{" "}
                <strong>
                  aprender a programar es un proceso que lleva años
                </strong>
                . Aprender a programar como se programa en una empresa es algo
                que se consigue… programando en una empresa. Por lo tanto, la
                pregunta que hay que hacerse no es si se puede aprender a
                programar en cuatro meses, sino si se puede salir preparado/a
                para trabajar como developer en cuatro meses.
              </p>
              <h2 id="qué-se-necesita-para-trabajar-como-developer-junior">
                ¿Qué se necesita para trabajar como developer junior?
              </h2>
              <p>
                Para{" "}
                <strong>
                  encajar en una empresa de desarrollo de software
                </strong>
                , necesitas tener ciertos hábitos y habilidades. No importa si
                has estudiado una carrera universitaria, un curso intensivo, una
                formación profesional o si te has formado con vídeos de Udemy.
                Si no tienes estos hábitos y habilidades, no vas a encajar en un
                equipo de desarrollo.
              </p>
              <p>
                Si el objetivo es entrar al sector{" "}
                <strong>sin experiencia previa</strong>, lo importante no es que
                aprendas algoritmia avanzada, ni que sepas cómo funciona un
                sistema operativo internamente, ni que conozcas las tripas de un
                compilador. Saberlo te vendrá muy bien, pero no es lo que te va
                a abrir las puertas del mercado laboral.
              </p>
              <p>
                Las empresas de desarrollo de software necesitan que encajes en
                sus equipos fácilmente y que aportes al producto desde el primer
                momento. Independientemente de cuánto JavaScript sepas.
              </p>
              <h2 id="entonces-esto-va-de-soft-skills">
                ¿Entonces esto va de soft skills?
              </h2>
              <p>
                Pues no exclusivamente, claro. No puedes trabajar como developer
                si no sabes programar. Pero sí, las soft skills son
                fundamentales para trabajar en un equipo de desarrollo. Y no
                solo eso, también son fundamentales para{" "}
                <strong>aprender a programar</strong>.
              </p>
              <p>
                Cuando entres en un equipo de desarrollo de software, es
                importante que sepas{" "}
                <strong>comunicarte con tus compañeros/as</strong>, que sepas{" "}
                <strong>dar y recibir feedback</strong>, que sepas{" "}
                <strong>trabajar con ramas de Git</strong>, que sepas{" "}
                <strong>hacer code reviews</strong>, que sepas hacer{" "}
                <strong>pair programming</strong>. Y sobre todo, tienes que
                saber <strong>explicar tu código</strong> y comprender{" "}
                <strong>código escrito por otros/as</strong>.
              </p>
              <p>
                Para saber hacer todo eso necesitas practicar, y la mejor manera
                de practicar es hacerlo en un entorno preparado para ello. Un
                entorno en el que hayan sido preparadas las condiciones para que
                puedas entrenar y desarrollar todos estos hábitos.
              </p>
              <h2 id="y-eso-se-puede-hacer-en-cuatro-meses">
                ¿Y eso se puede hacer en cuatro meses?
              </h2>
            </div>
            <footer className="post__footer">
              Publicado el 21 de mayo de 2024
            </footer>
          </article>
        </section>
      </div>
    </main>
  );
};

export default BlogPost3Page;
