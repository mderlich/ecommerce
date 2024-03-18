import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ id, name, description, img, price, stock }) => {

    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {

        const item = {
            id,
            price,
            name
        }

        addItem(item, quantity)
    }

    return (
        <>
            <div className="border border-1 border-dark rounded-3  p-3 m-2">
                <h5> {name} </h5>
                <img src={img} alt="" />
                <p> {description} </p>
                <p>Precio: ${price}</p>

                <ItemCount stock={stock} onAdd={onAdd} />
            </div>
        </>

    );
};