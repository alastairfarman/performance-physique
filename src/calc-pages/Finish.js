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
          {(props.DEE * 7).toLocaleString("en-UK")} per week, to maintain its
          current weight.
        </div>{" "}
        <br />
        <div className="test">
          <div>
            To achieve a weekly deficit of 3,500 calories you should aim for:
          </div>
          <br />
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
            calories per day <em>on average</em>.
          </div>
          <br />
          <div>
            Using a weekly calorie deficit means you be flexible about what you
            eat and when you eat it. You can plan lower calorie days to make up
            for known higher calorie days that go hand in hand with social
            events and other such higher calorie pressures.
          </div>
          <div
            style={{ display: "flex", alignSelf: "center", padding: "1rem" }}
          >
            <a
              href="https://performancephysique.co.uk/4-weeks-4-kilos/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ all: "unset" }}
            >
              <button className="question-option" style={{ border: "unset" }}>
                Learn more
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
