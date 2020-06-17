import React from 'react';

  const Button=({ onClick }) => {
  return (
    <button  onClick={onClick}
    className="getButton">
     Get Users !
    </button>
  );
}

export default Button;