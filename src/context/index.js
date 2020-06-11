import React, { useReducer } from "react";
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: {
    username: user ? user.username : "",
    id: user ? user.id : null,
    first_name: user ? user.first_name : "",
    last_name: user ? user.last_name : "",
  },
  list: [],
  completed: [],
  loginMenu: false,
  accountMenu: false,
};

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return Object.assign({}, state, action.payload);
    case "LOGGED_OUT":
      return state = initialState
    case "LOGIN_MENU_TOGGLE":
      return Object.assign({}, state, {loginMenu: !state.loginMenu})
    case "ACCOUNT_MENU_TOGGLE":
      return Object.assign({}, state, {accountMenu: !state.loginMenu})
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
