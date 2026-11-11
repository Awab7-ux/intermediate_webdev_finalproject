const { calculate } = require("../src/script.js");

describe("calculate", function () {
  it("calculates total with simple interest", function () {
    expect(calculate(1000, 5, 2)).toBe(1100);
  });

  it("returns the principal when the rate is zero", function () {
    expect(calculate(1000, 0, 5)).toBe(1000);
  });
});
