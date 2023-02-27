import React, { useState, useContext } from "react";

export const InformalToggleContext = React.createContext({
    informalToggle: false,
});

export const InformalToggleContextProvider = ({initialState, children}) => {
    const [informalToggle, setInformalToggle] = useState(initialState);

    return (
        <InformalToggleContext.Provider value={{informalToggle, setInformalToggle}}>
            {children}
        </InformalToggleContext.Provider>
    )
}

export const useInformalToggleContext = () => {
    let context = useContext(InformalToggleContext);
    if (context) return context;
}