import React from "react";
import "./card.css";
import CardItem from "./CardItem";

const cards = [
  {
    id: "1",
    img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200114192751/How-to-Learn-Programming.png",
    title: "This is for you item 1",
    description: "This is description 1",
  },
  {
    id: "2",
    img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200114192751/How-to-Learn-Programming.png",
    title: "This is for you item 2",
    description: "This is description 2",
  },
  {
    id: "3",
    img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200114192751/How-to-Learn-Programming.png",
    title: "This is for you item 3",
    description: "This is description 3",
  },
];

const CardGroup = () => {
  return (
    <div className="card-container">
      {cards.map((item, index) => {
        return <CardItem cardItem={item} key={item.id} />;
      })}
    </div>
  );
};

export default CardGroup;
