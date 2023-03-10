import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul className='flex justify-center'>
                <li className=' text-emerald-900 mx-2 font-semibold'><Link to='/home'>Home</Link></li>
                <li className=' text-emerald-900 mx-2 font-semibold'><Link to='/allapplication'>Dashboard</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;