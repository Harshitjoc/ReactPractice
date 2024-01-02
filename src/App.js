import React from 'react'
import './App.css';
// import Home from './Home';
import ClassComponent from './components/Practice/Class Component';
import FunctionComponent from './components/Practice/FunctionComponent';
import State from './components/Practice/State'
import Profile from './components/Practice/HideAndShow'
import Event from './components/Practice/EventHandling'
import Watch from './components/SmartWatch/Watch';
import Todo from './components/TodoList/Todo';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <Home /> */}
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
      <Watch />
      <Todo />
      <Slider />
    </div>
  );
}

export default App;
