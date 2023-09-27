import { useContext } from "react";
import React from "react";

export const initialState = {
    id: -1,
}

export const ActionTypes = {
    SetId: 'SET_ID',
}

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SetId:
            return {
                ...state,
                id: action.value,
            };
        default:
            return state;
    }
}

export const initialContext = {
    contextState: initialState,
    setContextState: () => { },
}

//crear el contextState

const Cont = React.createContext(initialContext)

export function ContextProvider({ children, initial = initialState }) {
    const [state, dispatch] = React.useReducer(reducer, initial)

    const contextState = state
    const setContextState = dispatch

    return <Cont.Provider value={{ contextState, setContextState }}>{children}</Cont.Provider>
}

export const useContextState = () => useContext(Cont)