import React from "react";

const User = ({ username, onClick }) => {
  const {
    login: { uuid },
    name: { first, last, title },
  } = username;

  return (
      
    <li onClick={onClick} key={uuid}>
      {(first, last, title)}
    </li>
  );
};

export default User;
