import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div>
                <h1 className='text-center text-4xl text-emerald-900'>Thanks For Using this Apps</h1>
                <h1 className='text-center text-2xl'>Your Application was Successfully Submitted</h1>
                <p className='text-center mt-5'>Back to <span className='text-blue-400 hover:underline'><Link to='/home'>Application Page</Link></span></p>
            </div>
        </div>
    );
};

export default Welcome;