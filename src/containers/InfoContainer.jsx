import React from 'react'
import '../styles/InfoContainer.scss';
import {TopCComponent} from '../components/TopCComponent'
import {MediumCComponent} from '../components/MediumCComponent'
import {BottomCComponent} from '../components/BottomCComponent'
// import AppContext from '../context/AppContext'
import NoSearchCComponent from '../components/NoSearchCComponent';

function InfoContainer(props){

    
    

    const isObjEmpty=(obj)=> {
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) return false;
        }
      
        return true;
      }
    const userFound=(obj)=> (obj===404) ? true : false;
    
    

    return (
        <div className="infoContainer">
            {   ! isObjEmpty(props.user)
                ? userFound(props.user.error)
                ? <p className="infoContainer-notFoundUser">User not found</p>
                :  
                <div className="infoContainer-container">
                    <TopCComponent key={props.user.id} user={props.user}/>
                    <MediumCComponent />
                    <BottomCComponent />
                </div>
                
                : 
                <div className="infoContainer-noSearchComponent">
                    <NoSearchCComponent/>
                </div>
            }
        </div>
    )
}


export { InfoContainer }