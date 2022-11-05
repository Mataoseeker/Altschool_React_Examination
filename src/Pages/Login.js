import React from 'react';
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import "../Styles/Login.css";
const Login = () => {
    const {register, formState: { errors }, handleSubmit} = useForm()
    const { user } = useUserContext();
    const { logIn } = useUserContext(); 
    
   const onSubmit = (data) => {
     console.log("Form data",data)
     logIn(data.username);
   };
   console.log(errors);

    
    
    return ( 
        <div className="login-page"> 
         <div>
         <div>
            <nav className="nav-link">
                <Link to="/" className="link-item1">Altsch Academy</Link>
                <Link to="/" className="link-item2">Home</Link>
                <Link to="/about" className="link-item2">About</Link>  
                <Link to="/contact" className="link-item2">Contact</Link>  
                <Link to="/login" className='link-item33'>Welcome, <span>{user.name}</span></Link>   
            </nav>
            </div>
                
        </div>   
            <br />
            <div className="login-profile">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <h4>Login</h4>
                <input placeholder="Enter your Username"
                {...register("username", {required: true})} 
                aria-invalid={errors.username? "true":"false"} />
                {errors.username?.type==="required" && <p>Username is required</p>}

                <input type="password" placeholder="Enter your Password"
                 {...register("password", {required: true})}
                aria-invalid={errors.password? "true":"false"} />
                {errors.password?.type==="required" && <p >Password is required</p>}
                <button className='button' type="submit">Login</button>

                <p className='signup-link'>Don't have an account? <Link to="/register" className='signup'>Sign Up</Link></p>
            
            </form>
            </div>
            
        </div>
     );
}
 
export default Login;