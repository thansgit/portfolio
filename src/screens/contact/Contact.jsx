import React from 'react'
import './contact.css'
import { navigationLinks } from '../../helpers/navigationLinks'


function createLinks() {
    return navigationLinks.map((e, idx) => (
        <p key={idx}><a href={e.ref}>{e.name}</a></p>
    ))
}

function Contact() {
    return (
        <div className="contact__container" id="contact">
            <div className="contact__data__links">
                <div>
                    <p>Tampere</p>
                    <p>Timo Hanski</p>
                    <p>timo.hanski@gmail.com</p>
                </div>
                <div>
                    {createLinks()}
                </div>
            </div>
            <div style={{textAlign:"center"}}>Copyright&copy; {new Date().getFullYear()} All rights reserved</div>
        </div>
    )
}

export default Contact
