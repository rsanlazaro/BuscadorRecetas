import{getRecipes} from './API.js'
export {createCard}

function createCard(search,random=false,keepLastSearch=false){
    
    getRecipes(search,random).then(dataFromResponse=>{
        const meals = document.getElementById('card-meal')
      
        document.querySelectorAll(".modal").forEach(e => e.remove());
        if(!keepLastSearch) meals.innerHTML = "";
        
        if(random){search='aleatoria'}
        messageSearch.textContent = `Resultado de la búsqueda de ${search}`;
        if(dataFromResponse.meals != null){
            dataFromResponse.meals.forEach(item =>{
                console.log(item)
                
                        
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
                        
                        const newCardTitle = document.createElement('h3')
                        newCardTitle.className =('card-title')
                        //newCardTitle.classList.add('flex-fill')
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
                        newCardButton.setAttribute('data-open',"modaltest")
                    


                        const newCardLowerBody = document.createElement('div')
                        newCardLowerBody.className = 'card card-body'
                        newCardLowerBody.id='cardbody'

                        const catAndAreaContainer = document.createElement('div')
                        catAndAreaContainer.id='cardbodyflex'


                        const strongArea = document.createElement('strong')
                        strongArea.textContent='Area:'
                        strongArea.className='h4'
                        const newParagrapghArea = document.createElement('p')
                        newParagrapghArea.className='h4'
                        newParagrapghArea.textContent = `${item.strArea}`

                        const strongCat = document.createElement('strong')
                        strongCat.className='h4'
                        strongCat.textContent='Categoria:'
                        const newParagrapghCategory = document.createElement('p')
                        newParagrapghCategory.className = 'h4'
                        newParagrapghCategory.textContent = `${item.strCategory}`
                

                        const newSeeMore = document.createElement('button')
                        newSeeMore.setAttribute('type',"button")
                        newSeeMore.className="btn btn-secondary btn-sm"
                        newSeeMore.textContent= 'Ver Instrucciones de la receta'


                        newSeeMore.addEventListener('click',function(){
                            if(!document.getElementById(`modal${item.idMeal}`)){

                                createModal(item.idMeal).then(response=>{
                                   // response.classList.add(isVisible);
                                    const main = document.getElementById('main')
                                    response.style.display = "block";
                                    console.log('modal')
                                    main.appendChild(response)  
                                  
    
                                })
                            }else{
                                console.log('modal')
                                const modal =document.getElementById(`modal${item.idMeal}`)
                                modal.style.display = 'block'
                                



                            }
                                    
                        })

                        catAndAreaContainer.appendChild(strongArea)
                        catAndAreaContainer.appendChild(newParagrapghArea)
                        catAndAreaContainer.appendChild(strongCat)
                        catAndAreaContainer.appendChild(newParagrapghCategory)

                        newCardLowerBody.appendChild(catAndAreaContainer)
                        newCardLowerBody.appendChild(newSeeMore)
                  
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
        }
        
 })
 
        

}

 async function createModal(mealId){
    return new Promise((resolve, reject) => {
        getRecipes(mealId).then(dataFromResponse=>{
            //MODAL
            const meal = dataFromResponse.meals[0]
            const newIngredientList = document.createElement('ol')
                newIngredientList.className='list-group list-group-numbered'

                    
                for(let i=1;i<21;i++){
                    if(meal[`strIngredient${i}`]){
                        const newItemLi = document.createElement('li')
                        newItemLi.className="list-group-item d-flex justify-content-between align-items-start"
                        
                        const newItemDiv = document.createElement('div')
                        newItemDiv.className='ms-2 me-auto'
                        

                        const newItemSubHeader = document.createElement('div')
                        newItemSubHeader.className='fw-bold'
                        newItemSubHeader.textContent = meal[`strIngredient${i}`]

                        newItemDiv.appendChild(newItemSubHeader)
                        newItemDiv.innerHTML+=meal[`strMeasure${i}`]
                        
                        
                        newItemLi.appendChild(newItemDiv)
                        newIngredientList.appendChild(newItemLi)

                        console.log(meal[`strIngredient${i}`])
                        console.log(meal[`strMeasure${i}`])


                                
                            }

                        }
            const newModal = document.createElement('div')
            newModal.className = 'modal'
            newModal.id=`modal${meal.idMeal}`
            newModal.setAttribute('data-animation','slideInOutLeft')
            //newModal.setAttribute("tabindex","1")


                //MODAL CONTENT
            const newModalContent=document.createElement('div')
            newModalContent.className='modal-content'
            
                    //MODAL HEADER
            const newModalHeader = document.createElement('header')
            newModalHeader.className = 'modal-header'
          
                        //MODAL TITTLE
            const newModalTittle = document.createElement('h2')
            newModalTittle.textContent= meal.strMeal

                        //MODAL BUTTON
            const newModalButton = document.createElement('button')
            newModalButton.className='close-modal'
            newModalButton.id='close'
            newModalButton.setAttribute('aria-label','close modal')
            newModalButton.textContent = '✕'
            

            
                    //MODAL BODY
            const newModalBody = document.createElement('div')
            newModalBody.className = 'modal-body'



                        //MODALACCORDEON
            const newModalAcc=document.createElement('div')
            newModalAcc.className='accordion'
            newModalAcc.id='accordionPanelsStayOpenExample'
           
                            //accordion item 1 ingredients
            const newAccItemIng = document.createElement('div')
            newAccItemIng.className='accordion-item'
            
                                //accordion header
            const newAccItemIngHeader = document.createElement('h2')
            newAccItemIngHeader.className='accordion-header'
            newAccItemIngHeader.id='panelsStayOpen-headingOne'

            const newAccIngButton = document.createElement('button')
            newAccIngButton.className='accordion-button'
            newAccIngButton.setAttribute('type','button')
            newAccIngButton.setAttribute('data-bs-toggle','collapse')
            newAccIngButton.setAttribute('data-bs-target',"#panelsStayOpen-collapseOne")
            newAccIngButton.setAttribute('aria-expanded',"true")
            newAccIngButton.setAttribute('aria-controls',"panelsStayOpen-collapseOne")
            newAccIngButton.textContent='INGREDIENTES'

                                //accordion collapse
            const newAccIngCollapse = document.createElement('div')
            newAccIngCollapse.id='panelsStayOpen-collapseOne'
            newAccIngCollapse.className='accordion-collapse collapse'
            newAccIngCollapse.setAttribute('aria-labelledby',"panelsStayOpen-headingOne")
            

            const newAccIngBody= document.createElement('div')
            newAccIngBody.className='acc-body'
            newAccIngBody.appendChild(newIngredientList)

                //accordion item 2 instructions
            const newAccItemIns = document.createElement('div')
            newAccItemIns.className='accordion-item'
            
                                //accordion header
            const newAccItemInsHeader = document.createElement('h2')
            newAccItemInsHeader.className='accordion-header'
            newAccItemInsHeader.id='panelsStayOpen-headingTwo'

            const newAccInsButton = document.createElement('button')
            newAccInsButton.className='accordion-button'
            newAccInsButton.setAttribute('type','button')
            newAccInsButton.setAttribute('data-bs-toggle','collapse')
            newAccInsButton.setAttribute('data-bs-target',"#panelsStayOpen-collapseTwo")
            newAccInsButton.setAttribute('aria-expanded',"true")
            newAccInsButton.setAttribute('aria-controls',"panelsStayOpen-collapseTwo")
            newAccInsButton.textContent='INSTRUCCIONES'

                                //accordion collapse
            const newAccInsCollapse = document.createElement('div')
            newAccInsCollapse.id='panelsStayOpen-collapseTwo'
            newAccInsCollapse.className='accordion-collapse collapse'
            newAccInsCollapse.setAttribute('aria-labelledby',"panelsStayOpen-headingTwo")
            

            const newAccInsBody= document.createElement('div')
            newAccInsBody.className='acc-body'
            newAccInsBody.textContent=meal.strInstructions


            newAccItemIngHeader.appendChild(newAccIngButton)
            newAccItemIng.appendChild(newAccItemIngHeader)
            newAccIngCollapse.appendChild(newAccIngBody)
            newAccItemIng.appendChild(newAccIngCollapse)


            newAccItemInsHeader.appendChild(newAccInsButton)
            newAccItemIns.appendChild(newAccItemInsHeader)
            newAccInsCollapse.appendChild(newAccInsBody)
            newAccItemIns.appendChild(newAccInsCollapse)

            newModalAcc.appendChild(newAccItemIng)
            newModalAcc.appendChild(newAccItemIns)

            








        







    
                        //MODAL PARAGRAPHS
            const newModalSectionParagraph = document.createElement('p')
            newModalSectionParagraph.textContent = meal.strInstructions
            
            const newVideo= document.createElement('iframe')
            newVideo.setAttribute('width','80%')
            newVideo.setAttribute('height','400')
            console.log(meal.strYoutube)
            const linkVideo = meal.strYoutube.slice(32,meal.strYoutube.lenght)
            console.log(linkVideo)

            newVideo.src=`https://www.youtube.com/embed/${linkVideo}`

     
                    //MODAL FOOTER
            const newModalFooter = document.createElement('footer')
            newModalFooter.className = 'modal-footer'
            

            const newModalFooterTittle = document.createElement('h3')
            
            

            const newWatchOnYoutube = document.createElement('a')
            newWatchOnYoutube.textContent='¡Ver Turotial de la receta!'
            newWatchOnYoutube.setAttribute('target',"_blank")
            
            newWatchOnYoutube.href = meal.strYoutube
            newModalFooterTittle.appendChild(newWatchOnYoutube)



      
 
        
            //MODAL HEADER
            newModalHeader.appendChild(newModalTittle)
            newModalHeader.appendChild(newModalButton)
            //newModalBody.appendChild(newModalSectionParagraph)
            newModalBody.appendChild(newVideo)
            newModalBody.appendChild(newModalAcc)
            newModalFooter.appendChild(newModalFooterTittle)
            newModalContent.appendChild(newModalHeader)
            newModalContent.appendChild(newModalBody)
            newModalContent.appendChild(newModalFooter)
     
            newModal.appendChild(newModalContent)

            console.log(document.getElementById(`modal${meal.idMeal}`))
            
            newModalButton.addEventListener("click", function() {
                newModal.style.display = "none"
              });

            resolve(newModal)
            
         })
        
        
    })
    
}
