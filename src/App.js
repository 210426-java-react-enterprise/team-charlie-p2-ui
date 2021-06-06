import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import { React, useState } from 'react';

function App() {

  const [screen, setScreen] = useState("home");

  const viewChange = (e) => {
    const newScreen = e.target.getAttribute("data-route");
    setScreen(newScreen);
  }

  return (
    <div className="App">
      {screen === "home" && <Home viewChange={viewChange} />}
      {screen === "login" && <Login viewChange={viewChange} />}
      {screen === "register" && <Register viewChange={viewChange} />}
    </div>
  );
}

export default App;
