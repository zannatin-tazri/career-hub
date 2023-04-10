import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='navbar'>
            <div>
               <h2>Your Dream Job</h2>
            </div>

            <div className='nav-items'>
              <a href="/statistics">Statistics</a>
              <a href="/appliedJob">Applied Jobs</a>
              <a href="/blog">Blog</a>
            </div>

            <div >
               <button className='nav-btn'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Header;