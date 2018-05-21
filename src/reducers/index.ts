import { combineReducers } from "redux";

import { Action } from "../actions";
import { Store } from "../types";

const initialState: Store.Counter = {
  value: 0
};

function counter(
  state: Store.Counter = initialState,
  action: Action
): Store.Counter {
  const { value } = state;
  switch (action.type) {
    case "INCREMENT_COUNTER":
      const newValue = value + action.delta;
      return { value: newValue };
    case "RESET_COUNTER":
      return { value: 0 };
  }

  return state;
}

const rootReducer = combineReducers({
  counter
});

export default rootReducer;
