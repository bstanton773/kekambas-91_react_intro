import React from 'react'

export default function RacerTable() {
    let headers = ['#', 'First', 'Last', 'Points', 'Wins', 'Nationality', 'Constructor']
    return (
        <>
            <h1 className='text-center mt-5'>Driver Standings</h1>
            <table className='table table-primary table-striped'>
                <thead>
                    <tr>
                        {headers.map((elem,idx) => <th key={idx}>{elem}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>Brian</td>
                        <td>Stanton</td>
                        <td>100</td>
                        <td>10</td>
                        <td>American</td>
                        <td>Coding Temple</td>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td>Brian</td>
                        <td>Stanton</td>
                        <td>100</td>
                        <td>10</td>
                        <td>American</td>
                        <td>Coding Temple</td>
                    </tr>
                    <tr>
                        <th>1</th>
                        <td>Brian</td>
                        <td>Stanton</td>
                        <td>100</td>
                        <td>10</td>
                        <td>American</td>
                        <td>Coding Temple</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
