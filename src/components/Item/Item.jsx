import { Link } from "react-router-dom"

// CSS
import './Item.css';

export const Item = ({ id, name, img, description, price }) => {
    return (
        <>
            <div className="item">

                <img src={"/public/img/products/" + img + ".jpg"} alt={name} />
                <h5> {name} </h5>
                <img src={img} alt="" />
                {/* <p> {description} </p> */}
                <div>
                    <p>Precio: ${price}</p>

                    <Link to={`/item/${id}`} >
                        <button className="btn btn-dark " style={{ width: '100%' }}>Detalles</button>
                    </Link>
                </div>
            </div>
        </>
    )
}