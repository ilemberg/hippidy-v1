import React from "react";
import './StrawPoll.css';

const StrawPoll = () => {
  return (
    <div className="poll-container">
      <header className="strawpoll-header">
        <div className="strawpoll-logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Strawpoll_logo.png" alt="StrawPoll Logo" />
          <span>StrawPoll</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
      </header>

      <div className="poll-content">
        <h2>Which is your favorite fruit of all time?</h2>
        <p>by <a href="#">Gregor Krambs</a> · 46 minutes ago</p>

        <div className="poll-results">
          <div className="poll-options">
            <div className="poll-option">
              <div className="option-label">
                Strawberries
              </div>
              <div className="option-bar">
                <div className="bar bar-strawberry" style={{ width: '60%' }}></div>
              </div>
              <span className="vote-details">60.00% (9 votes)</span>
            </div>
            
            <div className="poll-option">
              <div className="option-label">
                Mango
              </div>
              <div className="option-bar">
                <div className="bar bar-mango" style={{ width: '20%' }}></div>
              </div>
              <span className="vote-details">20.00% (3 votes)</span>
            </div>
            
            <div className="poll-option">
              <div className="option-label">
                Bananas
              </div>
              <div className="option-bar">
                <div className="bar bar-banana" style={{ width: '13.33%' }}></div>
              </div>
              <span className="vote-details">13.33% (2 votes)</span>
            </div>

            <div className="poll-option">
              <div className="option-label">
                Grapes
              </div>
              <div className="option-bar">
                <div className="bar bar-grape" style={{ width: '6.67%' }}></div>
              </div>
              <span className="vote-details">6.67% (1 vote)</span>
            </div>

            <div className="poll-option">
              <div className="option-label">
                Lemon
              </div>
              <div className="option-bar">
                <div className="bar bar-lemon" style={{ width: '0%' }}></div>
              </div>
              <span className="vote-details">0.00% (0 votes)</span>
            </div>
          </div>

          <div className="poll-chart">
            <img
              src="https://image-charts.com/chart?cht=p&chs=300x300&chd=t:60,20,13.33,6.67,0&chl=Strawberries|Mango|Bananas|Grapes|Lemon&chco=4CAF50,FF7043,AB47BC,FFEB3B,EF5350"
              alt="Pie Chart"
            />
          </div>
        </div>

        <p className="total-votes">Total votes: 15 (from 14 participants)</p>

        <div className="poll-footer">
          <button className="live-results">Live results</button>
          <button className="back-to-poll">Back to Poll</button>
          <button className="share-btn">Share</button>
        </div>
      </div>
    </div>
  );
};

export default StrawPoll;
