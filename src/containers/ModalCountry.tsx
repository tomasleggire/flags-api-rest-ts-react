import React from "react";
import "../styles/ModalCountry.css";
import { BiArrowBack } from "react-icons/bi";

interface MyProps {
  toggleModal: () => void;
  modalValue: boolean;
  focusCountry: Object | null;
}

export default function ModalCountry(props: MyProps) {
  return (
    <div className={`modal-main ${props.modalValue && "modal-main-visible"}`}>
      <button className="btn-exit" onClick={props.toggleModal}>
        <BiArrowBack className="btn-exit-icon" />
        <span className="btn-exit-span">Back</span>
      </button>
      <div className="content-modal">
        <div className="conten-moda-img-div">
          {props.focusCountry.name.common}
        </div>
      </div>
    </div>
  );
}
