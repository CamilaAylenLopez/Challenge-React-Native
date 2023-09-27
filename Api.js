const API1 = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=7bcb73bccf54400b8a96d33fbf71bdec'
const API2= 'https://api.spoonacular.com/recipes/information?apikey=7bcb73bccf54400b8a96d33fbf71bdec&complexSearch?query='
const API3 = 'https://api.spoonacular.com/recipes/'

//key de kasses --> 8608f7ce293a4b16a44cb134dcda129d
//key de lata --> 7bcb73bccf54400b8a96d33fbf71bdec
// buscar un plato en especifico POR NOMBRE: https://api.spoonacular.com/recipes/information?apikey={KEY}&complexSearch?query={plato}
// buscar un plato en especifico POR ID: https://api.spoonacular.com/recipes/{ID}/information?apikey={KEY}
// te pone los ingredientes de una receta: https://api.spoonacular.com/recipes/1003464/ingredientWidget.json?apiKey={KEY}}

export const getPlatos = async () => {
    const response = await fetch(API1, {
        METHOD: "GET",
    })
    console.log(response) 
    return await response.json()
}

export const getPaltoByNombre = async (plato) => {
  const response = await fetch(API2 + `${plato}`, {
    method: "GET",
  });
  const data = await response.json();
  return data;
}

export const getPlatoInformation = async (id) => {
  const response = await fetch(API3 + `${id}` + `/information?apiKey=7bcb73bccf54400b8a96d33fbf71bdec&includeNutrition=true`, {
    method: 'GET',
  });
  console.log(response) 
  return await response.json()
}