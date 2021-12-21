import React from 'react'
import './searchUser.scss'
import { BsSearch } from "react-icons/bs";

function SearchUser(){
    return (
        <div className="searchC">
            <div className="searchC-lupe">
                <BsSearch className="searchC-lupe-icon" />
            </div>
            <div className="searchC-input">
                <input type="text" placeholder="Search Github username..."/>
            </div>
            <div className="searchC-button">
                <button>
                    Search
                </button>
            </div>
        </div>
    )
}

export {SearchUser}