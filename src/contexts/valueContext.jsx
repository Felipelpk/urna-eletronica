import { createContext, useState } from "react";

export const valueContext = createContext({});

export function ValueProvider({ children }){

    const [ _value, _setValue ] = useState('');

    return (
        <valueContext.Provider value={{ _value, _setValue }}>
            {children}
        </valueContext.Provider>
    )
}