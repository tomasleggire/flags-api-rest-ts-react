import React from "react";
import "../styles/ModalCountry.css";
import { BiArrowBack } from "react-icons/bi";
import DataCountry from "../components/DataCountry";
import ReactLoading from "react-loading";

interface MyProps {
  toggleModal: () => void;
  modalValue: boolean;
  focusCountry: Object | null;
  changeFocusCountryBorders: () => void;
  loadingModal: boolean;
}

export default function ModalCountry(props: MyProps) {
  let objeto = props.focusCountry?.currencies;
  let regex = /[A-Z]{3}/;
  let resultado = null;

  for (let propiedad in objeto) {
    if (regex.test(propiedad)) {
      resultado = objeto[propiedad];
      break;
    }
  }

  const languages = props.focusCountry?.languages;
  const resultLan = languages ? Object.values(languages).join(", ") : "";

  return (
    <div className={`modal-main ${props.modalValue && "modal-main-visible"}`}>
      <button className="btn-exit" onClick={props.toggleModal}>
        <BiArrowBack className="btn-exit-icon" />
        <span className="btn-exit-span">Back</span>
      </button>
      <div className="content-modal">
        {props.loadingModal ? (
          <ReactLoading
            className="loading-img"
            type="bubbles"
            color="var(--black)"
          />
        ) : (
          <>
            <div className="conten-modal-img-div">
              <img
                className="country-flag-modal"
                src={props.focusCountry?.flags.png}
                alt={props.focusCountry?.flags.alt}
              />
            </div>
            <div className="content-modal-texts">
              <h2 className="texts-title">{props.focusCountry?.name.common}</h2>
              <div className="texts-secondary-main">
                <div className="texts-main-one">
                  <DataCountry
                    title="Native Name"
                    info={props.focusCountry?.name.official}
                  />
                  <DataCountry
                    title="Population"
                    info={props.focusCountry?.population}
                  />
                  <DataCountry
                    title="Region"
                    info={props.focusCountry?.region}
                  />
                  <DataCountry
                    title="Sub Region"
                    info={props.focusCountry?.subregion}
                  />
                  <DataCountry
                    title="Capital"
                    info={props.focusCountry?.capital}
                  />
                </div>
                <div className="texts-main-two">
                  <DataCountry
                    title="Top Level Domain"
                    info={props.focusCountry?.tld}
                  />
                  <DataCountry title="Currencies" info={resultado?.name} />
                  <DataCountry title="Languages" info={resultLan} />
                </div>
              </div>
              <div className="content-borders">
                {props.focusCountry?.borders?.map((item) => (
                  <span
                    className="borders-child"
                    onClick={() => props.changeFocusCountryBorders(item)}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
