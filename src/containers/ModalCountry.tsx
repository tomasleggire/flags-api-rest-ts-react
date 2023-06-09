import React from "react";
import "../styles/ModalCountry.css";

interface MyProps {
  toggleModal: () => void;
}

export default function ModalCountry(props: MyProps) {
  return (
    <div className="modal-main">
      <button onClick={props.toggleModal}>X</button>
    </div>
  );
}
