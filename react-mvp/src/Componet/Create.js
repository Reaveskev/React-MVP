// import React, { useState } from "react";
// import { useAuth } from "./Auth";

// const url = "http://localhost:3001";

// export function CreateWorkout() {
//   const auth = useAuth();
//   // This sets a variable for each input.
//   const [workoutValues, SetValues] = useState({
//     name: "",
//     weight: "",
//     sets: "",
//     reps: "",
//     username: auth.user,
//   });

//   //Set submitted boolean in order to display success message
//   const [submitted, setSubmitted] = useState(false);

//   const [valid, setValid] = useState(false);

//   //This is a handler to allow each input to be updated.
//   const handleWorkoutNameInputChange = (event) => {
//     SetValues({ ...workoutValues, name: event.target.value });
//   };

//   const handleWorkoutWeightInputChange = (event) => {
//     SetValues({ ...workoutValues, weight: event.target.value });
//   };

//   const handleSetsInputChange = (event) => {
//     SetValues({ ...workoutValues, sets: Number(event.target.value) });
//   };

//   const handleRepsInputChange = (event) => {
//     SetValues({ ...workoutValues, reps: Number(event.target.value) });
//   };

//   const handleSubmit = (event) => {
//     //prevent referesh
//     event.preventDefault();
//     if (
//       workoutValues.name &&
//       workoutValues.weight &&
//       typeof workoutValues.sets === "number" &&
//       typeof workoutValues.reps === "number"
//     ) {
//       setValid(true);
//     }
//     setSubmitted(true);
//   };

//   const addWorkout = (event) => {
//     const requestUser = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // Takes our inputs and passes it into the body.
//       body: JSON.stringify({
//         name: workoutValues.name,
//         weight: workoutValues.weight,
//         sets: workoutValues.sets,
//         reps: workoutValues.reps,
//         username: auth.user,
//       }),
//     };

//     fetch(`${url}/api/workouts/`, requestUser)
//       .then((response) => response.json())
//       .then((data) => {
//         SetValues(data);
//       });
//   };

//   return (
//     <div className="form-container">
//       <form className="create-workout" onSubmit={handleSubmit}>
//         {submitted && valid ? (
//           <div className="success-message">Success! Added new workout</div>
//         ) : null}
//         <input
//           onChange={handleWorkoutNameInputChange}
//           value={workoutValues.name}
//           id="workoutName"
//           className="form-field"
//           type="text"
//           placeholder="Workout Name"
//           name="workoutName"
//         />

//         {submitted && !workoutValues.name ? (
//           <span className="name-error">Please enter a workout name</span>
//         ) : null}
//         <input
//           onChange={handleWorkoutWeightInputChange}
//           value={workoutValues.weight}
//           id="workoutweight"
//           className="form-field"
//           type="text"
//           placeholder="Weight"
//           name="workoutweight"
//         />

//         {submitted && !workoutValues.weight ? (
//           <span className="weight-error">Please enter a weight</span>
//         ) : null}
//         <input
//           onChange={handleSetsInputChange}
//           value={workoutValues.sets}
//           id="sets"
//           className="form-field"
//           type="text"
//           placeholder="Sets"
//           name="sets"
//         />

//         {submitted && !workoutValues.sets ? (
//           <span className="sets-error">Please enter sets</span>
//         ) : null}

//         <input
//           onChange={handleRepsInputChange}
//           value={workoutValues.reps}
//           id="reps"
//           className="form-field"
//           type="text"
//           placeholder="Reps"
//           name="reps"
//         />
//         {submitted && !workoutValues.reps ? (
//           <span className="reps-error">Please enter reps</span>
//         ) : null}

//         <button
//           onClick={() => {
//             addWorkout();
//           }}
//           className="addWorkoutBTN"
//           type="submit"
//         >
//           Create Workout
//         </button>
//       </form>
//     </div>
//   );
// }
