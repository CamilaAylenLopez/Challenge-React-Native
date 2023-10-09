import { createContext, useContext, useState } from 'react';
import { ActionTypes, setContextState, useContextState } from '../navigation/contextState';
import { postLogin } from '../Api';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const { contextState, setContextState } = useContextState()


    const login = async (email, password) => {
        setLoading(true);

        try {
            const response = await fakeLogin(email, password); // Simulación de inicio de sesión
            const token = response.token;
            // Si la autenticación es exitosa, actualiza el estado del usuario
            setUser({ email, token });
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        } finally {
            setLoading(false);
        }
    };

    function fakeLogin(email, password) {
        // Simulación de inicio de sesión
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                //http://challenge-react.alkemy.org?email=challenge@alkemy.org&password=react
                if (await postLogin(email, password) != Error) {
                    let token = null
                    token = await postLogin(email, password)
                    setContextState({
                        type: ActionTypes.SetToken,
                        value: token.token
                    });

                    resolve({ token });

                    /* en una aplicación real, el token se genera en el servidor y se envía al cliente */
                    /* para este ejemplo, el token se genera en el cliente */

                }
                reject(new Error('Usuario o contraseña incorrectos'));
            }, 1000);
        })
    };

    const value = {
        user,
        loading,
        login,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}