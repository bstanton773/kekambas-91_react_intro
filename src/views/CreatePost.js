import React from 'react'

export default function CreatePost() {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <>
        <h4 className='text-center'>Create A Post</h4>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>

                <label htmlFor='title'>Title</label>
                <input type='text' className='form-control' placeholder='Enter Title' name='title' />

                <label htmlFor='body'>Body</label>
                <input type='text' className='form-control' placeholder='Enter Body' name='body' />

                <input type='submit' className='btn btn-primary w-100 mt-3' value='Create Post' />

            </div>
        </form>
        </>
    )
}
