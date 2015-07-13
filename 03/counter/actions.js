import {INCREASE_COUNTER, DECREASE_COUNTER} from './actionConstants';


export function increaseCounter(by = 1) {
  return {
    type: INCREASE_COUNTER,
    by: by
  }
}

export function decreaseCounter(by = 1) {
  return {
    type: DECREASE_COUNTER,
    by: by
  }
}
