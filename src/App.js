import React from 'react';
import './App.scss';
import Routes from './routes';
import Header from './components/Header/';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <section>
            <BrowserRouter>
                <Header/>
                <Routes/>
            </BrowserRouter>
        </section>
    );
}

export default App;
