import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppContextTracker from './AppContextTracker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextTracker>
        <App />
    </AppContextTracker>
);
