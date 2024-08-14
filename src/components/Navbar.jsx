// import React from 'react';
import '../styles/Navbar.scss';
import logo from "../assets/logo.png"
import { CiSearch } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

import user from '../assets/user.png'

const Navbar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/');
        
    };


    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="logo" onClick={handleClick}>
                    <img src={logo} alt="HRMS" />
                </div>
                <div className="nav-items">

                </div>
            </div>
            <div className="navbar-right">
                <div className="leftIcon">
                    <div></div>
                    <IoIosArrowDropleft />
                    <IoIosArrowDropright  className='icon2'/>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search employee" />
                    <span> <CiSearch /></span>
                </div>
                <div className="iconRight">
                    <IoIosNotificationsOutline className="icon" />
                    <IoSettingsOutline className="icon" />
                    <img src={user} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
//