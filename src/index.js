import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// import Auth  from "./Pages/Auth"
import { UserContextProvider } from './context/UserContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserContextProvider>
    <App />
   {/* <Auth /> */}
    </UserContextProvider>
    </BrowserRouter>
   
  </React.StrictMode>
);
