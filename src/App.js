import React, { useState, useEffect } from "react";

import Spinner from "./components/UI/Spinner/Spinner";
import User from "./components/User";
import UserInfo from "./components/UserInfo";
import Button from "./components/UI/Button";
import "./App.css";

function App() {
  const [users, setUsers] = useState();
  const [singleUser, setSingleUser] = useState();
  const [showFirstUser, setShowFirstUser] = useState({
    show: false,
    data: null,
  });
  const [showUser, setShowUser] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const URL = "https://randomuser.me/api/?results=5";

  const getUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch(URL);

      if (response.status !== 500) {
        const data = await response.json();
        const userResults = data.results;

        setUsers(userResults);
        setShowFirstUser({ show: true, data: userResults[0] });
        setShowUser(false);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getUser = (user) => {
    setSingleUser(user);
    setShowUser(true);
    setShowFirstUser({ show: false });
  };

  const isUsersReady = users !== undefined;

  return (
    <div className="App">
      <Button onSubmit={getUsers} />
      <div className="Card">
        {isLoading && <Spinner />}
        {hasError && <p> Something went wrong! </p>}
        {!hasError &&
          !isLoading &&
          isUsersReady &&
          users.map((user) => {
            return <User onClick={() => getUser(user)} username={user} />;
          })}
        {showFirstUser.show && <UserInfo userInfo={showFirstUser.data} />}
        {showUser && <UserInfo userInfo={singleUser} />}
      </div>
    </div>
  );
}

export default App;
