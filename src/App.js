import Recipe from './components/Recipe'

var recipes = [{
    title: "Apple Pie",
    url: "https://i.ytimg.com/vi/RoHWiA6pogg/maxresdefault.jpg"
  },{
    title: "Ramen",
    url: "https://www.theflavorbender.com/wp-content/uploads/2019/01/Easy-Chicken-Ramen-Featured-500x375.jpg"
  },{
    title: "Tacos", url: "https://www.thewholesomedish.com/wp-content/uploads/2019/06/The-Best-Classic-Tacos-550.jpg"
  }]

function App() {
  return (
    <div style={{display:"flex"}}>
      {
        recipes.map(recipe =>
          <Recipe title={recipe.title} url={recipe.url}/>
        )
      }
    </div>
  );
}

export default App;
