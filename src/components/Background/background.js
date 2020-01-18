import React from 'react';
import "./background.css"
import {Square , Noodle, Circle, Swirl, Triangle} from "../Shapes/shapes"

const Background = () => (

    <div class="shape-container">
        <Square id="square-1"/>
        <Noodle id="noodle-1"/>
        <Noodle id="noodle-2"/>
        <Circle id="circle-1"/>
        <Swirl id="swirl-1" />
        <Triangle id="triangle-1" />
        <Triangle id="triangle-2" />
        <Noodle id="noodle-3" />
        <Swirl id="swirl-2" />
        <Circle id="circle-2"/>
        <Square id="square-2" />
    </div>

);

export default Background;