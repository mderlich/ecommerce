import { useState } from "react";

// CSS
import './ItemCount.css';

// OBS: se pone valor inicial en 1 porque si pones 0 estarias cargan producto nulo en el carro
export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  /* INCREMENT ************** */
  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };
  /* ************************ */

  /* DECREMENT ************** */
  const decrement = () => {
    // se puso en 1 para que si pone 0, puede darle agregar cero producto a carrito
    if (count === 1) {
      return setCount(1);
    }
    setCount(count - 1);
  };
  /* ************************ */


  return (
    <>
      <div className="button-container">
        <button className="action-button" onClick={decrement}>-</button>
        <p>{count}</p>
        <button className="action-button" onClick={increment}>+</button>
      </div>

      <br />
      <button className="btn btn-primary" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </>
  );
};