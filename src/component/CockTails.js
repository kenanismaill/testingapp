import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

function CockTails() {
    var size=32 // we create size obeject to use it in  map function  to get elements from array between x to y 
    useEffect(()=>{
        fetchItems()
    },[])

    const[items,setItems]=useState([]) // here empty array mean we would recive a default array such as expected  
    const  ingredients_name="Campari"
    
    const fetchItems= async()=>{
        const data= await  fetch(`https://the-cocktail-db.p.rapidapi.com/filter.php?c=Cocktail`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
                "x-rapidapi-key": "093d363afemshd4e89d520ac8fc1p14319cjsnf28f8942f79d"
            }
        })
        .catch(error=>{
            console.log(error)
        })
        const items=await data.json() // convert data to json
    //    console.log(items)
        setItems(items.drinks)
    }

    return (
            <div className = 'container'>
        
                <div className='row' >
                        {items.slice(20,size).map(item=>{
                            return <div className='col-md-4'> <Link to={`/cocktails/${item.idDrink}`}> <img src={item.strDrinkThumb} className="image" ></img> </Link>
                                    <div><h3>{item.strDrink}</h3></div>
                            </div>
                        })

                        }
                </div>

            </div>
        
    )
}

export default CockTails
