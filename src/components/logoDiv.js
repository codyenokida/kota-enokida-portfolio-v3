import React from 'react';
import './layout.css'
import logoimage from "../data/images/logo.png"

function logoDiv() {
    return (
        <img class="kota-logo" src={logoimage} alt="Kota Enokida Logo"/>
    );
}

export default logoDiv;