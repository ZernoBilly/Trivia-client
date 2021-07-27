import {
  FETCH_EASY_QUESTION,
  FETCH_MEDIUM_QUESTION,
  FETCH_HARD_QUESTION,
} from "./constants";

const questionReducer = (state, action) => {
  switch (action.type) {
    case FETCH_EASY_QUESTION:
      return action.payload;
    case FETCH_MEDIUM_QUESTION:
      return action.payload;
    case FETCH_HARD_QUESTION:
      return action.payload;
    default:
      break;
  }
};

export default questionReducer;
