import React from 'react'
import './header.css'
import Typed from 'react-typed';

function Header() {
    return (
        <div className="main-info" >
            <h1 >
                What am I doing?
            </h1>

            <Typed
                strings={[
                    '',
                    'Web development',
                    'Studying',
                    'Coding',
                    ''
                ]}
                typeSpeed={40}
                backSpeed={50}
                loop
            />


        </div>
    )
}

export default Header
