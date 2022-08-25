import React, { useState } from "react";
import Kat from "../Componet/Picture/Kat.png";
import { useAuth } from "../Componet/Auth";
import { useNavigate } from "react-router-dom";
const url = "http://localhost:3001";

function Login() {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const [showCreate, setShowCreate] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    fetch(`${url}/api/users/${user}`)
      .then((response) => response.json())
      .then((data) => {
        //If username doesnt exist it creates an error response as visible
        if (data.length === 0) {
          setErrorMessage(true);
          console.log("doesnt exist");
        } else {
          auth.login(user);
          navigate("/home");
        }
      });
  };

  // This sets a variable for each input.
  const [uservalues, SetValues] = useState({
    username: "",
    name: "",
    weight: "",
    sex: "",
    age: "",
  });

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
    //check to see if each input is filled out
    if (
      uservalues.username &&
      uservalues.name &&
      uservalues.weight &&
      uservalues.sex &&
      uservalues.age
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const addUser = (event) => {
    const requestUser = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Takes our inputs and passes it into the body.
      body: JSON.stringify({
        username: uservalues.username,
        name: uservalues.name,
        weight: uservalues.weight,
        sex: uservalues.sex,
        age: uservalues.age,
      }),
    };

    fetch(`${url}/api/users/`, requestUser)
      .then((response) => response.json())
      .then((data) => {
        SetValues(data);
        auth.login(data.username);
        navigate("/home");
      });
  };

  ////////////
  return (
    <div className="login-page">
      {/* Main picture */}
      <img className="Kat" src={Kat} />
      {/* If user doesnt click on create user show login */}
      {!showCreate ? (
        <>
          <div className="login">
            <label>
              Username:{" "}
              <input
                type="text"
                onChange={(event) => {
                  setUser(event.target.value);
                }}
              />
            </label>
            <button className="loginbtn" onClick={handleLogin}>
              Login
            </button>
            {/* if user doesnt exist in database show error message */}
            {errorMessage && (
              <p className="errorMessage">Username does not exist!</p>
            )}
            <button
              onClick={() => {
                setShowCreate(true);
              }}
              className="createUser"
            >
              Create Account
            </button>
          </div>
        </>
      ) : (
        // Create user form
        <>
          <div className="form-container">
            <form className="create-form" onSubmit={handleSubmit}>
              {submitted && valid ? (
                <div className="success-message">
                  Success! Thank you for registering
                </div>
              ) : null}
              <p>Fill out the form to create an account.</p>
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
                <span id="username-error">Please enter a username</span>
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

              {submitted && !uservalues.name ? (
                <span id="name-error">Please enter a name</span>
              ) : null}
              <input
                onChange={handleWeightInputChange}
                value={uservalues.weight}
                id="weight"
                className="form-field"
                type="text"
                placeholder="Weight"
                name="weight"
              />

              {submitted && !uservalues.weight ? (
                <span id="email-error">Please enter an weight</span>
              ) : null}

              <input
                onChange={handleSexInputChange}
                value={uservalues.sex}
                id="sex"
                className="form-field"
                type="text"
                placeholder="Sex"
                name="sex"
              />
              {submitted && !uservalues.sex ? (
                <span id="email-error">Please enter an sex</span>
              ) : null}

              <input
                onChange={handleAgeInputChange}
                value={uservalues.age}
                id="age"
                className="form-field"
                type="text"
                placeholder="Age"
                name="age"
              />

              {submitted && !uservalues.age ? (
                <span id="email-error">Please enter an age</span>
              ) : null}
              <button
                onClick={() => {
                  addUser();
                }}
                className="form-field"
                type="submit"
              >
                Create Account
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
}

export default Login;
