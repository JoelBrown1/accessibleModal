import React, { useState } from "react";
import { ModalContext } from "../context/ModalContext";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

const Modal = ({ title, content }) => {
  const [isShown, setIsShown] = useState(false);

  const showModal = (evt) => {
    if (evt.type === "keydown" && evt.keycode === 13) {
      setIsShown(!isShown);
    }

    if (evt.type === "click") {
      setIsShown(!isShown);
    }

    toggleScrollLock();
  };

  const handleKeyPress = ({ keyCode }) => {
    if (keyCode === 27) {
      setIsShown(false);
    }
  };

  const handleClickOutside = (evt) => {
    if (evt.target.className === "modal-cover") {
      setIsShown(false);
    }
  };

  const toggleScrollLock = () => {
    document.querySelector("html").classList.toggle("scroll-lock");
  };

  return (
    <>
      <ModalContext.Provider value={{ keyboardActivated: false }}>
        <ModalTrigger
          title={title}
          onSelected={showModal}
          isModalShown={isShown}
        />
        {isShown && (
          <ModalContent
            onSelected={showModal}
            content={content}
            onKeydown={handleKeyPress}
            onClickOutside={handleClickOutside}
          />
        )}
      </ModalContext.Provider>
    </>
  );
};

export default Modal;
