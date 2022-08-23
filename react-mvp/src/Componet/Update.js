// import React, { useState, useEffect } from "react";

// const url = "http://localhost:3001";

// export function UpdateUser() {
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
//     if (uservalues.username) {
//       setValid(true);
//     }
//     setSubmitted(true);
//   };

//   /////
//   ///
//   ///
//   //
//   const updateUser = (event) => {
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
//     if (uservalues.username === "") {
//       setValid(false);

//       console.log("Please fill out each input!");
//     } else if (
//       // Checks to see if any of the information is left blank.
//       uservalues.name === "" ||
//       uservalues.weight === "" ||
//       uservalues.sex === "" ||
//       uservalues.age === ""
//     ) {
//       fetch(`${url}/api/users/${uservalues.username}`)
//         // If left blank pulls old info and reuses it.
//         .then((response) => response.json())
//         .then((data) => {
//           data.forEach((element) => {
//             if (uservalues.name === "") {
//               uservalues.name = element.name;
//             }
//             if (uservalues.weight === "") {
//               uservalues.weight = element.weight;
//             }
//             if (uservalues.sex === "") {
//               uservalues.sex = element.sex;
//             }
//             if (uservalues.age === "") {
//               uservalues.age = element.age;
//             }
//             //Specifies PATCH request and header
//             const requestUser = {
//               method: "PATCH",
//               headers: {
//                 "Content-Type": "application/json",
//               },
//               body: JSON.stringify({
//                 username: uservalues.username,
//                 name: uservalues.name,
//                 weight: uservalues.weight,
//                 sex: uservalues.sex,
//                 age: uservalues.age,
//               }),
//             };
//             fetch(`${url}/api/users/${uservalues.username}`, requestUser)
//               .then((response) => response.json())
//               .then((data) => {
//                 //If username does exist it updates div with their information.
//                 console.log(data);
//                 SetValues(data);
//               });
//           });
//         });
//     }
//   };

//   ////
//   ////
//   ////
//   ///
//   //
//   return (
//     <div className="form-container">
//       <form className="create-form" onSubmit={handleSubmit}>
//         {submitted && valid ? (
//           <div className="success-message">Success! User has been updated</div>
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
//           <span id="username-error">Please enter a valid username</span>
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

//         <input
//           onChange={handleWeightInputChange}
//           value={uservalues.weight}
//           id="weight"
//           className="form-field"
//           type="text"
//           placeholder="Weight"
//           name="weight"
//         />

//         <input
//           onChange={handleSexInputChange}
//           value={uservalues.sex}
//           id="sex"
//           className="form-field"
//           type="text"
//           placeholder="Sex"
//           name="sex"
//         />

//         <input
//           onChange={handleAgeInputChange}
//           value={uservalues.age}
//           id="age"
//           className="form-field"
//           type="text"
//           placeholder="Age"
//           name="age"
//         />

//         {/* <button
//           onClick={() => updateUser()}
//           className="form-field"
//           type="submit"
//         >
//           Update User
//         </button> */}
//       </form>
//       {/* {submitted ? (
//         <div className="updateUser">
//           <h3>{uservalues.username}</h3>
//           <span>Name: {uservalues.name}</span>
//           <span>Weight: {uservalues.weight}</span>
//           <span>Sex: {uservalues.sex}</span>
//           <span>Age: {uservalues.age}</span>
//         </div>
//       ) : null} */}
//     </div>
//   );
// }
//////////////
///////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////
//////////////

// export function UpdateWorkout() {
//   // This sets a variable for each input.
//   const [WorkoutValues, SetWorkoutValues] = useState({
//     name: "",
//     weight: "",
//     reps: "",
//     sets: "",
//     workout_id: "",
//     username: "",
//   });

//   //Set submitted boolean in order to display success message
//   const [submitted, setSubmitted] = useState(false);

//   const [valid, setValid] = useState(false);

//   //This is a handler to allow each input to be updated.
//   const handleWorkoutNameInputChange = (event) => {
//     SetWorkoutValues({ ...WorkoutValues, name: event.target.value });
//   };

//   const handleWeightInputChange = (event) => {
//     SetWorkoutValues({ ...WorkoutValues, weight: event.target.value });
//   };

//   const handleRepsInputChange = (event) => {
//     SetWorkoutValues({ ...WorkoutValues, reps: event.target.value });
//   };

//   const handleSetsInputChange = (event) => {
//     SetWorkoutValues({ ...WorkoutValues, sets: event.target.value });
//   };

//   const handleWorkoutIdInputChange = (event) => {
//     SetWorkoutValues({
//       ...WorkoutValues,
//       workout_id: Number(event.target.value),
//     });
//   };

//   const handleUsernameInputChange = (event) => {
//     SetWorkoutValues({ ...WorkoutValues, username: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     //prevent referesh
//     event.preventDefault();
//     if (WorkoutValues.workout_id && WorkoutValues.username) {
//       setValid(true);
//     }
//     setSubmitted(true);
//   };

//   /////
//   ///
//   ///
//   //
//   const updateWorkout = (event) => {
//     if (WorkoutValues.workout_id === "" || WorkoutValues.username === "") {
//       setValid(false);

//       console.log("Please fill out each input!");
//     } else if (
//       // Checks to see if any of the information is left blank.
//       WorkoutValues.name === "" ||
//       WorkoutValues.weight === "" ||
//       WorkoutValues.reps === "" ||
//       WorkoutValues.sets === ""
//     ) {
//       fetch(`${url}/api/workouts/${WorkoutValues.username}`)
//         // If left blank pulls old info and reuses it.
//         .then((response) => response.json())
//         .then((data) => {
//           for (const element of data) {
//             if (WorkoutValues.workout_id !== element.workout_id) {
//               continue;
//             }
//             {
//               //   data.forEach((element) => {
//               if (WorkoutValues.name === "") {
//                 WorkoutValues.name = element.name;
//               }
//               if (WorkoutValues.weight === "") {
//                 WorkoutValues.weight = element.weight;
//               }
//               if (WorkoutValues.reps === "") {
//                 WorkoutValues.reps = element.reps;
//               }
//               if (WorkoutValues.sets === "") {
//                 WorkoutValues.sets = element.sets;
//               }
//             }
//           }
//           //Specifies PATCH request and header
//           const requestUser = {
//             method: "PATCH",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               username: WorkoutValues.username,
//               name: WorkoutValues.name,
//               weight: WorkoutValues.weight,
//               reps: WorkoutValues.reps,
//               sets: WorkoutValues.sets,
//             }),
//           };
//           console.log(WorkoutValues.reps);
//           fetch(`${url}/api/workouts/${WorkoutValues.workout_id}`, requestUser)
//             .then((response) => response.json())
//             .then((data) => {
//               //If username does exist it updates div with their information.
//               SetWorkoutValues(data);
//             });
//         });
//     }
//   };

//   return (
//     <div className="form-container">
//       <form className="update-workout-form" onSubmit={handleSubmit}>
//         {submitted && valid ? (
//           <div className="success-message">
//             Success! Workout has been updated
//           </div>
//         ) : null}
//         <input
//           onChange={handleWorkoutNameInputChange}
//           value={WorkoutValues.name}
//           id="name"
//           className="form-field"
//           type="text"
//           placeholder="Workout Name"
//           name="name"
//         />

//         {submitted && !WorkoutValues.name ? (
//           <span id="username-error">Please enter a valid username</span>
//         ) : null}
//         <input
//           onChange={handleWeightInputChange}
//           value={WorkoutValues.weight}
//           id="weight"
//           className="form-field"
//           type="text"
//           placeholder="Weight"
//           name="weight"
//         />

//         <input
//           onChange={handleRepsInputChange}
//           value={WorkoutValues.reps}
//           id="reps"
//           className="form-field"
//           type="text"
//           placeholder="Reps"
//           name="reps"
//         />

//         <input
//           onChange={handleSetsInputChange}
//           value={WorkoutValues.sets}
//           id="sets"
//           className="form-field"
//           type="text"
//           placeholder="Sets"
//           name="sets"
//         />

//         <input
//           onChange={handleWorkoutIdInputChange}
//           value={WorkoutValues.workout_id}
//           id="workout_id"
//           className="form-field"
//           type="text"
//           placeholder="Workout id"
//           name="workout_id"
//         />

//         <input
//           onChange={handleUsernameInputChange}
//           value={WorkoutValues.username}
//           id="username"
//           className="form-field"
//           type="text"
//           placeholder="Username"
//           name="username"
//         />

//         <button
//           onClick={() => updateWorkout()}
//           className="form-field"
//           type="submit"
//         >
//           Update Workout
//         </button>
//       </form>
//       {submitted ? (
//         <div className="updateWorkout">
//           <h3>{WorkoutValues.name}</h3>
//           <span>Weight: {WorkoutValues.weight}</span>
//           <span>Reps: {WorkoutValues.reps}</span>
//           <span>Sets: {WorkoutValues.sets}</span>
//           <span>User: {WorkoutValues.username}</span>
//         </div>
//       ) : null}
//     </div>
//   );
// }
