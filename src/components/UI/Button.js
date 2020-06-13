import React from 'react';

  const Button=({ onSubmit }) => {
  return (
    <button  onClick={onSubmit} type="submit"
    className="getButton">
     Get Users !
    </button>
  );
}

export default Button;