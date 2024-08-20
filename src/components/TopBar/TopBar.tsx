import Image from "next/image";
import "./TopBar.scss";

interface TopBarProps {
  onClose: () => void;
}

const TopBar = ({ onClose }: TopBarProps): React.ReactElement => {
  return (
    <div className="top-bar">
      <span>Plazas abiertas para el curso online</span>
      <strong>Ingeniería en el Software: SOLID & Design Patterns</strong>{" "}
      <a
        href="/cursos/ingenieria-en-el-software-solid-design-patterns"
        className="button button--outline button--small top-bar__cta"
      >
        Más info
      </a>
      <button className="top-bar__close" onClick={onClose}>
        <Image src="/icons/close.svg" alt="close" width={24} height={24} />
      </button>
    </div>
  );
};

export default TopBar;
