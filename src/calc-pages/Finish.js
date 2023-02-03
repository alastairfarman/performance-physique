import { useEffect } from "react";
import Graph from "../Graph";

export default function Finish(props) {
  useEffect(() => props.setcalcPage(6));
  

  return (
    <>
      <div className="result-container">
        <h1>Your Results!</h1>
        <p>
          To lose weight your weekly calorie deficit should be 3500 calories.
          This means that over a week you should aim for a total of{" "}
          {(props.DEE - 500) * 7} calories. To achieve this your average daily
          calorie consumption should be {props.DEE - 500} calories.
          <br></br>
          <br></br>
          But you don't need to consume your calories evenly over a week, you
          should plan your weeks calories around higher and lower days. For
          example, if you are going to the pub on a Saturday you could plan it
          like this. We've sent this to your inbox so you have a record of your
          results at any time.
        </p>
        <Graph DEE={props.DEE} />
      </div>
    </>
  );
}
