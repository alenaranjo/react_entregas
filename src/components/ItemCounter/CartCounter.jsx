import React, {useState, useEffect} from 'react';

export const CarCounter = ({ initial = 1, onCountChange }) => {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    onCountChange(count);
  }, [count, onCountChange]);

  const handleSumar = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleRestar = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <button className="btn btn-light" onClick={handleRestar}>
        -
      </button>
      <label className="btn btn-warning">{count}</label>
      <button className="btn btn-light" onClick={handleSumar}>
        +
      </button>
    </div>
  );
};
