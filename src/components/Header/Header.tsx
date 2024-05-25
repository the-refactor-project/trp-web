"use client";

import Image from "next/image";
import { useState } from "react";
import Nav from "../Nav/Nav";
import Burger from "../Burger/Burger";
import "./Header.scss";

const Header = (): React.ReactElement => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurgerOpen = () => {
    setIsBurgerOpen((isBurgerOpen) => !isBurgerOpen);
  };

  return (
    <header className="main-header" data-testid="header">
      <div className="container">
        <a href="/">
          <Image
            src="/images/logo-the-refactor-project.svg"
            className="logo"
            alt="Logotipo de The Refactor Project"
            width="200"
            height="57"
          />
        </a>
        <Burger isOpen={isBurgerOpen} toggleBurgerOpen={toggleBurgerOpen} />
        <Nav isOpen={isBurgerOpen} />
      </div>
    </header>
  );
};

export default Header;
