import React from "react"

export default function RenderCardDeck({ handleClick, cardDeck }) {
  return (cardDeck.map((card, index) => 
    <React.Fragment key={index}>
      <img
        className="Card"
        alt={card.name}
        src={card.sprite}
        id={card.id}
        onClick={handleClick}
      ></img>
    </React.Fragment>
  ))
};
