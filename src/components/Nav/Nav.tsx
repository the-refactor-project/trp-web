import Link from "next/link";
import "./Nav.scss";

interface NavProps {
  isOpen: boolean;
}

const Nav = ({ isOpen }: NavProps): React.ReactElement => {
  return (
    <nav className={`main-navigation${isOpen ? " main-navigation--open" : ""}`}>
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
