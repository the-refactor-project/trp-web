"use client";

import "./Burger.scss";

interface BurgerProps {
  isOpen: boolean;
  toggleBurgerOpen: () => void;
}

const Burger = ({
  isOpen,
  toggleBurgerOpen,
}: BurgerProps): React.ReactElement => {
  return (
    <button
      className={`burger${isOpen ? " burger--open" : ""}`}
      aria-label="Desplegar y plegar el menú de navegación"
      onClick={toggleBurgerOpen}
    >
      <span className="burger__line"></span>
      <span className="burger__line"></span>
      <span className="burger__line"></span>
    </button>
  );
};

export default Burger;
