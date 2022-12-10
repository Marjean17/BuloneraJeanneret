import { tuercasArandList } from "./tuercasArandelasList";
import { bulonRedList } from "./bulonRedondoList";
import { bulonHexaList } from "./bulonHexagonalList";

export const indexes = {
  "Tuercas, arandelas planas y Grower": [],
  "Bulones con cabeza redonda": [],
  "Bulones Hexagonales": [],
};

export const DB = {
  "Tuercas, arandelas planas y Grower": tuercasArandList.list,
  "Bulones con cabeza redonda": bulonRedList.list,
  "Bulones Hexagonales": bulonHexaList.list,
};
