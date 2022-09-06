import React, { useState } from "react";

// const url = "http://localhost:3001";

export function DeleteUser() {
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

  const handleSubmit = (event) => {
    //prevent referesh
    event.preventDefault();
    if (uservalues.username) {
      setValid(true);
    }
    setSubmitted(true);
  };
  const deleteUser = (event) => {
    const requestUser = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`/api/users/${uservalues.username}/`, requestUser)
      .then((response) => response.json())
      .then((data) => {
        SetValues(data);
      });
  };

  return (
    <div className="form-container">
      <form className="create-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Success! User has been deleted.</div>
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

        <button
          onClick={() => deleteUser()}
          className="form-field"
          type="submit"
        >
          Delete User
        </button>
      </form>
      {submitted ? (
        <div key={uservalues.id} className="DeletedUser">
          <h3>{uservalues.username}</h3>
          <span>Name: {uservalues.name}</span>
          <span>Weight: {uservalues.weight}</span>
          <span>Sex: {uservalues.sex}</span>
          <span>Age: {uservalues.age}</span>
        </div>
      ) : null}
    </div>
  );
}
