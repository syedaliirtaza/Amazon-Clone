import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//prepares the datalayer

export const StateProvider = ({ reducer, initialState, children }) => {
  //wrap our app and provide the datalayer
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//pull info from the datalayer
export const useStateValue = () => useContext(StateContext);
