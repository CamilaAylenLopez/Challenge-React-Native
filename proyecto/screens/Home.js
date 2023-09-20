import { StyleSheet, Button, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { getPlatos } from '../Api'

export default function Home({ navigation }) {
    //https://api.spoonacular.com/recipes/716429/information?apiKey=3d70ab355729422c8540eed6bf8012cf
    //https://api.spoonacular.com/recipes/complexSearch?apiKey=3d70ab355729422c8540eed6bf8012cf
    const [platos, setPlatos] = useState()
    const traerTodosPlatos = async () => {
        setPlatos(getPlatos())
    }

    useEffect(() => {
        traerTodosPlatos()
    },[])
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Challenge React Native</Text>
            <Text>{platos}</Text>
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