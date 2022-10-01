import { INCREMENT_NUMBER, DECREMENT_NUMBER } from "./consts";

const initialState = 0;

const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_NUMBER: {
      return state + 1;
    }
    case DECREMENT_NUMBER: {
      return state - 1;
    }
    default:
      return state;
  }
};

export default numberReducer;
