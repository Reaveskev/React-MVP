import React, { useState, useEffect } from "react";
import { useAuth } from "../Componet/Auth";
const url = "http://localhost:3001";

function User() {
  const auth = useAuth();
  const [users, setUsers] = useState([]);
  const [uservalues, SetValues] = useState({
    username: "",
    name: "",
    weight: "",
    sex: "",
    age: "",
  });

  //Updates User info when submitted
  useEffect(() => {
    fetch(`${url}/api/users/${auth.user}`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, [uservalues]);
  /////////////////////

  function UpdateUser() {
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
    };

    //
    const updateUser = (event) => {
      //Specifies PATCH request and header
      if (uservalues.name === "") {
        uservalues.name = auth.name;
      }
      if (uservalues.weight === "") {
        uservalues.weight = auth.weight;
      }
      if (uservalues.sex === "") {
        uservalues.sex = auth.sex;
      }
      if (uservalues.age === "") {
        uservalues.age = auth.age;
      }

      const requestUser = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: auth.user,
          name: uservalues.name,
          weight: uservalues.weight,
          sex: uservalues.sex,
          age: uservalues.age,
        }),
      };
      fetch(`${url}/api/users/${auth.user}`, requestUser)
        .then((response) => response.json())
        .then((data) => {
          //If username does exist it updates div with their information.
          SetValues({ username: "", name: "", weight: "", sex: "", age: "" });
        });
    };

    //
    return (
      <div className="form-container">
        <h1 className="userHeader">My Account</h1>
        <div>
          {users.map((user) => {
            return (
              <div key={user.user_id + 10}>
                <span>Name: {user.name}</span>
                <span>Weight: {user.weight}</span>
                <span>Sex: {user.sex}</span>
                <span>Age: {user.age}</span>
              </div>
            );
          })}
        </div>
        <form className="userDiv" onSubmit={handleSubmit}>
          <div className="userInfo">
            <h3>Update Information</h3>
            <span>
              Name:
              <input
                onChange={handleNameInputChange}
                value={uservalues.name}
                id="name"
                className="name-span"
                type="text"
                placeholder="Name"
                name="name"
              />
            </span>
            <span>
              Weight:
              <input
                onChange={handleWeightInputChange}
                value={uservalues.weight}
                id="weight"
                className="weigth-span"
                type="text"
                placeholder="Weight"
                name="weight"
              />
            </span>
            <span>
              Sex:
              <input
                onChange={handleSexInputChange}
                value={uservalues.sex}
                id="sex"
                className="sex-span"
                type="text"
                placeholder="Sex"
                name="sex"
              />
            </span>
            <span>
              Age:
              <input
                onChange={handleAgeInputChange}
                value={uservalues.age}
                id="age"
                className="age-span"
                type="text"
                placeholder="Age"
                name="age"
              />
            </span>
            <button
              onClick={() => updateUser()}
              className="updateBTN"
              type="submit"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="user">
      <div className="userDiv">
        <UpdateUser />
      </div>
    </div>
  );
}

export default User;
