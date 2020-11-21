import React, { createContext, useContext, useReducer } from 'react';

const DataLayerContext = createContext();

export const DataLayer = ({ reduer, initialState, children }) => (
  <DataLayerContext.Provider value={useReducer(reduer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

const useData = () => useContext(DataLayerContext);

export default useData;
