import React from 'react';
import './Home.css';
import Left1 from './views/Left1';
import Right1 from './views/Right1'
import Right2 from './views/Right2';
import Feed from './views/Feed';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Hippidy</h1>
      </header>
      <div className="content-container">
        <div className="left-pane">
          <Left1 />
          <Right1 />
        </div>
        <Feed />
        <Right2 />
      </div>
      <footer className="home-footer">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;