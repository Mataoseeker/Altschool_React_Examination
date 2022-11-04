import "../Styles/About.css";
import { Link } from "react-router-dom";
const About = () => {
    return ( 
        <div>
 <div className="about-navbar">
            <nav className="nav-link">
                <Link to="/" className="link-item1">Altsch Academy</Link>
                <Link to="/" className="link-item2">Home</Link>  
                <Link to="/contact" className="link-item2">Contact</Link>  
                <Link to="/register" className="link-item3">Register</Link>  
                <Link to="/login" className="link-item3">Login</Link>      
            </nav>
            </div><br />
            <div className="about-container">
            <div>
            
                <h5 className="blockquote">
                    <b>About Us</b><br />
                <i>"Education is the most powerful weapon which you can use to change the world."</i><br />  
                We discovered when running a program that some of the software engineers <br />
                 who had passed through our screening process had a very poor comprehension of <br />
                 the fundamentals of software engineering.<br />

                Many of them had learned things on their own, and while they had developed good<br /> 
                technical abilities, some fundamental understanding was still lacking.<br />



                Therefore, we made the decision to simplify matters by building a school that is<br />
                 just partially a school. an option to going to school. In less than a year, you may <br />
                 learn and become certified in a wide range of subjects here, giving you a solid foundation<br />
                  and the jumpstart you need to pursue your ideal IT job.<br />
                  Our goal is to support you as you begin the profession you desire.<br />
                   We will provide you with the knowledge and abilities to achieve <br />
                   the success you want, whether you are just out of high school, <br />
                   looking for more education, or want to switch to a profession in technology.
                </h5>
                </div>
            </div>
        </div>
     );
}
 
export default About;