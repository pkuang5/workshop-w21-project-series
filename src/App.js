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
      {
        recipes.map(recipe =>
          <Recipe title={recipe.title} url={recipe.url}/>
        )
      }
      <div style={{}}>
        <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>
        {loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p> }
        <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
      </div>
    </div>
  );
}

export default App;
