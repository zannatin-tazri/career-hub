import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
               <h2>Your Dream Job</h2>
            </div>

            <div className='nav-items'>
              <Link to="/">Home</Link>
              <Link to="/statistics">Statistics</Link>
              <Link to="/appliedJob">Applied Jobs</Link>
              <Link to="/blog">Blog</Link>
            </div>

            <div >
               <button className='nav-btn'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;