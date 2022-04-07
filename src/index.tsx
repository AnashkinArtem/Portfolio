import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';

import './styles.scss'

const RootElement = document.getElementById('root')

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>     
    </BrowserRouter>,
RootElement
);
