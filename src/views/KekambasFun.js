import React, { useState, useEffect } from 'react';

export default function KekambasFun(props) {
    const [kekambas, setKekambas] = useState([])

    // useEffect(() => {
    //     fetch('https://kekambas-bs.herokuapp.com/kekambas')
    //         .then(res => res.json())
    //         .then(data => setKekambas(data))
    // }, [])

    const handleClick = () => {
        fetch('https://kekambas-bs.herokuapp.com/kekambas')
            .then(res => res.json())
            .then(data => setKekambas(data))
    }

    return (
        <>
            <h1 className='text-center'>Kekambas Function</h1>
            <button className='btn btn-success' onClick={handleClick}>Get Kekambas</button>
            <ul>
                {kekambas.map(k => <li key={k.id}>{k.first_name} {k.last_name}</li>)}
            </ul>
        </>
    )
};
