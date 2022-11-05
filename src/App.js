import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import DashBoard from './Pages/DashBoard';
import Profile from './Pages/Profile';
import Account from './Pages/Account';
import Auth from "./Pages/Auth";
import NotFound from './Pages/NotFound';
import './App.css';
import { UserContextProvider } from './context/UserContext';
import {ErrorBoundary} from 'react-error-boundary'


function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
}


function App() {

    return (
<div className="App">
<ErrorBoundary FallbackComponent={ErrorFallback}>
  <UserContextProvider>
    <Auth />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About /> } />
         <Route path="/contact" element={<Contact />} />
         <Route path="/register" element={ <Register />} />
         <Route path="/login" element={<Login /> } />
      <Route path="/dashboard" element={<DashBoard />}>
          <Route path='profile' element={<Profile />} />
          <Route path='account' element={<Account />} />
          <Route path='*' element={<NotFound />} />
      </Route>
         <Route path="*" element={<NotFound />} />
       </Routes> 
       </UserContextProvider>
        </ErrorBoundary>
   </div>
  );
  }



export default App;
