import React from "react";

const CardsCreate = (carddata) => {

    return (
   
        <div className="char-card">
            <img src={carddata.carddata.image} />
            <span className="char-name">{carddata.carddata.name}</span>
        </div>
    
    )
}

export default CardsCreate