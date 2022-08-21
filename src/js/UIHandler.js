import{getRecipes} from './API.js'
export {createCard}

function createCard(search){
    getRecipes(search).then(dataFromResponse=>{
        const meals = document.getElementById('card-meal')
        meals.innerHTML = "";
        if(search=='getRandom()'){search='aleatoria'}
        messageSearch.textContent = `Resultado de la búsqueda de ${search}`;
        if(dataFromResponse.meals != null){
            dataFromResponse.meals.forEach(item =>{
            
                
                        const newColumn = document.createElement('div')
                        newColumn.className = 'column'
            
                        const newCard = document.createElement('div')
                        newCard.className =('card')
                        
                        const newImg = document.createElement('img')
                        newImg.className =('card-img-top')
                        newImg.src = item.strMealThumb
                        
                        const newCardBody = document.createElement('div')
                        newCardBody.className =('card-body text-center')
            
                        const newCardInfo = document.createElement('div')
                        newCardInfo.className= 'meal-info'
                        
                        const newCardTitle = document.createElement('h5')
                        newCardTitle.className =('card-title')
                        newCardTitle.textContent=item.strMeal
            
                        
            
                        const newCardCollapse = document.createElement('div')
                        newCardCollapse.className = 'collapse'
                        newCardCollapse.id=`multiCollapse${item.idMeal}`
              
                        const newCardButton = document.createElement('button')
                        newCardButton.className = 'btn btn-primary'
                        newCardButton.id = `test${item.idMeal}`
                        newCardButton.textContent = 'Ver Mas'
                        newCardButton.setAttribute('type',"button")
                        newCardButton.setAttribute("data-bs-toggle", "collapse") 
                        newCardButton.setAttribute('data-bs-target',`#multiCollapse${item.idMeal}`)
                        newCardButton.setAttribute('aria-expanded',"false")
                        newCardButton.setAttribute('aria-controls',`#multiCollapse${item.idMeal}`)
                        newCardButton.dataset.target = `#multiCollapse${item.idMeal}`
                        
                        const newCardLowerBody = document.createElement('div')
                        newCardLowerBody.className = 'card card-body'
                        
                        newCardLowerBody.textContent = item.strInstructions
                  
                        newCardInfo.appendChild(newCardTitle)
                        newCardBody.appendChild(newCardInfo)
                        newCardBody.appendChild(newCardButton)
                        newCard.appendChild(newImg)
                        newCard.appendChild(newCardBody)
            
                        newCardCollapse.appendChild(newCardLowerBody)
                        
            
            
                        
                        
                    
            
                        const meals = document.getElementById('card-meal')
                        newColumn.appendChild(newCard)
                        newColumn.appendChild(newCardCollapse)
                        meals.appendChild(newColumn)
                
                    })
            
        }else{
            const messageSearch = document.getElementById('messageSearch')
            messageSearch.textContent = `No hay resultados para ${search}`;
            mealEl.textContent = ``;
        }
 })

        

}
    
