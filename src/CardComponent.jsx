import React from "react";

function CardComponent(props) {
    return (
      <div id={props.cardId}>
        <h3 id={`titleH3-${props.cardId}`}>{props.title}</h3>
        <input id={`input-${props.cardId}`}/>
        <h5>{props.subtitle}</h5>
        <p>{props.content}</p>
        <br />
        <button onClick={() => {
            let title = document.getElementById(`titleH3-${props.cardId}`)
            let input = document.getElementById(`input-${props.cardId}`)
            title.textContent = input.value
        }}>{props.buttonText}</button>
        <button onClick={() => {
            let card = document.getElementById(props.cardId)
            card.remove()
        }}>Delete Me</button>
      </div>
    );
}

export default CardComponent