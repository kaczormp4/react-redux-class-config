import { INCREMENT_NUMBER, DECREMENT_NUMBER } from "./consts";

export const incrementNumber = () => ({ type: INCREMENT_NUMBER });
export const decrementNumber = () => ({ type: DECREMENT_NUMBER });
