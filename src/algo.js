function calculateBMR(weight, sex) {
  if (sex === "male") {
    console.log("BMR Male: ", weight * 24);
    return weight * 24
  } else {
    console.log("BMR Female: ", weight * 22);
    return weight * 22;
  }

}

function calculateDEE(BMR, activityLevel) {
  console.log("DEE: ", BMR * activityLevel);
  return BMR * activityLevel;
}

export { calculateBMR, calculateDEE };
