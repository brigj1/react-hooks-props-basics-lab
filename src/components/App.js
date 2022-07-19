import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
//import { useState } from "react/cjs/react.production.min";
import { useState } from 'react';
console.log(user);
console.log(useState);

//playing with this: https://dev.to/jagroop2000/shallow-merging-in-react-ffk

function App() {
//const App = () => {
  //const [ex, setEx] = useState(0)
const [ex, setEx] = useState({
  music  : "K-Pop",
  band  :  {  
             bandOne: "BTS",
             bandTwo: "BlackPink"
           }
});
console.log(ex);
//this.setState({ band, { bandTwo: “EXO” } })
        //exSetter  = {setEx}

  return (
    <div>
      <NavBar />
      <Home 
        color = {user.color}
        name  = {user.name}
        city  = {user.city}
      />
      <About bio = {user.bio} links = {user.links}/>
      <button id="exbut">Ex me</button>
    </div>
  );
      //{/* <button onClick={ setEx({ band: { bandTwo: "EXO" } }) }>Ex me</button> */}
}

export default App;
