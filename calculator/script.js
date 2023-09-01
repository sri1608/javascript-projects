// const clearBtn = document.getElementById("clear-btn");
// const deleteBtn = document.getElementById("del-btn");
// const divideBtn = document.getElementById("divide-btn");
// const multipleBtn = document.getElementById("multiple-btn");
// const subtractBtn = document.getElementById("subtract-btn");
// const additionBtn = document.getElementById("add-btn");
// const decimalBtn = document.getElementById("decimal-btn");
// const equalBtn = document.getElementById("equal-btn");
// const numbersBtn = document.querySelectorAll(".number");
// const resultValues = document.getElementById("result");

// //initializing the variables
// let result = "";
// let operation = "";
// let previousNumber = 0;

// const updateDisplay = () => {
//   if (operation) {
   
//     resultValues.innerText = `${previousNumber} ${operation} ${result}`;
//   } else {
//     resultValues.innerText = result;
//   }
// };

// const appendNumber = (value) => {
//   if (value === "." && result.includes(".")) return;
//   result += value;
//   updateDisplay();
// };

// numbersBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     appendNumber(button.innerText);
//   });
// });

// const selectedOperator = (value) => {
//   if (result === "") return;

//   if (operation !== "" && previousNumber !== "") {
//     calculateResult();
//   }
//   operation = value;
//   previousNumber = result;
//   result = "";
//   updateDisplay();
// };

// const calculateResult = () => {
//   let evaluatedResult;
//   const prev = parseFloat(previousNumber);
//   const current = parseFloat(result);

//   if (isNaN(prev) || isNaN(current)) return;

//   switch (operation) {
//     case "+":
//       evaluatedResult = prev + current;
//       break;

//     case "-":
//       evaluatedResult = prev + current;
//       break;
//     case "*":
//       evaluatedResult = prev + current;
//       break;
//     case "÷":
//       evaluatedResult = prev + current;
//       break;
//     default:
//       return;
//   }
//   result = evaluatedResult.toString();
//   operation = "";
//   previousNumber = "";
// };

// decimalBtn.addEventListener("click", () => {
//   appendNumber(".");
// });
// additionBtn.addEventListener("click", () => {
//   selectedOperator("+");
// });
// subtractBtn.addEventListener("click", () => {
//     selectedOperator("-");
// });
// multipleBtn.addEventListener("click", () => {
//     selectedOperator("*");
// });
// divideBtn.addEventListener("click", () => {
//     selectedOperator("÷");
// });

// equalBtn.addEventListener("click", () => {
//   if (result === "") return;
//   calculateResult();
//   updateDisplay();
// });

// const clearDisplay = () => {
//   result = "";
//   previousNumber = "";
//   operation = "";
//   updateDisplay();
// };

// const deleteLastNumber = () => {
//     if(result === '' ) return;

//     result = result.slice(0, -1);
//     updateDisplay();
// };
// clearBtn.addEventListener("click", clearDisplay);

// deleteBtn.addEventListener("click", deleteLastNumber);



