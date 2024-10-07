import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Hippidy</h1>
      </header>
      <div className="content-container">
        <div className="left-pane">
          <div className="sidebar">
            <h2>Sidebar 1</h2>
            <p>Links and additional content here.</p>
          </div>
          <div className="sidebar">
            <h2>Sidebar 2</h2>
            <p>More links and additional content here.</p>
          </div>
        </div>
        <div className="main-content">
          <h2>Main Content</h2>
          <p>Here is where the main content goes.</p>
        </div>
        <div className="right-sidebar">
          <h2>Right Sidebar</h2>
          <p>More links and info here.</p>
        </div>
      </div>
      <footer className="home-footer">
        <p>&copy; 2024 Hippidy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;