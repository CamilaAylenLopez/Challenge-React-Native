import { useContext } from "react";
import React from "react";

export const initialState = {
    id: -1,
    nombre: '',
    imagen: '',
    idNuevoPlato: -1,
    nombreNuevoPlato: '',
    imagenNuevoPlato: '',
    seEstaAgregandoPlato: false,
    mail: '',
    contrasenia: '',
    token: -1,
}

export const ActionTypes = {
    SetId: 'SET_ID',
    SetNombre: 'SET_NOMBRE',
    SetImagen: 'SET_IMAGEN',
    SetIdNuevoPlato: 'SET_IDNUEVOPLATO',
    SetNombreNuevoPlato: 'SET_NOMBREUEVOPLATO',
    SetImagenNuevoPlato: 'SET_IMAGENUEVOPLATO',
    SetseEstaAgregandoPlato: 'SET_SEESTAAGREGANDOPLATO',
    Setmail: 'SET_MAIL',
    SetContrasenia: 'SET_CONTRASENIA',
    SetToken: 'SET_TOKEN'
}

export const reducer = (state = {}, action) => {
    switch (action.type) {
        case ActionTypes.SetId:
            return {
                ...state,
                id: action.value,
            };
        case ActionTypes.SetNombre:
            return {
                ...state,
                nombre: action.value,
            };
        case ActionTypes.SetImagen:
            return {
                ...state,
                imagen: action.value,
            };
        case ActionTypes.SetIdNuevoPlato:
            return {
                ...state,
                idNuevoPlato: action.value,
            };
        case ActionTypes.SetNombreNuevoPlato:
            return {
                ...state,
                nombreNuevoPlato: action.value,
            };
        case ActionTypes.SetImagenNuevoPlato:
            return {
                ...state,
                imagenNuevoPlato: action.value,
            };
        case ActionTypes.SetseEstaAgregandoPlato:
            return {
                ...state,
                seEstaAgregandoPlato: action.value,
            };
        case ActionTypes.mail:
            return {
                ...state,
                Setmail: action.value,
            };
        case ActionTypes.contrasenia:
            return {
                ...state,
                SetContrasenia: action.value,
            };
        case ActionTypes.token:
            return {
                ...state,
                SetToken: action.value,
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