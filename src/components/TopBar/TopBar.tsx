import Image from "next/image";
import { useFeatureFlag } from "configcat-react";
import "./TopBar.scss";

interface TopBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ isOpen, onClose }) => {
  const { value: topBarFlag } = useFeatureFlag("topBar", false);

  if (!isOpen || !topBarFlag) {
    return null;
  }

  return (
    <div className="top-bar">
      <span>Inscripciones abiertas para nuestro </span>
      <strong>Curso online De JavaScript a TypeScript</strong>{" "}
      <a
        href="https://the-refactor-project.com/cursos#de-js-a-ts"
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
