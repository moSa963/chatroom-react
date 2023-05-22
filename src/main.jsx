import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import EchoProvider from './contexts/EchoContext';
import ThemeProvider from './contexts/ThemeContext';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <EchoProvider>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </EchoProvider>
        </Provider>
    </React.StrictMode>
);