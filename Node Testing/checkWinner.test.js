/*function checkWinner(p1, p2) {
  if (p1 === p2) {
    return "draw";
  }
  if (p1 === "rock") {
    if (p2 !== "paper") {
      return "p2 win";
    }
    if (p2 !== "scissors") {
      return "p1 win";
    }
  }

  if (p1 === "scissors") {
    if (p2 !== "rock") {
      return "p2 win";
    }
    if (p2 !== "paper") {
      return "p1 win";
    }
  }

  if (p1 === "paper") {
    if (p2 !== "scissors") {
      return "p2 win";
    }
    if (p2 !== "rock") {
      return "p1 win";
    }
  }

  return "not sure what happened";
}*/

// rock tests

const { checkWinner } = require("./checkWinner.js");

test("checking winner of rock and rock", () => {
  const actual = checkWinner("rock", "rock");
  const expected = "draw";
  expect(actual).toBe(expected);
});

test("checking winner of rock and paper", () => {
  const actual = checkWinner("rock", "paper");
  const expected = "p2 win";
  expect(actual).toBe(expected);
});

test("checking winner of rock and scissors", () => {
  const actual = checkWinner("rock", "scissors");
  const expected = "p1 win";
  expect(actual).toBe(expected);
});

// paper tests

test("checking winner of rock and rock", () => {
  const actual = checkWinner("rock", "rock");
  const expected = "draw";
  expect(actual).toBe(expected);
});

test("checking winner of rock and paper", () => {
  const actual = checkWinner("rock", "paper");
  const expected = "p2 win";
  expect(actual).toBe(expected);
});

test("checking winner of rock and scissors", () => {
  const actual = checkWinner("rock", "scissors");
  const expected = "p1 win";
  expect(actual).toBe(expected);
});

//scissors test
