import React from "react";
import "./App.css";
import CardComponent from "./CardComponent";

function App() {
  return (
    <div>
      <CardComponent
        title={"Card Title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        buttonText={"Press Me"}
        cardId={1}
      ></CardComponent>

      <CardComponent
        title={"Card Title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        buttonText={"Press Me"}
        cardId={2}
      ></CardComponent>

      <CardComponent
        title={"Card Title"}
        subtitle={"Card Subtitle"}
        content={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam."
        }
        buttonText={"Press Me"}
        cardId={3}
      ></CardComponent>
    </div>
  );
}

export default App;
