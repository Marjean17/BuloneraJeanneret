import ItemCounter from "../ItemCounter/ItemCounter";


export default function Item(props) {
    return (
        <div className="cardContainer">
            <div className="card">
                <h4 className="cardTitle">{props.name}</h4>
                <img src={props.pictureUrl} className="cardImg" />
                <span className="cardDescription">{props.description}</span>
                <h4>{props.price}</h4>
            </div>
            <ItemCounter/>
        </div>
    )
}