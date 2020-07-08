import { ADD, SUB, MUL, DEV, ADD_NUMBER, ADD2 } from "./actionTypes";

export function add() {
  return {
    type: ADD
  };
}
export function sub() {
  return {
    type: SUB
  };
}
export function mul() {
  return {
    type: MUL
  };
}
export function dev() {
  return {
    type: DEV
  };
}
export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    payload: number
  };
}
export function add2(number) {
  return {
    type: ADD2,
    payload: number
  };
}
export function asyncAdd(number) {
  return dispatch => {
    setTimeout(() => {
      dispatch(addNumber(number));
    }, 3000);
  };
}
