import { useEffect } from "react";

export default function Finish(props) {
  useEffect(() => props.setcalcPage(6));

  return (
    <>
      <div className="question-wrapper">
        <div className="question-input">
          <h1>Your results!</h1>
        </div>
      </div>
      <div className="result-container">
        <div>
          Based on the information provided, your body needs around{" "}
          {props.DEE.toLocaleString("en-UK")} calories per day, or{" "}
          {(props.DEE * 7).toLocaleString("en-UK")} per week to maintain its
          current weight.
        </div>
        <br />
        <div>
          <p>
            To achieve a weekly deficit of 3,500 calories you should aim for:
          </p>
          <div>
            <div className="data">
              {((props.DEE - 500) * 7).toLocaleString("en-UK")}
            </div>{" "}
            calories per week, or
          </div>
          <div>
            <div className="data">
              {(props.DEE - 500).toLocaleString("en-UK")}
            </div>{" "}
            calories per day on <em>average</em>.
          </div>
        </div>
      </div>
    </>
  );
}
