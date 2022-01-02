import React,{useContext} from 'react';
import {ThemeComponent} from '../components/ThemeComponent';
import {SearchUser} from '../components/searchUser';
import {InfoContainer} from '../containers/InfoContainer';
import AppContext from '../context/AppContext';


const Home = () =>{

    const {user} = useContext(AppContext);
    
    return(
        <div className="container dark">
            <ThemeComponent />
            <SearchUser />
            <InfoContainer user={user}/>
        </div>
        )
}

export default Home;