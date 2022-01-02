import React, {useContext} from 'react'
import '../styles/MediumCComponent.scss'
import AppContext from '../context/AppContext'

function MediumCComponent(){

    
    const {user} = useContext(AppContext);

    return(
        <div className="MediumCComponent">
            <div className="MediumCComponent-list">
                <div className="MediumCComponent-list-item">
                    <p>Repos</p>
                    <p>{user.public_repos}</p>
                </div>
                <div className="MediumCComponent-list-item">
                    <p>Followers</p>
                    <p>{user.followers}</p>
                </div>
                <div className="MediumCComponent-list-item">
                    <p>Following</p>
                    <p>{user.following}</p>
                </div>
            </div>
        </div>
    )
}

export { MediumCComponent }