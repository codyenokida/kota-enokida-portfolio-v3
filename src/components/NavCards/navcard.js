import React from 'react';
import { Link } from 'react-scroll';

import Button from '../Button/button'
import './navcard.css';

function showComponents(int) {

    if (window.innerWidth > 960) {
        var navTitle = document.getElementsByClassName("nav-link-title")[int];
        // navTitle.style.top = '-10px';
        navTitle.style.paddingBottom = '30px'
        navTitle.style.paddingTop = '0px'
        var navImage = document.getElementsByClassName("nav-image")[int];
        var navP = document.getElementsByClassName("nav-p")[int];
        var background = document.getElementsByClassName("background")[int];
        var navButton = document.getElementsByClassName("button-container")[int];
        navImage.style.transform = 'scale(1)';
        navImage.style.opacity = 1;
        navP.style.opacity = 1;
        navP.style.transform = 'translateX(0px) translateY(0vh)';
        background.style.transform = 'translateX(0px) translateY(0vh) scale(1)';
        background.style.opacity = 1;
        background.style.display = 'block'
        navButton.style.opacity = 1;
        navButton.style.transform = 'translateX(0px) translateY(10px) scale(0.9)';
    }
}

function hideComponents(int) {

    if (window.innerWidth > 960) {

        var navTitle = document.getElementsByClassName("nav-link-title")[int];
        // navTitle.style.top = '0px';
        navTitle.style.paddingBottom = '20px'
        navTitle.style.paddingTop = '0px'

        var navImage = document.getElementsByClassName("nav-image")[int];
        var background = document.getElementsByClassName("background")[int];
        var navP = document.getElementsByClassName("nav-p")[int];
        var navButton = document.getElementsByClassName("button-container")[int];
        navImage.style.transform = 'scale(0.5)';
        navImage.style.opacity = 0;
        navP.style.opacity = 0;
        navP.style.transform = 'translateX(0px) translateY(-1vh)'
        background.style.transform = 'translateX(0px) translateY(100vh) scale(0)';
        background.style.opacity = 0;
        background.style.display = 'none'
        navButton.style.opacity = 0;
        navButton.style.transform = 'translateX(0px) translateY(0) scale(0)';      
    }
}


const NavCard = ( { id, address, navParagraph, image} ) => (

    <div class="navcard-container" onMouseOver={() => showComponents(parseInt(id))} onMouseLeave={() => hideComponents(parseInt(id))}>

        <div class="background"></div>
            <img class="nav-image" src={image} alt="about-image"/>
            <p class="nav-p">{navParagraph}</p>
        <Link
            activeClass="active"
            to={address}
            spy={true}
            smooth={true}
            offset={0}
            duration= {1000}
        >                        
            <Button int={parseInt(id)}/>
        </Link>

    </div>

);


export default NavCard;