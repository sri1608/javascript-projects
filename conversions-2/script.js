function isEmpty(val){
  return (val === undefined || val == null || val.length <= 0) ? true : false;
}


const inputCentimeters = document.getElementById("inputCentimeters");
const inputFeet = document.getElementById("inputFeet");
const inputInches = document.getElementById("inputInches");

inputCentimeters.addEventListener("input", () => {
  const Centimeters = inputCentimeters.value;
  if (isNaN(Centimeters)) {
    window.alert("please enter the valid input");
  }
  else if (!isEmpty(Centimeters)) {
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
  if (isNaN(feet)) {
    window.alert("please enter the valid input");
  }
  else if (!isEmpty(feet)) {
    const centimeters = feet * 30.48;
    const inch = feet * 12;
    inputCentimeters.value = centimeters.toFixed(0);
    inputInches.value = inch.toFixed(2);
  } else {
    inputCentimeters.value = "";
    inputInches.value = "";
  }
});

inputInches.addEventListener("input", () => {
  const inch = inputInches.value;
  if (isNaN(inch)) {
    window.alert("please enter the valid input");
  }
   else if (!isEmpty(inch)) {
    const centimeters = inch * 2.54;
    const feet = inch * 0.0833333;
    inputCentimeters.value = centimeters.toFixed(0);
    inputFeet.value = feet.toFixed(2);
  } else {
    inputCentimeters.value = "";
    inputFeet.value = "";
  }
});
