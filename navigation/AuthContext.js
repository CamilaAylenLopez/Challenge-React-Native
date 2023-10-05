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
        const { contextState, setContextState } = useContextState()
        return new Promise((resolve, reject) => {
            setTimeout(async() => {
                //http://challenge-react.alkemy.org?email=challenge@alkemy.org&password=react
                if (email === 'challenge@alkemy.org' && password === 'react') {

                    setContextState({
                        type: ActionTypes.Setmail,
                        value: email
                    });
                    setContextState({
                        type: ActionTypes.SetContrasenia,
                        value: password
                    });
                    const token = null

                    if(await postLogin() != error)
                    {
                        token = await postLogin();
                        setContextState({
                            type: ActionTypes.SetToken,
                            value: token.token
                        });
                    }
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