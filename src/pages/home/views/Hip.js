import React from 'react';
import { FaExpandAlt } from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Hip = () => {
  const chartData = {
    labels: ['Trump', 'Harris', 'RFK', 'Other'],
    datasets: [
      {
        data: [45, 35, 15, 5],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#333', font: { size: 12 } },
      },
      y: {
        grid: { display: false },
        ticks: { display: false },
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const plugins = [{
    id: 'textAboveBar',
    afterDraw: (chart) => {
      const { ctx, data, scales: { x, y } } = chart;
      ctx.save();
      ctx.font = 'bold 12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillStyle = '#333';

      data.datasets[0].data.forEach((value, index) => {
        const xPosition = x.getPixelForValue(index);
        const yPosition = y.getPixelForValue(value) - 5; // 5 pixels above the bar
        ctx.fillText(`${value}%`, xPosition, yPosition);
      });
      ctx.restore();
    }
  }];

  return (
    <div className="hip-card">
      <div className="hip-top-row">
        <div className="hip-profile-pic"></div>
        <FaExpandAlt className="hip-expand-icon" />
      </div>
      <div className="hip-question-row">
        <h2 className="hip-question">Who will you vote for president in the 2024 election?</h2>
      </div>
      <div className="hip-secondary-row">
        <p className="hip-secondary-question">What political party do you belong to?</p>
        <p className="hip-secondary-question">What religion do you identify with?</p>
      </div>
      <div className="hip-bar-chart">
        <Bar data={chartData} options={chartOptions} plugins={plugins} />
      </div>
    </div>
  );
};

export default Hip;