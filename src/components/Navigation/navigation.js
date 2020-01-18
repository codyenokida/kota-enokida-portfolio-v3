import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll'


import aboutImage from "../../data/images/about-image.png";
import worksImage from "../../data/images/works-image.png";
import galleryImage from "../../data/images/gallery-image.png";
import Button from "../Button/button";
import NavCard from '../NavCards/navcard'

import "./navigation.css"

function navCard() {

    return(
        <div class="navigation-container">

            <div class="navbox-container">

                <NavCard id="0" address="about-section" navParagraph="you don’t know a lot about me... why don’t you come find out?" image={aboutImage}/>
                <NavCard id="1" address="works-section" navParagraph="i like to dabble with a lot of different ideas. come check it out!" image={worksImage}/>
                <NavCard id="2" address="gallery-section" navParagraph="get to know me a little more personally through adventures i’ve gone to!" image={galleryImage}/>

            </div>

        </div>
    );
}

export default navCard