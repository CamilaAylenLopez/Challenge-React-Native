import { StyleSheet, ScrollView, Text, View, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { getPlatos } from '../Api';
import { ActionTypes, setContextState, useContextState } from '../navigation/contextState';

export default function Home({ navigation }) {
    const [platos, setPlatos] = useState([{
        id: null,
        image: null,
        title: null,
    }])
    const { contextState, setContextState } = useContextState()
    const [hayInfo, setHayInfo] = useState(true)

    const traerTodosPlatos = async () => {
        const data = await getPlatos()
        if(data && data.status != 'failure'){
            const updatedPlatos = data.results.map(e => ({
                id: e.id,
                image: e.image,
                title: e.title,
            }))
            setPlatos(updatedPlatos)
        }
        else{
            setHayInfo(false)
        }
    }

    const verInfo = (id) => {
        const platoIndex = platos.findIndex((plato) => plato.id === id);
        setContextState({
            type: ActionTypes.SetId,
            value: id
        });
        setContextState({
            type: ActionTypes.SetNombre,
            value: platos[platoIndex].title
        });
        setContextState({
            type: ActionTypes.SetImagen,
            value: platos[platoIndex].image
        });
        navigation.navigate("Info")
        console.log("PLATO NOMBRE: " + platos[platoIndex].title)
    }

    const eliminarDelMenu = (id) => {
        const platoIndex = platos.findIndex((plato) => plato.id === id);
        if (platoIndex !== -1) {
            const nuevaLista = [...platos];
            nuevaLista.splice(platoIndex, 1);
            setPlatos(nuevaLista);
        }
    }

    const agregarPlatoAlMenu = () => {
        const updatedPlatos = {
            id: contextState.idNuevoPlato,
            image: contextState.imagenNuevoPlato,
            title: contextState.nombreNuevoPlato,
        }
        platos.push(updatedPlatos)
        setContextState({
            type: ActionTypes.SetseEstaAgregandoPlato,
            value: false
        });
    }

    useEffect(() => {
        traerTodosPlatos();
    }, []);
    useEffect(() => {
        agregarPlatoAlMenu();
    }, [contextState.seEstaAgregandoPlato]);

    return (
        <SafeAreaView style={styles.container}>

                <TouchableOpacity onPress={() => { navigation.navigate("InicioDeSesion") }}><Text>LOGIN</Text></TouchableOpacity>
                <Text style={styles.titulo}>Menú:</Text>
                <ScrollView>
                {hayInfo ? (
                    platos != null && platos.map((platos) =>
                        <View key={platos.id}>
                            <View style={styles.card}>
                                <img src={platos.image} style={styles.image} />
                                <View style={styles.division}>
                                    <Text style={styles.texto}>{platos.title}</Text>
                                    <View style={{ flexDirection: "row", marginBottom: '1rem', display: 'flex', justifyContent: 'space-around' }}>
                                        <TouchableOpacity onPress={() => verInfo(platos.id)}>
                                            <Icon icon="zondicons:add-solid" width={25} color="white"/>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => eliminarDelMenu(platos.id)}>
                                            <Icon icon="zondicons:close-solid" width={25} color="white"/>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )):
                    <View style={[{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}]}>
                        <Text style={styles.titulo}>Lo sentimos no hemos encontrando platos</Text>
                    </View>
                }
                </ScrollView>
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

        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
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
        textAlign: 'center'
    },
    espacioMargen: {
        padding: 0,
        margin: 0
    },
    footer: {
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "1rem",
        width: "100%",
        alignContent: 'space-around',
        paddingLeft: '5rem',
        paddingRight: '5rem',
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: "auto",
        height: "auto",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    card: {
        padding: '0px',
        borderRadius: 20,
        maxWidth: '18rem',
        maxHeight: '20rem',
        marginBottom: '3rem'
    },
    division: {
        backgroundColor: 'green',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    texto: {
        color: 'white',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        margin: '1rem',
        fontSize: '1.2rem',
        fontWeight: 'bold',
    }
});