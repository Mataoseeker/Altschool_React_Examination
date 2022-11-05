import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import "../Styles/Register.css"

const Register = () => {
  const { user } = useUserContext();
    let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
 navigate('/login')
 alert("You have successfully registered, Click Ok to login to your account");
    console.log(data);
  };
  return (
    <div className="Register">
      <div>
      <nav className="nav-link">
                <Link to="/" className="link-item1">Altsch Academy</Link>
                 <Link to="/" className="link-item2">Home</Link>  
                <Link to="/about" className="link-item2">About</Link>  
                <Link to="/contact" className="link-item2">Contact</Link>  
                <Link to="/login" className='link-item33'>Welcome, <span>{user.name}</span></Link>  
               
            </nav>
      </div><br />
      <div className="reg-cont">
        <form onSubmit={handleSubmit(onSubmit)} className="register-container">
            <h3>Register</h3>
        <div className="register-form">
          <input placeholder="Enter your Full Name"
            {...register("fullname", { required: true })}
            aria-invalid={errors.fullname ? "true" : "false"}
          />
          {errors.fullname?.type === "required" && (
            <p>Full Name is required</p>
          )}
          <input placeholder="Enter your Username"
            {...register("username", { required: true })}
            aria-invalid={errors.username ? "true" : "false"}
          />
          {errors.username?.type === "required" && (
            <p>Username is required</p>
          )}
          <input
            type="password" placeholder="Enter your Password"
            {...register("password", { required: true })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password?.type === "required" && (
            <p>Password is required</p>
          )}
          <input type="password" placeholder="Confirm your Password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => {
                if (watch("password") !== value) {
                  return "Password do not match" 
                }
              },
            })}
          />
          {errors.confirmPassword?.type === "password" && (
            <p>Password do not match</p>
          )}
          </div>
          <button type="submit" className="register-button">Register</button>
          <p className='reg-link'>Already have an account?  
            <Link to="/login" className='log-link'>Login</Link></p>
        </form>
      </div>
      <footer>
                   <h4 className="footer">  &copy; Martha <span>Ochuko</span> Osika || Altschool <span>React</span> Examination</h4>
                </footer>
    </div>
  );
};

export default Register;
