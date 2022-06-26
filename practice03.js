//React disadvantages is... it is manage by client side rendering...
//React is a component based design...
//      1. class based component..
//      2. function based.
//React setup is deployed to ---- code sandbox..
//we have two types of rendering 
//  1. client side rendering ...---> Browser will manage all of the UI part...data will manage to the server..
//  2. server side rendering ...---> initial loading..means for user it is slow it is taking time to load the data..


//Props----- Pass the data from parent component to child component....

//Below code are the syntax for code in react (codesandbox...)


//App.js
import "./styles.css";
import Welcome from "./Welcome.js";
function App() {
  return (
    <div className = "app">
      <h1 style = {{color:"red"}}>Heloo world</h1>
      <Welcome name = "Manik" age="10"/>
      <Welcome name = "Abhi" age="20"/>
      <Welcome name = "Pattern" age="30"/>
      <Welcome name = "Money" age="40"/>
      <Welcome name = "Heist" age="50"/>
      <Welcome name = "Campa" age="60"/>
      
    </div>
  );
}
export default App;

//Welcome.js
function Welcome(props){
    return <h2>Welcome to this session {props.name} and my age is {props.age}</h2>
  }
  export default Welcome;

//Index.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App/>);

//Style.css
.app {
    font-family: sans-serif;
    text-align: center;
  }
  






