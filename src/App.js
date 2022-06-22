import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import Nav from './components/Nav';
import RacerTable from './components/RacerTable';


function App(props) {
    const [count, setCount] = useState(0);
    const [racers, setRacers] = useState([]);
    const [season, setSeason] = useState(2022);
    const [round, setRound] = useState(9);

    useEffect(() => {
        fetch(`https://ergast.com/api/f1/${season}/${round}/driverStandings.json`)
        .then(res => res.json())
        .then(data => {
            let racerStandings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
            setRacers(racerStandings)
        })
    }, [round, season])

    const handleButtonClick = (step) => {
        setCount(count + step)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newSeason = event.target.season.value;
        const newRound = event.target.round.value;
        setSeason(newSeason);
        setRound(newRound);
    }

    const myButtonSteps = [1, 10, 100, 1000]

    return (
        <div id="fromApp">
            <Nav brand="Kekambas React"/>
            <div className='container'>
                <h1>Hello World</h1>
                <h4>Current Value: {count}</h4>
                {myButtonSteps.map((step, i) => <Button step={step} handleClick={handleButtonClick} key={i} />)}
                <RacerTable racers={racers} handleFormSubmit={handleFormSubmit}/>
            </div>
        </div>
    );
}


export default App;
