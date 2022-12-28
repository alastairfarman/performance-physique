import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Weight(props) {
  const nav = useNavigate();

  function clickHandler(e) {
    e.preventDefault();
    let weight = parseFloat(e.target.firstChild.value);
    const weightType = e.target.lastChild.value;

    if (weightType === "lb") {
      weight = parseInt(weight / 2.2046);
    } else {
    }

    props.setAnswers((prevState) => ({ ...prevState, weight: weight }));
    nav("../Activity");
  }

  props.setcalcPage(3);

  useEffect(() => {
    if (props.minimised === false) {
      props.setActiveNavState();
    }
  });

  return (
    <>
      <div className="question-wrapper">
        <div className="question-input">
          <h1>What is your current weight?</h1>
        </div>
        <div className="question-text">
          <p>
            This is how heavy you are. If you stand on a scale this will be the
            number it shows you. If you don't know this, go find a scale to
            stand on as it is needed to calculate how much weight you can lose.
            Alternatively ask a friend to guess how heavy you are.
          </p>
        </div>
      </div>
      <div className="question-options">
        <div id="weight-select-container">
          <form id="weight" onSubmit={clickHandler}>
            <input
              type="number"
              id="weightValue"
              defaultValue="70"
              step=".1"
            ></input>
            <select name="weightSelect" id="weightType">
              <option value="K">Kilograms</option>
              <option value="lb">Pounds</option>
            </select>
          </form>
          <button type="submit" style={{ all: "unset" }} form="weight">
            <li className="question-option">Next</li>
          </button>
        </div>
      </div>
    </>
  );
}
