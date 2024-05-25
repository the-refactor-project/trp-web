import Link from "next/link";
import "./Footer.scss";
import Image from "next/image";

const Footer = (): React.ReactElement => {
  return (
    <footer className="main-footer">
      <div className="container">
        <nav className="secondary-navigation">
          <ul>
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <Link href="/cursos">Nuestros cursos</Link>
            </li>
            <li>
              <Link href="/equipo">Nuestro equipo</Link>
            </li>
            <li>
              <Link href="/cursos/crafting-en-desarrollo-web-profesional">
                Curso Crafting en Desarrollo Web Profesional
              </Link>
            </li>
            <li>
              <Link href="/cursos/ingenieria-en-el-software-solid-design-patterns">
                Curso Ingeniería en el Software: SOLID & Design Patters
              </Link>
            </li>
            <li>
              <Link href="/eventos">Eventos</Link>
            </li>
            <li>
              <Link href="/contacto">Contacta con nosotros</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/aviso-legal">Aviso legal</Link>
            </li>
            <li>
              <Link href="/privacidad">Política de privacidad</Link>
            </li>
          </ul>
        </nav>
        <div className="email">
          <Link href="mailto:info@the-refactor-project.com">
            info@the-refactor-project.com
          </Link>
          <Link href="/contacto#donde-estamos">Dónde estamos</Link>
        </div>
        <div className="social">
          Síguenos en:
          <ul className="social__icons">
            <li>
              <Link
                href="https://www.instagram.com/refactor_project/"
                target="_blank"
              >
                <Image
                  className="social__logo"
                  src="/icons/instagram.svg"
                  alt="Logotipo de Instagram"
                  width="30"
                  height="30"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/school/the-refactor-project/"
                target="_blank"
              >
                <Image
                  className="social__logo"
                  src="/icons/linkedin.svg"
                  alt="Logotipo de LinkedIn"
                  width="30"
                  height="30"
                />
              </Link>
            </li>
            <li>
              <Link href="https://x.com/refactorproject" target="_blank">
                <Image
                  className="social__logo"
                  src="/icons/x.svg"
                  alt="Logotipo de X"
                  width="30"
                  height="30"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/@RefactorProject"
                target="_blank"
              >
                <Image
                  className="social__logo"
                  src="/icons/youtube.svg"
                  alt="Logotipo de YouTube"
                  width="30"
                  height="30"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
