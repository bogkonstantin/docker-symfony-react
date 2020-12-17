import React, {createContext, Dispatch, useReducer} from "react";
import GlobalReducer, {Action, GlobalState} from "./GlobalReducer";

const initialState: GlobalState = {
    sidebarShow: 'responsive',
};

const GlobalStore: React.FunctionComponent = ({children}) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);
    return (
        <GlobalContext.Provider value={[state, dispatch]}>
            {children}
        </GlobalContext.Provider>
    );
}

export const GlobalContext = createContext<[GlobalState, Dispatch<Action>]>([initialState, () => null]);

export default GlobalStore;
