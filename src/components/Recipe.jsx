import React, { useState } from 'react'
import '../styles/recipe.css'

import database from '../firebase'

function Recipe(props) {

    const [rating, setRating] = useState(0)

    const saveToDb = () => {
        database.ref(`/users/${props.googleObj.googleId}/recipes`).push(
            {
                title: props.title,
                url: props.url
            }
        )
    }

    return(
        <div className="recipe">
            <img src={props.url}></img>
            <p className="title">{props.title}</p>
            <p>{`rating: ${rating}`}</p>
            <button onClick={() => setRating(rating + 1)}>Increment Rating</button>
            <button onClick={() => saveToDb()}>Save</button>
        </div>
    )
}

export default Recipe
