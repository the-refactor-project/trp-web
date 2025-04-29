import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quieres trabajar como programador/a - The Refactor Project",
  description:
    "Quizás llevas tiempo cansado/a de tu trabajo y buscando un cambio. En este post hablamos de esa experiencia de cambio de profesión que mucha gente ya ha podido experimentar.",
};

const BlogPost1Page = (): React.ReactElement => {
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
                Quieres trabajar como programador/a
              </h1>
              <p className="post__author">
                Por <strong>Mario González</strong>
              </p>
              <div className="post__image">
                <Image
                  src="/images/programadora.webp"
                  width="1200"
                  height="631"
                  alt="Chica programando en su puesto de trabajo, vista de espaldas"
                />
              </div>
            </header>
            <div className="post__content">
              <p>
                Hay mucha gente que lleva tiempo trabajando en lo que eligió,
                pero que han perdido la motivación, su trabajo ya no les
                estimula o las condiciones son precarias. A lo mejor conocen a
                alguien que ya se dedica profesionalmente a la programación, y
                ven que los puestos de trabajo están mejor remunerados, que el
                trabajo es más estimulante y que las condiciones son buenas.
                Este post es para estas personas, y también para ti si te
                encuentras entre ellas y te has planteado{" "}
                <strong>estudiar un bootcamp de programación</strong>.
              </p>
              <h2 id="cambiar-de-vida">Cambiar de vida</h2>
              <p>
                Dicen que nunca es tarde para darle un giro a tu vida cuando las
                cosas no están yendo como te gustan. El trabajo, para bien o
                para mal, ocupa un lugar muy central en nuestras vidas, e
                influye mucho en cómo nos sentimos en general.{" "}
                <strong>Cambiar de profesión</strong> es un paso importante que
                muchas personas deciden dar para mejorar su vida.
              </p>
              <p>
                Hacer un cambio de vida no es fácil, y menos aún si queremos un
                cambio de vida relativamente rápido. Pero la realidad es que se
                puede pasar de no haber programado nunca a{" "}
                <strong>trabajar como programador/a</strong> en cuestión de
                meses. Y esto no es un eslogan promocional, lo hemos visto
                multitud de veces, con nombres y apellidos.
              </p>
              <h2 id="cómo-se-hace-este-cambio">¿Cómo se hace este cambio?</h2>
              <p>
                Pues no de cualquier manera ni en cualquier sitio. Un cambio así
                implicará un esfuerzo importante, uno se juega mucho cuando
                decide dejar su trabajo atrás y pararlo todo durante unos meses
                para formarse en algo nuevo. Por eso es muy importante no elegir
                cualquier <strong>bootcamp de programación</strong>.
              </p>
              <p>
                El simple hecho de aprender a programar{" "}
                <strong>
                  no te va a abrir las puertas del mercado laboral
                </strong>{" "}
                (hablábamos de esto{" "}
                <Link
                  href="/blog/me-sera-dificil-encontrar-mi-primer-trabajo-de-programador-a"
                  target="_blank"
                >
                  aquí
                </Link>
                ). No basta con saber programar, hay que conocer las dinámicas
                de la profesión y entrenar bien las skills que van a pedirte las
                empresas cuando te presentes a un proceso de selección. Y, sobre
                todo, hay que distinguirse de todos los demás que están
                intentando hacer el cambio de vida al mismo tiempo que tú.
              </p>
              <h2 id="qué-bootcamp-de-programación-elegir">
                ¿Qué bootcamp de programación elegir?
              </h2>
              <p>
                Poner en manos de una escuela un salto así es una decisión muy
                importante. Es fundamental elegir bien quién te va a entrenar
                para poder <strong>acceder al mercado laboral</strong>. Aquí te
                explicamos los puntos más importantes a tener en cuenta a la
                hora de elegir un bootcamp de programación o cualquier otra
                formación orientada a ese{" "}
                <strong>cambio de vida laboral</strong>:
              </p>
              <h3 id="prueba-de-acceso">Prueba de acceso</h3>
              <p>Una prueba de acceso garantiza dos cosas:</p>
              <ol>
                <li>
                  La escuela se preocupa por buscar <strong>nivel</strong> y no
                  simplemente por llenar plazas.
                </li>
                <li>
                  No vas a estar en un grupo con gente que no tiene el nivel
                  mínimo.
                </li>
              </ol>
              <h3 id="typescript">TypeScript</h3>
              <p>
                Si decides que el lenguaje de programación para formarte en tu
                cambio de carrera sea JavaScript, es importante que el curso que
                elijas te enseñe TypeScript. Es el lenguaje que las empresas
                piden cada vez más, y aprendiendo solo JavaScript te va a ser
                difícil{" "}
                <strong>aprender los fundamentos de la programación</strong>.
              </p>
              <p>
                Cuando diseñamos nuestro{" "}
                <strong>
                  <Link
                    href="/cursos/bootcamp-de-programacion-web-full-stack"
                    target="_blank"
                  >
                    Bootcamp de Programación Web Full Stack
                  </Link>
                </strong>{" "}
                tomamos la decisión de que el curso iba a ser{" "}
                <strong>directamente con TypeScript</strong>, así que optas por
                este curso, estarás aprendiendo este lenguaje desde el módulo
                introductorio.
              </p>
              <h3 id="testing">Testing</h3>
              <p>
                El <strong>testing automático</strong> es una de las skills que
                más valor te van a dar frente a los procesos de selección. El
                testing te ayuda a entender mejor el código y a escribir
                software mucho más fiable.
              </p>
              <p>
                En nuestro bootcamp de Full Stack estarás{" "}
                <strong>testeando desde el principio</strong> y saldrás con una
                base sólida que es difícil de encontrar entre los juniors que se
                presentan a procesos de selección.
              </p>
              <h3 id="hablar-como-developers">Hablar como developers</h3>
              <p>
                Si la empresa te tiene que enseñar el lenguaje que utilizan sus
                equipos para entenderse, si te tiene que enseñar las dinámicas y
                procesos de comunicación que hay en sus equipos, entonces la
                empresa no querrá invertir en ti. Tienes que llegar a las
                empresas habiéndote ya entrenado en un{" "}
                <strong>lenguaje de producto</strong>, en{" "}
                <strong>dar y recibir feedback</strong>, en hacer{" "}
                <strong>code reviews</strong>, presentaciones técnicas,{" "}
                <strong>debuggear</strong> junto a otros/as developers.
              </p>
              <p>
                En nuestro curso harás <strong>muchas retros</strong>, harás{" "}
                <strong>una daily cada mañana</strong>, te acostumbrarás a{" "}
                <strong>dar visibilidad</strong> a tu trabajo, a tus problemas,
                a tus avances, eso es lo que va a hacer que las empresas no te
                vean como un gasto sino como un beneficio.
              </p>
              <h2 id="la-gran-pregunta-hay-demasiados-juniors">
                La gran pregunta: ¿hay demasiados juniors?
              </h2>
              <p>
                Desde hace meses corre por las redes sociales una frase: el
                mercado está colapsado de juniors. Sin embargo, si escuchamos a
                las empresas, que son las que te van a contratar, la frase que
                más repiten es ésta: <strong>hay escasez de talento</strong>.
              </p>
              <p>
                Así que la realidad no es que las empresas ya no quieran
                juniors, es que la mayoría de juniors que hay no están
                preparados/as para lo que las empresas demandan, y éstas no
                encuentran los perfiles que necesitan.
              </p>
              <p>
                Por esta razón, si quieres dar el salto, es importante que te
                distingas de la multitud de juniors que salen al mercado cada
                mes.{" "}
                <strong>
                  Conviértete en el talento que las empresas están buscando
                </strong>
                , y las empresas te querrán contratar.
              </p>
            </div>
            <footer className="post__footer">
              Publicado el 19 de marzo de 2024
            </footer>
          </article>
        </section>
      </div>
    </main>
  );
};

export default BlogPost1Page;
