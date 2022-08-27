import React, { useState, useEffect } from "react";
import { useAuth } from "../Componet/Auth";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const url = "http://localhost:3001";

function User() {
  const auth = useAuth();
  const [users, setUsers] = useState([]);
  const [uservalues, SetValues] = useState({
    username: "",
    name: "",
    sex: "",
    age: "",
  });
  const [weightInput, SetWeightInput] = useState({
    weight: "",
    date: "",
  });

  const [userweight, SetUserWeight] = useState({});

  const currentDate = new Date();

  //Updates User info when submitted
  useEffect(() => {
    fetch(`${url}/api/users/${auth.user}`)
      .then((response) => response.json())
      .then((data) => {
        fetch(`${url}/api/user_info/${auth.user}`)
          .then((response) => response.json())
          .then((data) => {
            SetUserWeight(data);
          });
        setUsers(data);
      });
  }, [uservalues]);
  /////////////////////

  const handleNameInputChange = (event) => {
    SetValues({ ...uservalues, name: event.target.value });
  };

  const handleWeightInputChange = (event) => {
    SetWeightInput({ ...weightInput, weight: event.target.value });
  };

  const handleSexInputChange = (event) => {
    SetValues({ ...uservalues, sex: event.target.value });
  };

  const handleAgeInputChange = (event) => {
    SetValues({ ...uservalues, age: Number(event.target.value) });
  };

  const handleSubmit = (event) => {
    //prevent referesh
    SetWeightInput({ weight: "", date: "" });
    SetValues({ username: "", name: "", sex: "", age: "" });
    event.preventDefault();
  };

  //
  const updateUser = (event) => {
    //Specifies PATCH request and header
    if (uservalues.name === "") {
      uservalues.name = users.name;
    }
    if (uservalues.sex === "") {
      uservalues.sex = users.sex;
    }
    if (uservalues.age === "") {
      uservalues.age = users.age;
    }

    const requestUser = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: auth.user,
        name: uservalues.name,
        // weight: uservalues.weight,
        sex: uservalues.sex,
        age: uservalues.age,
      }),
    };

    const requestWeight = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: auth.user,
        weight: weightInput.weight,
        date: currentDate.toLocaleDateString(),
      }),
    };
    fetch(`${url}/api/users/${auth.user}`, requestUser)
      .then((response) => response.json())
      .then((data) => {
        fetch(`${url}/api/user_info/`, requestWeight)
          .then((response) => response.json())
          .then((data) => {});
      });
  };

  /////////////////
  ////Graph///////
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Weight",
      },
    },
  };

  const data = {
    labels: Array.from(userweight).map((element) => element.date),
    datasets: [
      {
        label: auth.user,
        data: Array.from(userweight).map((element) => element.weight),
        borderColor: "#060b26",
        backgroundColor: "tan",
      },
    ],
  };

  //////////////////

  return (
    <div className="user">
      <div className="user-div">
        <h1 className="userHeader">My Account</h1>
        <div>
          {users.map((user) => {
            return (
              <div key={user.user_id + 10}>
                <span>Name: {user.name}</span>
                {/* <span>Weight: {user.weight}</span> */}
                <span>Sex: {user.sex}</span>
                <span>Age: {user.age}</span>
              </div>
            );
          })}
        </div>

        <form className="userDiv" onSubmit={handleSubmit}>
          <div className="userInfo">
            <h3>Update Information</h3>
            <span>
              Name:
              <input
                onChange={handleNameInputChange}
                value={uservalues.name}
                className="name-span"
                type="text"
                placeholder="Name"
                name="name"
              />
            </span>
            <span>
              Weight:
              <input
                onChange={handleWeightInputChange}
                value={weightInput.weight}
                className="weigth-span"
                type="text"
                placeholder="Weight"
                name="weight"
              />
            </span>
            <span>
              Sex:
              <input
                onChange={handleSexInputChange}
                value={uservalues.sex}
                className="sex-span"
                type="text"
                placeholder="Sex"
                name="sex"
              />
            </span>
            <span>
              Age:
              <input
                onChange={handleAgeInputChange}
                value={uservalues.age}
                className="age-span"
                type="text"
                placeholder="Age"
                name="age"
              />
            </span>
            <button
              onClick={() => updateUser()}
              className="updateBTN"
              type="submit"
            >
              Update User
            </button>
          </div>
        </form>
      </div>
      <div className="graph">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default User;
