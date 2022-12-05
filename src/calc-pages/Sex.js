import { useNavigate } from "react-router-dom";

export default function Sex(props) {
  const nav = useNavigate();

  function clickHandler(e) {
    const sex = e.target.dataset.sex;
    props.setAnswers((prevState) => ({ ...prevState, sex: sex }));
    nav("../Weight");
  }

  return (
    <>
    <div className="question-input">
      <h1>Are you male or female?</h1>
      <ul className="question-options">
        <li className="question-option" data-sex="male" onClick={clickHandler}>
          <p data-sex="male">Male</p>
        </li>

        <li className="question-option" data-sex="female" onClick={clickHandler}>
          <p data-sex="female">Female</p>
        </li>
      </ul>
      </div>
      <div className="question-text">
        <p>
          Gender disclaimer, for the purposes of this calculation blah blah blah
        </p>
      </div>
    </>
  );
}
