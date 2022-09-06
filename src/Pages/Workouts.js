import React, { useState } from "react";
import { useAuth } from "../Componet/Auth";
// const url = "http://localhost:3001";

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
  /////////////////////

  function CreateWorkout() {
    const auth = useAuth();
    // This sets a variable for each input.
    const [workoutValues, SetValues] = useState({
      name: "",
      weight: "",
      sets: "",
      reps: "",
      username: auth.user,
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

    const handleSubmit = (event) => {
      //prevent referesh
      event.preventDefault();
      if (
        workoutValues.name &&
        workoutValues.weight &&
        typeof workoutValues.sets === "number" &&
        typeof workoutValues.reps === "number"
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
          username: auth.user,
        }),
      };

      fetch(`/api/workouts/`, requestUser)
        .then((response) => response.json())
        .then((data) => {
          SetValues(data);
        });
    };
    return (
      <div className="form-container">
        <form className="create-workout" onSubmit={handleSubmit}>
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
            <span className="name-error">Please enter a workout name</span>
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
            <span className="weight-error">Please enter a weight</span>
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
            <span className="sets-error">Please enter sets</span>
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
            <span className="reps-error">Please enter reps</span>
          ) : null}

          <button
            onClick={() => {
              addWorkout();
              console.log(workoutValues);
            }}
            className="addWorkoutBTN"
            type="submit"
          >
            Create Workout
          </button>
        </form>
      </div>
    );
  }

  //////////////
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

      fetch(`/api/workouts/${workout_id}/`, requestUser)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          findWorkout();
        });
    }

    /////////////

    const findWorkout = (event) => {
      fetch(`/api/workouts/${auth.user}`)
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
