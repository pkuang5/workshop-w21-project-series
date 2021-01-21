import React, { useState } from 'react'

function Recipe(props) {

    const [rating, setRating] = useState(0)

    return(
        <div style={{width: "20rem", borderRadius: "0.375rem", backgroundColor: "rgba(252, 211, 36)"}}>
            <img style={{width: "100%"}} src={props.url}></img>
            <p style={{textAlign: "center"}}>{`Name:${props.title}`}</p>
            <p style={{textAlign: "center"}}>{`Rating:${rating}`}</p>
            <button onClick={() => setRating(rating + 1)}>Increment Rating</button>
        </div>
    )
}

export default Recipe