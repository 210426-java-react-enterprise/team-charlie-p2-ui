import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Menu from "./components/Menu"
import { React, useState } from 'react';
import logo from './resources/logo.svg';

function App() {
  //useState("home") returns ["home", function for updating state]
  const [screen, setScreen] = useState("home");
  const [homepage, setHomepage] = useState("home");
  const [menu, setMenu] = useState(false);
  const [menuOptions, setMenuOptions] = useState(["Login", "Register"]);
  const [currentUsername, setCurrentUsername] = useState("");
  const [currentToken, setCurrentToken] = useState("");

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
      <button type="button" id="menu-button" className="icon-button" onClick={toggleMenu}><i className="fas fa-bars"></i></button>
        <button type="button" id="home-button" className="icon-button" data-route={homepage} onClick={viewChange}><img src={logo} alt="logo"></img></button>
      </nav>
      {screen === "home" && <Home viewChange={viewChange} />}
      {screen === "login" && <Login viewChange={viewChange} />}
      {screen === "register" && <Register viewChange={viewChange} setCurrentUsername={setCurrentUsername} setCurrentToken={setCurrentToken} setMenuOptions={setMenuOptions} setHomepage={setHomepage} />}
    </div>
  );
}

export default App;
