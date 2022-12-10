import { useState } from "react";

export default function ItemCounter(){
const [contador, setContador] = useState(0);
const onClickReduceCounterHandler = () => {
    console.log('voy a restar uno a tu contador');
    setContador(contador - 1);
};
const onClickAddCounterHandler = () => {
    console.log('voy a sumar uno a tu contador');
    setContador(contador + 1);
    };

return (
    <div className="contador__container">
<button onClick={onClickReduceCounterHandler}>-</button>
<span>{contador}</span>
<button onClick={onClickAddCounterHandler}>+</button>
    </div>
)

}