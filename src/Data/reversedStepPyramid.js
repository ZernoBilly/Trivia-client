import React from "react";

const reversedStepPyramid = [
  { step: 1, amount: 100, difficulty: "easy" },
  { step: 2, amount: 200, difficulty: "easy" },
  { step: 3, amount: 300, difficulty: "easy" },
  { step: 4, amount: 500, difficulty: "easy" },
  { step: 5, amount: 1000, difficulty: "easy" },
  { step: 6, amount: 2000, difficulty: "easy" },
  { step: 7, amount: 4000, difficulty: "easy" },
  { step: 8, amount: 8000, difficulty: "easy" },
  { step: 9, amount: 16000, difficulty: "medium" },
  { step: 10, amount: 32000, difficulty: "medium" },
  { step: 11, amount: 64000, difficulty: "medium" },
  { step: 12, amount: 125000, difficulty: "medium" },
  { step: 13, amount: 250000, difficulty: "hard" },
  { step: 14, amount: 500000, difficulty: "hard" },
  { step: 15, amount: 1000000, difficulty: "hard" },
].reverse();

export default reversedStepPyramid;
