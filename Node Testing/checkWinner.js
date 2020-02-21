function checkWinner(p1, p2) {
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
}
