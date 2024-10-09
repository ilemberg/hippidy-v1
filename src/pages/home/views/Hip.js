// Hip.js
import React from 'react';
import { FaExpandAlt } from 'react-icons/fa';

const Hip = () => {
  return (
    <div className="hip-card">
      <div className="hip-top-row">
        <div className="hip-profile-pic"></div>
      
        <FaExpandAlt className="hip-expand-icon" />
      </div>
      <div className="hip-question-row">
       
      <div className="hip-question">Who will you vote for president in the 2024 election?</div>
   
      </div>
      <div className="hip-secondary-row">
      <div className="hip-secondary-question">What political party do you belong to?</div>
      <div className="hip-secondary-question">What religion do you identify with?</div>
      </div>
    </div>
  );
};

export default Hip;