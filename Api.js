const API = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=3d70ab355729422c8540eed6bf8012cf'

export const getPlatos = async () => {
    const res = await fetch(API, {
        METHOD: "GET",
    })
    console.log(res) 
    return await res.json()
}

const axios = require('axios');

async function obtenerPlatos() {
  try {
    const response = await axios.get(API);
    const datosPlatos = response.data;

    // Aquí puedes hacer lo que necesites con los datos de los platos
    console.log(datosPlatos);
  } catch (error) {
    console.error('Error al obtener los platos:', error);
  }
}

// Llama a la función para obtener los platos
obtenerPlatos();