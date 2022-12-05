import { useNavigate } from "react-router-dom";

export default function Weight(props) {
  const nav = useNavigate();

  function clickHandler(e) {
    e.preventDefault();
    let weight = parseFloat(e.target.lastChild.value);
    const weightType = e.target.firstChild.value;

    if (weightType === "lb") {
      weight = parseInt(weight / 2.2046);
    } else {
    }

    props.setAnswers((prevState) => ({ ...prevState, weight: weight }));
    nav("../Activity");
  }

  return (
    <>
      <h1>What is your current weight?</h1>
      <div id="weight-select-container">
        <form id="weight" onSubmit={clickHandler}>
          <select name="weightSelect" id="weightType">
            <option value="K">Kilograms</option>
            <option value="lb">Pounds</option>
          </select>
          <input
            type="number"
            id="weightValue"
            defaultValue="70"
            step=".1"
          ></input>
        </form>
        <button type="submit" style={{all: 'unset'}} form="weight">
          <li className="question-option">Next</li>
        </button>
      </div>
    </>
  );
}
