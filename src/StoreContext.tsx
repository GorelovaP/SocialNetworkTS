import React from "react";
import {store, StoreType} from "./Redux/redax-store";



const StoreContext = React.createContext({} as StoreType);

type ProviderProps = {
    value: StoreType;
    children: React.ReactNode
}
export const Provider = (props: ProviderProps) => {
    return (
        <StoreContext.Provider value={store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext;