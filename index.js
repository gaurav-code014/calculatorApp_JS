document.addEventListener("DOMContentLoaded", function () {
  let displayValue = "";
  let isEqualClicked = false;

  function updateDisplay() {
    const displayContainer = document.querySelector(".box");
    displayContainer.innerText = displayValue;

    displayContainer.style.fontFamily = "Segoe UI";
    displayContainer.style.fontSize = "55px";
    displayContainer.style.fontWeight = "900";
    displayContainer.style.lineHeight = "94px";
    displayContainer.style.letterSpacing = "0em";
    displayContainer.style.textAlign = "right";
  }

  function handleNumberClick(number) {
    if (isEqualClicked) {
      displayValue = number;
      isEqualClicked = false;
    } else {
      displayValue += number;
    }
    updateDisplay();
  }

  function handleOperatorClick(operator) {
    displayValue += ` ${operator} `;
    updateDisplay();
  }

  function handleEqualClick() {
    try {
      displayValue = eval(displayValue);
      updateDisplay();
      isEqualClicked = true;
    } catch (error) {
      displayValue = "Error";
      updateDisplay();
      isEqualClicked = true;
    }
  }

  function handleDeleteClick() {
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
  }

  function handleResetClick() {
    displayValue = "";
    updateDisplay();
  }

  document
    .getElementById("box0")
    .addEventListener("click", () => handleNumberClick("0"));
  document
    .getElementById("box1")
    .addEventListener("click", () => handleNumberClick("1"));
  document
    .getElementById("box2")
    .addEventListener("click", () => handleNumberClick("2"));
  document
    .getElementById("box3")
    .addEventListener("click", () => handleNumberClick("3"));
  document
    .getElementById("box4")
    .addEventListener("click", () => handleNumberClick("4"));
  document
    .getElementById("box5")
    .addEventListener("click", () => handleNumberClick("5"));
  document
    .getElementById("box6")
    .addEventListener("click", () => handleNumberClick("6"));
  document
    .getElementById("box7")
    .addEventListener("click", () => handleNumberClick("7"));
  document
    .getElementById("box8")
    .addEventListener("click", () => handleNumberClick("8"));
  document
    .getElementById("box9")
    .addEventListener("click", () => handleNumberClick("9"));

  document
    .getElementById("boxPlus")
    .addEventListener("click", () => handleOperatorClick("+"));
  document
    .getElementById("boxMinus")
    .addEventListener("click", () => handleOperatorClick("-"));
  document
    .getElementById("boxMultiply")
    .addEventListener("click", () => handleOperatorClick("*"));
  document
    .getElementById("boxDivide")
    .addEventListener("click", () => handleOperatorClick("/"));

  document
    .getElementById("boxDot")
    .addEventListener("click", () => handleNumberClick("."));
  document
    .getElementById("boxEqual")
    .addEventListener("click", handleEqualClick);
  document
    .getElementById("boxDEL")
    .addEventListener("click", handleDeleteClick);
  document
    .getElementById("boxReset")
    .addEventListener("click", handleResetClick);
});
