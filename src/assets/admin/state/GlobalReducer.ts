import {Reducer} from "react";

export type Action = {
    type: 'SIDEBAR_HIDE' | 'SIDEBAR_SHOW',
    payload: any
}

export type GlobalState = {
    sidebarShow: boolean | 'responsive'
}

const GlobalReducer: Reducer<GlobalState, Action> = (state, action): GlobalState => {
    switch (action.type) {
        case 'SIDEBAR_HIDE':
            return {
                ...state,
                sidebarShow: false,
            };
        case 'SIDEBAR_SHOW':
            return {
                ...state,
                sidebarShow: true,
            };
        default:
            throw Error('Unknown action');
    }
}

export default GlobalReducer;
