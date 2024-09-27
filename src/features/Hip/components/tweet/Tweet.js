import React from "react";
import "./Tweet.css";

const Tweet = () => {
  return (
    <div className="tweet">
      <div className="tweet-header">
        <img
          src="https://pbs.twimg.com/profile_images/1296292282977966082/oWn4cl6z_400x400.jpg"
          alt="Costa Coffee"
          className="tweet-avatar"
        />
        <div className="tweet-info">
          <span className="tweet-username">Costa Coffee</span>
          <span className="tweet-handle">@CostaCoffee · Sep 16</span>
        </div>
      </div>

      <div className="tweet-content">
        <p>
          Missing our Bonfire Toffee Spice? Or maybe it’s Salted Caramel or
          Hazelnut Praline that you’re craving? Simply vote for your favourite
          now & we’ll put one back on the menu in 2021{" "}
          <span role="img" aria-label="heart">
            😍
          </span>{" "}
          <span className="hashtag">#CostaClassics</span>
        </p>
        <div className="tweet-poll">
          <div className="tweet-poll-option selected">
            <span>Salted Caramel</span>
            <span className="tweet-poll-percentage">38.1%</span>
          </div>
          <div className="tweet-poll-option">
            <span>Bonfire Toffee Spice</span>
            <span className="tweet-poll-percentage">33.4%</span>
          </div>
          <div className="tweet-poll-option">
            <span>Hazelnut Praline</span>
            <span className="tweet-poll-percentage">28.5%</span>
          </div>
        </div>
      </div>

      <div className="tweet-footer">
        <span className="tweet-votes">1,956 votes · Final results</span>
        <div className="tweet-actions">
          <span>53</span>
          <span>19</span>
          <span>38</span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
