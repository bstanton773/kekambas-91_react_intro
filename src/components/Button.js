import React, { useState } from 'react';

export default function Button(props) {
    const [count, setCount] = useState(0)
    return (
        <button className='btn btn-primary w-100' onClick={() => setCount(count + props.step)}>Step: {props.step} - Current: {count} </button>
    )
}
