import React, { useState, useRef } from "react";
import { ModalContext } from "../context/ModalContext";
import ModalTrigger from "./ModalTrigger";
import ModalContent from "./ModalContent";

const Modal = ({ title, content }) => {
  const [isShown, setIsShown] = useState(false);
  // const [usedKeyboard, setUsedKeyboard] = useState(false);
  const keyboardUsed = useRef(false);

  const showModal = (evt) => {
    console.log("what is the event that opened the modal: ", evt);
    if (evt.type === "keydown" && evt.keycode == 13) {
      // setUsedKeyboard(true);
      keyboardUsed.current = true;
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
          usedKeyboard={keyboardUsed}
        />
        {isShown && (
          <ModalContent
            onSelected={showModal}
            content={content}
            onKeydown={handleKeyPress}
            onClickOutside={handleClickOutside}
            usedKeyboard={keyboardUsed}
          />
        )}
      </ModalContext.Provider>
    </>
  );
};

export default Modal;
