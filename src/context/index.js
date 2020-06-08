import React, { useReducer } from "react";

const initialState = {
  user: {
    email: "",
    id: null,
    first_name: "",
    last_name: "",
  },
  list: [],
  completed: [],
};

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return Object.assign({}, state, action.payload);
    case "LOGGED_OUT":
      return state;
    default: {
      throw new Error(`Unhandle action type: ${action.type}`);
    }
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default ContextProvider;
