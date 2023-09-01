const heightButton = document.getElementById("heightConversion");
const degreeButton = document.getElementById("degreeConversion");
const weightButton = document.getElementById("weightConversion");

const heightCard = document.querySelector(".height-card");
const degreeCard = document.querySelector(".degree-card");
const weightCard = document.querySelector(".weight-card");

const inputCentimeters = document.getElementById("inputCentimeters");
const inputFeet = document.getElementById("inputFeet");
const inputInches = document.getElementById("inputInches");
const inputFahrenheit = document.getElementById("inputFahrenheit");
const inputCelcius = document.getElementById("inputCelcius");
const inputKilograms = document.getElementById("inputKilograms");
const inputPound = document.getElementById("inputPound");

function hideAllCards() {
  heightCard.style.display = "none";
  degreeCard.style.display = "none";
  weightCard.style.display = "none";
}

function showCard(card) {
  hideAllCards();
  card.style.display = "block";
}

function isEmpty(val) {
  return val === undefined || val == null || val.length <= 0 ? true : false;
}

inputCentimeters.addEventListener("input", () => {
  const Centimeters = inputCentimeters.value;
  if (!isEmpty(Centimeters)) {
    const feet = Centimeters * 0.0328084;
    const inch = Centimeters * 0.393701;
    inputFeet.value = feet.toFixed(2);
    inputInches.value = inch.toFixed(2);
  } else {
    inputFeet.value = "";
    inputInches.value = "";
  }
});

inputFeet.addEventListener("input", () => {
  const feet = inputFeet.value;
  if (!isEmpty(feet)) {
    const centimeters = feet * 30.48;
    const inch = feet * 12;
    inputCentimeters.value = centimeters.toFixed(2);
    inputInches.value = inch.toFixed(2);
  } else {
    inputCentimeters.value = "";
    inputInches.value = "";
  }
});

inputInches.addEventListener("input", () => {
  const inch = inputInches.value;
  if (!isEmpty(inch)) {
    const centimeters = inch * 2.54;
    const feet = inch * 0.0833333;
    inputCentimeters.value = centimeters.toFixed(2);
    inputFeet.value = feet.toFixed(2);
  } else {
    inputCentimeters.value = "";
    inputFeet.value = "";
  }
});

inputFahrenheit.addEventListener("input", () => {
  const fahrenheit = inputFahrenheit.value;

  if (!isEmpty(fahrenheit)) {
    const celcius = (fahrenheit - 32) * (5 / 9);
    inputCelcius.value = celcius.toFixed(2);
  } else {
    inputCelcius.value = "";
  }
});

inputCelcius.addEventListener("input", () => {
  const celcius = inputCelcius.value;
  if (!isEmpty(celcius)) {
    const fahrenheit = celcius * (9 / 5) + 32;
    inputFahrenheit.value = fahrenheit.toFixed(2);
  } else {
    inputFahrenheit.value = "";
  }
});


inputKilograms.addEventListener("input", () => {
  const kilograms = inputKilograms.value;
  if (!isEmpty(kilograms)) {
    const pound = kilograms * 2.20462;
    inputPound.value = pound.toFixed(2);
  } else {
    inputPound.value = "";
  }
});

inputPound.addEventListener("input", () => {
  const pound = inputPound.value;
  if (!isEmpty(pound)) {
    const kilograms = pound * 0.453592;
    inputKilograms.value = kilograms.toFixed(2);
  } else {
    inputKilograms.value = "";
  }
});


heightButton.addEventListener("click", function () {

 
  showCard(heightCard);
  heightButton.classList.add("active");
  degreeButton.classList.remove("active");
  weightButton.classList.remove("active");
});

degreeButton.addEventListener("click", function () {
  showCard(degreeCard);
  heightButton.classList.remove("active");
  degreeButton.classList.add("active");
  weightButton.classList.remove("active");
});

weightButton.addEventListener("click", function () {

  showCard(weightCard);
  heightButton.classList.remove("active");
  degreeButton.classList.remove("active");
  weightButton.classList.add("active");
});

showCard(heightCard);
heightButton.classList.add("active");