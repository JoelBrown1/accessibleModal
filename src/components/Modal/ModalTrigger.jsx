import React, { useEffect, useRef } from "react";

const ModalTrigger = ({ title, onSelected, isModalShown, usedKeyboard }) => {
  const buttonRef = useRef();
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
        onSelected(evt);
      }}
    >
      {title}
    </button>
  );
};

export default ModalTrigger;
