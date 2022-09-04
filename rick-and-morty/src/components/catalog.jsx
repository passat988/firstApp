import React from "react";
import App from "../App";
import CardsCreate from "./cards";

const CatalogCreate = ({cards}) => {
  return (
    <div className="catalog">
      {cards.map((carddata) => (
        <CardsCreate carddata={carddata} key={carddata.id} />
      ))}
    </div>
  );
};

export default CatalogCreate;

// {posts.charArr.map(carddata =>
//     <CardsCreate carddata={carddata} key={carddata.id}/>
//   )}
