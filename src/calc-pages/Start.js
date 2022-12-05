import { useNavigate } from "react-router-dom";

export default function Start() {
  const nav = useNavigate();

  function clickHandler() {
    nav("../Sex");
  }

  return (
    <>
      <button className="CTA-button">
        <h1 onClick={clickHandler}>Calculate yours</h1>
      </button>
    </>
  );
}
