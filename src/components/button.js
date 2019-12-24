import React from 'react';

import './button.css'

function intButton({int}) {

    function raiseButton(int) {
        var but = document.getElementsByClassName("button")[int];
        but.style.transform = 'translateX(-2px) translateY(-2px)';
    }

    function downButton(int) {
        var but = document.getElementsByClassName("button")[int];
        but.style.transform = 'translateX(0px) translateY(0px)';
    }

    return(
        <div class="button-container" onMouseOver={() => raiseButton(int)} onMouseLeave={() => downButton(int)}>
            <div class="button">
                <p>view!</p>
            </div>
            <div class="backbutton"></div>
        </div>
        
    );
}

export default intButton;