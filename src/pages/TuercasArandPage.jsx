import React from "react";
import { tuercasArandList } from "../data/tuercasArandelasList";
import { useParams } from "react-router-dom";
import ItemCard from "../components/ItemCard/ItemCard";
import { indexes } from "../data/indexes";

const TuercasArandPage = () => {
  const params = useParams();
  return (
    <div>
      <h2>{params.categoryId}</h2>
      <div className="item-container">
        {tuercasArandList.list.map((item) => {
          return (
            <ItemCard
              key={item.id}
              item={item}
              categoryId={tuercasArandList.categoryId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TuercasArandPage;
