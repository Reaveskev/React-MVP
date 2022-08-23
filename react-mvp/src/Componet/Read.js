import React, { useState } from "react";

const url = "http://localhost:3001";

// export function ReadUser() {
//   const [finduservalues, SetUserValues] = useState({
//     username: "",
//   });

//   const [users, setUsers] = useState([]);

//   //Set submitted boolean in order to display success message
//   const [submitted, setSubmitted] = useState(false);

//   const [valid, setValid] = useState(false);

//   //This is a handler to allow each input to be updated.
//   const handleFindUserNameInputChange = (event) => {
//     SetUserValues({ username: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     //prevent referesh
//     event.preventDefault();
//   };

//   const findUser = (event) => {
//     if (finduservalues.username === "") {
//       fetch(`${url}/api/users/`)
//         .then((response) => response.json())
//         .then((data) => {
//           setUsers(data);

//           // data.forEach((element) => {
//           //   setUsers(element);

//           //   console.log(element);
//           //   console.log(users);
//           //   console.log(data);
//           // });
//         });
//     } else {
//       fetch(`${url}/api/users/${finduservalues.username}`)
//         .then((response) => response.json())
//         .then((data) => {
//           //If username doesnt exist it creates an error response

//           if (data.length === 0) {
//             console.log("doesnt exist");
//             setValid(true);
//             setSubmitted(true);
//           } else {
//             setUsers(data);
//           }
//         });
//     }
//   };

//   ////

//   return (
//     <div className="form-container">
//       <form className="read-form" onSubmit={handleSubmit}>
//         {submitted && valid ? (
//           <div className="success-message">Username does not exist</div>
//         ) : null}

//         <input
//           onChange={handleFindUserNameInputChange}
//           value={finduservalues.username}
//           id="findusername"
//           className="form-field"
//           type="text"
//           placeholder="Username"
//           name="findusername"
//         />

//         {submitted && !finduservalues.username ? (
//           <span id="findusername-error">Please enter a username</span>
//         ) : null}

//         <button onClick={() => findUser()} className="form-field" type="submit">
//           Find User
//         </button>
//       </form>
//       <div className="testing">
//         {users.map((user) => {
//           return (
//             <div key={user.user_id} className="newUser">
//               <h3>{user.username}</h3>
//               <span>Name: {user.name}</span>
//               <span>Weight: {user.weight}</span>
//               <span>Sex: {user.sex}</span>
//               <span>Age: {user.age}</span>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
/////////////////
////////////////
//////////////
/////////////
// export function ReadWorkouts() {
//   const [findWorkoutValues, SetWorkoutValues] = useState({
//     username: "",
//   });

//   const [workouts, setWorkouts] = useState([]);

//   //Set submitted boolean in order to display success message
//   const [submitted, setSubmitted] = useState(false);

//   const [valid, setValid] = useState(false);

//   //This is a handler to allow each input to be updated.
//   const handleFindUserNameInputChange = (event) => {
//     SetWorkoutValues({ username: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     //prevent referesh
//     event.preventDefault();
//   };

//   ///////////////
//   /////////////
//   ////////////
//   function DeleteWorkout(workout_id) {
//     console.log(workout_id);

//     const requestUser = {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };

//     fetch(`${url}/api/workouts/${workout_id}/`, requestUser)
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         findWorkout();
//       });
//   }

//   //////////////
//   ///////////////
//   /////////////

//   const findWorkout = (event) => {
//     if (findWorkoutValues.username === "") {
//       fetch(`${url}/api/workouts/`)
//         .then((response) => response.json())
//         .then((data) => {
//           setValid(true);
//           setWorkouts(data);
//         });
//     } else {
//       fetch(`${url}/api/workouts/${findWorkoutValues.username}`)
//         .then((response) => response.json())
//         .then((data) => {
//           //If username doesnt exist it creates an error response
//           if (data.length === 0) {
//             console.log("Username doesnt exist");
//             setValid(true);
//             setSubmitted(true);
//           } else {
//             setWorkouts(data);
//           }
//         });
//     }
//   };

//   ////

//   return (
//     <div className="form-container">
//       <form className="read-form" onSubmit={handleSubmit}>
//         {submitted && valid ? (
//           <div className="error-message">Username does not exist!</div>
//         ) : null}

//         <input
//           onChange={handleFindUserNameInputChange}
//           value={findWorkoutValues.username}
//           id="findusername"
//           className="form-field"
//           type="text"
//           placeholder="Username"
//           name="findusername"
//         />

//         {submitted && !findWorkoutValues.username ? (
//           <span id="findusername-error">Please enter a username</span>
//         ) : null}

//         <button
//           onClick={() => findWorkout()}
//           className="form-field"
//           type="submit"
//         >
//           Find Workout
//         </button>
//       </form>
//       <div className="testing">
//         {workouts.map((workout) => {
//           return (
//             <div key={workout.workout_id} className="newUser">
//               <h3>{workout.name}</h3>
//               <span>Weight: {workout.weight}</span>
//               <span>Reps: {workout.reps}</span>
//               <span>Sets: {workout.sets}</span>
//               <span>Workout id: {workout.workout_id}</span>
//               <button
//                 className="TestingDelete"
//                 onClick={() => {
//                   DeleteWorkout(workout.workout_id);
//                 }}
//               >
//                 Delete
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
