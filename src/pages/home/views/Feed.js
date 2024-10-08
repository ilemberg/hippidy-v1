import React from 'react';
import Hip from './Hip';

const Feed = () => {
  return (
    <div className="main-content">
      <div className="hip-container">
        {[...Array(10)].map((_, index) => (
          <Hip key={index} />
        ))}
      </div>
    </div>
  );
};

export default Feed;