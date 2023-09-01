const inputCentimeters = document.getElementById("inputCentimeters");
const inputFeet = document.getElementById("inputFeet");

inputCentimeters.addEventListener("input", () => {
  const Centimeters = inputCentimeters.value;

  const feet = Centimeters * 0.0328084;
  inputFeet.value = feet.toFixed(2);
});

inputFeet.addEventListener("input", () => {
  const feet = inputFeet.value;
  const centimeters = feet * 30.48;
  inputCentimeters.value = centimeters.toFixed(0);
});
