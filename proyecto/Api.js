const API = 'https://api.spoonacular.com/recipes/716429/information?apiKey=3d70ab355729422c8540eed6bf8012cf'

export const getPlatos = async () => {
    const res = await fetch(API, {
        METHOD: "GET",
    })
    console.log(res) 
    return await res.json()
}