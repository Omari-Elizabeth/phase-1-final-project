const userInput = document.getElementById("enterIngredient");
const formSubmit = document.querySelector('form');
const ul = document.querySelector('#ingredients')
const ol = document.querySelector('#recipeProcess')
let requestValue = userInput.value

// const ol = document.querySelector('ingredients');
	// Prevent submit default & get user's recipe request
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '3d90c14bdfmsh4601b3922b31ffep175ce4jsne52c8cb50a63',
			'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
		}
	};

formSubmit.addEventListener('submit', getRecipeRequest)

function getRecipeRequest (e){
	e.preventDefault()
	
	// e.target.reset()
	fetchRecipes();
}
	
async function fetchRecipes() {
	await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${requestValue}`, options)
		.then((response) => response.json())
		.then(function (response) {
	        let all = response.results
	        a.forEach(x => {
	            addToHtml(ul, 'h4', x.name)
	            // console.log(' ')
				addToHtml(ul, 'p', x.yields)
				
	            pickIngredients(x.sections)
	            // console.log(' ')
	            pickInstructions(x.instructions)
	            
	            console.log('----------------------------------------------------------------------- ')
				
				
	        }) 
	        console.log(a)
	    })
		.catch(err => console.error(err));		
}

function pickIngredients(x){
    x.map(d => {
        mappingThings(d.components)
    }) 
    
}

function mappingThings(a,c='raw_text'){
    a.map(b => {
        addToHtml(ul, 'P', b[c])
    }) 
}

