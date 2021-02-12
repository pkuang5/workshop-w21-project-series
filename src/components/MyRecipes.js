import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'

import database from '../firebase'

function MyRecipes(props) {

    const [recipes, setRecipes] = useState([])
    
    useEffect(() =>
    database.ref(`/users/${props.googleObj.googleId}/recipes`).on("value", (snapshot) => {
            if (snapshot) {
                console.log(snapshot.val())
                let myRecipes = []
                snapshot.forEach( data => {
                    let recipe = {
                        id: data.key,
                        title: data.val().title,
                        url: data.val().url
                    }
                    myRecipes.push(recipe) 
                }) 
                setRecipes(recipes.concat(myRecipes))
            }
        })
    ,[])

    return(
        recipes.map(recipe =>
            <Recipe id={recipe.id} googleObj={props.googleObj} title={recipe.title} url={recipe.url}/>
        )
    )
}

export default MyRecipes
