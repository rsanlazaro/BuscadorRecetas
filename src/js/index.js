const search = document.getElementById('search');
const submit = document.getElementById('submit');
const mealEl = document.getElementById('card-meal');
const messageSearch = document.getElementById('messageSearch')

// Event listener
submit.addEventListener('submit', searchMeal);

function searchMeal (event){
    event.preventDefault();
    const termino = search.value;
        
    if(termino.trim()){
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${termino}`)
        .then(res => res.json())
        .then(data => {

            messageSearch.textContent = `Resultado de la búsqueda de ${termino}`;

            if(data.meals === null){
                messageSearch.textContent = `No hay resultados para ${termino}`;
                mealEl.textContent = ``;
            }else{
                mealEl.innerHTML = data.meals.map(
                    (meal) => `
                    <div class="column">
                        <div class="card" data-mealID="${meal.idMeal}">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                            <div class="card-body text-center">
                                <div class="meal-info">
                                    <h5 class="card-title">${meal.strMeal}</h5>
                                </div>
                                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapse${meal.idMeal}" aria-expanded="false" aria-controls="multiCollapse${meal.idMeal}">Ver más</button>
                            </div>
                        </div>
                        <div class="collapse multi-collapse" id="multiCollapse${meal.idMeal}">
                            <div class="card card-body text-center">
                            Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                    `
                ).join("");
            }
        });
    }else{
        messageSearch.textContent = `Debe ingresar el nombre de una receta`;
        messageSearch.className = 'text-danger';
        mealEl.textContent = ``;
    }
}

