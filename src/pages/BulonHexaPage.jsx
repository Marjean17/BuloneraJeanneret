import React from "react";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard/ItemCard";
import { bulonHexaList } from "../data/bulonHexagonalList";

const BulonHexaPage = () => {
  const params = useParams();
  return (
    <div>
      <h2>{params.categoryId}</h2>
      <div className="item-container">
        {bulonHexaList.list.map((item) => {
          return (
            <ItemCard
              key={item.id}
              item={item}
              categoryId={bulonHexaList.categoryId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BulonHexaPage;
