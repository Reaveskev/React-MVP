import React, { useState, useEffect } from "react";

const url = "http://localhost:3001";

// export function CreateUser() {
//   // This sets a variable for each input.
//   const [uservalues, SetValues] = useState({
//     username: "",
//     name: "",
//     weight: "",
//     sex: "",
//     age: "",
//   });

//   //Set submitted boolean in order to display success message
//   const [submitted, setSubmitted] = useState(false);

//   const [valid, setValid] = useState(false);

//   //This is a handler to allow each input to be updated.
//   const handleUserNameInputChange = (event) => {
//     SetValues({ ...uservalues, username: event.target.value });
//   };

//   const handleNameInputChange = (event) => {
//     SetValues({ ...uservalues, name: event.target.value });
//   };

//   const handleWeightInputChange = (event) => {
//     SetValues({ ...uservalues, weight: event.target.value });
//   };

//   const handleSexInputChange = (event) => {
//     SetValues({ ...uservalues, sex: event.target.value });
//   };

//   const handleAgeInputChange = (event) => {
//     SetValues({ ...uservalues, age: Number(event.target.value) });
//   };

//   const handleSubmit = (event) => {
//     //prevent referesh
//     event.preventDefault();
//     if (
//       uservalues.username &&
//       uservalues.name &&
//       uservalues.weight &&
//       uservalues.sex &&
//       uservalues.age
//     ) {
//       setValid(true);
//     }
//     setSubmitted(true);
//   };
//   const addUser = (event) => {
//     const requestUser = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // Takes our inputs and passes it into the body.
//       body: JSON.stringify({
//         username: uservalues.username,
//         name: uservalues.name,
//         weight: uservalues.weight,
//         sex: uservalues.sex,
//         age: uservalues.age,
//       }),
//     };

//     fetch(`${url}/api/users/`, requestUser)
//       .then((response) => response.json())
//       .then((data) => {
//         SetValues(data);
//       });
//   };

//   return (
//     <div className="form-container">
//       <form className="create-form" onSubmit={handleSubmit}>
//         {submitted && valid ? (
//           <div className="success-message">
//             Success! Thank you for registering
//           </div>
//         ) : null}
//         <input
//           onChange={handleUserNameInputChange}
//           value={uservalues.username}
//           id="username"
//           className="form-field"
//           type="text"
//           placeholder="Username"
//           name="username"
//         />

//         {submitted && !uservalues.username ? (
//           <span id="username-error">Please enter a username</span>
//         ) : null}
//         <input
//           onChange={handleNameInputChange}
//           value={uservalues.name}
//           id="name"
//           className="form-field"
//           type="text"
//           placeholder="Name"
//           name="name"
//         />

//         {submitted && !uservalues.name ? (
//           <span id="name-error">Please enter a name</span>
//         ) : null}
//         <input
//           onChange={handleWeightInputChange}
//           value={uservalues.weight}
//           id="weight"
//           className="form-field"
//           type="text"
//           placeholder="Weight"
//           name="weight"
//         />

//         {submitted && !uservalues.weight ? (
//           <span id="email-error">Please enter an weight</span>
//         ) : null}

//         <input
//           onChange={handleSexInputChange}
//           value={uservalues.sex}
//           id="sex"
//           className="form-field"
//           type="text"
//           placeholder="Sex"
//           name="sex"
//         />
//         {submitted && !uservalues.sex ? (
//           <span id="email-error">Please enter an sex</span>
//         ) : null}

//         <input
//           onChange={handleAgeInputChange}
//           value={uservalues.age}
//           id="age"
//           className="form-field"
//           type="text"
//           placeholder="Age"
//           name="age"
//         />

//         {submitted && !uservalues.age ? (
//           <span id="email-error">Please enter an age</span>
//         ) : null}
//         <button onClick={() => addUser()} className="form-field" type="submit">
//           Create Account
//         </button>
//         {submitted && valid ? (
//           <div className="newUser">
//             <h3>{uservalues.username}</h3>
//             <span>Name: {uservalues.name}</span>
//             <span>Weight: {uservalues.weight}</span>
//             <span>Sex: {uservalues.sex}</span>
//             <span>Age: {uservalues.age}</span>
//           </div>
//         ) : null}
//       </form>
//     </div>
//   );
// }
///////////////
//////////////
//////////////
//////////////
export function CreateWorkout() {
  // This sets a variable for each input.
  const [workoutValues, SetValues] = useState({
    name: "",
    weight: "",
    sets: "",
    reps: "",
    username: "",
  });

  //Set submitted boolean in order to display success message
  const [submitted, setSubmitted] = useState(false);

  const [valid, setValid] = useState(false);

  //This is a handler to allow each input to be updated.
  const handleWorkoutNameInputChange = (event) => {
    SetValues({ ...workoutValues, name: event.target.value });
  };

  const handleWorkoutWeightInputChange = (event) => {
    SetValues({ ...workoutValues, weight: event.target.value });
  };

  const handleSetsInputChange = (event) => {
    SetValues({ ...workoutValues, sets: Number(event.target.value) });
  };

  const handleRepsInputChange = (event) => {
    SetValues({ ...workoutValues, reps: Number(event.target.value) });
  };

  const handleWorkoutUsernameInputChange = (event) => {
    SetValues({ ...workoutValues, username: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent referesh
    event.preventDefault();
    if (
      workoutValues.name &&
      workoutValues.weight &&
      typeof workoutValues.sets === "number" &&
      typeof workoutValues.reps === "number" &&
      workoutValues.username
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };

  const addWorkout = (event) => {
    const requestUser = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // Takes our inputs and passes it into the body.
      body: JSON.stringify({
        name: workoutValues.name,
        weight: workoutValues.weight,
        sets: workoutValues.sets,
        reps: workoutValues.reps,
        username: workoutValues.username,
      }),
    };

    fetch(`${url}/api/workouts/`, requestUser)
      .then((response) => response.json())
      .then((data) => {
        SetValues(data);
      });
  };

  return (
    <div className="form-container">
      <form className="create-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Success! Added new workout</div>
        ) : null}
        <input
          onChange={handleWorkoutNameInputChange}
          value={workoutValues.name}
          id="workoutName"
          className="form-field"
          type="text"
          placeholder="Workout Name"
          name="workoutName"
        />

        {submitted && !workoutValues.name ? (
          <span id="username-error">Please enter a workout name</span>
        ) : null}
        <input
          onChange={handleWorkoutWeightInputChange}
          value={workoutValues.weight}
          id="workoutweight"
          className="form-field"
          type="text"
          placeholder="Weight"
          name="workoutweight"
        />

        {submitted && !workoutValues.weight ? (
          <span id="weight-error">Please enter a weight</span>
        ) : null}
        <input
          onChange={handleSetsInputChange}
          value={workoutValues.sets}
          id="sets"
          className="form-field"
          type="text"
          placeholder="Sets"
          name="sets"
        />

        {submitted && !workoutValues.sets ? (
          <span id="sets-error">Please enter sets</span>
        ) : null}

        <input
          onChange={handleRepsInputChange}
          value={workoutValues.reps}
          id="reps"
          className="form-field"
          type="text"
          placeholder="Reps"
          name="reps"
        />
        {submitted && !workoutValues.reps ? (
          <span id="reps-error">Please enter reps</span>
        ) : null}

        <input
          onChange={handleWorkoutUsernameInputChange}
          value={workoutValues.username}
          id="username"
          className="form-field"
          type="text"
          placeholder="Username"
          name="username"
        />
        {submitted && !workoutValues.username ? (
          <span id="username-error">Please enter a username</span>
        ) : null}
        <button
          onClick={() => addWorkout()}
          className="form-field"
          type="submit"
        >
          Create Workout
        </button>
        {submitted && valid ? (
          <div className="newWorkout">
            <h3>{workoutValues.name}</h3>
            <span>Weight: {workoutValues.weight}</span>
            <span>Sets: {workoutValues.sets}</span>
            <span>Reps: {workoutValues.reps}</span>
            <span>Username: {workoutValues.username}</span>
          </div>
        ) : null}
      </form>
    </div>
  );
}
