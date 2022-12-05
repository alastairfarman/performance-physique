import { useState } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Weight from "./calc-pages/Weight";
import Sex from "./calc-pages/Sex";
import Results from "./calc-pages/Results";
import Activity from "./calc-pages/Activity";
import Start from "./calc-pages/Start";
import { calculateBMR, calculateDEE } from "./algo"


export default function Calculator() {
  const [answers, setAnswers] = useState({
    sex: "",
    weight: "",
    activity: "",
  });

  console.log(answers)
  console.log(calculateBMR(answers.weight, answers.sex))
  console.log(calculateDEE(calculateBMR(answers.weight, answers.sex),answers.activity))

  let DEE = calculateDEE(calculateBMR(answers.weight, answers.sex),answers.activity)

  return (
    <>
      <div id="calculator-wrapper">
        <BrowserRouter>
          <Routes>
            <Route index element={<Start />} />
            <Route
              path="Sex"
              element={<Sex setAnswers={setAnswers} answers={answers} />}
            />
            <Route
              path="Weight"
              element={<Weight setAnswers={setAnswers} answers={answers} />}
            />
            <Route
              path="Activity"
              element={<Activity setAnswers={setAnswers} answers={answers} />}
            />
            <Route path="Results" element={<Results DEE={DEE} answers={answers} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
