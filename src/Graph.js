import React from "react";
import Sketch from "react-p5";

function Graph(props) {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(320, 280).parent(canvasParentRef);
    p5.textSize(24);
    p5.textAlign(p5.CENTER, p5.CENTER);
  };

  let days = ["M", "T", "W", "T", "F", "S", "S"];
  let values = [
    props.DEE - 500,
    props.DEE - 500,
    props.DEE - 500,
    props.DEE - 500,
    props.DEE - 500,
    props.DEE - 500,
    props.DEE - 500,
  ];
  let total = props.DEE * 7;
  let barWidth = 43.5;
  let barGap = 2;
  let norm = normalize(0, 1.8 * props.DEE);
  console.log(norm(props.DEE));
  let barHeight = norm(props.DEE) * 1900;
  let selectedBar = -1;

  function normalize(min, max) {
    var delta = max - min;
    return function (val) {
      return (val - min) / delta;
    };
  }

  const draw = (p5) => {
    p5.background("#0c0c0c");
    p5.fill(255, 150, 150, 10);
    p5.noStroke();
    p5.rect(
      0,
      p5.height - ((0.6 * props.DEE) / total) * barHeight,
      p5.width,
      p5.height - ((0.6 * props.DEE) / total) * barHeight
    );

    p5.fill(255);
    p5.textAlign(p5.CENTER, p5.TOP);
    p5.textSize(10);
    p5.text("Drag to adjust your daily calories!", p5.width / 2, p5.height / 5);

    // add maintenance stroke and label
    p5.fill(255, 50);
    p5.textAlign(p5.LEFT, p5.BOTTOM);
    p5.textSize(12);
    p5.text(
      `Maintenance ${props.DEE} Daily Average`,
      5,
      p5.height - (props.DEE / total) * barHeight - 5
    );
    p5.stroke(255, 50);
    p5.strokeWeight(2);
    p5.strokeCap(p5.ROUND);
    p5.line(
      0,
      p5.height - (props.DEE / total) * barHeight,
      p5.width,
      p5.height - (props.DEE / total) * barHeight
    );

    // add deficit stroke and label
    p5.fill(255, 50);
    p5.textAlign(p5.LEFT, p5.BOTTOM);
    p5.textSize(12);
    p5.strokeWeight(0);
    p5.text(
      `Defecit ${props.DEE - 500} Daily Average`,
      5,
      p5.height - ((props.DEE - 500) / total) * barHeight - 5
    );
    p5.stroke(255, 50);
    p5.strokeWeight(2);
    p5.strokeCap(p5.ROUND);
    p5.line(
      0,
      p5.height - ((props.DEE - 500) / total) * barHeight,
      p5.width,
      p5.height - ((props.DEE - 500) / total) * barHeight
    );

    for (let i = 0; i < days.length; i++) {
      p5.fill("rgba(0,45,56,1)");
      let x = i * barWidth + i * barGap + barGap;
      let y = p5.height - (values[i] / total) * barHeight;
      let r = 20;
      p5.noStroke();
      p5.rect(x, y, barWidth, (values[i] / total) * barHeight, r, r, 0, 0);
      p5.fill(255);

      // rotate bar name vertically
      p5.push();
      p5.translate(x + barWidth / 2, y + (values[i] / total) * barHeight - 20);
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.textSize(14);
      p5.textFont("bold");
      p5.text(days[i], 0, 0);
      p5.pop();

      // align bar value to the top of the bar and make it bold
      p5.textAlign(p5.CENTER, p5.TOP);
      p5.textSize(12);
      p5.textFont("bold");
      p5.text(Math.round(values[i]), x + barWidth / 2, y + 10);
    }
  };

  const mousePressed = (p5) => {
    for (let i = 0; i < days.length; i++) {
      let x = i * barWidth + i * barGap;
      let y = p5.height - (values[i] / total) * barHeight;
      if (
        p5.mouseX >= x &&
        p5.mouseX <= x + barWidth &&
        p5.mouseY >= y &&
        p5.mouseY <= y + (values[i] / total) * barHeight
      ) {
        selectedBar = i;
        break;
      }
    }
  };

  const mouseDragged = (p5) => {
    if (selectedBar !== -1) {
      let delta = -2 * (p5.mouseY - p5.pmouseY);
      let oldValue = values[selectedBar];
      let thresholdLow = 0.6 * props.DEE; // 60% of the original value of 2000
      let thresholdHigh = 1.8 * props.DEE; // 180% of the original value of 2000
      values[selectedBar] = p5.constrain(
        values[selectedBar] + delta,
        thresholdLow,
        thresholdHigh
      );
      let diff = values[selectedBar] - oldValue;
      let increment = diff / (values.length - 1);
      for (let i = 0; i < values.length; i++) {
        if (i !== selectedBar) {
          values[i] = p5.constrain(
            values[i] - increment,
            0,
            total - values[selectedBar]
          );
        }
      }
    }
  };

  const mouseReleased = (p5) => {
    selectedBar = -1;
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      mousePressed={mousePressed}
      mouseDragged={mouseDragged}
      mouseReleased={mouseReleased}
    />
  );
}

export default Graph;
