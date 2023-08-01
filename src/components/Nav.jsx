import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className='navContainer'>
            <div className='navMenu'>
                <div className='menuItems'>
                    <Link to="/project">
                    <p className='indItem'>Projects</p>
                    </Link>
                    <p className='indItem'>Links</p>
                    <p className='indItem'>About</p>
                    <p className='indItem'>Resume</p>
                    <p className='indItem'>Contact</p>
                    

                </div>
            </div>
        </div>
    )
}

export default Nav
