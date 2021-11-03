import React, { useState } from 'react'
import '../styles/recipe.css'

import database from '../firebase'

function Recipe(props) {
    const [rating, setRating] = useState(props.rating)

    const saveToDb = () => {
        database.ref(`/users/recipes`).push(
            {
                title: props.title,
                url: props.url,
                db_rating: rating
            }
        )
    }

    const deleteFromDb = () => {
        database.ref(`/users/recipes/${props.id}`).remove()
    }

    return(
        <div className="recipe">
            <img src={props.url}></img>
            <p className="title">{props.title}</p>
            <p>{`rating: ${rating}`}</p>
            <button onClick={() => setRating(rating + 1)}>Increment Rating</button>
            {
            props.id ?
                <button onClick={() => deleteFromDb()}>Delete</button>
                :
                <button onClick={() => saveToDb()}>Save</button>
            }
        </div>
    )
}

export default Recipe
