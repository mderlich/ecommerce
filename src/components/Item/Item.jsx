export const Item = ( { id, name, img, description, stock }) => {
    return (
        <>
            <div  className="border border-1 border-dark rounded-3  p-3 m-2">
                <h5> { name } </h5>
                <p> { description } </p>
                <p>Stock: { stock }</p>
                <button className="btn btn-dark" >Agregar al carrito</button>
            </div>
        </>
    )
}