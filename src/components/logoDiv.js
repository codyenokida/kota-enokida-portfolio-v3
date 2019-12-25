import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'
import './layout.css'
import logoimage from "../data/images/logo.png"


function logoDiv() {
    return (
        <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={0}
            duration= {1000}
        >                        
            <img class="kota-logo" src={logoimage} alt="Kota Enokida Logo"/>
        </Link>
    );
}

export default logoDiv;