import React, { useState } from 'react'
import Recipe from './components/Recipe'
import './App.css'
import recipes from './utils/recipes'
import Login from './components/Login';
import Logout from './components/Logout';
import MyRecipes from './components/MyRecipes'


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [googleObj, setGoogleObj] = useState()

  return (
    <div className="App">      
      <div className="navbar">
        <p>Recipe App</p>
        {loggedIn ? 
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>
        :
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>}
      </div>
      {googleObj ? 
      <div>
        <p>{`Welcome ${googleObj.name}!`}</p>
        <p>My Recipes</p>
        <div className="recipes">
          <MyRecipes googleObj={googleObj} />
        </div>
        <p>End of My Recipes</p>
      </div>
      :null}
      <div className="recipes">
      {
        recipes.map(recipe =>
          <Recipe googleObj={googleObj} title={recipe.title} url={recipe.url}/>
        )
      }
      </div>
    </div>
  );
}

export default App;
