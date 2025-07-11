import React from 'react';
import { Link, NavLink } from 'react-router';
import ProfastLogo from './profast/profastLogo';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const {user, logOut} = useAuth()

    const handleLogout = () =>{
        logOut()
        .then(res=>console.log(res.user))
        .catch(er=>console.log(er.code))
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/'>About Us</NavLink></li>
        <li><NavLink to='/coverage'>Coverage</NavLink></li>
        <li><NavLink to='/sendParcel'>Add Parcel</NavLink></li>
       {
           user && <>
             <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </>
        
    }
    <li><NavLink to='/beARider'>Be A Rider</NavLink></li>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <span className="btn btn-ghost text-xl"><ProfastLogo/></span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                     {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary text-black '>Logout</button>
                     :
                    <Link className='btn btn-primary text-black' to='/login'>Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;