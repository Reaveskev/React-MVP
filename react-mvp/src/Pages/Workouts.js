import React, { useState } from "react";
import { CreateWorkout } from "../Componet/Create";

import { useAuth } from "../Componet/Auth";
const url = "http://localhost:3001";

function Workouts() {
  const auth = useAuth();
  const [workoutList, setworkoutList] = useState([{ workout: "" }]);

  const [showCreate, setShowCreate] = useState(false);

  const [showRead, setShowRead] = useState(true);

  const addAnotherWorkout = () => {
    setworkoutList([...workoutList, { workout: "" }]);
  };

  const removeWorkoutField = (index) => {
    const list = [...workoutList];
    list.splice(index, 1);
    setworkoutList(list);
  };
  /////////////
  ///////////
  ////////////
  function ReadWorkouts() {
    const [workouts, setWorkouts] = useState([]);

    const handleSubmit = (event) => {
      //prevent referesh
      event.preventDefault();
      setShowRead(true);
    };

    /////////////
    ////////////
    function DeleteWorkout(workout_id) {
      console.log(workout_id);

      const requestUser = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(`${url}/api/workouts/${workout_id}/`, requestUser)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          findWorkout();
        });
    }

    //////////////
    ///////////////
    /////////////

    const findWorkout = (event) => {
      // if (findWorkoutValues.username === "") {
      //   fetch(`${url}/api/workouts/`)
      //     .then((response) => response.json())
      //     .then((data) => {
      //       setValid(true);
      //       setWorkouts(data);
      //     });
      // } else {
      fetch(`${url}/api/workouts/${auth.user}`)
        .then((response) => response.json())
        .then((data) => {
          //If username doesnt exist it creates an error response
          if (data.length === 0) {
            console.log("Username doesnt exist");
          } else {
            setWorkouts(data);
          }
        });
    };

    return (
      <div className="form-container">
        <form className="read-form" onSubmit={handleSubmit}>
          <button
            onClick={() => findWorkout()}
            className="form-field"
            type="submit"
          >
            Find Workout
          </button>
        </form>
        <div className="testing">
          {workouts.map((workout) => {
            return (
              <div key={workout.workout_id} className="newUser">
                <h3>{workout.name}</h3>
                <span>Weight: {workout.weight}</span>
                <span>Reps: {workout.reps}</span>
                <span>Sets: {workout.sets}</span>
                <span>Workout id: {workout.workout_id}</span>
                <button
                  className="TestingDelete"
                  onClick={() => {
                    DeleteWorkout(workout.workout_id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /////////////////
  return (
    <div className="workouts">
      <h1>Workouts</h1>
      <>
        {showCreate ? (
          <>
            {workoutList.map((singleworkout, index) => (
              <div key={index} className="workoutDiv">
                <CreateWorkout />
                {workoutList.length - 1 === index && (
                  <button
                    className="cancelWorkout"
                    onClick={() => {
                      setShowCreate(false);
                      setworkoutList([{ workout: "" }]);
                    }}
                  >
                    Cancel Workout
                  </button>
                )}
                {workoutList.length - 1 === index && workoutList.length < 4 && (
                  <button
                    className="addAnotherWorkout"
                    onClick={addAnotherWorkout}
                  >
                    Add another
                  </button>
                )}
                {workoutList.length > 1 && index !== 0 && (
                  <button
                    className="removeWorkoutField"
                    onClick={removeWorkoutField}
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}{" "}
          </>
        ) : (
          <button
            className="addworkout"
            onClick={() => {
              setShowCreate(true);
            }}
          >
            Add New Workout
          </button>
        )}
      </>

      <div className="readWorkout">
        <ReadWorkouts />
        {showRead ? (
          <button
            className="cancelSearch"
            onClick={() => {
              setShowRead(false);
            }}
          >
            Cancel Search
          </button>
        ) : null}
      </div>

      {/* <UpdateWorkout />  */}
    </div>
  );
}

export default Workouts;
