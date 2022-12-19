import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Sex(props) {
  const nav = useNavigate();

  function clickHandler(e) {
    const sex = e.target.dataset.sex;
    props.setAnswers((prevState) => ({ ...prevState, sex: sex }));
    nav("../Weight");
  }

  props.setcalcPage(2);

  useEffect(() => {
    if (props.minimised === false) {
      props.setActiveNavState();
    }
  });

  return (
    <>
      <div className="question-wrapper">
        <div className="question-input">
          <h1>
            Ok let's start! Which sex is identified on your birth certificate?
          </h1>
        </div>
        <div className="question-text">
          <p>
            We need to know this because. this is not the same as your gender We
            need to know this because. this is not the same as your gender We
            need to know this because. this is not the same as your gender We
            need to know this because. this is not the same as your gender We
            need to know this because. this is not the same as your gender
          </p>
        </div>
      </div>
      <ul className="question-options">
        <li
          className="question-option"
          data-sex="female"
          onClick={clickHandler}
        >
          <p data-sex="female">Female</p>
        </li>
        <li className="question-option" data-sex="male" onClick={clickHandler}>
          <p data-sex="male">Male</p>
        </li>
      </ul>
    </>
  );
}
