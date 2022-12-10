import React from "react";
import { useParams } from "react-router-dom";
import BooksPage from "./TuercasArandPage";
import ElectronicPage from "./BulonRedPage";
import VehiculePage from "./BulonHexaPage";
import HomePage from "./HomePage";

const CategoryPage = () => {
  const params = useParams();

  switch (params.categoryId) {
    case "Tuercas, arandelas planas y Grower":
      return <BooksPage />;
    case "Bulones con cabeza redonda":
      return <ElectronicPage />;
    case "Bulones Hexagonales":
      return <VehiculePage />;
    default:
      return <HomePage />;
  }
};

export default CategoryPage;
