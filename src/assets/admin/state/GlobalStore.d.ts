import React from "react";
import { Action, GlobalState } from "./GlobalReducer";
declare const GlobalStore: React.FunctionComponent;
export declare const GlobalContext: React.Context<[GlobalState, React.Dispatch<Action>]>;
export default GlobalStore;
