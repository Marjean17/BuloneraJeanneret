import React from "react";
import { useParams } from "react-router-dom";
import TuercasArandPage from "./TuercasArandPage";
import BulonRedPage from "./BulonRedPage";
import BulonHexaPage from "./BulonHexaPage";
import HomePage from "./HomePage";

const CategoryPage = () => {
  const params = useParams();

  switch (params.categoryId) {
    case "Tuercas, arandelas planas y Grower":
      return <TuercasArandPage />;
    case "Bulones con cabeza redonda":
      return <BulonRedPage />;
    case "Bulones Hexagonales":
      return <BulonHexaPage />;
    default:
      return <HomePage />;
  }
};

export default CategoryPage;
