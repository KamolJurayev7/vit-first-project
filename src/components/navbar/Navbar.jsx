// stayle
import './Navbar.css'
import React from 'react';

const Navbar = ({ userslength }) => {
    return (
        <div className='navbar'>
            <div className="navbar-container container">
                <h1 className='navbar-logo'>CUser</h1>
                <h3 className='navbar-counter'>
                    {
                        userslength > 0 ? "You Have:" + userslength : "No users :("
                    }
                </h3>
            </div>
        </div>
    );
}

export default Navbar;
