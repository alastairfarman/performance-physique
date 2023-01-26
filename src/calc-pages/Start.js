import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Start(props) {
  const nav = useNavigate();

  function clickHandler() {
    nav("../Sex");
  }

  useEffect(() => {
    props.setcalcPage(1);
    props.setInactiveNavState();
  });

  return (
    <>
      <button className="CTA-button" onClick={clickHandler}>
        <h2>Calculate yours</h2>
      </button>
    </>
  );
}
