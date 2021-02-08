const searchFoods = async() =>{
    const searchText= document.getElementById('search-field').value;
    const url=` https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   //loading
    const res=await fetch(url);
   const data = await res.json();
   displayfoods(data.meals);
}
 const displayfoods = foods =>{
     const foodContainer=document.getElementById('food-container');
     foodContainer.innerHTML='';
    foods.forEach(food=>{
        const foodDiv=document.createElement('div');
        foodDiv.className='single-result row align-items-center my-3 p-3'
        foodDiv.innerHTML=`
        
        <div onclick="getRecipe('${food.strMeal}')">
        <img src="${food.strMealThumb}">
        <h3 class="food-name">${food.strMeal}</h3>
        
        
        </div>
        `;
        foodContainer.appendChild(foodDiv);

})
 }
const getRecipe=foodname=>{
     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`
     fetch(url)
     .then(res=>res.json())
     //.then(data=>dispayRec(data.meals))
     .then(data=>dispayRec(data.meals))
}

 const dispayRec=recipes=>{
    const recdiv=document.getElementById('food-recipe');
   //console.log(rec.strMeal);
   recipes.forEach(rec=>{
    recdiv.innerHTML=`
    
    <img src="${rec.strMealThumb}">
    <h2>${rec.strMeal}</h2>
    <h5>Ingredients</h4>
     <ul>
     <li>${rec.strMeasure1} ${rec.strIngredient1}</li>
     <li>${rec.strMeasure2} ${rec.strIngredient2}</li>
     <li>${rec.strMeasure3} ${rec.strIngredient3}</li>
     <li>${rec.strMeasure4} ${rec.strIngredient4}</li>
     <li>${rec.strMeasure5} ${rec.strIngredient5}</li>
     </ul>
      `;
 })
}