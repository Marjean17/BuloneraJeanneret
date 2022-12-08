// import {useState} from "react;"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
// import Listas from "../../services/listas";

export default function ItemListContainer () {
    const [listData, setListData] = useState([]);

    useEffect(() => {


.then((list) => setListData(list))
.catch((error) => {
    console.error('[LIST]: ERROR -', error);
    setListData([]);
} )

    }, []);

    const isListDataEmpty = listData.length === 0;
    
    return (
        <div className="productosMostrados__container">
            {isListDataEmpty? (
                <span className="cargandoProductos">Cargando Productos...</span>
            ) : (
               < ItemList data={listData} />
                )}    
        </div>
    );
};