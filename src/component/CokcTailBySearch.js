import React from 'react'

const CokcTailBySearch=(props)=>(

    <div>
        { props.cocktailName.map((name)=>{
            return <p key={name.idIngredient}> AlCohol :  {name.strAlcohol}</p>
        })
        }
    </div>
)

export default CokcTailBySearch
