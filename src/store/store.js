import { useState, useEffect } from "react";
import { produce } from "immer";

const reRenderListeners = (listeners) => {
  for (const fuc of listeners.keys()) {
    fuc((val) => !val);
  }
};

const customContext = (contextState) => {
  const listeners = new Map();
  const isObj = typeof contextState === "object";
  const setContextState = (value) => {
    if (isObj && typeof value === "function") {
      value = produce(contextState, (draft) => value(draft));
    } else if (typeof value === "function") value = value(contextState);
    contextState = value;
    reRenderListeners(listeners);
  };
  return (shouldListene = true) => {
    const setState = useState(true)[1];
    useEffect(() => {
      if (shouldListene) {
        listeners.set(setState, 1);
        return () => listeners.delete(setState);
      }
    });
    return [contextState, setContextState];
  };
};

const customStore = (state, actions) => {
  if (typeof state !== "object")
    throw Error("state should be an Object or array");
  const listeners = new Map();
  const newAction = {};
  for (const action in actions) {
    newAction[action] = (...arg) => {
      state = produce(state, (draft) => {
        actions[action](draft, ...arg);
      });
      reRenderListeners(listeners);
    };
  }
  return (shouldListene = true) => {
    const setState = useState(true)[1];
    useEffect(() => {
      if (shouldListene) {
        listeners.set(setState, 1);
        return () => listeners.delete(setState);
      }
    });
    return [state, newAction];
  };
};

export const useCart = customStore(new Map(), {
  addNewItem(state, item) {
    state.set(item.id, { ...item, amount: 1 });
  },
  increaseItemAmount(state, id) {
    state.get(id).amount += 1;
  },
  decreaseItemAmount(state, id) {
    state.get(id).amount -= 1;
    if (state.get(id).amount === 0) state.delete(id);
  },
  setItemAmount(state, id, value) {
    state.get(id).amount = value;
    if (state.get(id).amount === 0) state.delete(id);
  },
});
