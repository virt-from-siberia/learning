import React from "react";

const ItemsList = ({ getItems }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    const newItems = getItems();
    setItems(newItems);
    console.log("render");
  }, [getItems]);

  return (
    <ul>
      {items.map((i) => {
        return <li>{i}</li>;
      })}
    </ul>
  );
};

export default ItemsList;
