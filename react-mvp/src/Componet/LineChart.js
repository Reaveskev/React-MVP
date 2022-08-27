import React, { useState, useEffect } from "react";

const LineChart = () => {
  useEffect(() => {
    fetch(`${url}/api/user_info/${auth.user}`)
      .then((response) => response.json())
      .then((data) => {
        SetUserWeight(data);
      });
  }, [uservalues]);

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
    labels: userweight.map((x) => x.date),
    datasets: [
      {
        label: auth.user,
        data: userweight.map((x) => x.weight),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
