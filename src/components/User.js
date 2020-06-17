import React from "react";

const User = ({ username, onClick }) => {
  const {
    name: { first, last, title },
  } = username;

  return (
      
    <li onClick={onClick}>
     {title} {first} {last}
    </li>
  );
};

export default User;
