import { createCard } from "./UIHandler.js";
const search = document.getElementById('search');
const submit = document.getElementById('submit');
const mealEl = document.getElementById('card-meal');



const randomMealBtn = document.getElementById('randomBtn')
.addEventListener('click',randomMeal)

    
    
submit.addEventListener('submit', searchMeal);


function searchMeal (event){
    event.preventDefault();
    const termino = search.value;
    
    createCard(termino)
}

function randomMeal(event){
    event.preventDefault();
    createCard('getRandom()')
}