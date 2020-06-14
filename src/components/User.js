import React from "react";

const User = ({ username, onClick }) => {
  const {
    login: { uuid },
    name: { first, last, title },
  } = username;

  return (
      
    <li onClick={onClick} key={uuid}>
     {title} {first} {last}
    </li>
  );
};

export default User;
