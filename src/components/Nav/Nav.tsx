import Link from "next/link";
import "./Nav.scss";

const Nav = (): React.ReactElement => {
  return (
    <nav className="main-navigation">
      <ul>
        <li className="main-navigation__item">
          <Link href="/">Home</Link>
        </li>
        <li className="main-navigation__item">
          <Link href="/cursos">Nuestros cursos</Link>
        </li>
        <li className="main-navigation__item">
          <Link href="/equipo">Nuestro equipo</Link>
        </li>
        <li className="main-navigation__item">
          <Link href="/eventos">Eventos</Link>
        </li>
        <li className="main-navigation__item">
          <Link href="/contacto">Contacta con nosotros</Link>
        </li>
        <li className="main-navigation__item">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
