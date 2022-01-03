import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
// import { AppUI } from './AppUI'
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useGetUser from '../hooks/useGetUser'
// import './App.scss';

function App() {
const initialUser = useGetUser();  
  return (
    <AppContext.Provider value={initialUser}>
        <HashRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Layout>
        </HashRouter>
    </AppContext.Provider>
  );
}

export default App;
  