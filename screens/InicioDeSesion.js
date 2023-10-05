import { StyleSheet, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useAuth } from '../navigation/AuthContext';

export default function InicioDeSesion({ navigation }) {
    const [validated, setValidated] = useState(false);
    const { login, loading } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if(email != '' && password != ''){
            try {
                await login(email, password)
                navigation.navigate('Home');
            } catch (error) {
                console.error('Error al iniciar sesión:', error);
            }
        }
        else{
            alert("Complete los campos")
        }
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Iniciar Sesión</Text>
            <TextInput

                placeholder="Correo electrónico"
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <TextInput
                placeholder="Contraseña"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                value={password}
            />
            <TouchableOpacity onPress={handleLogin}>
            <Button
                title="Iniciar Sesión"
                disabled={loading}
            />
            </TouchableOpacity>
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
