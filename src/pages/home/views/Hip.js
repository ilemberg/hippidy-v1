import React from 'react';
import { FaExpandAlt , FaRocket, FaReply, FaSearch, FaStar } from 'react-icons/fa';
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
        const yPosition = y.getPixelForValue(value) - 5;
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
      <p className="hip-secondary-question political">What political party do you belong to?</p>
      <p className="hip-secondary-question religious">What religion do you identify with?</p>
    </div>
    <div className="hip-button-groups">
      <div className="hip-button-set">
        <button className="hip-button political">Dem</button>
        <button className="hip-button hip-button-selected political">Rep</button>
        <button className="hip-button political">Ind</button>
        <button className="hip-button political">Other</button>
      </div>
      <div className="hip-button-set">
        <button className="hip-button religious">Christ</button>
        <button className="hip-button religious">Jewish</button>
        <button className="hip-button hip-button-selected religious">Atheist</button>
        <button className="hip-button religious">Other</button>
      </div>
    </div>
    <div className="hip-chart-container">
      <div className="hip-chart-label">Rep & Atheist</div>
      <div className="hip-bar-chart">
        <Bar data={chartData} options={chartOptions} plugins={plugins} />
      </div>
    </div>
    <div className="hip-footer">
        <button className="hip-footer-button"><FaRocket /> Boost</button>
        <button className="hip-footer-button"><FaReply /> Answer</button>
        <button className="hip-footer-button"><FaSearch /> Investigate</button>
        <button className="hip-footer-button"><FaStar /> Favorite</button>
      </div>
  </div>
  );
};

export default Hip;