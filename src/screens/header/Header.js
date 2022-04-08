import React from 'react'
import './header.css'
import Typed from 'react-typed';

function Header() {
    return (
        <div className="main-info" >
            <h1 >
                What am I?
            </h1>

            <Typed
                strings={[
                    '',
                    'Web developer',
                    'Student',
                    'Coder',
                    'Soul',
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
