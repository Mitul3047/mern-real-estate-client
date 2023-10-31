import { NavLink } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'

const NavBar = () => {

    const NavLinks =
        <>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/Sign-in'}>Sign-In</NavLink></li>

        </>


    return (
        <div className="navbar bg-slate-200 p-4 shadow-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {NavLinks}
                    </ul>
                </div>
                <NavLink to={'/'} className="btn btn-ghost normal-case text-xl">
                    <span className="text-slate-500">Buy</span><span className="text-slate-700">Estate</span>
                </NavLink>
            </div>
            <div className="navbar-center">
                <form className="bg-slate-100 flex items-center p-3 rounded-lg ">
                    <input type="text" placeholder="Search..." className=" w-24 bg-transparent   md:w-[512px]" />
                    <FaSearch className="text-slate-500 text-xl"></FaSearch>
                </form>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavLinks}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;