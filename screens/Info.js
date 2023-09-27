import { StyleSheet, Button, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { getPlatos, getPaltoByNombre, getPlatoInformation } from '../Api'; // Asegúrate de importar esta función desde tu módulo Api
import { ActionTypes, setContextState, useContextState } from '../navigation/contextState';

export default function Info({ navigation }, id) {
    const { contextState, setContextState } = useContextState()
    const [infoPlato, setInfoPlato] = useState([{
        vegetarian: null,
        glutenFree: null,
        veryHealthy: null,
        cheap: null,
        veryPopular: null
    }])

    const traerDatos = async () => {
        const data = await getPlatoInformation(contextState.id)
        const updatedPlatos = data.results.map(e => ({
            vegetarian: e.vegetarian,
            glutenFree: e.glutenFree,
            veryHealthy: e.veryHealthy,
            cheap: e.cheap,
            veryPopular: e.veryPopular
        }))
        console.log(updatedPlatos)
        setInfoPlato(updatedPlatos)
    }

    useEffect(() => {
        traerDatos()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Info de ${contextState.nombre}</Text>
            {
                infoPlato != null && infoPlato.map((infoPlato, i) =>
                    <View key={i}>
                        <Text>Vegano: {infoPlato.vegetarian}</Text>
                        <Text>Libre de gluten: {infoPlato.glutenFree}</Text>
                        <Text>Saludable: {infoPlato.veryHealthy}</Text>
                        <Text>Barato: {infoPlato.cheap}</Text>
                        <Text>Popular: {infoPlato.veryPopular}</Text>
                    </View>
                )
            }
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
    boton: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxHeight: "3rem",
        minWidth: "8rem",
        backgroundColor: "#5654E1",
        borderRadius: 15,
        padding: 10,
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