import React from 'react'

import { Context } from './Context';

import './App.scss';   

import {SearchUser} from '../searchUser/searchUser'
import {ThemeComponent} from '../ThemeComponent/ThemeComponent'
import {ContainerComponent} from '../ContainerComponent/ContainerComponent'

  
function AppUI(){
    // const {openCart,
    //     setOpenCart,
    //     openSideMenu,
    //     setSideMenu,
    //     openCarousel,
    //     setCarousel,
    //     changeAmount,
    //    setChangeAmount,
    //    } = React.useContext(Context)
    return (
        <React.Fragment>
            <div className="container">
                <ThemeComponent>

                </ThemeComponent>
                <SearchUser>

                </SearchUser>
                <ContainerComponent>

                </ContainerComponent>
            </div>
        </React.Fragment>
    )
}

export { AppUI }
