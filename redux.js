// reducer

import { createStore } from "redux";

const counterReducer = (
  state = {
    value: 0,
  },
  action
) => {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };

    case "counter/decremented":
      return { value: state.value - 1 };

    default:
      return state;
  }
};

// store
const store = createStore(counterReducer);
console.log(store.getState());
// subscribe

// dispatch

const action1 = { type: "counter/incremented" };

store.dispatch({ type: "counter/incremented" });
console.log(store.getState());
