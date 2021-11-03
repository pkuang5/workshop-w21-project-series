import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'

import database from '../firebase'

function MyRecipes() {

    const [recipes, setRecipes] = useState([])
    
    useEffect(() =>
    database.ref(`/users/recipes`).on("value", (snapshot) => {
            if (snapshot) {
                console.log(snapshot.val())
                let myRecipes = []
                snapshot.forEach( data => {
                    let recipe = {
                        id: data.key,
                        title: data.val().title,
                        url: data.val().url,
                        db_rating: data.val().db_rating
                    }
                    myRecipes.push(recipe) 
                }) 
                setRecipes(recipes.concat(myRecipes))
            }
        })
    ,[])

    return(
        recipes.map(recipe =>
            <Recipe id={recipe.id} title={recipe.title} url={recipe.url} rating = {recipe.db_rating}/>
        )
    )
}

export default MyRecipes
