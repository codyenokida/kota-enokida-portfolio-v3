import React from 'react';
import logoimage from "../data/images/logo.png"
import Button from "./button"

import "./layout.css"

function navCard() {

    function showComponents(int) {
        var navImage = document.getElementsByClassName("nav-image")[int];
        var navP = document.getElementsByClassName("nav-p")[int];
        var background = document.getElementsByClassName("background")[int];
        var navButton = document.getElementsByClassName("button-container")[int];
        var navTitle = document.getElementsByClassName("nav-link")[int];
        navImage.style.transform = 'scale(1)';
        navImage.style.opacity = 1;
        navP.style.opacity = 1;
        navP.style.transform = 'translateX(0px) translateY(0vh)';
        background.style.transform = 'translateX(0px) translateY(0vh) scale(1)';
        background.style.opacity = 1;
        navButton.style.opacity = 1;
        navButton.style.transform = 'translateX(0px) translateY(10px) scale(0.9)';
        navTitle.style.top = '31vh';
    }

    function hideComponents(int) {
        var navImage = document.getElementsByClassName("nav-image")[int];
        var background = document.getElementsByClassName("background")[int];
        var navP = document.getElementsByClassName("nav-p")[int];
        var navButton = document.getElementsByClassName("button-container")[int];
        var navTitle = document.getElementsByClassName("nav-link")[int];
        navImage.style.transform = 'scale(0.5)';
        navImage.style.opacity = 0;
        navP.style.opacity = 0;
        navP.style.transform = 'translateX(0px) translateY(-1vh)'
        background.style.transform = 'translateX(0px) translateY(100vh) scale(0)';
        background.style.opacity = 0;
        navButton.style.opacity = 0;
        navButton.style.transform = 'translateX(0px) translateY(0) scale(0)';      
        navTitle.style.top = '32vh';
    }

    return(
        <div class="box-container">

            <div class="nav-link-container">

                <div class="nav-container" onMouseOver={() => showComponents(0)} onMouseLeave={() => hideComponents(0)}>
                    <div class="nav-link">
                        <a class="nav-link-title" href="#about-section">ABOUT</a>
                    </div>
                    <div class="background"></div>
                    <img class="nav-image" src={logoimage} alt="about-image"/>
                    <p class="nav-p">you don’t know a lot about me... why don’t you come find out?</p>
                    <Button int={0}/>
                </div>

                <div class="nav-container" onMouseOver={() => showComponents(1)} onMouseLeave={() => hideComponents(1)}>
                    <div class="nav-link">
                        <a class="nav-link-title" href="">WORKS</a>
                    </div>
                    <div class="background"></div>
                    <p class="nav-p">i like to dabble with a lot of different ideas. come check it out!</p>
                    <img class="nav-image" src={logoimage} alt="works-image"/>
                    <Button int={1}/>
                </div>

                <div class="nav-container" onMouseOver={() => showComponents(2)} onMouseLeave={() => hideComponents(2)}>
                    <div class="nav-link">
                        <a class="nav-link-title" href="">GALLERY</a>
                    </div>
                    <div class="background"></div>
                    <p class="nav-p">get to know me a little more personally through adventures i’ve gone to!</p>
                    <img class="nav-image" src={logoimage} alt="gallery-image"/>
                    <Button int={2}/>
                </div>
                
            </div>
        </div>
    );
}

export default navCard