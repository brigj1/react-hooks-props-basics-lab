import React from "react";

function Home(props) {
  //exSetter.setEx({ band: { bandTwo: "EXO" } })
  //props.exSetter({ band: { bandTwo: "EXO" } })

      //<button id="exbut">Ex me</button>
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
      <button>Ex me</button>
    </div>
  );
}

export default Home;
