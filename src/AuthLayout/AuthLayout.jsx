import React from 'react';
import { Outlet } from 'react-router';
import authimg from '../assets/authImage.png'
import ProfastLogo from '../components/profast/profastLogo';

const AuthLayout = () => {
    return (
        <div className="p-12">
            <div className=''>
                <ProfastLogo></ProfastLogo>
            </div>
            <div className="hero-content flex-col lg:flex-row-reverse p-12">
               <div className='flex-1 bg-[#FAFDF0] '>
                     <img
                    src={authimg}
                    className="max-w-sm rounded-lg shadow-2xl "
                />
               </div>
                <div className='flex-1 '>
                   <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;