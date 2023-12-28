import React, { useState } from "react";
import { Link } from "react-router-dom";

export const ItemCounter = ({ initial = 1, stock = 5, onAdd }) => {
  const [inputType, setInputType] = useState(true);
  const [count, setCount] = useState(1);

  const handleSumar = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleRestar = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const handleOnAdd = () => {
    setInputType(false);
    onAdd(count);
  };

  const InputCount = () => {
    return (
      <>
        <Link to="/carrito">
          <button
            className="btn btn-outline-dark"
          >
            Ir al Carrito
          </button>
        </Link>
        <Link to="/">
          <button
            className="btn btn-outline-dark"
          >
            Seguir comprando
          </button>
        </Link>
      </>
    );
  };

  const ButtonCount = () => {
    return (
      <>
        <div>
          <button className="btn btn-light" onClick={handleRestar}>
            -
          </button>
          <label className="btn btn-warning">{count}</label>
          <button className="btn btn-light" onClick={handleSumar}>
            +
          </button>
        </div>
        <button className="btn btn-light" onClick={handleOnAdd}>
          Agregar Al carrito
        </button>
      </>
    );
  };

  return (
    <center>
      <h4>Cantidad:</h4>

      {inputType ? (
        <ButtonCount />
      ) : (
        <InputCount />
      )}
    </center>
  );
};
