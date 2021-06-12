import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

import Menu from "./components/Menu";
import Settings from "./components/Settings";
import Search from "./components/Search"
import MealPlan from "./components/MealPlan";

import { React, useState } from 'react';
import logo from './resources/logo.svg';

function App() {

  // useState("home") returns ["home", function for updating state]
  // needs state to hold favorite recipes (probably an array of objects) and meal plan (probably an object of objects)
  const [screen, setScreen] = useState("home");
  const [homepage, setHomepage] = useState("home");
  const [menu, setMenu] = useState(false);
  const [menuOptions, setMenuOptions] = useState(["Login", "Register", "Search"]);
  const [favorites, setFavorites] = useState([]);
  //const [currentUser, setCurrentUser] = useState({});
  const [currentToken, setCurrentToken] = useState("");

  const viewChange = (e) => {
    const newScreen = e.target.getAttribute("data-route");
    setScreen(newScreen);
  }

  const toggleMenu = () => {
    setMenu(!menu);
  }


  const resetState = () => {
    setFavorites([]);
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
    //setCurrentUser({})
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
      {screen === "login" && <Login viewChange={viewChange} setCurrentToken={setCurrentToken} setMenuOptions={setMenuOptions} setHomepage={setHomepage}/>}
      {screen === "register" && <Register viewChange={viewChange} setCurrentToken={setCurrentToken} setMenuOptions={setMenuOptions} setHomepage={setHomepage} />}
      {screen === "settings" && <Settings reset={reset} currentToken={currentToken}/>}
      {screen === "search" && <Search viewChange={viewChange} setFavorites={setFavorites} favorites={favorites} currentToken={currentToken}/>}
      {screen === "mealPlan" && <MealPlan viewChange={viewChange} setUserId={viewChange} setMealPlan={viewChange}/>}
    </div>
  );
}

export default App;
