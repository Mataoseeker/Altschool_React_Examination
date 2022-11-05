import React from 'react';
import { useUserContext } from "../context/UserContext";
import { Link, Outlet } from 'react-router-dom';
import "../Styles/DashBoard.css"
const DashBoard = () => {
    const { user, logOut } = useUserContext();
    return ( 
        <div>
            <>
            <div className="dashBoard">
            <nav className="nav-link">
                <Link to="/" className="link-item1">Altsch Academy</Link>
                <Link to="/dashboard" className="link-item2">DashBoard</Link>  
                <Link to="account" className="link-item2">My Account</Link>  
                <Link to="/login" className='link-item2'>Welcome, <span>{user.name}</span></Link>   
                {!user.isGuestUser && (<button className='link-item3' onClick={logOut}>Logout</button> )}   
            </nav>
            <Outlet/>
            </div>
            </>

        <div className='dashboard-page'>
        <div className="account">
            <br />
        <div className="account-pagee">
            <h1>Welcome to <span style={{color:"rgb(94, 94, 245)"}}>Altsch</span> Academy</h1>
            <h3>Discover the in-demand abilities you'll need to go from a beginner <br />
            to industry-ready in just a year. You don't need a degree or previous  <br />
            technical knowledge to begin.</h3>
        </div>
        
            <div className="account-image">
                {/* <img src={require("./avatar5.jpg")} alt="avatar"/> */}
            </div>
        </div>     
        </div>
        <footer>
                   <h4 className="footer">  &copy; Martha <span>Ochuko</span> Osika || Altschool <span>React</span> Examination</h4>
                </footer>
        </div>
     );
}
 
export default DashBoard;