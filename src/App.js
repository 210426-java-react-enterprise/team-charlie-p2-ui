import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
<<<<<<< HEAD
import Menu from "./components/Menu"
import Favorites from "./components/Favorites"
=======

import Menu from "./components/Menu";
import Settings from "./components/Settings";
import Search from "./components/Search"

>>>>>>> 8bdc435ba209175f3566401861c9cd174c49d418
import { React, useState } from 'react';
import AlertBox from "./components/AlertBox"
import logo from './resources/logo.svg';

function App() {

  // useState("home") returns ["home", function for updating state]
  // needs state to hold favorite recipes (probably an array of objects) and meal plan (probably an object of objects)
  const [screen, setScreen] = useState("home");
  const [homepage, setHomepage] = useState("home");
  const [menu, setMenu] = useState(false);
<<<<<<< HEAD
  const [menuOptions, setMenuOptions] = useState(["Login", "Register", "Favorites"]);
  const [currentUsername, setCurrentUsername] = useState("");
=======
  const [menuOptions, setMenuOptions] = useState(["Login", "Register", "Search"]);

  const [currentUser, setCurrentUser] = useState({});
>>>>>>> 8bdc435ba209175f3566401861c9cd174c49d418
  const [currentToken, setCurrentToken] = useState("");
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);


  const viewChange = (e) => {
    const newScreen = e.target.getAttribute("data-route");
    setScreen(newScreen);
  }

  const toggleMenu = () => {
    setMenu(!menu);
  }


  const resetState = () => {
    setCurrentUser({});
    setCurrentToken("");
  }

  const logout = (e) =>{
    viewChange(e);
    resetState();
  }


  const reset = () => {
    setScreen("home");
    setHomepage("home");
    setMenuOptions(["Login", "Register"]);
    setCurrentUser({})
    setCurrentToken("");
  }


  return (
    <div id="app">
      {menu && <Menu menuOptions={menuOptions} viewChange={viewChange} />}
      <nav id="nav-bar">
        <button type="button" id="menu-button" className="icon-button" onClick={toggleMenu}><i className="fas fa-bread-slice"></i></button>
        <button type="button" id="home-button" className="icon-button" data-route={homepage} onClick={viewChange}><h1>Pantry.io</h1></button>
        <button type="button" id="logout-button" className="icon-button" data-route='home' onClick={logout}><h1>Logout</h1></button>
      </nav>
      {screen === "home" && <Home viewChange={viewChange} />}
<<<<<<< HEAD
      {screen === "login" && <Login viewChange={viewChange} />}
      {screen === "register" && <Register viewChange={viewChange} setCurrentUsername={setCurrentUsername} setCurrentToken={setCurrentToken} setMenuOptions={setMenuOptions} setHomepage={setHomepage} />}
      {screen === "favorites" && <Favorites viewChange={viewChange} setFavoriteRecipes={setFavoriteRecipes} setMenuOptions={setMenuOptions} setHomepage={setHomepage} favoriteRecipes={favoriteRecipes} currentToken={currentToken}/>}
=======
      {screen === "login" && <Login viewChange={viewChange} setCurrentToken={setCurrentToken} setMenuOptions={setMenuOptions} setHomepage={setHomepage} setCurrentUser={setCurrentUser}/>}
      {screen === "register" && <Register viewChange={viewChange} setCurrentToken={setCurrentToken} setMenuOptions={setMenuOptions} setHomepage={setHomepage} setCurrentUser={setCurrentUser} />}
      {screen === "settings" && <Settings reset={reset} currentToken={currentToken}/>}
      {screen === "search" && <Search setCurrentUser={setCurrentUser} viewChange={viewChange} currentToken={currentToken}/>}
    
>>>>>>> 8bdc435ba209175f3566401861c9cd174c49d418
    </div>
  );
}

export default App;
