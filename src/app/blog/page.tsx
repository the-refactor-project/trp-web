import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Blog de The Refactor Project - Cursos de programación presenciales y online en Barcelona",
  description:
    "Artículos sobre industria del desarrollo de software, programación, formaciones y eventos de la escuela de programación The Refactor Project.",
};

const BlogPage = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <section className="section">
          <h1 className="section__title">Blog</h1>
          <p className="section__description">Últimos artículos del blog</p>
          <ul className="posts">
            <li className="post-preview">
              <header className="post-preview__header">
                <h2 className="post-preview__title">
                  <Link href="/blog/guillem-de-trabajar-en-un-supermercado-a-trabajar-de-programador">
                    Guillem, de trabajar en un supermercado a trabajar de
                    programador
                  </Link>
                </h2>
                <div className="post-preview__subtitle">
                  Publicado el 31 de marzo de 2025
                </div>
              </header>
              <Image
                className="post__image"
                src="/images/guillem-blasco-programador-recortada.webp"
                width="1200"
                height="631"
                alt="Guillem Blasco"
              />
            </li>
            {/* <li className="post-preview">
              <header className="post-preview__header">
                <h2 className="post-preview__title">
                  <Link href="/blog/se-puede-aprender-a-programar-en-cuatro-meses">
                    ¿Se puede aprender a programar en cuatro meses?
                  </Link>
                </h2>
                <div className="post-preview__subtitle">
                  Publicado el 21 de mayo de 2024
                </div>
              </header>
              <Image
                className="post__image"
                src="/images/portatil.webp"
                width="1200"
                height="631"
                alt="Un portátil"
              />
            </li> */}
            <li className="post-preview">
              <header className="post-preview__header">
                <h2 className="post-preview__title">
                  <Link href="/blog/aprender-typescript-es-clave-para-conseguir-trabajo-como-programador-a">
                    Aprender TypeScript es clave para conseguir trabajo como
                    programador/a
                  </Link>
                </h2>
                <div className="post-preview__subtitle">
                  Publicado el 11 de diciembre de 2024
                </div>
              </header>
              <Image
                className="post__image"
                src="/images/developer.webp"
                width="1200"
                height="631"
                alt="Developer de espaldas frente a varios monitores"
              />
            </li>
            <li className="post-preview">
              <header className="post-preview__header">
                <h2 className="post-preview__title">
                  <Link href="/blog/quieres-trabajar-como-programador-a">
                    Quieres trabajar como programador/a
                  </Link>
                </h2>
                <div className="post-preview__subtitle">
                  Publicado el 19 de marzo de 2024
                </div>
              </header>
              <Image
                className="post__image"
                src="/images/programadora.webp"
                width="1200"
                height="631"
                alt="Chica programadora con un portátil lleno de pegatinas"
              />
            </li>
            <li className="post-preview">
              <header className="post-preview__header">
                <h2 className="post-preview__title">
                  <Link href="/blog/me-sera-dificil-encontrar-mi-primer-trabajo-de-programador-a">
                    ¿Me será difícil encontrar mi primer trabajo como
                    programador/a?
                  </Link>
                </h2>
                <div className="post-preview__subtitle">
                  Publicado el 11 de febrero de 2024
                </div>
              </header>
              <Link href="/blog/me-sera-dificil-encontrar-mi-primer-trabajo-de-programador-a">
                <Image
                  className="post__image"
                  src="/images/desesperacion-desktop.webp"
                  width="1200"
                  height="631"
                  alt="Mujer con gesto de desesperación frente a su portátil"
                />
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default BlogPage;
