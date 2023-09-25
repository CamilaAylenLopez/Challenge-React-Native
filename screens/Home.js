import { StyleSheet, Button, Text, View, Alert, SafeAreaView, TouchableOpacity, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import { getPlatos } from '../Api'; // Asegúrate de importar esta función desde tu módulo Api

export default function Home({ navigation }) {
    const [platos, setPlatos] = useState([{
        id: null,
        image: null,
        title: null,
    }])

    const traerTodosPlatos = async () => {
        const data = await getPlatos()
        const updatedPlatos = data.results.map(e => ({
            id: e.id,
            image: e.image,
            title: e.title,
        }))
        console.log(updatedPlatos)
        setPlatos(updatedPlatos)
    }


    useEffect(() => {
        traerTodosPlatos();
    }, []);

    return (
        <>

            <>
                <Text>Menú:</Text>
                {
                    platos != null && platos.map((platos) =>
                        <View key={platos.id}>
                            <View style={styles.card}>
                                <img src={platos.image} style={styles.image} />
                                <View style={styles.division}>
                                    <Text style={styles.texto}>{platos.title}</Text>
                                    {/* <Text style={styles.texto}>{platos.caracteristicas}</Text> */}
                                    <View style={{flexDirection: "row", marginBottom: '1rem', display: 'flex', justifyContent: 'space-around'}}>
                                        <Icon icon="zondicons:add-solid" width={25}/>
                                        <Icon icon="zondicons:close-solid" width={25}/>
                                    </View>
                                </View>
                            </View>
                            {/* <img src={platos.image} />
                            <p>Nombre: {platos.title}</p> */}
                            {/* <p>Precio: ${platos.pricePerServing}</p> */}
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
        backgroundColor:'green',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
      },
      texto:{
        color:'white', 
        display: 'flex', 
        justifyContent:"center", 
        alignItems:"center", 
        margin:'1rem', 
        fontSize:'1.2rem', 
        fontWeight: 'bold',
      }
});