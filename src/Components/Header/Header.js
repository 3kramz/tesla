import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="nav">
            
            <div >
         <Link className="logo" to='/home'>TESLA</Link> 
           </div>



            <div >
                <Link className="menu" to='/home'>HOME</Link>
                <Link className="menu" to='/reviewws'>REVIEWS</Link>
                <Link className="menu" to='/dashboard'>DASHBOARD</Link>
                <Link className="menu" to='/blogs'>BLOGS</Link>
                <Link className="menu" to='/about'>ABOUT</Link>
           </div>
           
        </div>
    );
};

export default Header;