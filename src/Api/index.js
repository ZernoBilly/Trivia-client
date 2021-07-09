import axios from "axios";

const API_URL =
  "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple";

export const fetchQuestions = async () => {
  const { data } = await axios.get(``);
};
