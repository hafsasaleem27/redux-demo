// import { legacy_createStore as createStore } from "redux";
const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

const storeSubscribe = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(storeSubscribe);

store.dispatch({ type: "INCREMENT" });