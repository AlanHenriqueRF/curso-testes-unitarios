import calculator from "calculator";
import { MathBody } from "validator";

function randomNumber(): number {
  return Math.floor(Math.random() * 1000)
}

describe("calculator tests", () => {
  it("should work", async () => {
    expect(true).toBe(true);
  });

  it("should sum two numbers", async () => {
    const mathBody: MathBody = {
      operation: "sum",
      n1: randomNumber(),
      n2: randomNumber()
    };

    const sum = calculator.sum(mathBody.n1, mathBody.n2)
    expect(sum).toBe(mathBody.n1 + mathBody.n2);
  });

  it("should subtract two numbers", async () => {
    const mathBody: MathBody = {
      operation: "sub",
      n1: randomNumber(),
      n2: randomNumber()
    };

    const sub = calculator.sub(mathBody.n1, mathBody.n2)
    expect(sub).toBe(mathBody.n1 - mathBody.n2);
  });

  it("should multiply two numbers", async () => {
    const mathBody: MathBody = {
      operation: "mul",
      n1: randomNumber(),
      n2: randomNumber()
    };

    const mul = calculator.mul(mathBody.n1, mathBody.n2)
    expect(mul).toBe(mathBody.n1 * mathBody.n2);
  });

  it("should divide two numbers", async () => {
    const mathBody: MathBody = {
      operation: "div",
      n1: randomNumber(),
      n2: randomNumber()
    };

    const div = calculator.div(mathBody.n1, mathBody.n2)
    expect(div).toBe(mathBody.n1 / mathBody.n2);
  });

  it("should return 0 when diving by zero", async () => {
    const mathBody: MathBody = {
      operation: "div",
      n1: randomNumber(),
      n2: 0
    };

    const div = calculator.div(mathBody.n1, mathBody.n2)
    expect(div).toBe(0);
  });
})

