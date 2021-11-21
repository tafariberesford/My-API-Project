# Project Overview

## Tafari's Spectacular Food Search

Deployed Link: https://tafariberesford.github.io/Tafari-s-Spectacular-Food-Search/

## Project Description

This project will allow users to search food recipes that they are interested in! From dinners to desserts, this project has it all. Users will be able to see a clear picture of the recipe and will be able to see what neccesary ingredients they would need as well! This website uses JavaScript, HTML, CSS and is supported on all browsers!

## API and Data Sample

Data displayed using GET request.

(URL included without API Key for privacy purposes https://api.spoonacular.com/recipes/complexSearch)
```
{
    "results": [
        {
            "id": 716426,
            "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
            "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715594,
            "title": "Homemade Garlic and Basil French Fries",
            "image": "https://spoonacular.com/recipeImages/715594-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 644387,
            "title": "Garlicky Kale",
            "image": "https://spoonacular.com/recipeImages/644387-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 715392,
            "title": "Chicken Tortilla Soup (Slow Cooker)",
            "image": "https://spoonacular.com/recipeImages/715392-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 716381,
            "title": "Nigerian Snail Stew",
            "image": "https://spoonacular.com/recipeImages/716381-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 782601,
            "title": "Red Kidney Bean Jambalaya",
            "image": "https://spoonacular.com/recipeImages/782601-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 794349,
            "title": "Broccoli and Chickpea Rice Salad",
            "image": "https://spoonacular.com/recipeImages/794349-312x231.jpg",
            "imageType": "jpg"
        },
  
    ],
    "offset": 0,
    "number": 10,
    "totalResults": 5076
}
```
## Wireframes

[Wireframe] (URL https://imgur.com/a/XjmIc48)

### MVP/PostMVP



#### MVP 

- Users should be able to search for recipes
- Users should be able to see images of recipes
- Old recipe selections should be deleted upon new selections

#### PostMVP  
- User should be able to hover over items.
- Autocomplete in search bar.

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Complete
|June 23| Pseudocode / actual code | Complete
|June 24| Initial Clickable Model  | Complete
|June 25| MVP | Complete
|June 28| Presentations | Complete

## Priority Matrix

https://imgur.com/a/b8szDTq

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Data Appending  | H | 3hrs| 3.5hrs | 3.5hrs |
| Create User Input | H | 3hrs| 3.5hrs | 3.5hrs |
| Take User Input | H | 3hrs| 3.5hrs | 3.5hrs |
| Adding Forms | H | 3hrs| 3.5hrs | 3.5hrs |
| Create buttons | H | 3hrs| 3.5hrs | 3.5hrs |
| Background Color/Font Editing | H | 3hrs| 3.5hrs | 3.5hrs |
| Designing | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 40hrs| 40hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

I am very proud of this code snippet that I provided below. I was able to create an event listener that would remove previous child nodes when new recipe data was being retrieved without having to refresh the page.

````dropDown.addEventListener('click', (e) => {
  e.preventDefault()
  function remove() {
    while (dataContainer.lastChild) {
      dataContainer.removeChild(dataContainer.lastChild)
    }
  } remove()
  getRecipe(input)
})````

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
