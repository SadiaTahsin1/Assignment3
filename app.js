const getMeal = async() => {
    const result=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata');
const data=await Response.json();
console.log(data.hits);
};
