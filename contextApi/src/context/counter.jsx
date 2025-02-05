import { useState } from "react";
import { createContext } from "react";

export const CountContext = createContext(null)

export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    
    return <CountContext.Provider value={{ count, setCount }}>
        {props.children}
    </CountContext.Provider>
}