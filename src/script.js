function calculate(principal, rate, time) {
  const values = [principal, rate, time];

  if (values.some(Number.isNaN) || values.some((value) => value < 0)) {
    return null;
  }

  return Number((principal * Math.pow(1 + rate / 100, time)).toFixed(2));
}

if (typeof document !== "undefined") {
  const calculateButton = document.getElementById("calculate");
  const result = document.getElementById("result");

  calculateButton.addEventListener("click", () => {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const time = parseFloat(document.getElementById("time").value);
    const futureValue = calculate(principal, rate, time);

    result.classList.add("is-calculated");
    result.textContent = futureValue === null
      ? "Enter valid non-negative numbers for each value."
      : `Future value: $${futureValue.toFixed(2)}`;
  });
}

if (typeof module !== "undefined") {
  module.exports = { calculate };
}