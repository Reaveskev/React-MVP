import React from "react";
import { useAuth } from "../Componet/Auth";

function Home() {
  const auth = useAuth();
  return (
    <div className="home">
      <h1 className="WelcomeUser">Hello {auth.user}!</h1>
      <div className="welcome">
        <h2>Welcome to Fitness Tracker.</h2>
        <p>
          Using this fitness tracker, you will be able to track your recorded
          workouts in the journal tab allowing you to slowly increase
          difficultly. You can also search for workouts that will display how to
          perform it and some even have some tips! Need some motivation to hit
          the gym? Go to the motivation tab to get a random motivational quote
          to get you pumped to lift weights.
        </p>
      </div>
    </div>
  );
}

export default Home;
