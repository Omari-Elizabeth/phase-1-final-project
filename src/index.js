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
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};
async function fetchApi(){
	const response = await fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=fish', options)
	const data = await response.json()
	getRecipeResponse(data.hits)
	console.log(data)
}
function getRecipeResponse(response){
	response.map(result => {
		function displayIngredients(){
			commentsList.innerHTML = '';
			comments.forEach(element => {
				const li = document.createElement('li')
				li.textContent = element.content
				commentsList.appendChild(li);
			});   
		}
	})
}




	
	