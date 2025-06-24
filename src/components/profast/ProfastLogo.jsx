import React from 'react';
import logo from '../../assets/logo.png'

const ProfastLogo = () => {
    return (
        <div className=' flex items-end'>
            <img src={logo} alt="" className='mb-2'/>
            <p className='-ml-2 text-3xl font-extrabold'> ProFast</p>
        </div>
    );
};

export default ProfastLogo;