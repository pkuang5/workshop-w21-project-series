import React, { useState } from 'react'
import Recipe from './components/Recipe'
import './App.css'
import recipes from './utils/recipes'
import Login from './components/Login';
import Logout from './components/Logout';


function App() {

  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState()

  return (
    <div className="App">      
      <div className="navbar">
        <p>Recipe App</p>
        {loggedIn ? 
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>
        :
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>}
      </div>
      {name ? <p>{`Welcome ${name}!`}</p>:null}
      <div className="recipes">
      {
        recipes.map(recipe =>
          <Recipe title={recipe.title} url={recipe.url}/>
        )
      }
      </div>
    </div>
  );
}

export default App;
