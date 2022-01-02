import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
  