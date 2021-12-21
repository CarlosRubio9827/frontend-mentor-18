import React from 'react';
import './ThemeComponent.scss';
import { MdLightMode } from "react-icons/md";
import { MdNightlightRound } from "react-icons/md";

function ThemeComponent(){
    const themes = [
        {
            name: 'Light',
        },
        {
            name: 'Dark'
        } 
    ]
    return (
        <div className="themeComponent">
            <div className="themeComponent-title">
                <p>DevFinder</p>
            </div>
            <div className="themeComponent-change">
                <p>{themes[1].name}</p>
                <MdLightMode className="themeComponent-change-icon"/>
            </div>
        </div>
    ) 
}

export { ThemeComponent }