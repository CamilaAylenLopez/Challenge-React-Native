import { StyleSheet, Button, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { getPaltoByNombre } from '../Api';
import { ActionTypes, setContextState, useContextState } from '../navigation/contextState';


export default function Buscador({ navigation }) {
    const { contextState, setContextState } = useContextState()
    const [text, onChangeText] = React.useState('');
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
        setPlatos(updatedPlatos)
    }

    const agregarAlMenu = (id) => {
        const platoIndex = platos.findIndex((plato) => plato.id === id);
        setContextState({
            type: ActionTypes.SetIdNuevoPlato,
            value: id
        });
        setContextState({
            type: ActionTypes.SetNombreNuevoPlato,
            value: platos[platoIndex].title
        });
        setContextState({
            type: ActionTypes.SetImagenNuevoPlato,
            value: platos[platoIndex].image
        });
        setContextState({
            type: ActionTypes.SetseEstaAgregandoPlato,
            value: true
        });
        console.log(setContextState.idNuevoPlato)
        console.log(setContextState.nombreNuevoPlato)
        console.log(setContextState.imagenNuevoPlato)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Buscar...</Text>
            <TextInput
                style={styles.input}
                value={text}
                onChangeText={onChangeText}
                placeholder="buscar..."
            />
            <TouchableOpacity style={styles.boton} onPress={() => buscarPlato(text)}><Text>buscar</Text></TouchableOpacity>

            {
                platos != null && platos.map((platos) =>
                    <View key={platos.id}>
                        <View style={styles.card}>
                            <img src={platos.image} style={styles.image} />
                            <View style={styles.division}>
                                <Text style={styles.texto}>{platos.title}</Text>
                                <View style={{ flexDirection: "row", marginBottom: '1rem', display: 'flex', justifyContent: 'space-around' }}>
                                    <TouchableOpacity onPress={() => agregarAlMenu(platos.id)}>
                                        <Icon icon="zondicons:add-solid" width={25} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
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