import React, { useEffect, useRef } from "react";

const ModalTrigger = ({ title, onSelected, isModalShown, usedKeyboard }) => {
  const buttonRef = useRef();
  console.log("{trigger} usedkeyboard value: ", usedKeyboard);
  useEffect(() => {
    if (!isModalShown) {
      buttonRef.current.focus();
    }
  }, [isModalShown]);
  return (
    <button
      ref={buttonRef}
      onClick={(evt) => {
        onSelected(evt);
      }}
      onKeyDown={(evt) => {
        evt.persist();
        console.log("{tigger} onKeyDown event values: ", evt);
        onSelected(evt);
      }}
    >
      {title}
    </button>
  );
};

export default ModalTrigger;
