import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu"
import Favorites from "./components/Favorites"
import { React, useState } from 'react';
import logo from './resources/logo.svg';

function App() {

  // useState("home") returns ["home", function for updating state]
  // needs state to hold favorite recipes (probably an array of objects) and meal plan (probably an object of objects)
  const [screen, setScreen] = useState("home");
  const [homepage, setHomepage] = useState("home");
  const [menu, setMenu] = useState(false);
  const [menuOptions, setMenuOptions] = useState(["Login", "Register", "Favorites"]);
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentToken, setCurrentToken] = useState("");
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const viewChange = (e) => {
    const newScreen = e.target.getAttribute("data-route");
    setScreen(newScreen);
  }

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div id="app">
      {menu && <Menu menuOptions={menuOptions} viewChange={viewChange} />}
      <nav id="nav-bar">
        <button type="button" id="menu-button" className="icon-button" onClick={toggleMenu}><i className="fas fa-bread-slice"></i></button>
        <button type="button" id="home-button" className="icon-button" data-route={homepage} onClick={viewChange}><h1>Pantry.io</h1></button>
      </nav>
      {screen === "home" && <Home viewChange={viewChange} />}
      {screen === "login" && <Login viewChange={viewChange} />}
      {screen === "register" && <Register viewChange={viewChange} setCurrentUsername={setCurrentUsername} setCurrentToken={setCurrentToken} setMenuOptions={setMenuOptions} setHomepage={setHomepage} />}
      {screen === "favorites" && <Favorites viewChange={viewChange} setFavoriteRecipes={setFavoriteRecipes} setMenuOptions={setMenuOptions} setHomepage={setHomepage} favoriteRecipes={favoriteRecipes} currentToken={currentToken}/>}
    </div>
  );
}

export default App;
