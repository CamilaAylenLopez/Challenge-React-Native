const API1 = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=d5952207753c42b8950925fdf0a38b36'
const API2= 'https://api.spoonacular.com/recipes/complexSearch?apiKey=d5952207753c42b8950925fdf0a38b36&query='
const API3 = 'https://api.spoonacular.com/recipes/'
const API4 = 'http://challenge-react.alkemy.org?email='

//key de kasses --> 8608f7ce293a4b16a44cb134dcda129d
//key de cami --> 7bcb73bccf54400b8a96d33fbf71bdec
//key de cami x2 --> d5952207753c42b8950925fdf0a38b36
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
  const response = await fetch(API3 + `${id}` + `/information?apiKey=d5952207753c42b8950925fdf0a38b36&includeNutrition=true`, {
    method: 'GET',
  });
  console.log(response) 
  return await response.json()
}

export const postLogin = async (email, password) => {
  //challenge@alkemy.org&password=react
  const response = await fetch(API4 + `${email}` + `&password=` + `${password}`, {
    method: 'POST',
  });
  console.log(response) 
  return await response.json()
}