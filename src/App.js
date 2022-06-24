import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AlertMessage from './components/AlertMessage';
import Nav from './components/Nav';
import Home from './views/Home';
import RacerTable from './views/RacerTable';
import Register from './views/Register';


function App(props) {
    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    const flashMessage = (message, category) => {
        setMessage(message);
        setCategory(category);
    }

    return (
        <div id="fromApp">
            <Nav brand="Kekambas React"/>
            <div className='container'>
                {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
                
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/standings' element={<RacerTable />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                </Routes>
            </div>
        </div>
    );
}


export default App;
