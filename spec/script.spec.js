const { calculate } = require("../src/script.js");

describe("calculate", () => {
  it("calculates compound interest", () => {
    expect(calculate(1000, 5, 2)).toBe(1102.5);
  });

  it("keeps the principal unchanged at zero interest", () => {
    expect(calculate(1000, 0, 5)).toBe(1000);
  });
});