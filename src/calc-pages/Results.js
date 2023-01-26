import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

// const FORMSPARK_FORM_ID = "FUX0nqmK";  //  ALI //
const FORMSPARK_FORM_ID = "odG1JqtU"; //  ARJ //

const formSparkUrl = `https://submit-form.com/${FORMSPARK_FORM_ID}`;

export default function Results(props) {
  const nav = useNavigate();

  const submitForm = async (e) => {
    nav("../Finish");

    e.preventDefault();
    await postSubmission();
  };

  const postSubmission = async () => {
    const payload = formState;

    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const initialFormState = {
    name: "",
    email: "",
    sex: props.answers.sex,
    weight: props.answers.weight,
    activity: props.answers.activity,
  };

  const [formState, setFormState] = useState(initialFormState);

  console.log("formState:", formState);

  useEffect(() => props.setcalcPage(5));

  return (
    <>
      <div className="question-wrapper" id="results-and-submit-container">
        <h3>
          Enter your name and email address and we'll send your weekly deficit
          and how to use it to lose weight
        </h3>
      </div>
      <div id="form-wrapper">
        <form onSubmit={submitForm} action="https://submit-form.com/echo">
          <input
            placeholder="enter your name"
            type="text"
            name="name"
            required
            value={formState.name}
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                name: e.target.value,
              }))
            }
          />
          <input
            placeholder="and your email"
            type="email"
            name="email"
            required
            onChange={(e) =>
              setFormState((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
          />
          <button type="submit" style={{ all: "unset" }}>
            <li className="question-option">Get your result!</li>
          </button>
        </form>
      </div>
    </>
  );
}
