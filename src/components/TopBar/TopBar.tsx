import Image from "next/image";
import "./TopBar.scss";

interface TopBarProps {
  onClose: () => void;
}

const TopBar = ({ onClose }: TopBarProps): React.ReactElement => {
  return (
    <div className="top-bar">
      <span>¡Apúntate a nuestro</span>
      <strong>
        Taller gratuito de Introducción a la Programación Web!
      </strong>{" "}
      <a
        href="https://www.meetup.com/es-ES/the-refactor-project-programando-juntos-as/events/304503671"
        className="button button--outline button--small top-bar__cta"
        target="_blank"
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
