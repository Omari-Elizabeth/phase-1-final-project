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
async function fetchApi(){
	const response = await fetch('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/search?query=pasta&offset=0&number=10&minCalories=0&maxCalories=5000&minProtein=0&maxProtein=100&minFat=0&maxFat=100&minCarbs=0&maxCarbs=100', options)
	const data = await response.json()
	console.log(data.menuItems)
	// .then(response => response.json())
	// .then(response => console.log(response))
	// .catch(err => console.error(err));
}





	
	