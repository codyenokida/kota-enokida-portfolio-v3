import React from 'react';
import './shapes.css'

import square from "../../data/shapes/square.png";
import noodle from "../../data/shapes/noodle.png";
import circle from "../../data/shapes/circle.png";
import swirl from "../../data/shapes/swirl.png";
import triangle from "../../data/shapes/triangle.png";

const Square = ({ id }) => (
    <img class="square" src={square} alt="square" id={id}/>
)

const Noodle = ({ id }) => (
    <img class="noodle" src={noodle} alt="noodle" id={id}/>
)

const Circle = ({ id }) => (
    <img class="circle" src={circle} alt="circle" id={id}/>
)

const Swirl = ({ id }) => (
    <img class="swirl" src={swirl} alt="swirl" id={id}/>
)

const Triangle = ({ id }) => (
    <img class="triangle" src={triangle} alt="triangle" id={id}/>
)

export { Square , Noodle, Circle, Swirl, Triangle };