import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import './Hip.css';

// Registering the elements for Chart.js
ChartJS.register(
  ArcElement,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Hip = () => {
  // Data for the Pie Chart
  const pieData = {
    labels: ['Trump', 'Harris', 'Other', 'Me'],
    datasets: [
      {
        data: [35, 30, 25, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'],
      },
    ],
  };

  // Data for the Line Chart
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Trump',
        data: [30, 35, 38, 40, 45, 50],
        fill: false,
        borderColor: '#FF6384',
      },
      {
        label: 'Harris',
        data: [20, 25, 30, 35, 38, 40],
        fill: false,
        borderColor: '#36A2EB',
      },
      {
        label: 'Other',
        data: [10, 12, 14, 18, 20, 25],
        fill: false,
        borderColor: '#FFCE56',
      },
      {
        label: 'Me',
        data: [5, 7, 8, 10, 12, 15],
        fill: false,
        borderColor: '#4CAF50',
      },
    ],
  };

  return (
    <div className="hip-container">
      <h2 className="hip-question">Who would you vote for?</h2>

      <div className="hip-summary">
        <div className="hip-pie-chart">
          <Pie data={pieData} />
        </div>
        <div className="hip-line-chart">
          <Line data={lineData} />
        </div>
      </div>
    </div>
  );
};

export default Hip;
