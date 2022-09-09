const userInput = document.getElementById("enterIngredient");
const formSubmit = document.querySelector('form');
const ul = document.querySelector('#ingredients')
const ol = document.querySelector('#recipeProcess')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5c72fa5e49mshddc6f1d2831d5f9p13c282jsn76cbd9c73540',
		//'3d90c14bdfmsh4601b3922b31ffep175ce4jsne52c8cb50a63',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

formSubmit.addEventListener('submit', getRecipeRequest)

function getRecipeRequest (e){
	e.preventDefault()
	
	let requestValue = e.target.children.enterIngredient
	fetchRecipes(requestValue.value);
}
	
async function fetchRecipes(query) {
	await fetch(`https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=${query}`, options)
		.then((response) => response.json())
		.then(function (response) {
			removeElement();
	        let a = response.results
	        a.forEach(x => {
	            addToHtml(ul, 'h3', x.name)
	            // console.log(' ')
				addToHtml(ul, 'p', x.yields)
				addToHtml(ul, 'h4', 'Ingredients')
	            pickIngredients(x.sections)
	            addToHtml(ul, 'br')

				addToHtml(ul, 'h4', 'Procedure')
	            pickInstructions(x.instructions)
				addToHtml(ul, 'p', '************************************************')
				addToHtml(ul, 'br')
	            
	            console.log('----------------------------------------------------------------------- ')
				
				
	        }) 
	        
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
function pickInstructions(aray) {
	aray.forEach(d => {console.log(d.display_text)}) 
    aray.forEach(d => {addToHtml(ul, 'p', d.display_text)}) 
    // console.log(" ")
}
fetchRecipes()

function addToHtml(parNode, eleMent = 'p', dataContent=null){
	const node = document.createElement(eleMent);
	if (dataContent!==null){node.textContent = dataContent;}
	parNode.appendChild(node);
}
const displayOnClick = document.querySelector('#submit')
displayOnClick.addEventListener('click', displayRecipe);
function displayRecipe(){
	displayOnClick.style.display="block";
	// addToHtml(ul, 'P', b[c])
}

function removeElement(myNode = ul){
	while (myNode.lastElementChild) {
	  myNode.removeChild(myNode.lastElementChild);
	}
  }