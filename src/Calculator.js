import { useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Weight from "./calc-pages/Weight";
import Sex from "./calc-pages/Sex";
import Results from "./calc-pages/Results";
import Activity from "./calc-pages/Activity";
import Start from "./calc-pages/Start";
import { calculateBMR, calculateDEE } from "./algo";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function Calculator() {
  //initialise answers object//

  const [answers, setAnswers] = useState({
    sex: "",
    weight: "",
    activity: "",
  });

  //record of inputs and DEE math - temp//
  console.log(answers);
  console.log(calculateBMR(answers.weight, answers.sex));
  console.log(
    calculateDEE(calculateBMR(answers.weight, answers.sex), answers.activity)
  );

  let DEE = Math.round(
    calculateDEE(calculateBMR(answers.weight, answers.sex), answers.activity)
  );

  //navigation buttons//
  const nav = useNavigate();

  function clickFwd() {
    nav(1);
  }

  function clickBack() {
    nav(-1);
  }

  //calculator nav state//

  const calcWrapper = useRef();
  const calcContainer = useRef();
  const calcNav = useRef();
  const navButtons = document.getElementsByClassName("nav-button");
  const progress = useRef();

  function setInactiveNavState() {
    calcNav.current.style.display = "none";
    calcWrapper.current.classList.remove("nav-active");
    calcContainer.current.style.removeProperty("display");
    calcContainer.current.style.removeProperty("height");
  }

  function setActiveNavState() {
    calcNav.current.style.display = "flex";
    calcWrapper.current.classList.add("nav-active");
    calcContainer.current.style.display = "grid";
    calcContainer.current.style.height = "calc(100% - 2rem)";
  }

  //minimise calculator functionality//

  const [minimised, setMinimised] = useState(false);
  const [calcPage, setcalcPage] = useState(1);

  function minimise() {
    calcContainer.current.childNodes[2].style.display = "none";
    calcContainer.current.childNodes[3].style.display = "none";
    calcContainer.current.style.gridTemplateRows = "1fr auto";
    calcWrapper.current.classList.add("minimised");
    for (let i = 0; i < navButtons.length; i++) {
      navButtons[i].style.pointerEvents = "none";
      navButtons[i].style.backgroundColor = "rgba(255,255,255,0.1)";
    }
    progress.current.style.width = "50vw";
    progress.current.style.maxWidth = "450px";
    progress.current.style.top = "4rem";

    setMinimised(true);
  }

  function maximise() {
    calcWrapper.current.classList.remove("minimised");
    calcContainer.current.childNodes[2].style.removeProperty("display");
    calcContainer.current.childNodes[3].style.removeProperty("display");
    calcContainer.current.style.removeProperty("grid-template-rows");
    for (let i = 0; i < navButtons.length; i++) {
      navButtons[i].style.removeProperty("pointer-events");
      navButtons[i].style.removeProperty("background-color");
    }

    progress.current.style.removeProperty("top");
    progress.current.style.removeProperty("width");
    progress.current.style.removeProperty("max-width");

    setMinimised(false);
  }

  function minButton() {
    return (
      <div className="min-button" onClick={minimise}>
        <RemoveIcon />
      </div>
    );
  }
  function maxButton() {
    return (
      <div className="min-button" onClick={maximise}>
        <AddIcon />
      </div>
    );
  }

  function progressBar() {
    if (calcPage !== 1) {
      return (
        <>
          <div className="spacer"></div>
          <div id="progress-bar" ref={progress}>
            <div id="progress" style={{ width: percentage() }}></div>
          </div>
        </>
      );
    }
  }

  function percentage() {
    switch (calcPage) {
      case 1:
        return "0%";
      case 2:
        return "20%";
      case 3:
        return "40%";
      case 4:
        return "60%";
      case 5:
        return "80%";
      default:
        break;
    }
  }

  return (
    <>
      <div
        ref={calcWrapper}
        id="calculator-wrapper"
        className="calculator-wrapper"
      >
        <div ref={calcContainer} id="calc-container" className="calc-container">
          <img id="logo" src="PP-LOGO-LOCKUP_WHITE.png" alt="" />
          <div ref={calcNav} id="calc-nav">
            {minimised ? maxButton() : minButton()}
            <div className="nav-button" onClick={clickBack}>
              <ChevronLeftIcon />
            </div>
            <div className="nav-button" onClick={clickFwd}>
              <ChevronRightIcon />
            </div>
          </div>
          <Routes>
            <Route
              index
              element={
                <Start
                  setInactiveNavState={setInactiveNavState}
                  setcalcPage={setcalcPage}
                />
              }
            />
            <Route
              path="Sex"
              element={
                <Sex
                  setAnswers={setAnswers}
                  answers={answers}
                  setActiveNavState={setActiveNavState}
                  minimised={minimised}
                  setcalcPage={setcalcPage}
                />
              }
            />
            <Route
              path="Weight"
              element={
                <Weight
                  setAnswers={setAnswers}
                  answers={answers}
                  setActiveNavState={setActiveNavState}
                  minimised={minimised}
                  setcalcPage={setcalcPage}
                />
              }
            />
            <Route
              path="Activity"
              element={
                <Activity
                  setAnswers={setAnswers}
                  answers={answers}
                  setActiveNavState={setActiveNavState}
                  minimised={minimised}
                  setcalcPage={setcalcPage}
                />
              }
            />
            <Route
              path="Results"
              element={
                <Results
                  DEE={DEE}
                  answers={answers}
                  setActiveNavState={setActiveNavState}
                  minimised={minimised}
                  setcalcPage={setcalcPage}
                />
              }
            />
          </Routes>
          {progressBar()}
        </div>
      </div>
    </>
  );
}
