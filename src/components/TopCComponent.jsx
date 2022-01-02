import React, { useContext } from 'react'
import '../styles/TopCComponent.scss'
import AppContext from '../context/AppContext';

// import { AiFillGithub } from "react-icons/ai";

function TopCComponent(props){


    const {user} = useContext(AppContext);

    const formatCreatedAt = ()=>{
        user.created_at = user.created_at.substring(0,10);
    }
    formatCreatedAt()

    console.log(props)
    return (
        <div className="TopCComponent">
            <div className="TopCComponent-logo">
                <img className="TopCComponent-logo-img" src={user.avatar_url} alt={user.login} />
            </div> 
            <div className="TopCComponent-info">
                <div className="TopCComponent-info-name">
                    <p>{user.name}</p>
                </div>
                <div className="TopCComponent-info-user">
                    <p>{user.login}</p>
                </div>
                <div className="TopCComponent-info-join">
                    <p>Joined {user.created_at}.</p>
                </div>
            </div>
            <div className="TopCComponent-bio">
                
                <p>
                { user.bio
                    ? user.bio
                    : "No se tiene bio."

                }
                </p>
            </div>
        </div>
    )
}


export { TopCComponent }