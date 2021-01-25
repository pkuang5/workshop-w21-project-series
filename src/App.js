import Recipe from './components/Recipe'
import './App.css'
import recipes from './utils/recipes'
import Login from './components/Login';
import Logout from './components/Logout';


function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      {
        recipes.map(recipe =>
          <Recipe title={recipe.title} url={recipe.url}/>
        )
      }
    </div>
  );
}

export default App;
