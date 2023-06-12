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
        <div className="conten-modal-img-div">
          <img
            className="country-flag-modal"
            src={props.focusCountry?.flags.png}
            alt={props.focusCountry?.flags.alt}
          />
        </div>
        <div className="content-modal-texts">
          <h2 className="texts-title">{props.focusCountry?.name.common}</h2>
          <div className="texts-secondary-main"></div>
        </div>
      </div>
    </div>
  );
}
