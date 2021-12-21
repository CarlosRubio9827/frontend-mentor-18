import React from 'react'
import './MediumCComponent.scss'

function MediumCComponent(){
    return(
        <div className="MediumCComponent">
            <div className="MediumCComponent-list">
                <div className="MediumCComponent-list-item">
                    <p>Repos</p>
                    <p>20</p>
                </div>
                <div className="MediumCComponent-list-item">
                    <p>Followers</p>
                    <p>13</p>
                </div>
                <div className="MediumCComponent-list-item">
                    <p>Following</p>
                    <p>12</p>
                </div>
            </div>
        </div>
    )
}

export { MediumCComponent }