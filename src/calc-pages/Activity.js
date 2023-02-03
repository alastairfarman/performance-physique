import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Activity(props) {
  const nav = useNavigate();

  function clickHandler(e) {
    const activityLevel = e.target.dataset.activity;
    props.setAnswers((prevState) => ({
      ...prevState,
      activity: activityLevel,
    }));
    nav("../Results");
  }

  useEffect(() => {
    if (props.minimised === false) {
      props.setActiveNavState();
      props.setcalcPage(4);
    }
  });

  return (
    <>
      <div className="question-wrapper">
        <div className="question-input">
          <h1>How active are you?</h1>
        </div>
        <div className="question-text">
          <p>This doesn't include exercise or sport. By choosing a conservative estimate here you'll achieve your goal sooner!</p>
        </div>
      </div>
      <ul className="question-options">
        <div className="q-cont">
          <li
            className="question-option"
            data-activity="1.15"
            onClick={clickHandler}
          >
            1
          </li>
          <span className="q-desc">
            You work in an office, school or other stationary job and move less
            than 5000 steps per day.
          </span>
        </div>
        <div className="q-cont">
          <li
            className="question-option"
            data-activity="1.4"
            onClick={clickHandler}
          >
            2
          </li>{" "}
          <span className="q-desc">
            Light activity, some of the day standing or walking, more than in a
            classroom. Over 8,000 steps per day.
          </span>
        </div>
        <div className="q-cont">
          <li
            className="question-option"
            data-activity="1.6"
            onClick={clickHandler}
          >
            3
          </li>
          <span className="q-desc">
            Moderate activity levels, on feet most of day, street sales person
            covering more than 10,000 steps per day.
          </span>
        </div>
        <div className="q-cont">
          {" "}
          <li
            className="question-option"
            data-activity="1.8"
            onClick={clickHandler}
          >
            4
          </li>{" "}
          <span className="q-desc">
            Hard daily activity e.g. working on a building site,
            performing manual labour and minimum 12,000 steps per day.
          </span>
        </div>
      </ul>
    </>
  );
}
