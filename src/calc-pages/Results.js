import Graph from "./Graph";
import { useState } from "react";
import axios from "axios";

const FORMSPARK_FORM_ID = "FUX0nqmK";
const formSparkUrl = `https://submit-form.com/${FORMSPARK_FORM_ID}`;

export default function Results(props) {
  const submitForm = async (e) => {
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

  props.setcalcPage(5);

  return (
    <>
      <div className="question-wrapper" id="results-and-submit-container">
        <h3>Find out your results and send to recieve plan</h3>
        {/* <div id="graph">
          <div id="data-summary">
            <p>{props.answers.sex}</p>
            <p>{props.answers.weight}</p>
            <p>{props.answers.activity}</p>
          </div>
          <Graph answers={props.answers} />
        </div> */}
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
          <button type="submit">Take my money</button>
        </form>
      </div>
    </>
  );
}
