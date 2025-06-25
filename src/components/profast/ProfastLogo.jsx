import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const ProfastLogo = () => {
    return (
        <Link to='/'>
            <div className=' flex items-end'>
            <img src={logo} alt="" className='mb-2'/>
            <p className='-ml-2 text-3xl font-extrabold'> ProFast</p>
        </div>
        </Link>
    );
};

export default ProfastLogo;