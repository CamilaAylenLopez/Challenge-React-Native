import { StyleSheet, Button, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { getPlatos } from '../Api'; // Asegúrate de importar esta función desde tu módulo Api

export default function Home({ navigation }) {
    const [platos, setPlatos] = useState([]);

    const traerTodosPlatos = async () => {
        const data = await getPlatos()
        console.log(data)
        setPlatos([data])
    }
    

    useEffect(() => {
        traerTodosPlatos();
    }, []);

    return (
        <>

        <>
        <h5>Menú:</h5>
        {
            platos != null && platos.map((platos) => 
                <div id={platos.id}>
                    <img src={platos.image}/>
                    <p>Nombre: {platos.title}</p>
                    <p>Precio: ${platos.pricePerServing}</p>
                </div>
            )
        }
        </>
        </>
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