import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "¿Me será difícil encontrar mi primer trabajo de programador/a? - The Refactor Project",
  description:
    "Analizamos las razones por las que algunos juniors están teniendo tantas dificultades para encontrar su primer puesto de trabajo en la industria del desarrollo de software, y proponemos la alternativa para que tu caso sea diferente.",
};

const BlogPost2Page = (): React.ReactElement => {
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
                ¿Me será difícil encontrar mi primer trabajo de programador/a?
              </h1>
              <p className="post__author">
                Por <strong>Mario González</strong>
              </p>
              <Image
                className="post__image"
                src="/images/desesperacion-desktop.webp"
                width="1200"
                height="631"
                alt="Mujer con gesto de desesperación frente a su portátil"
              />
            </header>
            <div className="post__content">
              <p>
                En los últimos años, la industria del desarrollo de software ha
                experimentado un crecimiento exponencial. Cada vez más empresas
                están digitalizando sus procesos y necesitan profesionales que
                les ayuden a hacerlo. A pesar de esto, muchos juniors están
                teniendo dificultades para{" "}
                <strong>encontrar su primer trabajo en el sector</strong>. Si te
                estás planteando dedicarte profesionalmente a la programación,
                ¿qué puedes hacer para sortear este obstáculo?
              </p>
              <h2 id="qué-serás-después-de-estudiar-developer-o-estudiante">
                ¿Qué serás después de estudiar, <em>developer</em> o{" "}
                <em>estudiante</em>?
              </h2>
              <p>
                Delante de los ojos de una empresa que está buscando developers,
                tú <strong>tienes que presentarte como developer</strong>. Es
                cierto que algunas empresas tienen programas de prácticas para
                estudiantes recién salidos de bootcamps o de FP, pero la mayoría
                de las ofertas de trabajo que verás en internet son para
                developers.
              </p>
              <p>
                <em>
                  ”Pero cuando busque empleo yo ya seré developer porque habré
                  terminado mis estudios”
                </em>
                , dirás. La realidad es ésta:{" "}
                <strong>
                  a la empresa le importará un pimiento que sepas mucho
                  JavaScript
                </strong>{" "}
                o que tu proyecto final sea una app con sockets, tiempo real y
                generación de vídeo 3D con IA. Eso no te presentará ante ella
                como developer.
              </p>
              <p>
                La clave está en{" "}
                <strong>
                  qué tipo de junior vas a ir modelando durante tu formación
                </strong>
                . Dependiendo de lo que trabajes más, tu perfil será el de un/a
                estudiante recién salido de un curso o el de{" "}
                <strong>
                  un/a developer que conoce lo que necesita la empresa
                </strong>
                .
              </p>
              <h2 id="qué-podrás-ofrecer-a-una-empresa-cuando-acabes-los-estudios">
                ¿Qué podrás ofrecer a una empresa cuando acabes los estudios?
              </h2>
              <p>
                Te voy a plantear dos perfiles, <strong>perfil A</strong> y{" "}
                <strong>perfil B</strong>, y luego te voy a preguntar cuál crees
                que va a <strong>encontrar trabajo</strong> antes.
              </p>
              <p>
                <strong>Perfil A</strong>:
              </p>
              <ul>
                <li>
                  <p>
                    Durante sus estudios se ha enfocado en que el código
                    funcione, en saber implementar las cosas más difíciles.
                  </p>
                </li>
                <li>
                  <p>
                    Ha dado más importancia a que se vieran avances en la
                    pantalla que a que{" "}
                    <strong>su código fuera legible por humanos</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    Sabe usar Git, pero{" "}
                    <strong>no es lo más importante para él/ella</strong>. Va
                    haciendo commits cuando se acuerda.
                  </p>
                </li>
                <li>
                  <p>
                    Ha programado un juego espectacular, pero{" "}
                    <strong>no ha hecho tests</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    Es capaz de explicar perfectamente cómo funciona un
                    algoritmo de ordenación, pero no le ha dado importancia a
                    las{" "}
                    <strong>
                      conversaciones de código en las Pull Requests
                    </strong>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    Crea unas webs preciosas pero no se centra en la{" "}
                    <strong>accesibilidad</strong> y no se esfuerza por utilizar
                    herramientas para <strong>mejorar la performance</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    Se lo ha pasado muy bien en el curso programando cosas muy
                    chulas, pero no sabe{" "}
                    <strong>gestionar la frustración</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    Ha trabajado en equipo pero no está preparado/a para{" "}
                    <strong>ser mentorizado/a</strong> por alguien con más
                    experiencia sin tener que estar preguntando cada vez que
                    surge un obstáculo.
                  </p>
                </li>
              </ul>
              <p> </p>
              <p>
                <strong>Perfil B</strong>:
              </p>
              <ul>
                <li>
                  <p>
                    Durante sus estudios ha trabajado aplicando{" "}
                    <strong>
                      metodologías <em>Agile</em>
                    </strong>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    Está acostumbrado/a a <strong>discutir el código</strong>{" "}
                    con sus compañeros/as y a{" "}
                    <strong>dar y recibir feedback</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    Se ha centrado en aplicar <strong>Clean Code</strong> para
                    producir <strong>código legible</strong> y en aplicar{" "}
                    <strong>buenas prácticas</strong>. Tiene en cuenta el
                    concepto de <strong>deuda técnica</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    No ha desarrollado ni una sola feature en front o back sin
                    haberla <strong>testeado</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    La mayor parte del tiempo ha programado en{" "}
                    <strong>
                      <em>pair programming</em>
                    </strong>{" "}
                    y sabe gestionar las dificultades inherentes a esta forma de
                    trabajar.
                  </p>
                </li>
                <li>
                  <p>
                    Siempre desarrolla teniendo en cuenta la{" "}
                    <strong>Integración Continua</strong> y utiliza Git para
                    conseguir <strong>ciclos de entrega cortos</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    Conoce el ciclo de vida del software y los procesos de{" "}
                    <strong>entrega de valor</strong>, y está habituado/a a
                    entender el software desde una{" "}
                    <strong>perspectiva de producto</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    Tiene práctica trabajándose el{" "}
                    <strong>
                      <em>naming</em>
                    </strong>
                    , porque sabe lo importante que es que{" "}
                    <strong>el dominio del negocio</strong> esté plasmado en
                    cada variable, módulo, clase o interfaz del código.
                  </p>
                </li>
                <li>
                  <p>
                    Utiliza el enfoque <strong>BDD</strong> para desarrollar
                    desde la funcionalidad y entendiendo siempre cada artefacto
                    desde su API pública. Intenta siempre{" "}
                    <strong>
                      depender de abstracciones y no de implementaciones
                    </strong>
                    . Esto le permite aplicar{" "}
                    <strong>
                      técnicas de <em>refactoring</em>
                    </strong>{" "}
                    con seguridad.
                  </p>
                </li>
                <li>
                  <p>
                    Su manejo del <strong>dominio del negocio</strong> y del{" "}
                    <strong>lenguaje ubicuo</strong> le permite hablar con todos
                    los equipos que entran en juego en el desarrollo de un
                    software.
                  </p>
                </li>
                <li>
                  <p>
                    Ha trabajado durante todo el curso con un{" "}
                    <strong>enfoque multidisciplinar</strong> que le permite
                    encajar en{" "}
                    <strong>
                      equipos <em>T-shaped</em>
                    </strong>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    Se ha peleado con tantos <em>setups</em> distintos que ha
                    entendido la importancia que hay que darle al{" "}
                    <strong>
                      <em>tooling</em>
                    </strong>{" "}
                    usado para desarrollar, y puede{" "}
                    <strong>
                      pelearse con cualquier nuevo <em>setup</em>
                    </strong>{" "}
                    que se encuentre en la empresa.
                  </p>
                </li>
              </ul>
              <p> </p>
              <p>
                Ya sabes qué perfil tiene{" "}
                <strong>muchas más oportunidades de encontrar trabajo</strong>{" "}
                que el otro, ¿verdad?
              </p>
              <h2 id="cómo-debes-afrontar-el-aprendizaje-de-la-profesión">
                ¿Cómo debes afrontar el aprendizaje de la profesión?
              </h2>
              <p>
                Si has llegado hasta aquí, es que te has dado cuenta de que el{" "}
                <strong>perfil B</strong> es el que tiene más posibilidades de
                encontrar trabajo. Pero,{" "}
                <strong>¿cómo se consigue ser un perfil B?</strong>
              </p>
              <p>
                A programar se aprende con cursos online y con videotutoriales.
                Pero <strong>no te van a contratar por saber programar</strong>.
                Si tu intención es buscar trabajo de developer,{" "}
                <strong>aprende la profesión</strong>. Y eso sólo lo puedes
                hacer en un entorno donde puedas{" "}
                <strong>
                  entrenar las habilidades que te van a pedir en tu futuro
                  puesto de trabajo
                </strong>
                .
              </p>
              <p>
                Elige un camino formativo donde el foco se ponga en{" "}
                <strong>
                  adaptarse a un entorno de desarrollo de software
                </strong>
                . Donde se te enseñen las metodologías que se usan en las
                empresas, donde puedas realmente moldearte como{" "}
                <strong>un/a profesional de la industria</strong>. Elige un
                camino formativo donde puedas practicar las skills que realmente
                van a <strong>aportarle valor a las empresas</strong>.
              </p>
              <p>
                Si quieres <strong>aprender JavaScript</strong>, hay cientos de
                miles de tutoriales, vídeos, libros y cursos. En cambio, si
                quieres que tu entrada en un equipo no le suponga un gran
                esfuerzo a la empresa -eso es al fin y al cabo{" "}
                <strong>lo que van a evaluar para contratarte</strong>-, elige
                un camino donde puedas aprender bien{" "}
                <strong>la realidad y las prácticas de la profesión</strong>.
              </p>
              <h2 id="nuestro-curso">Nuestro curso 😊</h2>
              <p>
                Si has elegido convertirte en el <strong>perfil B</strong>, en
                The Refactor Project te invitamos a conocer nuestro curso{" "}
                <Link href="/cursos/crafting-en-desarrollo-web-profesional">
                  Crafting en Desarrollo Web Profesional
                </Link>
                <strong>
                  , donde el principal objetivo es convertirte en 4 meses en
                  un/a developer de perfil B y sin haber programado previamente
                </strong>
                .
              </p>
              <p>
                El foco de este curso no es simplemente enseñarte a programar,
                sino que te conviertas en un/a profesional de la industria,{" "}
                <strong>atractivo/a</strong> para las empresas de desarrollo de
                software.
              </p>
              <p>
                Desde el primer día vas a estar trabajando con metodologías{" "}
                <strong>Scrum</strong> y{" "}
                <strong>eXtreme Programming (XP)</strong>, y todo lo que
                programes lo vas a hacer aplicando <strong>Clean Code</strong> y{" "}
                <strong>testing</strong>. Trabajarás con mentalidad{" "}
                <strong>DevOps</strong> y dominarás <strong>Git</strong> y{" "}
                <strong>GitHub</strong>, implementando <strong>CI/CD</strong> y{" "}
                <strong>pipelines con GitHub Actions</strong>.
              </p>
              <p>
                Al desarrollar, aprenderás a hacerlo{" "}
                <strong>poniendo al/la usuario/a en el centro</strong>. Todas
                tus interfaces tendrán en cuenta la{" "}
                <strong>accesibilidad</strong>, la{" "}
                <strong>User Experience</strong> y{" "}
                <strong>la performance</strong>, tomando en cuenta métricas como
                las <strong>Core Web Vitals</strong>.
              </p>
              <p>
                En el curso tendremos contacto con las{" "}
                <strong>empresas del sector</strong>, para que puedas conocer de
                primera mano{" "}
                <strong>cómo es el día a día de un/a developer</strong> en una
                empresa de desarrollo de software. Tendrás la oportunidad de
                conocer <strong>juniors que ya están trabajando</strong> y que
                eligieron el mismo camino que tú.
              </p>
              <p>
                Al terminar el curso, por tanto,{" "}
                <strong>no serás un/a simple estudiante</strong> que acaba de
                finalizar sus estudios, sino que serás{" "}
                <strong>un/a developer</strong> y te podrás presentar a las
                empresas como tal.
              </p>
              <h2 id="consejos-finales">Consejos finales</h2>
              <p>
                Un cambio de vida como el que buscas tiene que tener los
                objetivos que te planteamos en este artículo. Mírate{" "}
                <Link href="/cursos/crafting-en-desarrollo-web-profesional">
                  nuestro curso
                </Link>{" "}
                😉.
              </p>
            </div>
            <footer className="post__footer">
              Publicado el 11 de febrero de 2024
            </footer>
          </article>
        </section>
      </div>
    </main>
  );
};

export default BlogPost2Page;
