import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='navContainer'>
            <div className='navMenu'>
                <div className='menuItems'>
                    <Link to="/project" style={{ textDecoration: 'none' }}>
                    <p className='indItem'>Projects</p>
                    </Link>
                    <p className='indItem'>Links</p>
                    <p className='indItem'>About</p>
                    <Link to="/resume" style={{ textDecoration: 'none' }}>
                    <p className='indItem'>Resume</p>
                    </Link>
                    <p className='indItem'>Contact</p>
                    

                </div>
            </div>
        </div>
    )
}

export default Nav
