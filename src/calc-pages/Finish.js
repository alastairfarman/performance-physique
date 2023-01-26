import { useEffect } from "react";

export default function Finish(props) {
  useEffect(() => props.setcalcPage(6));

  return (
    <><div>
      <h1>Congrats!</h1>
      <p>
        To lose weight your weekly calorie deficit should be {"500?"} calories.
        This means that over a week you should aim for a total of{" "}
        {"Deficit * 7"} calories. To achieve this your average daily calorie
        consumption should be {"Maintenance - Deficit"} calories. But you don't
        need to consume your calories evenly over a week, you should plan your
        weeks calories around higher and lower days. For example, if you are
        going to the pub on a Saturday you could plan it like this. We've sent
        this to your inbox so you have a record of your results at any time.
      </p>
      </div>
    </>
  );
}
