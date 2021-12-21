import React from 'react'
import './ContainerComponent.scss';
import {TopCComponent} from '../TopCComponent/TopCComponent'
import {MediumCComponent} from '../MediumCComponent/MediumCComponent'
import {BottomCComponent} from '../BottomCComponent/BottomCComponent'

function ContainerComponent(){
    return (
        <div className="containerComponent">
            <TopCComponent />
            <MediumCComponent />
            <BottomCComponent />
        </div>
    )
}


export { ContainerComponent }