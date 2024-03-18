import { useState } from "react";

export const ItemCount = ({ stock, initial = 0, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
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