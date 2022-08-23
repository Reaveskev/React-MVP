import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Componet/Sidebar";
import Home from "./Pages/Home";
import Motivational from "./Pages/Motivational";
import Workouts from "./Pages/Workouts";
import User from "./Pages/User";
import { AuthProvider } from "./Componet/Auth";
import Login from "./Pages/Login";
import { RequireAuth } from "./Componet/RequireAuth";

function App() {
  return (
    <div className="main">
      <AuthProvider>
        <Router>
          <Sidebar />
          <Routes>
            <Route
              path="/home"
              exact
              element={
                <RequireAuth>
                  <Home />{" "}
                </RequireAuth>
              }
            />
            <Route
              path="/workouts"
              exact
              element={
                <RequireAuth>
                  <Workouts />{" "}
                </RequireAuth>
              }
            />
            <Route
              path="/quotes"
              exact
              element={
                <RequireAuth>
                  <Motivational />{" "}
                </RequireAuth>
              }
            />
            <Route
              path="/user"
              exact
              element={
                <RequireAuth>
                  <User />{" "}
                </RequireAuth>
              }
            />

            <Route path="/" exact element={<Login />} />
          </Routes>
        </Router>
        {/* <div className="usersDiv">
        <CreateUser />
        <ReadUser />
        <UpdateUser />
        <DeleteUser />
      </div>
      <div className="workoutDiv">
        <CreateWorkout />
        <ReadWorkouts />
        <UpdateWorkout />
        <DeleteWorkout />
      </div> */}
      </AuthProvider>
    </div>
  );
}

export default App;
