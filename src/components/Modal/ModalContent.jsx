import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";

const ModalContent = ({ onSelected, content, onKeydown, onClickOutside }) => {
  const closeButtonRef = useRef();
  useEffect(() => {
    closeButtonRef.current.focus();
  }, []);
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        role="dialog"
        aria-label="modalName"
        aria-modal="true"
        className="modal-cover"
        onKeyDown={(evt) => {
          evt.persist();
          onKeydown(evt);
        }}
        onClick={(evt) => {
          onClickOutside(evt);
        }}
      >
        <div className="modal-area">
          <button
            ref={closeButtonRef}
            className="_modal-close"
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            onClick={(evt) => {
              onSelected(evt);
            }}
          >
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
          </button>
          <div className="modal-body">{content}</div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
};

export default ModalContent;
