import { StyleSheet, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useAuth } from '../navigation/AuthContext';
import { ActionTypes, setContextState, useContextState } from '../navigation/contextState';

export default function InicioDeSesion({ navigation }) {
    const [validated, setValidated] = useState(false);
    const { login, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { contextState, setContextState } = useContextState()

    const handleLogin = async () => {
        try {
            await login(email, password)

            setContextState({
                type: ActionTypes.Setmail,
                value: email
            });
            setContextState({
                type: ActionTypes.SetContrasenia,
                value: password
            });
            navigation.navigate('Home');
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <Button
                title="Iniciar Sesión"
                onPress={handleLogin}
                disabled={loading}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        fontFamily: "Alata",
        backgroundColor: 'white',
    },
    titulo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: "1.5rem",
        marginTop: "3rem",
        marginBottom: "3rem",
    },
});
