import { StyleSheet, Button, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList, TextInput, CheckBox } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { getPlatos, getPaltoByNombre, getPlatoInformation } from '../Api';
import { ActionTypes, setContextState, useContextState } from '../navigation/contextState';

export default function Info({ navigation }) {
    const { contextState, setContextState } = useContextState()
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [hayInformacionDelPlato, setHayInformacionDelPlato] = useState(true)
    const [infoPlato, setInfoPlato] = useState({
        vegetarian: null,
        glutenFree: null,
        veryHealthy: null,
        cheap: null,
        veryPopular: null
    })

    const traerDatos = async () => {
        const data = await getPlatoInformation(contextState.id)
        if (data) {
            const updatedPlatos = {
                vegetarian: data.vegetarian,
                glutenFree: data.glutenFree,
                veryHealthy: data.veryHealthy,
                cheap: data.cheap,
                veryPopular: data.veryPopular
            }
            setInfoPlato(updatedPlatos)
        }
        else {
            setHayInformacionDelPlato(false)
        }
    }

    const handleResponseChange = (key, value) => {
        setInfoPlato((prevInfoPlato) => ({
            ...prevInfoPlato,
            [key]: value
        }));
    };
    const handleSubmit = () => {
        console.log('Info del plato:', infoPlato);
        setFormSubmitted(true);
    };

    useEffect(() => {
        traerDatos()
    }, [])
    console.log(infoPlato)
    return (
        <View style={styles.container}>
            {hayInformacionDelPlato && infoPlato.vegetarian != null?  (
                <>
                    <Text>Info de {contextState.nombre}</Text>
                    <View>
                        <Text>Vegetariano: {infoPlato.vegetarian.toString()}</Text>
                        <Text>Libre de gluten: {infoPlato.glutenFree.toString()}</Text>
                        <Text>Saludable: {infoPlato.veryHealthy.toString()}</Text>
                        <Text>Barato: {infoPlato.cheap.toString()}</Text>
                        <Text>Popular: {infoPlato.veryPopular.toString()}</Text>
                    </View>
                </>
            ) :
                <>
                    <Text style={styles.label}>¿Es vegano?</Text>
                    <CheckBox
                        value={infoPlato.vegetarian}
                        onValueChange={(value) => handleResponseChange('vegetarian', value)}
                    />

                    <Text style={styles.label}>¿Es libre de gluten?</Text>
                    <CheckBox
                        value={infoPlato.glutenFree}
                        onValueChange={(value) => handleResponseChange('glutenFree', value)}
                    />

                    <Text style={styles.label}>¿Es barato?</Text>
                    <CheckBox
                        value={infoPlato.cheap}
                        onValueChange={(value) => handleResponseChange('cheap', value)}
                    />

                    <Text style={styles.label}>¿Es popular?</Text>
                    <CheckBox
                        value={infoPlato.veryPopular}
                        onValueChange={(value) => handleResponseChange('veryPopular', value)}
                    />

                    <TouchableOpacity style={styles.boton} onPress={handleSubmit}>
                        <Text style={styles.texto}>Enviar</Text>
                    </TouchableOpacity>
                    {formSubmitted && (
                        <View style={styles.responseContainer}>
                            <Text style={styles.responseText}>Respuestas:</Text>
                            <Text>Vegano: {infoPlato.vegetarian ? 'Sí' : 'No'}</Text>
                            <Text>Libre de gluten: {infoPlato.glutenFree ? 'Sí' : 'No'}</Text>
                            <Text>Barato: {infoPlato.cheap ? 'Sí' : 'No'}</Text>
                            <Text>Popular: {infoPlato.veryPopular ? 'Sí' : 'No'}</Text>
                        </View>
                    )}
                </>
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
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    texto: {
        color: 'white',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        margin: '1rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    },
});