import React from 'react';
import './Home.css';
import Header from './views/Header';
import Left1 from './views/Left1';
import Right1 from './views/Right1';
import Right2 from './views/Right2';
import Feed from './views/Feed';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="content-wrapper"> 
        <div className="content-container">
          <div className="left-pane">
            <Left1 />
            <Right1 />
          </div>
          <Feed />
          <div className="right-pane">
            <Right2 />
          </div>
        </div>
      </div>
      <footer className="home-footer">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;