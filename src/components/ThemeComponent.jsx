import React, {useState, useEffect} from 'react';
import '../styles/ThemeComponent.scss';
import { MdLightMode } from "react-icons/md";
// import { MdNightlightRound } from "react-icons/md";

function ThemeComponent(){


    const themes = [
        {
            name: 'Light',
        },
        {
            name: 'Dark'
        } 
    ]

    function example() {

        document.getElementsByTagName("HTML")[0].setAttribute('data-theme', 'dark')
    } 


    

    return (
        <div className="themeComponent">
            <div className="themeComponent-title">
                <p>DevFinder</p>
            </div>
            <div className="themeComponent-change" onClick={example}>
                <input type="checkbox" id="switch" /><label htmlFor="switch">Toggle</label>
            </div>
        </div>
    ) 
}

export { ThemeComponent }