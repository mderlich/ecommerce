import { useState } from "react";

// OBS: se pone valor inicial en 1 porque si pones 0 estarias cargan producto nulo en el carro
export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    // se puso en 1 para que si pone 0, puede darle agregar cero producto a carrito
    if (count === 1) {
      return setCount(1);
    }
    setCount(count - 1);
  };


  return (
    <>
      <div className="d-flex  justify-content-between ">
        <button className="btn btn-secondary" onClick={decrement}>-</button>
        <p>{count}</p>
        <button className="btn btn-secondary" onClick={increment}>+</button>
      </div>

      <br />
      <button className="btn btn-primary" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
  );
};