function calculate(principal, rate, time) {
  if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal < 0 || rate < 0 || time < 0) {
    return null;
  }
  const interest = (principal * rate * time) / 100;
  return Number((principal + interest).toFixed(2));
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("calculate");
    const resultEl = document.getElementById("result");
    if (!button || !resultEl) return;
    button.addEventListener("click", function () {
      const principal = parseFloat(document.getElementById("principal").value);
      const rate = parseFloat(document.getElementById("rate").value);
      const time = parseFloat(document.getElementById("time").value);
      const total = calculate(principal, rate, time);
      resultEl.textContent = total === null
        ? "Please enter valid positive numbers."
        : "Total amount: " + total.toFixed(2);
    });
  });
}

if (typeof module !== "undefined") {
  module.exports = { calculate };
}
