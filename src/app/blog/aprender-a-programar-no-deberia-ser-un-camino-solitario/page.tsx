import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Aprender a programar no debería ser un camino solitario - The Refactor Project",
  description:
    "Aprender a programar no es solo escribir código: también es saber colaborar, pedir ayuda y construir en equipo. En este artículo exploramos por qué la programación no debería ser un camino solitario.",
};

const BlogTeamPostPage = (): React.ReactElement => {
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
                Aprender a programar no debería ser un camino solitario
              </h1>
              <p className="post__author">
                Por <strong>Mario González</strong>
              </p>
              <div className="post__image">
                <Image
                  src="/images/team-classroom.webp"
                  width="1200"
                  height="631"
                  alt="Equipo de developers junior trabajando juntas/os en un portátil"
                />
              </div>
            </header>
            <div className="post__content">
              <p>
                Muchas personas empiezan a aprender programación desde el
                aislamiento. Es normal: hay infinitos recursos gratuitos,
                documentación, tutoriales, cursos online… y la mayoría se pueden
                hacer a solas, con un portátil y conexión a internet. Pero tarde
                o temprano, ese enfoque tiene un límite. Porque el desarrollo de
                software, por muy técnico que sea, es profundamente humano. Y
                eso no se entrena solo.
              </p>
              <p>
                En algún momento, cualquier persona que esté aprendiendo a
                programar se enfrenta a retos que no puede resolver en
                solitario: errores difíciles de rastrear, decisiones de
                arquitectura, dudas sobre buenas prácticas, conflictos de
                versiones, integración con otros servicios… Y ahí aparece una de
                las habilidades más importantes —y más invisibles— en la carrera
                de un developer: saber colaborar.
              </p>
              <h2 id="programar-es-mas-que-saber-escribir-codigo">
                Programar es más que saber escribir código
              </h2>
              <p>
                Saber escribir código funcional es solo una parte del trabajo. A
                medida que creces como developer, necesitas también:
              </p>
              <ul>
                <li>
                  Saber <strong>pedir ayuda</strong> de forma clara y
                  contextualizada.
                </li>
                <li>
                  <strong>Leer y entender</strong> el código de otras personas.
                </li>
                <li>
                  <strong>Escuchar y considerar</strong> ideas distintas a la
                  tuya.
                </li>
                <li>
                  Ser capaz de <strong>explicar tus decisiones técnicas</strong>
                  .
                </li>
                <li>
                  Aprender a{" "}
                  <strong>ceder, negociar, y construir en común</strong>.
                </li>
              </ul>
              <p>
                Y estas habilidades no se aprenden viendo vídeos ni leyendo
                artículos. Se desarrollan trabajando con otras personas. Viendo
                cómo piensan. Chocando, discutiendo, volviendo a alinear.
                Compartiendo errores. Acompañando a alguien que va más atrás.
                Dejándote acompañar por quien va más adelante.
              </p>
              <h2 id="la-colaboracion-como-parte-del-aprendizaje">
                La colaboración como parte del aprendizaje
              </h2>
              <p>
                En los últimos años, muchos entornos formativos hemos entendido
                esto y hemos empezado a incorporar dinámicas más colaborativas.
                No es casual que conceptos como{" "}
                <strong>pair programming</strong>,
                <strong>mob programming</strong>, <strong>code reviews</strong>{" "}
                o <strong>retrospectivas</strong> se escuchen cada vez más
                incluso en formaciones iniciales.
              </p>
              <h2 id="aprender-a-colaborar-tambien-es-un-proceso-tecnico">
                Aprender a colaborar también es un proceso técnico
              </h2>
              <p>
                A veces se piensa que trabajar en equipo es una{" "}
                <em>soft skill</em>, algo que se entrena al margen de lo
                técnico. Pero no es así. La colaboración en desarrollo también
                es técnica: tiene prácticas, herramientas y procesos propios.
              </p>
              <p>
                Aprender a hacer una buena <strong>Pull Request</strong>,
                escribir un mensaje de commit útil, comentar una línea de código
                con respeto pero con firmeza, usar Git para resolver conflictos
                sin romper todo… todo esto es técnica. Y también se entrena. No
                es innato, ni &quot;de personalidad&quot;. Se puede mejorar.
              </p>
              <h2 id="y-si-lo-entrenaramos-desde-el-principio">
                ¿Y si lo entrenáramos desde el principio?
              </h2>
              <p>
                En vez de esperar a que alguien entre en su primer trabajo para
                enfrentarse a la dinámica real del desarrollo en equipo, ¿por
                qué no incluir eso desde el momento en que empieza a aprender?
              </p>
              <p>
                Esto significa exponer a las personas que aprenden a
                experiencias como:
              </p>
              <ul>
                <li>
                  <strong>Programar juntas</strong> en tiempo real (
                  <em>pair</em> y <em>mob programming</em>).
                </li>
                <li>
                  <strong>Compartir errores y dudas</strong> sin miedo.
                </li>
                <li>
                  Hacer <strong>seguimiento conjunto</strong> de tareas.
                </li>
                <li>
                  Usar herramientas como GitHub, Trello, Jira o Notion con
                  objetivos reales.
                </li>
                <li>
                  Practicar <strong>dailies</strong>, <strong>retros</strong> y{" "}
                  <strong>reviews</strong> en contextos seguros.
                </li>
              </ul>
              <p>
                La diferencia es enorme. No solo en términos de motivación o
                confianza, sino también en la calidad del aprendizaje técnico.
                Porque explicar lo que haces te obliga a entenderlo. Porque ver
                cómo lo hace otra persona amplía tu perspectiva. Y porque cuando
                sabes que no estás solo, te atreves con retos más grandes.
              </p>
              <h2 id="el-codigo-puede-ser-indivicual-pero-el-software-es-colectivo">
                El código puede ser individual, pero el software es colectivo
              </h2>
              <p>
                Si estás aprendiendo a programar, busca espacios donde puedas
                compartir lo que haces. Participa en comunidades. Forma parte de
                proyectos colaborativos. No tengas miedo a mostrar lo que no
                sabes: esa es una de las habilidades que más te van a ayudar en
                el futuro.
              </p>
              <p>
                Y si ya trabajas como developer, recuerda que muchas de las
                cosas que aprendiste en solitario solo cobraron sentido cuando
                las compartiste. Enseñar, acompañar, revisar código, escuchar
                —todo eso también es programar.
              </p>
              <p>
                Nadie construye software en soledad. El código puede empezar en
                tu editor, pero el software se hace en equipo.
              </p>
            </div>
            <footer className="post__footer">
              Publicado el 29 de abril de 2025
            </footer>
          </article>
        </section>
      </div>
    </main>
  );
};

export default BlogTeamPostPage;
