// import React, { useReducer } from "react";

// const initialState = {
//   user: [],
//   list: [],
//   completed: [],
// };

// const StateContext = React.createContext();
// const DispatchContext = React.createContext();

// const userReducer = (state, action) => {
//   switch (action.type) {
//     default: {
//       throw new Error(`Unhandle action type: ${action.type}`);
//     }
//   }
// };

// const ContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, initialState);
//   return (
//     <StateContext.Provider value={state}>
//       <DispatchContext value={dispatch}>
//         {children}
//       </DispatchContext>
//     </StateContext.Provider>
//   );
// };

// export default ContextProvider;
