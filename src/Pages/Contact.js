import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/UserContext";
import "../Styles/Contact.css"
const Contact = () => {
  const { user } = useUserContext();
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
      };
    return ( 
        <div>
            <div className="contact-navbar">
            <nav className="nav-link">
                <Link to="/" className="link-item1">Altsch Academy</Link>
                <Link to="/" className="link-item2">Home</Link>  
                <Link to="/about" className="link-item2">About</Link> 
                <Link to="/login" className='link-item2'>Welcome, <span>{user.name}</span></Link>  
                <Link to="/register" className="link-item3">Register</Link>  
                <Link to="/login" className="link-item3">Login</Link>      
            </nav>
            </div> <br />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='contact-container'>
                    <div className="contact-form">
                <h3>Contact Us</h3>
          <input placeholder="Enter your Full Name"
            {...register("fullname", { required: true })}
            aria-invalid={errors.fullname ? "true" : "false"}
          />
          {errors.fullname?.type === "required" && (
            <p>Full Name is required</p>
          )}
                  
          <input type="email"placeholder="Enter your Email Address"
            {...register("email", { required: true })}
            aria-invalid={errors.fullname ? "true" : "false"}
          />
          {errors.email?.type === "required" && (
            <p>Email Address is required</p>
          )}

        
                    <textarea placeholder="Enter your Message" 
                    {...register("message", { required: true })}
                    aria-invalid={errors.message ? "true" : "false"}
                    />
                    <button type="submit" className="contact-button">Send</button>
                    </div>
                </form>
            
            </div>
        </div>
     );
}
 
export default Contact;