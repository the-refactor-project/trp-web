"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Nav from "../Nav/Nav";
import Burger from "../Burger/Burger";
import { usePathname } from "next/navigation";
import "./Header.scss";

const Header = (): React.ReactElement => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const pathname = usePathname();

  const toggleBurgerOpen = () => {
    setIsBurgerOpen((isBurgerOpen) => !isBurgerOpen);
  };

  useEffect(() => {
    setIsBurgerOpen(false);
  }, [pathname]);

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
            priority
          />
        </a>
        <Burger isOpen={isBurgerOpen} toggleBurgerOpen={toggleBurgerOpen} />
        <Nav isOpen={isBurgerOpen} toggleBurgerOpen={toggleBurgerOpen} />
      </div>
    </header>
  );
};

export default Header;
