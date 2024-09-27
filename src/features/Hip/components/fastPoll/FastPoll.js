import React from "react";
import "./FastPoll.css";

const FastPoll = () => {
  return (
    <div className="poll-container">
      <header className="poll-header">
        <div className="poll-logo">
          <span className="checkmark">✔</span>
          <span className="poll-title">fast<span className="poll-highlight">poll</span></span>
        </div>
        <button className="create-poll-btn">Create Poll</button>
      </header>

      <div className="poll-content">
        <div className="poll-question">
          <span className="poll-category">WEB DESIGN</span>
          <h2>What design tool do you use the most?</h2>
          <p>Asked by <span className="poll-author">Jamie Peak</span> 9 months ago</p>
        </div>

        <div className="poll-options">
          <div className="poll-option">
            <div className="poll-bar sketch-bar">
              <span className="poll-option-label">Sketch</span>
              <span className="poll-percentage">41%</span>
            </div>
            <span className="poll-votes">29 Votes</span>
          </div>

          <div className="poll-option">
            <div className="poll-bar figma-bar">
              <span className="poll-option-label">Figma</span>
              <span className="poll-percentage">37%</span>
            </div>
            <span className="poll-votes">26 Votes</span>
          </div>

          <div className="poll-option">
            <div className="poll-bar photoshop-bar">
              <span className="poll-option-label">Photoshop</span>
              <span className="poll-percentage">18%</span>
            </div>
            <span className="poll-votes">13 Votes</span>
          </div>
        </div>

        <div className="poll-vote-section">
          <button className="vote-btn">Submit your vote</button>
          <div className="total-votes">
            <h3>Votes</h3>
            <span>71</span>
          </div>

          <div className="share-section">
            <span>Share</span>
            <ul>
              <li><a href="#">Share on Twitter</a></li>
              <li><a href="#">Share on Facebook</a></li>
              <li><a href="#">Copy Link</a></li>
              <li><a href="#">QR Code</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastPoll;
