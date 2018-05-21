import { createStore, Store as ReduxStore } from "redux";
import rootReducer from "./reducers";
import { Store } from "./types";
import { incrementCounter, resetCounter } from "./actions";

const store: ReduxStore<Store.All> = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounter(1)); // { counter: { value: 1 } }
store.dispatch(incrementCounter(1)); // { counter: { value: 2 } }
store.dispatch(incrementCounter(1)); // { counter: { value: 3 } }
store.dispatch(resetCounter()); // { counter: { value: 0 } }
