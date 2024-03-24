import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";

// CONTEXT...
import { CartContext } from "../../context/CartContext";

//SWEETALERT...
import Swal from "sweetalert2";

export const ItemDetail = ({ id, name, description, img, price, stock }) => {

    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {

        const item = {
            id,
            price,
            name
        }

        addItem(item, quantity)

        Swal.fire({
            icon: "success",
            title: "Se agrego el producto al carrito"
        })

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