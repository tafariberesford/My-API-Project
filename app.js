// All Recipes https://api.spoonacular.com/recipes/complexSearch?apiKey=28188e9faf684ee6a9c176bb130bf27f
// Find by Ingredients https://api.spoonacular.com/recipes/findByIngredients?apiKey=28188e9faf684ee6a9c176bb130bf27f
// api key = 28188e9faf684ee6a9c176bb130bf27f
const dataContainer = document.querySelector('#data-container')

// const getRandomRecipe = async () => {
//   try {
//     const getRecipeURL = `https://api.spoonacular.com/recipes/random?apiKey=28188e9faf684ee6a9c176bb130bf27f`
//     const response = await axios.get(getRecipeURL)
//     const randomRecipes = response.data.recipes[0]
//     console.log(randomRecipes)
//     const image = document.createElement('img')
//     image.src = randomRecipes.image
//     dataContainer.append(image)
//     // console.log(recipeList)

//   } catch (error) {
//     console.error(error)
//   }
// }

// getRandomRecipe()

let dropDown = document.querySelector('#recipe-button')
let input = document.querySelector('#search-selection')

const getRecipe = async (input) => {
  try {
    const getRecipeURL = `https://api.spoonacular.com/recipes/complexSearch?query=${input.value}&number=3&apiKey=28188e9faf684ee6a9c176bb130bf27f`
    const response = await axios.get(getRecipeURL)
    console.log(response.data.results)
    let recipes = response.data.results
    for (let i = 0; i < recipes.length; i++) {
      const result = document.createElement('p')
      result.innerText = recipes[i].title;
      dataContainer.append(result)
      return result
    }
  } catch (error) {
    console.error(error)
  }
}
dropDown.addEventListener('click', (e) => {
  e.preventDefault()
  getRecipe(input)
})