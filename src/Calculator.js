import { useState, useRef } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Weight from "./calc-pages/Weight";
import Sex from "./calc-pages/Sex";
import Results from "./calc-pages/Results";
import Activity from "./calc-pages/Activity";
import Start from "./calc-pages/Start";
import Finish from "./calc-pages/Finish";
import { calculateBMR, calculateDEE } from "./algo";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function Calculator(props) {
  //initialise answers object//

  const [answers, setAnswers] = useState({
    sex: "",
    weight: "",
    activity: "",
  });

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
    calcNav.current.style.opacity = "0%";
    calcNav.current.style.width = "0%";
    calcNav.current.style.padding = "0rem";
    calcWrapper.current.classList.remove("nav-active");
    calcContainer.current.style.removeProperty("display");
    calcContainer.current.style.removeProperty("height");
  }

  function setActiveNavState() {
    calcNav.current.style.opacity = "100%";
    calcNav.current.style.width = "auto";
    calcNav.current.style.padding = "1rem 1rem 1rem 0rem";
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
    progress.current.style.width = "50%";
    progress.current.style.right = "0%";
    progress.current.style.top = "6.5rem";

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
    progress.current.style.removeProperty("left");

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
      <div className="max-button" onClick={maximise}>
        Continue
        <AddIcon />
      </div>
    );
  }

  function progressBar() {
    if (calcPage !== 1) {
      return (
        <>
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
      case 6:
        return "100%";
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
            <div className="fwd-bk">
              <div className="nav-button" onClick={clickBack}>
                <ChevronLeftIcon />
              </div>
              <div className="nav-button" onClick={clickFwd}>
                <ChevronRightIcon />
              </div>
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
            <Route
              path="Finish"
              element={
                <Finish
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
