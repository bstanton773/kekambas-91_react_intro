import React from 'react'
import RacerForm from './RacerForm';
import RacerRow from './RacerRow';

export default function RacerTable(props) {
    let headers = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor'];
    return (
        <>
            <h1 className='text-center mt-5'>Driver Standings</h1>
            <RacerForm handleFormSubmit={props.handleFormSubmit} />
            <table className='table table-primary table-striped'>
                <thead>
                    <tr>
                        {headers.map((elem,idx) => <th key={idx}>{elem}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.racers.map((racer, idx) => <RacerRow racer={racer} key={idx} />)}
                </tbody>
            </table>
        </>
    )
}
