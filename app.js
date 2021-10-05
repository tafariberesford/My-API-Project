// Global Variables

const dataContainer = document.querySelector('#data-container')

let findBtn = document.querySelector('#find-button')
let input = document.querySelector('#search-selection')

// This code is retrieving data image data from the API. Included is an event listener which allows users to
// click on an image. This allows the user to see the title of the recipe and also an image of it.
const getRecipe = async (input) => {
  try {
    const getRecipeURL = `https://api.spoonacular.com/recipes/complexSearch?query=${input.value}&number=3&apiKey=28188e9faf684ee6a9c176bb130bf27f`
    const response = await axios.get(getRecipeURL)
    console.log(response.data.results)
    let recipes = response.data.results
    for (let i = 0; i < recipes.length; i++) {
      const result = document.createElement('div')
      const title = document.createElement('p')
      const imageDiv = document.createElement('img')
      imageDiv.addEventListener('click', function displayIngredients(e) { 
        e.preventDefault()
        getIngredients(recipes[i].id)
        imageDiv.removeEventListener('click', displayIngredients)
        console.log('You click me')
      })
      title.innerText = recipes[i].title;
      imageDiv.src = recipes[i].image
      result.classList.add(`recipes${recipes[i].id}`)
      result.append(title)
      result.append(imageDiv)
      dataContainer.append(result)
    }
  } catch (error) {
    console.error(error)
  }
}
findBtn.addEventListener('click', (e) =>{
  e.preventDefault()
  function remove() {
    while (dataContainer.lastChild) {
      dataContainer.removeChild(dataContainer.lastChild)
    }
  } remove()
  getRecipe(input)
})
// This code is allowing the user to see the extended ingredients list.
const getIngredients = async (id) => {
  try {
    const getIngredientList = `https://api.spoonacular.com/recipes/${id}/information?apiKey=28188e9faf684ee6a9c176bb130bf27f`
    const response = await axios.get(getIngredientList)
    const ingredients = response.data.extendedIngredients
    const div = document.querySelector(`.recipes${id}`)
    for (let i = 0; i < ingredients.length; i++) {
      const title = document.createElement('p')
      title.innerText = ingredients[i].name
      div.append(title)
    }
    console.log(response.data.extendedIngredients)
  } catch (error) {
    console.error(error)
  }
}

