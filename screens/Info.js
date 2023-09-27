import { StyleSheet, Button, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { getPlatos, getPaltoByNombre, getPlatoInformation } from '../Api'; // Asegúrate de importar esta función desde tu módulo Api
import { ActionTypes, setContextState, useContextState } from '../navigation/contextState';

export default function Info({ navigation }, id) {
    const { contextState, setContextState } = useContextState()
    const [platos, setPlatos] = useState([{
        id: null,
        image: null,
        title: null,
    }])
    useEffect(() =>{
        getPlatoInformation(contextState.id)
        console.log(contextState.id)
    },[])
    return (
        <View style={styles.container}>
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