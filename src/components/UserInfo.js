import React from "react";

const UserInfo = ({ userInfo }) => {
  const {
    login: { uuid },
    picture: { medium },
    cell,
    email,
    location: { city, country },
    name: { first, last },
  } = userInfo;

  return (
    <div key={uuid}>
      <img src={medium} alt="pic" />
      <h4>
        {first}
        {last}
      </h4>
      <p>{email}</p>
      <p>{cell}</p>
      <p>
        {city},{country}
      </p>
    </div>
  );
};

export default UserInfo;
