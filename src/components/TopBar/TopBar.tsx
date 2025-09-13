"use client";

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
      <span>Publicado nuestro primer codelab gratuito: </span>
      <strong>Refactorizando pensando en SOLID</strong>{" "}
      <a
        href="https://the-refactor-project-codelab-platform.netlify.app"
        className="button button--outline button--small top-bar__cta"
      >
        Accede al Codelab
      </a>
      <button className="top-bar__close" onClick={onClose}>
        <Image src="/icons/close.svg" alt="close" width={24} height={24} />
      </button>
    </div>
  );
};

export default TopBar;
