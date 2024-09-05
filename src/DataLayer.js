import React, { createContext, useContext, useReducer } from "react";

// Create the data layer context
export const DataLayerContext = createContext();

// DataLayer component to wrap the app and provide the data layer
export const DataLayer = ({ initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

// Hook to pull information from the data layer
export const useDataLayerValue = () => useContext(DataLayerContext);