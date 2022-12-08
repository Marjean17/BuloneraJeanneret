// import Fondo from "./img/fotoFondo.jpg";
// import {useEffect, useState} from "react";
import Listas from "../../services/listas";


export default function ItemList() {

return (
    Listas(),
    <div className="Item-List__container">
        <ul>
            {LIST.map((product) =>(
                <li key={product.id}>
                    Producto: {product.title} 
                    Descripción: {product.description} 
                    Precio: {product.price}
                </li>
            ) )}
        </ul>
    </div>
)

};