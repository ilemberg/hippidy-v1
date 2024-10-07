
import React from 'react';
import './App.css';
import Home from './pages/Home';
// import Hip from './features/Hip/Hip';

function App() {
  return (
    <div className="App">
        {/* <Hip /> */} 
        <Home />  
  </div>
  );
}

export default App;
/*
How should I approach this?

GOAL 1: A static visual hip with three questions
Goal 2: Actually create the UX not just the look, so you can switch in questions and switchn and out of detail view, NOT the real working just the ux
Goal 3: Create question same as above steps
Gaol 4: UI and then ux for answering questions
Goal 5: UI and UX for seeing or search new questions
1. focus on creating the one hip with three questions 
2. create every main part with those assumptions
3. only after an attempt at each sub component do i actually think about any functionality like combining or interacting in anway


thouhgts
What if its chaineed together. instead of forcing everything into one. its more scalable
What does chain look like? where are
*/