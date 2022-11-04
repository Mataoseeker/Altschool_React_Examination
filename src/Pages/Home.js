import "../Styles/Home.css";
import { Link } from 'react-router-dom';
const Home = () => {
    return ( 
        <div>
            <div>
            <nav className="nav-link">
                <Link to="/" className="link-item1">Altsch Academy</Link> 
                <Link to="/about" className="link-item2">About</Link>  
                <Link to="/contact" className="link-item2">Contact</Link>  
                <Link to="/register" className="link-item3">Register</Link>  
                <Link to="/login" className="link-item3">Login</Link>     
            </nav>
            </div>
            <div>
                <br />
                <div className='home-div'>
        <p>Application to the School of Engineering and School of data is now open! &nbsp;
        <Link to="/register" className='Link'>here</Link>
        </p>
                </div>
               
                <div className='home-header'>
                 
                    <h1>Start a career in <span>Software Engineering</span> today</h1>
                </div>
                <div className='home-note'>
                    <p>Learn the in-demand skills required to take you from beginner <br />
                    to industry ready in 12 months. No degree <br />or prior tech experience required.</p>
                </div>
                <div className='home-footer'>
                <h4>Learn in-demand tech skills for just N999 a day</h4>
                </div>
                <footer>
                   <h4 className="footer">  &copy; Martha <span>Ochuko</span> Osika || Altschool <span>React</span> Examination</h4>
                </footer>

            </div>
        </div>
     );
}
 
export default Home;