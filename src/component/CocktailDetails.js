import React,{useState,useEffect} from 'react'



function CocktailDetails({match}) {

    useEffect(()=>{
        fetchItem()
       
    },[])

    const[item,setItem]=useState([])
    
    const fetchItem = async ()=>{
        const details =await fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${match.params.idDrink}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "715a9e03d8msh0e5f4f8f6299740p11432fjsnbe1ca979477c"
            }
        })

        const item= await details.json()
        console.log(item)
        setItem(item.drinks)

    }
    return (
        <div>
            <ul className='itemsShow'>
            {item.map(x => {
            return <div>
             <li key={x.idDrink}> <h1> Type :  {x.strAlcoholic}</h1> </li>
             <li><h2> Category  :  {x.strCategory}</h2> </li> 
             <li><h2>Ingredinets </h2><ol> <li>  {x.strIngredient1}</li> <li>  {x.strIngredient2}</li> <li>  {x.strIngredient3}</li></ol></li>  
             <li><h2>Instractions</h2> {x.strInstructions}</li>
             
             
             </div>
      
             })}
        </ul>
        </div>
    )
}

export default CocktailDetails
