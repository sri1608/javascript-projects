function isEmpty(val) {
  return val === undefined || val == null || val.length <= 0 ? true : false;
}

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


