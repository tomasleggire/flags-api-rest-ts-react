import React from "react";
import "../styles/ModalCountry.css";

interface MyProps {
  toggleModal: () => void;
  modalValue: boolean;
}

export default function ModalCountry(props: MyProps) {
  return (
    <div className={`modal-main ${props.modalValue && "modal-main-visible"}`}>
      <button onClick={props.toggleModal}>X</button>
    </div>
  );
}
