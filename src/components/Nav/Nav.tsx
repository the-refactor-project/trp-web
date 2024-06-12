import Link from "next/link";
import "./Nav.scss";

interface NavProps {
  isOpen: boolean;
  toggleBurgerOpen: () => void;
}

const Nav = ({ isOpen, toggleBurgerOpen }: NavProps): React.ReactElement => {
  return (
    <nav className={`main-navigation${isOpen ? " main-navigation--open" : ""}`}>
      <ul>
        <li className="main-navigation__item">
          <Link href="/" onClick={toggleBurgerOpen}>
            Home
          </Link>
        </li>
        <li className="main-navigation__item">
          <Link href="/cursos" onClick={toggleBurgerOpen}>
            Nuestros cursos
          </Link>
        </li>
        <li className="main-navigation__item">
          <Link href="/equipo" onClick={toggleBurgerOpen}>
            Nuestro equipo
          </Link>
        </li>
        <li className="main-navigation__item">
          <Link href="/eventos" onClick={toggleBurgerOpen}>
            Eventos
          </Link>
        </li>
        <li className="main-navigation__item">
          <Link href="/contacto" onClick={toggleBurgerOpen}>
            Contacta con nosotros
          </Link>
        </li>
        <li className="main-navigation__item">
          <Link href="/blog" onClick={toggleBurgerOpen}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
