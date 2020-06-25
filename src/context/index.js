import React, { useReducer } from "react";
const user = JSON.parse(localStorage.getItem('user'))
const defaultClass = JSON.parse(localStorage.getItem('prefered_class'))


const initialState = {
  user: {
    username: user ? user.user_name : "",
    id: user ? user.id : null,
    first_name: user ? user.first_name : "",
    last_name: user ? user.last_name : "",
    isInstructor: user ? user.is_instructor : null,
    prefered_class: user ? user.prefered_class : null,
  },
  list: [],
  completed: [],
  loginMenu: false,
  accountMenu: false,
  submitting: false,
  instructorList: [],
  defaultClass: defaultClass ? defaultClass.class_list : ["Your Next!", "Who's Next!?", "Your Next!", "Who's Next!?", "Your Next!", "Who's Next!?", "Your Next!", "Who's Next!?"]
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
      return Object.assign({}, state, {accountMenu: !state.accountMenu})
    case "SUBMITTING":
      return Object.assign({}, state, {submitting: !state.submitting})
    case "UPDATE_INSTRUCTOR_LIST":
      return Object.assign({}, state, {instructorList: action.payload})
    case "UPDATE_USER_PREFERED_CLASS_ID":
      return Object.assign({}, state, {user: {prefered_class: action.payload}})
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
