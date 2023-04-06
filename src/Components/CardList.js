import React from "react";
import Card from "./Card";
import data from "../data";

const CardList = () => {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });
  return <div className="Card-List_Component">{cards}</div>;
};

export default CardList;
