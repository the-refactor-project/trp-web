import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Guillem, de trabajar en un supermercado a trabajar de programador - The Refactor Project",
  description:
    "Guillem decidió cambiar de trabajo y convertirse en programador. Gracias a nuestro Bootcamp de Programación Web Full Stack lo ha conseguido. Aquí puedes leer su testimonio.",
};

const BlogGuillemPostPage = (): React.ReactElement => {
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
                Guillem, de trabajar en un supermercado a trabajar de
                programador
              </h1>
              <p className="post__author">
                Por <strong>Mario González</strong>
              </p>
            </header>
            <div className="post__content">
              <div className="image-text">
                <Image
                  className="post__image"
                  src="/images/guillem-blasco-programador.webp"
                  width="613"
                  height="800"
                  alt="Guillem Blasco"
                />
                <div>
                  <p>
                    Guillem decidió hace pocos años que quería cambiar de
                    profesión y dedicarse al mundo de la programación. Tras su
                    paso por nuestro bootcamp, ahora disfruta de su sueño
                    cumplido y se dedica a lo que buscaba: Guillem ahora{" "}
                    <strong>es programador</strong>.
                  </p>
                  <p>
                    Le hemos querido hacer unas preguntas acerca de su cambio de
                    trabajo, aquí te dejamos su testimonio.
                  </p>
                </div>
              </div>
              <h2>
                Hola, Guillem. Enhorabuena por haber encontrado trabajo de
                programador. ¿Puedes contarnos qué se siente al haber alcanzado
                tu meta?
              </h2>
              <p>
                Alegría y mucha satisfacción de ver luz al final del túnel. Ha
                sido un camino duro de recorrer, pero al final, con esfuerzo y
                dedicación todo llega.
              </p>
              <h2>¿Qué te motivó a entrar en el mundo de la programación?</h2>
              <p>
                Desde pequeño siempre he tenido curiosidad por los ordenadores y
                la tecnología, mis estudios me llevaron a la rama de las artes
                porque quería mediante el diseño gráfico hacer páginas web, pero
                una vez entre en ese mundo me di cuenta que no era lo que
                realmente buscaba, así que estudié un grado superior de
                desarrollo de aplicaciones multiplataforma y fue aquí donde se
                despertó mi curiosidad por la programación.
              </p>
              <p>
                Desgraciadamente tuve unas horribles prácticas donde me sentí
                abandonado por completo, cosa que hizo que dejase de lado el
                desarrollo, viendo cómo mis compañeros de clase sí que
                consiguieron trabajo de developers y yo en cambio acabé
                trabajando en otro sector diferente.
              </p>
              <h2>¿Qué te hizo decidirte por nuestro bootcamp?</h2>
              <p>
                Me lo recomendó un buen amigo, que hizo el bootcamp y consiguió
                trabajo de programador.
              </p>
              <p>
                Al principio yo no estaba muy de acuerdo con esto de aprender a
                programar en solo 3 meses, puesto que yo había estado 2 años
                estudiando un ciclo y pensaba que no sería posible aprender en
                tan poco tiempo.
              </p>
              <p>
                Pero al final me convenció, cogí todos mis ahorros y aposté por
                vivir una experiencia única: ¡dejarlo todo e irme a una ciudad
                completamente solo a aprender a programar durante 3 meses!
              </p>
              <h2>
                ¿Qué expectativas tenías antes de empezar? ¿Se cumplieron?
              </h2>
              <p>
                Como bien he dicho antes, venía un poco preparado, no las tenía
                todas conmigo, sabía que sería un proceso muy duro así que
                cambié por completo mi mentalidad y puse todo el foco en el
                bootcamp.
              </p>
              <p>
                Y claramente se cumplieron, ¡menudo cambio venir de un ciclo
                donde tocas un poco de cada campo de la programación a salir
                siendo un developer!
              </p>
              <h2>
                ¿Cuál fue el mayor reto al que te enfrentaste durante el
                bootcamp y cómo lo superaste?
              </h2>
              <p>
                Dejar mi “vida”, cogerlo todo e irme a una nueva ciudad donde no
                conocía nada ni a nadie. El sentirme solo fue lo más duro aunque
                tenía un objetivo claro: ¡acabar el bootcamp!
              </p>
              <p>
                Y simplemente fue seguir el objetivo principal sin
                distracciones, picar picar y picar…
              </p>
              <h2>
                ¿Cuál fue el aprendizaje más valioso que te llevaste del
                bootcamp?
              </h2>
              <p>
                Si caminas solo, llegarás lejos; si caminas acompañado, llegarás
                muchísimo más lejos. Si lo aplicamos al desarrollo, uno puede
                desarrollar solo, pero en este mundo se desarrolla en equipo.
              </p>
              <p>
                Gracias a mi equipo del bootcamp, aprendí tanto a pedir ayuda
                como a darla cuando se necesita de mí, y sobre todo a saber
                escuchar el feedback y mejorar tanto a nivel personal como a
                nivel developer.
              </p>
              <h2>
                ¿Cómo describirías la dinámica de trabajo en equipo y el enfoque
                en buenas prácticas que usamos?
              </h2>
              <p>
                Ahora que estoy en un equipo bastante grande y en proyectos
                reales, la dinámica de trabajo que se usa en el bootcamp te
                lleva perfectamente a situaciones similares a las del equipo
                real, así que vas entrenando la manera de comunicarte con otros
                desarrolladores, las dailies o las diferentes reuniones que
                puedes tener dia a dia.
              </p>
              <div className="image-text image-text--wide">
                <figure>
                  <Image
                    className="post__image"
                    src="/images/guillem-2.webp"
                    width="613"
                    height="800"
                    alt="Guillem Blasco"
                  />
                  <figcaption>
                    Guillem en su puesto de trabajo de programador
                  </figcaption>
                </figure>
                <div>
                  <h2>
                    ¿Qué es lo que más han valorado en el proceso de selección
                    de tu actual trabajo?
                  </h2>
                  <p>
                    Tener un código limpio y bien estructurado. También les
                    gustó que aplicara testing sobre mi código.
                  </p>
                  <h2>
                    ¿Qué consejo le darías a alguien que está pensando en
                    apuntarse al bootcamp?
                  </h2>
                  <p>
                    No es un camino de rosas, es una experiencia única y yo le
                    aconsejaría que durante el proceso del bootcamp y la
                    búsqueda de trabajo se aísle de todo (familia y amistades).
                    ¡Y que ponga el 200% de su persona en aprender lo máximo y
                    disfrutar de esta experiencia!
                  </p>
                </div>
              </div>

              <h2>
                ¿Cómo crees que este bootcamp te ha cambiado personal y
                profesionalmente?
              </h2>
              <p>
                He tenido tiempo de hablar conmigo mismo y demostrarme que si me
                pongo un objetivo lo voy a cumplir. Personalmente me he
                “redescubierto” porque confiaba muy poco en mí mismo y esto ha
                hecho que cambie por completo mi manera de sentirme.
              </p>
              <p>
                En cuanto a lo profesional, en menos de 2 semanas me he acoplado
                perfectamente al equipo y su metodología de trabajo. Estoy muy
                contento de la empresa que he encontrado, ambiente joven,
                proactivo a ayudarme en todo momento y no me he sentido
                abandonado. ¡Creo que voy a aprender muchísimo más donde estoy!
              </p>
              <br />
              <hr />
              <br />
              <p>
                Desde la escuela damos las gracias a Guillem por confiarnos su
                cambio de rumbo, y deseamos que disfrute de lleno su nuevo
                trabajo de programador 😎
              </p>
              <p>
                Si quieres seguir su camino, échale un vistazo a nuestro{" "}
                <Link href="/cursos/bootcamp-de-programacion-web-full-stack">
                  Bootcamp de Programación Web Full Stack
                </Link>
                .
              </p>
            </div>
            <footer className="post__footer">
              Publicado el 31 de marzo de 2025
            </footer>
          </article>
        </section>
      </div>
    </main>
  );
};

export default BlogGuillemPostPage;
