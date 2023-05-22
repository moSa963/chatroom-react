import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import EchoProvider from './contexts/EchoContext';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './contexts/ThemeContext';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <EchoProvider>
                    <ThemeProvider>
                        <App />
                    </ThemeProvider>
                </EchoProvider>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);