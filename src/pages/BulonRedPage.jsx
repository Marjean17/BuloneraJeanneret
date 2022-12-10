import React from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/Item/Item";
import { bulonRedList } from "../data/bulonRedondoList";

const BulonRedPage = () => {
  const params = useParams();
  return (
    <div>
      <h2>{params.categoryId}</h2>
      <div className="item-container">
        {bulonRedList.list.map((item) => {
          return (
            <ItemCard
              key={item.id}
              item={item}
              categoryId={bulonRedList.categoryId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BulonRedPage;
