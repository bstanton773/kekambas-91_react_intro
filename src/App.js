import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Nav from './components/Nav';


function App(props) {
  const [count, setCount] = useState(0)
  const [racers, setRacers] = useState([])
  useEffect(() => {
    console.log('App rendered!')
    fetch('https://ergast.com/api/f1/2021/10/driverStandings.json')
      .then(res => res.json())
      .then(data => console.log(data))
  })
  const handleButtonClick = (step) => {
    setCount(count + step)
  }
  const myButtonSteps = [1, 10, 100, 1000]
  return (
    <div id="fromApp">
        <Nav brand="Kekambas React"/>
        <div className='container'>
          <h1>Hello World</h1>
          <h4>Current Value: {count}</h4>
          {myButtonSteps.map((step, i) => <Button step={step} handleClick={handleButtonClick} key={i} />)}
        </div>
    </div>
    );
}


export default App;
