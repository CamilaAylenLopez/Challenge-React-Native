import { StyleSheet, Button, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { getPlatos } from '../Api'; // Asegúrate de importar esta función desde tu módulo Api

export default function Home({ navigation }) {
    const [platos, setPlatos] = useState([]);

    const traerTodosPlatos = async () => {
        try {
            const response = await getPlatos();
            setPlatos(response.data); // Suponiendo que la respuesta de la API contiene un campo 'data' con los platos
        } catch (error) {
            console.error('Error al obtener los platos:', error);
        }
    }

    useEffect(() => {
        traerTodosPlatos();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Challenge React Native</Text>
            {/* Utiliza FlatList para mostrar la lista de platos */}
            <FlatList
                data={platos}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.name}</Text> {/* Asegúrate de usar el campo correcto para el nombre del plato */}
                        {/* Aquí puedes mostrar otros detalles del plato */}
                    </View>
                )}
            />
            <View style={styles.footer}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                        <Icon icon="material-symbols:home" width={"2.5rem"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { navigation.navigate("Buscador") }}>
                        <Icon icon="ph:magnifying-glass-bold" width={"2.5rem"} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
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
    footer: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "1rem",
        width: "100%",
        alignContent: 'space-around',
        paddingLeft: '5rem',
        paddingRight: '5rem'
    },
});