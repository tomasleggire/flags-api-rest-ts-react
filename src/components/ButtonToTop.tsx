import React from "react";
import "../styles/ButtonToTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";

interface MyProps {
  isVisible: boolean;
}

export default function ButtonToTop(props: MyProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`btn-top ${props.isVisible && "btn-top-visible"}`}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp className="btn-top-icon" />
    </button>
  );
}
