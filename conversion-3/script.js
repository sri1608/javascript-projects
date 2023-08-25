
function isEmpty(val){
    return (val === undefined || val == null || val.length <= 0) ? true : false;
};

function heightConversions() {
    const inputCentimeters = document.getElementById("inputCentimeters");
    const inputFeet = document.getElementById("inputFeet");
    const inputInches = document.getElementById("inputInches");
  
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
  
    document.getElementById("heightConversion").classList.add("active");
    document.getElementById("weightConversion").classList.remove("active");
    document.getElementById("degreeConversion").classList.remove("active");
  
    document.getElementById("block1").style.visibility = "visible";
    document.getElementById("block2").style.visibility = "hidden";
    document.getElementById("block3").style.visibility = "hidden";

   

  }
  
  function degreeConversions() {
    const inputFahrenheit = document.getElementById("inputFahrenheit");
    const inputCelsius = document.getElementById("inputCelcius");
  
    inputFahrenheit.addEventListener("input", () => {
      const fahrenheit = inputFahrenheit.value;

      if (!isEmpty(fahrenheit)) {
        const celsius = (fahrenheit - 32) * (5 / 9);
        inputCelsius.value = celsius.toFixed(2);
      } else {
        inputCelsius.value = "";
      }

    });
  
    inputCelsius.addEventListener("input", () => {
      const celsius = inputCelsius.value;
      if (!isEmpty(celsius)) {
        const fahrenheit = celsius * (9 / 5) + 32;
        inputFahrenheit.value = fahrenheit.toFixed(2);
      } else {
        inputFahrenheit.value = "";
      }
    });
  
    document.getElementById("degreeConversion").classList.add("active");
    document.getElementById("weightConversion").classList.remove("active");
    document.getElementById("heightConversion").classList.remove("active");
  
    document.getElementById("block2").style.visibility = "visible";
    document.getElementById("block1").style.visibility = "hidden";
    document.getElementById("block3").style.visibility = "hidden";

 

  }
  
  function weightConversions() {
    const inputKilograms = document.getElementById("inputKilograms");
    const inputPound = document.getElementById("inputPound");
  
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
  
    document.getElementById("weightConversion").classList.add("active");
    document.getElementById("degreeConversion").classList.remove("active");
    document.getElementById("heightConversion").classList.remove("active");
  
    document.getElementById("block3").style.visibility = "visible";
    document.getElementById("block1").style.visibility = "hidden";
    document.getElementById("block2").style.visibility = "hidden";


  }
  heightConversions();

