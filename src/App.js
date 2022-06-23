import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Kekambas from './views/Kekambas';
import RacerTable from './views/RacerTable';


function App(props) {

    return (
        <div id="fromApp">
            <Nav brand="Kekambas React"/>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/standings' element={<RacerTable />} />
                    <Route path='/kekambas' element={<Kekambas />} />
                </Routes>
            </div>
        </div>
    );
}


export default App;
