import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Weight(props) {
  const nav = useNavigate();

  function clickHandler(e) {
    e.preventDefault();
    let weight = parseFloat(e.target.firstChild.value);
    const weightType = e.target.lastChild.value;

    if (weightType === "lb") {
      weight = parseInt(weight * 2.2046);
    }

    props.setAnswers((prevState) => ({ ...prevState, weight: weight }));
    nav("../Activity");
  }

  useEffect(() => {
    if (props.minimised === false) {
      props.setActiveNavState();
      props.setcalcPage(3);
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
            This is your body mass when your step on scales. We'll use this
            number to work out just how many calories you need to succeed. This
            number doesn't define you!
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
