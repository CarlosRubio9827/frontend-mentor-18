import React from 'react'
import './BottomCComponent.scss'

import { SiGooglemaps } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiBuilding3Fill } from "react-icons/ri";


function BottomCComponent(){
    return (
        <div className="BottomCComponent">
            <div className="BottomCComponent-list">
                <div className="BottomCComponent-list-item">
                    <SiGooglemaps className="BottomCComponent-list-item-icon"/>
                    <p>Ubicación</p>
                </div>
                <div className="BottomCComponent-list-item">
                    <BsTwitter className="BottomCComponent-list-item-icon"/>
                    <p>Twitter</p>
                </div>
                <div className="BottomCComponent-list-item">
                    <FaLink className="BottomCComponent-list-item-icon"/>
                    <p>Página</p>
                </div>
                <div className="BottomCComponent-list-item">
                    <RiBuilding3Fill className="BottomCComponent-list-item-icon"/>
                    <p>Empresa</p>
                </div>
            </div>
        </div>
    )
}


export { BottomCComponent }