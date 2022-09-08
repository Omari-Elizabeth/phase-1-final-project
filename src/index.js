const userInput = document.getElementById("enterIngredient")
const formSubmit = document.querySelector('form')

	// Prevent submit default & get user's recipe request

formSubmit.addEventListener('submit', (getRecipeRequest))

function getRecipeRequest (e){
	e.preventDefault()
	const requestValue = userInput.value
	
	e.target.reset()
	fetchApi();
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d90c14bdfmsh4601b3922b31ffep175ce4jsne52c8cb50a63',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};







	
	