import React, { useEffect, useState } from "react";
// const url = "http://localhost:3001";

function Lifts() {
  const [liftName, setliftName] = useState([{ lift: "" }]);
  const [liftList, setliftList] = useState([]);

  const handleSubmit = (event) => {
    //prevent referesh
    event.preventDefault();
  };

  //This is a handler to allow each input to be updated.
  const handleLiftInputChange = (event) => {
    setliftName({ lift: event.target.value });
  };

  //Update the liftlist each time the input is updated.
  useEffect(() => {
    findLift();
  }, [liftName]);

  //Creates list of all stored workouts
  function findLift() {
    fetch(`/api/lifts/${liftName.lift}`)
      .then((response) => response.json())
      .then((data) => {
        setliftList(data);
      });
  }

  ////
  return (
    <div className="lifts-container">
      <h1 className="liftHeader">Find Lift</h1>
      <div className="lift-search">
        Find Workout
        <form className="lift-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Workouts"
            className="lifts"
            onChange={handleLiftInputChange}
          />
        </form>
      </div>
      <div className="testing-lifts">
        {liftList.map((lift) => {
          return (
            <>
              {lift.tips === "" ? (
                <div key={lift.lift_id} className="liftsDiv">
                  <h3>{lift.name}</h3>
                  <span>Muscle Group: {lift.muscle_group}</span>
                  <img className="gif" src={lift.example} />
                </div>
              ) : (
                <div key={lift.lift_id} className="liftsDiv">
                  <h3>{lift.name}</h3>
                  <span>Muscle Group: {lift.muscle_group}</span>
                  <img className="gif" src={lift.example} />
                  <span>Tips: {lift.tips}</span>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Lifts;
