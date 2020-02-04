import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {todos} from './todos.json'
//import Navigation from "./components/Navigation";

console.log(todos);


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a href="*" className="text-white">
          
        </a>
      </nav>

      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
