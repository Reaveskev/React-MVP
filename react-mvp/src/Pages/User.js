import React, { useState, useEffect } from "react";
import { useAuth } from "../Componet/Auth";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:3001";

function User() {
  const auth = useAuth();
  const navigate = useNavigate();
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

  //Lets them logout and returns to login screen
  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };

  function UpdateUser() {
    //Set submitted boolean in order to display success message
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
          SetValues(data);
        });
    };

    //
    return (
      <div className="form-container">
        <form className="create-form" onSubmit={handleSubmit}>
          {users.map((user) => {
            return (
              <div key={user.user_id} className="userInfo">
                <h1 className="userHeader">My Account</h1>
                <span>
                  Name:{" "}
                  <input
                    onChange={handleNameInputChange}
                    value={uservalues.name}
                    id="name"
                    className="name-span"
                    type="text"
                    placeholder={user.name}
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
                    placeholder={user.weight}
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
                    placeholder={user.sex}
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
                    placeholder={user.age}
                    name="age"
                  />{" "}
                </span>
              </div>
            );
          })}
          <button
            onClick={() => updateUser()}
            className="updateBTN"
            type="submit"
          >
            Update User
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="user">
      <div className="userDiv">
        <>
          <UpdateUser />
        </>
      </div>
      <button className="logoutBTN" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default User;
