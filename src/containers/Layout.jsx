import React from 'react';
import '../styles/Layout.scss';

const Layout = ({children}) => {
    return (
        <div className='main dark'>
            { children }
        </div>
    )
}

export default Layout;