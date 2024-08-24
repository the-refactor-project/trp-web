import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Taller Introducción a la Programación Web - The Refactor Project",
};

const IntroWorkshop = (): React.ReactElement => {
  return (
    <main className="main-content">
      <div className="container">
        <section className="section section--full-viewport section--centered">
          <h3 className="section__title">
            Taller Introducción a la Programación Web
          </h3>
          <div className="section__text">
            <a
              href="https://stackblitz.com/edit/vitejs-vite-wuzdfw?file=main.js"
              target="_blank"
            >
              Editor de código para el ejercicio práctico
            </a>
          </div>
          <div className="instructions">
            <h3>Ejercicio:</h3>
            <p>
              En el archivo <strong>main.js</strong> tienes una función llamada{" "}
              <strong>validarFormulario</strong> que va a recibir cuatro datos:
              el nombre, el correo electrónico, la contraseña y la confirmación
              de la contraseña.
            </p>
            <p>
              Dentro de esta función, escribe el código correspondiente para
              realizar las siguientes validaciones:
            </p>
            <ul>
              <li>El nombre no puede tener menos de 4 caracteres</li>
              <li>La contraseña no puede tener menos de 8 caracteres</li>
              <li>Las dos contraseñas deben coincidir</li>
              <li>El correo electrónico debe contener un símbolo @</li>
            </ul>
            <p>
              Tienes a tu disposición dos funciones llamadas{" "}
              <strong>mostrarError</strong> y <strong>saludar</strong>
            </p>
            <p>
              A la función <strong>mostrarError</strong> le tienes que pasar un
              mensaje de error al invocarla, y mostrará el mensaje debajo del
              formulario.
            </p>
            <p>
              A la función <strong>saludar</strong> le tienes que pasar un
              nombre al invocarla y aparecerá un mensaje de bienvenida.
            </p>
          </div>
          <h3>Chuleta JavaScript:</h3>
          <Image
            src="/images/cheatsheet-taller.png"
            alt="Chuleta taller"
            width={500}
            height={575}
          />
        </section>
      </div>
    </main>
  );
};

export default IntroWorkshop;
