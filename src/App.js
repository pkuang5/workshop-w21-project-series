import React, { useState } from 'react'
import Recipe from './components/Recipe'
import './App.css'
import recipes from './utils/recipes'
import Login from './components/Login';
import Logout from './components/Logout';
import MyRecipes from './components/MyRecipes'


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [buttontext, setButtonText] = useState("Login")
  const [googleObj, setGoogleObj] = useState()

  const afterLogIn = (isLoggedIn) =>{
    if(isLoggedIn){
      setLoggedIn(false)
      setButtonText("Login")
    }
    else{
      setLoggedIn(true)
      setButtonText("Logout")
    }
  }

  return (
    <div className="App">      
      <div className="navbar">
        <p>Recipe App</p>
        {loggedIn ?
          <button onClick={() => afterLogIn(loggedIn)}>{buttontext}</button>
          :
          <button onClick={() => afterLogIn(loggedIn)}>{buttontext}</button>}
      </div>

      {loggedIn ? 
      <div>
        <p>My Recipes</p>
        <div className="recipes">
          <MyRecipes/>
        </div>
        <p>End of My Recipes</p>
      </div>
      :null}

      <div className="recipes">
      {
        recipes.map(recipe =>
          <Recipe googleObj={googleObj} title={recipe.title} url={recipe.url} rating = {0}/>
        )
      }
      </div>
    </div>
  );
}

export default App;
