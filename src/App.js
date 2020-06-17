import React, { useState } from "react";

import Spinner from "./components/UI/Spinner/Spinner";
import User from "./components/User";
import UserInfo from "./components/UserInfo";
import Button from "./components/UI/Button";
import "./App.css";

function App() {
  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState({
    show: false,
    data: null,
  });
  const [showFirstUser, setShowFirstUser] = useState({
    show: false,
    data: null,
  });
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);

      const URL = "https://randomuser.me/api/?results=5";
      const response = await fetch(URL);

      if (response.status !== 500) {
        const data = await response.json();
        const userResults = data.results;

        setUsers(userResults);
        setShowFirstUser({ show: true, data: userResults[0] });
        setSelectedUser({ show: false, data: null });
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getUser = (user) => {
    setSelectedUser({ show: true, data: user });
    setShowFirstUser({ show: false, data: null });
  };

  const isUsersReady = users !== undefined;

  return (
    <div className="App">
      <Button onClick={getUsers} />
      <div className="Card">
        {isLoading && <Spinner />}
        {hasError && <p> Something went wrong! </p>}
        {!hasError &&
          !isLoading &&
          isUsersReady &&
          users.map((user) => {
            return (
              <User
                key={user.login.uuid}
                onClick={() => getUser(user)}
                username={user}
              />
            );
          })}
        {!hasError && !isLoading && showFirstUser.show && (
          <UserInfo userInfo={showFirstUser.data} />
        )}
        {!hasError && !isLoading && selectedUser.show && (
          <UserInfo userInfo={selectedUser.data} />
        )}
      </div>
    </div>
  );
}

export default App;
