const API1 = 'https://api.spoonacular.com/recipes/complexSearch?apiKey='
const API2= 'https://api.spoonacular.com/recipes/information?apikey= &complexSearch?query='


//key de kasses --> 8608f7ce293a4b16a44cb134dcda129d
//key de lata --> 7bcb73bccf54400b8a96d33fbf71bdec
// buscar un plato en especifico POR NOMBRE: https://api.spoonacular.com/recipes/information?apikey={KEY}&complexSearch?query={plato}
// buscar un plato en especifico POR ID: https://api.spoonacular.com/recipes/{ID}/information?apikey={KEY}

export const getPlatos = async () => {
    const res = await fetch(API1, {
        METHOD: "GET",
    })
    console.log(res) 
    return await res.json()
}

export const getPaltoByNombre = async (plato) => {
  const response = await fetch(`${API2}${plato}`);
  const data = await response.json();
  return data;
}

const axios = require('axios');

async function obtenerPlatos() {
  try {
    const response = await axios.get(API1);
    const datosPlatos = response.data;

    // Aquí puedes hacer lo que necesites con los datos de los platos
    console.log(datosPlatos);
  } catch (error) {
    console.error('Error al obtener los platos:', error);
  }
}

// Llama a la función para obtener los platos
obtenerPlatos();