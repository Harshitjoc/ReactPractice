import React from 'react'
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import ClassComponent from './Class Component';
import FunctionComponent from './FunctionComponent';
import State from './State'
import Profile from './HideAndShow'
import Event from './EventHandling'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
        <ClassComponent text="Class Profile Component"
        />
        <FunctionComponent text="Function Profile Component"
          data={{ firstname: 'Harshit ', lastname: 'Joshi' }}
        />
        {/* before use in functional component we
        have to declare it here.*/}


        {/* {
          React.createElement(
            'h1',
            'null',
            'Hello JSX'
          )
        } 
        this approch is used if we are not using 
        JSX in react */}

        <State />
        <Profile />
        <Event />

      </header>
    </div>
  );
}

export default App;
