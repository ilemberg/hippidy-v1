import React from "react";
import "./FbPost.css";

const FbPost = () => {
  return (
    <div className="fb-post">
      <div className="fb-header">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt="Gabriela Popa"
          className="fb-avatar"
        />
        <div className="fb-info">
          <span className="fb-name">Gabriela Popa</span>
          <span className="fb-subtext">created a poll.</span>
          <span className="fb-time">June 21 at 4:59 PM</span>
        </div>
      </div>

      <div className="fb-content">
        <p>
          This group is about you, we just want to be as helpful as we can; so we
          were wondering what would you like to see here...{" "}
          <span role="img" aria-label="smile">
            😊
          </span>
          <br />
          Feel free to add new options!{" "}
          <span role="img" aria-label="smile">
            😁
          </span>
        </p>
      </div>

      <div className="fb-poll">
        <div className="fb-poll-option checked">
          <input type="checkbox" checked readOnly />
          <label>Design tips and ideas</label>
          <div className="fb-poll-voters">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="voter" />
            <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="voter" />
            <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="voter" />
            <img src="https://randomuser.me/api/portraits/men/34.jpg" alt="voter" />
            <span>+3</span>
          </div>
        </div>
        <div className="fb-poll-option">
          <input type="checkbox" />
          <label>Bannersnack tutorials and "how to" videos</label>
        </div>
        <div className="fb-poll-option">
          <input type="checkbox" />
          <label>Inside news about new features</label>
        </div>
        <div className="fb-poll-option">
          <input type="checkbox" />
          <label>Marketing news and updates</label>
        </div>
        <div className="fb-poll-option">
          <input type="text" placeholder="Add option" />
        </div>
      </div>

      <div className="fb-footer">
        <div className="fb-actions">
          <span>👍 Like</span>
          <span>💬 Comment</span>
          <span>Share</span>
        </div>
      </div>
    </div>
  );
};

export default FbPost;
