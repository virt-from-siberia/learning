import { ADD, SUB, MUL, DEV, ADD_NUMBER } from "../actions/actionTypes";

const initialState = {
  counter: 0
};

export default function counter1(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        counter: state.counter + 1
      };
    case SUB:
      return {
        counter: state.counter - 1
      };
    case MUL:
      return {
        counter: state.counter * 2
      };
    case DEV:
      return {
        counter: state.counter / 2
      };
    case ADD_NUMBER:
      return {
        counter: state.counter + action.payload
      };
    default:
      return state;
  }
}
