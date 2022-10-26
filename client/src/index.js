import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UseContextProvider } from './InputContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UseContextProvider>
        <App />
    </UseContextProvider>

);