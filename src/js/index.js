import { createCard } from "./UIHandler.js";
const search = document.getElementById('search');
const submit = document.getElementById('submit');
const mealEl = document.getElementById('card-meal');
let lastSearchType = ''
const isVisible = "is-visible";
const randomMealBtn = document.getElementById('randomBtn')
.addEventListener('click',randomMeal)

    



submit.addEventListener('submit', searchMeal);
populateScreen()



document.addEventListener("keyup", e => {
 
    const modals=document.getElementsByClassName('modal')
    for(let modal of modals){
        if (e.key == "Escape" && modal) {
            modal.style.display='none';
          }

    }
    
  });
  
  

  
  
//LOCAL FUNCTIONS

 

function searchMeal (event){
    event.preventDefault();
    const termino = search.value;
    lastSearchType ='search'
    createCard(termino)
    
}

function randomMeal(event){
    event.preventDefault();
    if(lastSearchType=='search') {
        mealEl.innerHTML = ''}
    lastSearchType ='random'
    createCard('random',true,true)
}


function populateScreen(){
    if(lastSearchType=='search') {
        mealEl.innerHTML = ''}
    for(let i=0;i<4;i++){
        
        createCard('random',true,true)
        lastSearchType ='random'
        }
   

}