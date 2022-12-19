import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Start(props) {
  const nav = useNavigate();

  function clickHandler() {
    nav("../Sex");
  }

  props.setcalcPage(1);

  useEffect(() => props.setInactiveNavState());

  return (
    <>
      <button className="CTA-button" onClick={clickHandler}>
        <h1>Calculate yours now!</h1>
      </button>
    </>
  );
}
