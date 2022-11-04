import { Link } from "react-router-dom";
import "../Styles/NotFound.css"
const NotFound = () => {
    return ( 
       
            <div className="notfound-item">
            <h5>404</h5>
            <h5>Page Not Found</h5><br />
           <Link to="/" className="not-found">Click here to go back</Link>
            </div>
        
     );
}
 
export default NotFound;