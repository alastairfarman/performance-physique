function calculateBMR(weight, sex) {
  if (sex === "male") {
    return weight * 24;
  } else {
    return weight * 22;
  }
}

function calculateDEE(BMR, activityLevel) {
  return BMR * activityLevel;
}

export { calculateBMR, calculateDEE };
