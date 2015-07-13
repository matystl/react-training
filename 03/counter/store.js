import { INCREASE_COUNTER, DECREASE_COUNTER } from './actionConstants';

const _defaultState = 8;

// state, action => state
export function counter(state = _defaultState, action) {
  console.log(state, action.by, );
  switch (action.type) {
    case INCREASE_COUNTER:
      return state + action.by;
    case DECREASE_COUNTER:
      return state - action.by;
    default:
      return state;
  }
}
