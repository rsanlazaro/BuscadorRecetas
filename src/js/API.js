export{getRecipes}

function getRecipes(search,random=false){
  if(random){
    return(getRandomMeal())
  }
  else if(Number(search)){
    return getRecipesById(search)
  }
  else if(search.toString().length === 1){
 
    return getRecipesByFirstLetter(search)
  }else if(search.toString().length > 1){
  
    return getRecipesByName(search)
  }
}
/*async function getArrayOfRandom(qty=4){
  const mealsArray=[]
  for(let i=0;i<qty;i++){
    mealsArray.push(getRandomMeal())
  }
  return new Promise(resolve => {
   // mealsArray.
    resolve(console.log(mealsArray))
  });
}*/


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
function getRecipesById(search) {
  console.log('By Id')

  return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${search}`)
    .then(response =>{
      if (response.ok){
        return response.json();
      } else{
        throw Error(`Request rejected with status ${response.status}`)
      }
    }).catch(console.error)
}