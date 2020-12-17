import { Reducer } from "react";
export declare type Action = {
    type: 'SIDEBAR_HIDE' | 'SIDEBAR_SHOW';
    payload: any;
};
export declare type GlobalState = {
    sidebarShow: boolean | 'responsive';
};
declare const GlobalReducer: Reducer<GlobalState, Action>;
export default GlobalReducer;
