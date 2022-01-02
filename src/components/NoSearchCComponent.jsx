import React from 'react'
import '../styles/NoSearchCComponent.scss';
import { ImGithub } from "react-icons/im";

const NoSearchCComponent =()=>{
    return(
        <div className='NoSearchCComponent'>
            <p className="NoSearchCComponent-title">
                GitHub user search app
            </p>

            <ImGithub className="NoSearchCComponent-img"/>
        </div>
    )
}

export default NoSearchCComponent;