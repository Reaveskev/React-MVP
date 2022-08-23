import React, { useState, useEffect } from "react";
// import { UpdateUser, updateUser } from "../Componet/Update";
// import { DeleteUser } from "../Componet/Delete";
import { useAuth } from "../Componet/Auth";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:3001";

function User() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [showUpdate, setShowUpdate] = useState(false);
  const [uservalues, SetValues] = useState({
    username: "",
    name: "",
    weight: "",
    sex: "",
    age: "",
  });

  useEffect(() => {
    fetch(`${url}/api/users/${auth.user}`)
      .then((response) => response.json())
      .then((data) => {
        //If username doesnt exist it creates an error response
        setUsers(data);
      });
  }, [uservalues]);

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  function UpdateUser() {
    //Set submitted boolean in order to display success message
    const [submitted, setSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    //This is a handler to allow each input to be updated.
    const handleUserNameInputChange = (event) => {
      SetValues({ ...uservalues, username: event.target.value });
    };

    const handleNameInputChange = (event) => {
      SetValues({ ...uservalues, name: event.target.value });
    };

    const handleWeightInputChange = (event) => {
      SetValues({ ...uservalues, weight: event.target.value });
    };

    const handleSexInputChange = (event) => {
      SetValues({ ...uservalues, sex: event.target.value });
    };

    const handleAgeInputChange = (event) => {
      SetValues({ ...uservalues, age: Number(event.target.value) });
    };

    const handleSubmit = (event) => {
      //prevent referesh
      event.preventDefault();
      if (uservalues.username) {
        setValid(true);
      }
      setSubmitted(true);
    };

    /////
    ///
    ///
    //
    const updateUser = (event) => {
      // const requestUser = {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   // Takes our inputs and passes it into the body.
      //   body: JSON.stringify({
      //     username: uservalues.username,
      //     name: uservalues.name,
      //     weight: uservalues.weight,
      //     sex: uservalues.sex,
      //     age: uservalues.age,
      //   }),
      // };
      if (uservalues.username === "") {
        setValid(false);

        console.log("Please fill out each input!");
      } else if (
        // Checks to see if any of the information is left blank.
        uservalues.name === "" ||
        uservalues.weight === "" ||
        uservalues.sex === "" ||
        uservalues.age === ""
      ) {
        fetch(`${url}/api/users/${uservalues.username}`)
          // If left blank pulls old info and reuses it.
          .then((response) => response.json())
          .then((data) => {
            data.forEach((element) => {
              if (uservalues.name === "") {
                uservalues.name = element.name;
              }
              if (uservalues.weight === "") {
                uservalues.weight = element.weight;
              }
              if (uservalues.sex === "") {
                uservalues.sex = element.sex;
              }
              if (uservalues.age === "") {
                uservalues.age = element.age;
              }
              //Specifies PATCH request and header
              const requestUser = {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: uservalues.username,
                  name: uservalues.name,
                  weight: uservalues.weight,
                  sex: uservalues.sex,
                  age: uservalues.age,
                }),
              };
              fetch(`${url}/api/users/${uservalues.username}`, requestUser)
                .then((response) => response.json())
                .then((data) => {
                  //If username does exist it updates div with their information.

                  SetValues(data);
                });
            });
          });
      }
    };

    ////
    ////
    ////
    ///
    //
    return (
      <div className="form-container">
        <form className="create-form" onSubmit={handleSubmit}>
          {submitted && valid ? (
            <div className="success-message">
              Success! User has been updated
            </div>
          ) : null}
          <input
            onChange={handleUserNameInputChange}
            value={uservalues.username}
            id="username"
            className="form-field"
            type="text"
            placeholder="Username"
            name="username"
          />

          {submitted && !uservalues.username ? (
            <span id="username-error">Please enter a valid username</span>
          ) : null}
          <input
            onChange={handleNameInputChange}
            value={uservalues.name}
            id="name"
            className="form-field"
            type="text"
            placeholder="Name"
            name="name"
          />

          <input
            onChange={handleWeightInputChange}
            value={uservalues.weight}
            id="weight"
            className="form-field"
            type="text"
            placeholder="Weight"
            name="weight"
          />

          <input
            onChange={handleSexInputChange}
            value={uservalues.sex}
            id="sex"
            className="form-field"
            type="text"
            placeholder="Sex"
            name="sex"
          />

          <input
            onChange={handleAgeInputChange}
            value={uservalues.age}
            id="age"
            className="form-field"
            type="text"
            placeholder="Age"
            name="age"
          />
          <button
            onClick={() => updateUser()}
            className="form-field"
            type="submit"
          >
            Update User
          </button>
        </form>
        {/* {submitted ? (
          <div className="updateUser">
            <h3>{uservalues.username}</h3>
            <span>Name: {uservalues.name}</span>
            <span>Weight: {uservalues.weight}</span>
            <span>Sex: {uservalues.sex}</span>
            <span>Age: {uservalues.age}</span>
          </div>
        ) : null} */}
      </div>
    );
  }

  return (
    <div className="user">
      {users.map((user) => {
        return (
          <div key={user.user_id} className="userInfo">
            <h1>{auth.user}</h1>
            <span>Name: {user.name}</span>
            <span>Weight: {user.weight}</span>
            <span>Sex: {user.sex}</span>
            <span>Age: {user.age}</span>
          </div>
        );
      })}
      <div className="userDiv">
        {showUpdate ? (
          <>
            <UpdateUser />
          </>
        ) : (
          <button
            onClick={() => {
              setShowUpdate(true);
            }}
            className="update-button"
          >
            Update User
          </button>
        )}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default User;
