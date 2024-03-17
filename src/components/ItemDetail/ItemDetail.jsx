import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ name, description, img, price, stock }) => {

    return (
        <>
            <div className="border border-1 border-dark rounded-3  p-3 m-2">
                <h5> {name} </h5>
                <img src={img} alt="" />
                <p> {description} </p>
                <p>Stock: {stock}</p>
                
                <ItemCount stock={stock} />
            </div>
        </>

    );
};