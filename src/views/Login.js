import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
        <h4 className='text-center'>Login</h4>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>

                <label htmlFor='username'>Username</label>
                <input type='text' className='form-control' placeholder='Enter Username' name='username' />

                <label htmlFor='password'>Password</label>
                <input type='password' className='form-control' placeholder='Enter Password' name='password' />

                <input type='submit' className='btn btn-primary w-100 mt-3' value='Login' />

            </div>
        </form>
        </>
    )
}
