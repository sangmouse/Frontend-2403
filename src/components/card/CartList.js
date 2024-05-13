import React from "react";
import CardItem from "./CardItem";

const cards = [
  {
    id: "1",
    img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200114192751/How-to-Learn-Programming.png",
    title: "This is for you card list item 1",
    description: "This is description 1",
  },
  {
    id: "2",
    img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200114192751/How-to-Learn-Programming.png",
    title: "This is for you card list item 2",
    description: "This is description 2",
  },
  {
    id: "3",
    img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200114192751/How-to-Learn-Programming.png",
    title: "This is for you card list item 3",
    description: "This is description 3",
    slogan: "",
  },
];

const CartList = () => {
  return (
    <div className="card-container">
      {cards.map((item, index) => {
        return (
          <CardItem cardItem={item} key={item.id}>
            <h1>This is children text</h1>
          </CardItem>
        );
      })}
    </div>
  );
};

export default CartList;

// children

/**
 *
 * <Item data={true}/> => <Item data={true}><p>This is children field</p></Item>
 */
