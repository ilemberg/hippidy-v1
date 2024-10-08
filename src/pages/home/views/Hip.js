// Hip.js
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Hip = () => {
  const data = {
    labels: ['Trump', 'Harris', 'RFK', 'Other'],
    datasets: [
      {
        data: [30, 25, 20, 25],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="hip-card">
      <p className="hip-question">Who will you vote for president?</p>
      <div className="hip-bar-chart">
        <Bar data={data} options={options} />
      </div>
      <p className="hip-total-votes">Total Votes: 100</p>
    </div>
  );
};

export default Hip;
