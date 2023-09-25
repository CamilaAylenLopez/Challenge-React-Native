import { StyleSheet, Button, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { getPlatos, getPaltoByNombre } from '../Api'; // Asegúrate de importar esta función desde tu módulo Api

export default function Buscador({ navigation }) {
    const [text, onChangeText] = React.useState('Useless Text');
    const [platos, setPlatos] = useState([{
        id: null,
        image: null,
        title: null,
    }])

    const buscarPlato = async (plato) => {
        const data = await getPaltoByNombre(plato)
        const updatedPlatos = data.results.map(e => ({
            id: e.id,
            image: e.image,
            title: e.title,
        }))
        console.log(updatedPlatos)
        setPlatos(updatedPlatos)
    }

    return (
        <View style={styles.container}>
            <Text>Buscar...</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TouchableOpacity style={styles.boton} onPress={() => buscarPlato(text)}>buscar</TouchableOpacity>

            {
                    platos != null && platos.map((platos) =>
                        <View key={platos.id}>
                            <View style={styles.card}>
                                <img src={platos.image} style={styles.image} />
                                <View style={styles.division}>
                                    <Text style={styles.texto}>{platos.title}</Text>
                                    <View style={{flexDirection: "row", marginBottom: '1rem', display: 'flex', justifyContent: 'space-around'}}>
                                        <Icon icon="zondicons:add-solid" width={25}/>
                                        <Icon icon="zondicons:close-solid" width={25}/>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => { navigation.navigate("Home") }}>
                    <Icon icon="material-symbols:home" width={"2.5rem"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate("Buscador") }}>
                    <Icon icon="ph:magnifying-glass-bold" width={"2.5rem"} />
                </TouchableOpacity>
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
    }
});