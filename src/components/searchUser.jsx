import React, {useContext} from 'react'
import '../styles/searchUser.scss'
import { BsSearch } from "react-icons/bs";
import AppContext from '../context/AppContext';
// import useGetUser from '../hooks/useGetUser';

const API = "https://api.github.com/users/";

function SearchUser(){

    const { getUser } = useContext(AppContext)
    // console.log(user)

    const userFunc = ()=>{
        const userName=document.getElementById('username').value;
        getUser(API+userName);
        
    }
    // useGetUser(API)
    


    return (
        <div className="searchC">
            <div className="searchC-lupe">
                <BsSearch className="searchC-lupe-icon" />
            </div>
            <div className="searchC-input">
                <input id='username' type="text" placeholder="Search Github username..."/>
            </div>
            <div className="searchC-button">
                <button onClick={userFunc}>
                    Search
                </button>
               
            </div>
        </div>
    )
}

export {SearchUser}