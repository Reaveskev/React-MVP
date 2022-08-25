import React, { useState } from "react";
import { CreateWorkout } from "../Componet/Create";
import { useAuth } from "../Componet/Auth";
const url = "http://localhost:3001";

function Workouts() {
  const auth = useAuth();
  const [workoutList, setworkoutList] = useState([{ workout: "" }]);

  const [showCreate, setShowCreate] = useState(false);

  const [showRead, setShowRead] = useState(false);

  const addAnotherWorkout = () => {
    setworkoutList([...workoutList, { workout: "" }]);
  };
  //Removes the last workoutfield
  const removeWorkoutField = (index) => {
    const list = [...workoutList];
    list.splice(index, 1);
    setworkoutList(list);
  };

  ////////////
  function ReadWorkouts() {
    const [workouts, setWorkouts] = useState([]);

    const handleSubmit = (event) => {
      //prevent referesh
      event.preventDefault();

      setShowRead(true);
    };

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

    /////////////

    const findWorkout = (event) => {
      fetch(`${url}/api/workouts/${auth.user}`)
        .then((response) => response.json())
        .then((data) => {
          setWorkouts(data);
        });
    };

    return (
      <div className="findRecordedWorkoutDiv">
        <form className="read-form" onSubmit={handleSubmit}>
          <button
            onClick={() => findWorkout()}
            className="form-field"
            type="submit"
          >
            Find Past Workouts
          </button>
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
        </form>
        <div className="allWorkouts">
          {workouts.map((workout) => {
            return (
              <div key={workout.workout_id} className="newUser">
                <h3>{workout.name}</h3>
                <span>Weight: {workout.weight}</span>
                <span>Reps: {workout.reps}</span>
                <span>Sets: {workout.sets}</span>
                <span>Workout id: {workout.workout_id}</span>
                <button
                  className="deleteWorkoutBTN"
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
      <h1 className="journalHeader">Journal</h1>
      <div className="AddWorkoutDiv">
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
            ))}
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
      </div>

      <div className="readWorkout">
        <ReadWorkouts />
      </div>
    </div>
  );
}

export default Workouts;
