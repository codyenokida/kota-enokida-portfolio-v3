import React from 'react';
import { Link } from 'react-scroll';

import './navwords.css'

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
        navTitle.style.paddingTop = '10px'
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



const NavWords = () => {
    
    return(
        <div class="navigation-word-container" id="nav">
            <div class="navigation-word-grid-container">
                <Link
                    activeClass="active"
                    to="about-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1000}
                >                        
                    <p class="nav-link-title" onMouseOver={() => showComponents(0)} onMouseLeave={() => hideComponents(0)}>ABOUT</p>
                </Link>
                
                <Link
                    activeClass="active"
                    to="works-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1000}
                >                        
                    <p class="nav-link-title" onMouseOver={() => showComponents(1)} onMouseLeave={() => hideComponents(1)}>WORKS</p>
                </Link>

                <Link
                    activeClass="active"
                    to="gallery-section"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration= {1000}
                >                        
                    <p class="nav-link-title" onMouseOver={() => showComponents(2)} onMouseLeave={() => hideComponents(2)}>GALLERY</p>
                </Link>
            </div>
        </div>
    )
    
};



export default NavWords;