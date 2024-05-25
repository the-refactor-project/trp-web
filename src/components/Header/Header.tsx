import Image from "next/image";
import "./Header.scss";

const Header = (): React.ReactElement => {
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
      </div>
    </header>
  );
};

export default Header;
