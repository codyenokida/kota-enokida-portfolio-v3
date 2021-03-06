import React from 'react';
import { Link } from 'react-scroll';

import './logo.css';
import logoImage from "../../data/images/logo.png"


function logoDiv() {
    return (
        <div class="logo-container">

            <Link
                activeClass="active"
                to="top"
                spy={true}
                smooth={true}
                offset={0}
                duration= {1000}
            >   
                <div class="logo-wrapper">
                    <img class="kota-logo" src={logoImage} alt="Kota Enokida Logo"/>
                </div>                     
            </Link>

        </div>
    );
}

export default logoDiv;