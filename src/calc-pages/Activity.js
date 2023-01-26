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
          <p>
            This is how much you move around during the day, not including
            exercise.
          </p>
        </div>
      </div>
      <ul className="question-options">
        <li
          className="question-option"
          data-activity="1.15"
          onClick={clickHandler}
        >
          Sedentary
        </li>
        <li
          className="question-option"
          data-activity="1.4"
          onClick={clickHandler}
        >
          Light activity
        </li>
        <li
          className="question-option"
          data-activity="1.6"
          onClick={clickHandler}
        >
          Moderate activity
        </li>
        <li
          className="question-option"
          data-activity="1.8"
          onClick={clickHandler}
        >
          Highly active
        </li>
      </ul>
    </>
  );
}
