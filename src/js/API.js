export{getRecipes}

function getRecipes(search){
  if(search === 'getRandom()'){
    
    return(getRandomMeal())
  }
  else if(search.toString().length === 1){
 
    return getRecipesByFirstLetter(search)
  }else if(search.toString().length > 1){
  
    return getRecipesByName(search)
  }
}


function getRandomMeal() {
 
  return fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then(response =>{
      if (response.ok){
        return response.json();
      } else{
        throw Error(`Request rejected with status ${response.status}`)
      }
    }).catch(console.error)
}

function getRecipesByFirstLetter(search) {
  console.log('By First letter')
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
  .then(response =>{
      if (response.ok){
        return response.json();
      } else{
        throw Error(`Request rejected with status ${response.status}`)
      }
    }).catch(console.error)
}
function getRecipesByName(search) {
  console.log('By name')

  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(response =>{
      if (response.ok){
        return response.json();
      } else{
        throw Error(`Request rejected with status ${response.status}`)
      }
    }).catch(console.error)
}
