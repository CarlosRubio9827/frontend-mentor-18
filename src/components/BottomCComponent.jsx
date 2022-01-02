import React, {useContext} from 'react'
import '../styles/BottomCComponent.scss'

import { SiGooglemaps } from "react-icons/si";
import { FaLink } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { RiBuilding3Fill } from "react-icons/ri";
import AppContext from '../context/AppContext';


function BottomCComponent(){

    const {user} = useContext(AppContext);

    return (
        <div className="BottomCComponent">
            <div className="BottomCComponent-list">
                <div className="BottomCComponent-list-item">
                    <SiGooglemaps className="BottomCComponent-list-item-icon"/>
                    <p> { user.location
                            ? user.location
                            : "No Available."
                        }
                    </p>
                </div>
                <div className="BottomCComponent-list-item">
                    <BsTwitter className="BottomCComponent-list-item-icon"/>
                    <p> { user.twitter_username
                            ? user.twitter_username
                            : "No Available."
                        }
                    </p>
                </div>
                <div className="BottomCComponent-list-item">
                    <FaLink className="BottomCComponent-list-item-icon"/>
                    <p>{ user.blog
                            ? user.blog
                            : "No Available."
                        }</p>
                </div>
                <div className="BottomCComponent-list-item">
                    <RiBuilding3Fill className="BottomCComponent-list-item-icon"/>
                    <p>{ user.company
                            ? user.company
                            : "No Available."
                        }</p>
                </div>
            </div>
        </div>
    )
}


export { BottomCComponent }