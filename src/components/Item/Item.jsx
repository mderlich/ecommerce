import { Link } from "react-router-dom"

export const Item = ({ id, name, img, description, stock }) => {
    return (
        <>
            <div className="border border-1 border-dark rounded-3  p-3 m-2">
                <h5> {name} </h5>
                <img src={img} alt="" />
                <p> {description} </p>
                <p>Stock: {stock}</p>
                
                <Link to={`/item/${id}`} >
                    <button className="btn btn-dark">Detalles</button>
                </Link>
            </div>
        </>
    )
}