import { useNavigate } from "react-router-dom";

export default function Activity(props) {
  const nav = useNavigate();

  function clickHandler(e) {
    const activityLevel = e.target.dataset.activity;
    props.setAnswers((prevState) => ({
      ...prevState,
      activity: activityLevel,
    }));
    nav('../Results');
  }

  return (
    <>
    <div className="question-input">
      <h1>How active are you?</h1>
      <ul className="question-options">
        <li className="question-option" data-activity="1.15" onClick={clickHandler}>
          Sedentary
        </li>
        <li className="question-option" data-activity="1.4" onClick={clickHandler}>
         Light activity
        </li>
        <li className="question-option" data-activity="1.6" onClick={clickHandler}>
          Moderate activity
        </li>
        <li className="question-option" data-activity="1.8" onClick={clickHandler}>
          Highly active
        </li>
      </ul>
      </div>
      <div className="question-text">
        <p>
          A description of what classes as sedentary, activity, and so on. Note for the lads I'm not sure stepcount is the best metric as id guess the majority of people don't track? abstract might encourage more submissions
        </p>
      </div>
    </>
  );
}
