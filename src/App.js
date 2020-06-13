import React, { useState } from "react";

import Spinner from "./components/UI/Spinner/Spinner";
import User from "./components/User";
import UserInfo from "./components/UserInfo";
import Button from "./components/UI/Button";
import "./App.css";

function App() {
  const [users, setUsers] = useState();
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
        console.log(userResults);
        setUsers(userResults);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // const showUserInfo = (id) => {
  //   users.map((user) => {
  //     if (id === user.id.value) {
  //       return <UserInfo userInfo={user} />;
  //     }
  //   });
  // };
  const isUsersReady = users !== undefined;

  return (
    <div className="App">
      <Button onSubmit={getUsers} />
      {isLoading && <Spinner />}
      {hasError && <p> Something went wrong! </p>}
      {isUsersReady &&
        users.map((user, index) => {
          return (
            <>
              <User
                key={user.login.uuid}
                username={user}
              />
              {index !== user.login.uuid ?<UserInfo userInfo={user}/> : null}
            </>
          );
        })}
    </div>
  );
}

export default App;
