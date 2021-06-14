import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu"
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import SearchSelect from "./components/SearchSelect";
import Favorites from "./components/Favorites"
import Settings from "./components/Settings";
import MealPlan from "./components/MealPlan";
import { React, useState } from 'react';
import AlertBox from "./components/AlertBox";
import logo from './resources/logo.svg';

function App() {

  // useState("home") returns ["home", function for updating state]
  // needs state to hold favorite recipes (probably an array of objects) and meal plan (probably an object of objects)
  const [screen, setScreen] = useState("register");
  const [landing, setLanding] = useState(false);
  const [spin, setSpin] = useState("no-spin");
  const [menu, setMenu] = useState(false);
  const [menuOptions, setMenuOptions] = useState(["Dashboard", "Search", "Favorites", "Meal Plan", "Settings"]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentToken, setCurrentToken] = useState("");
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);

  const viewChange = (e) => {
    const newScreen = e.target.getAttribute("data-route");
    setScreen(newScreen);
  }

  const toggleMenu = () => {
    const newClass = menu ? "unspinny" : "spinny";
    setSpin(newClass);
    setMenu(!menu);
  }

  const reset = (e) => {
    setLanding(true);
    setCurrentUser({});
    setCurrentToken("");
    if (e != undefined) {
      viewChange(e);
    } else {
      setScreen("register");
    }
  }


  return (
    <div id="app">
      <Menu menuOptions={menuOptions} viewChange={viewChange} menu={menu} />
      {!landing && <nav id="nav-bar">
        <button type="button" id="menu-button" className="icon-button" onClick={toggleMenu}><i className={`fas fa-bread-slice ${spin}`}></i></button>
        <button type="button" id="home-button" className="icon-button" data-route="dashboard" onClick={viewChange}><h1>Pantry.io</h1></button>
        <button type="button" id="logout-button" className="icon-button" data-route="login" onClick={reset}><h1>Logout</h1></button>
      </nav>}
      {screen === "login" && <Login setLanding={setLanding} viewChange={viewChange} setCurrentToken={setCurrentToken} setMenuOptions={setMenuOptions} setCurrentUser={setCurrentUser}/>}
      {screen === "register" && <Register setLanding={setLanding} viewChange={viewChange} setCurrentToken={setCurrentToken} setMenuOptions={setMenuOptions} setCurrentUser={setCurrentUser}/>}
      {screen === "dashboard" && <Dashboard viewChange={viewChange} setMenuOptions={setMenuOptions} setCurrentUser={setCurrentUser} currentToken={currentToken} currentUser={currentUser} />}
      {screen === "favorites" && <Favorites viewChange={viewChange} setFavoriteRecipes={setFavoriteRecipes} setMenuOptions={setMenuOptions} favoriteRecipes={favoriteRecipes} currentToken={currentToken}/>}
      {screen === "settings" && <Settings reset={reset} currentToken={currentToken}/>}
      {screen === "search" && <Search setCurrentUser={setCurrentUser} viewChange={viewChange} currentToken={currentToken}/>}
      {screen === "plan" && <MealPlan viewChange={viewChange} setCurrentUser={setCurrentUser} currentUser={currentUser}/>}
    </div>
  );
}

export default App;
