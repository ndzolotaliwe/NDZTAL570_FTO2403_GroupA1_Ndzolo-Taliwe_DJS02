const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  
  // Convert inputs to numbers
  const numDividend = parseFloat(dividend);
  const numDivider = parseFloat(divider);
  
  // Validation
  if (isNaN(numDividend) || isNaN(numDivider)) {
    result.innerText = "Division not performed. Please enter valid numbers.";
    return;
  }
  
  if (numDivider === 0) {
    result.innerText = "Division not performed. Cannot divide by zero.";
    return;
  }
  
  // Perform division
  let divisionResult;
  try {
    divisionResult = numDividend / numDivider;
    if (!isFinite(divisionResult)) {
      throw new Error("Division result is not finite.");
    }
    result.innerText = divisionResult;
  } catch (error) {
    result.innerText = "Division not performed. An error occurred.";
    console.error(error);
  }
});
