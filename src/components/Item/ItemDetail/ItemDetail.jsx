import React from "react";
import ItemCounter from "../../ItemCounter/ItemCounter";

const CardTextBox = ({ text, place = "header" }) => {
  const divClass = place === "header" ? "header-class" : "footer-class";

  return (
    <div className={`${divClass} card-text-box`}>
      {text.substring(0, 50)}
      {text.length > 50 && "..."}
      <ItemCounter/>
    </div>
    
  );
};

export default CardTextBox;
