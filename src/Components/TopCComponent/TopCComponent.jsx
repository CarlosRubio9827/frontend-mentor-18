import React from 'react'
import './TopCComponent.scss'

import { AiFillGithub } from "react-icons/ai";

function TopCComponent(props){
    return (
        <div className="TopCComponent">
            <div className="TopCComponent-logo">
                <AiFillGithub className="TopCComponent-logo-img" />
            </div> 
            <div className="TopCComponent-info">
                <div className="TopCComponent-info-name">
                    <p>Carlos Rubio</p>
                </div>
                <div className="TopCComponent-info-user">
                    <p>CarlosRubio9821</p>
                </div>
                <div className="TopCComponent-info-join">
                    <p>Joined 27 may 2019</p>
                </div>
            </div>
            <div className="TopCComponent-bio">
                <p>
                Los lenguajes de programación modernos tienen estructuras de control similares.
                </p>
            </div>
        </div>
    )
}


export { TopCComponent }