import React from "react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

const Confirm = ({ handleConfirm, confirmText }) => {
  const submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Have you closed the console window?</h1>
            <p>The DevTools panel must be hidden before each module.</p>
            <button onClick={onClose}>No</button>
            <button
              onClick={() => {
                handleConfirm();
                onClose();
              }}
            >
              Yes
            </button>
          </div>
        );
      }
    });
  };
  return <button onClick={submit}>{confirmText}</button>;
};

export default Confirm;
