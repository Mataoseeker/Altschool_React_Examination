import "../Styles/Account.css"
const Account = () => {
    return ( 
        <div className="account">
            <br />
        <div className="account-page">
            <h1>My Account</h1>
            <h3>Welcome to your Altsch Academy, here's your account dashboard</h3>
        </div>
        
            <div className="account-image">
                <img src={require("./avatar5.jpg")} alt="avatar"/>
            </div>

            <div className="account-info">
                
                <form className="course-form">
                <h3>Courses Available</h3>
                    <input type="text" placeholder="Technical Writing" />
                    <input type="text" placeholder="Open Source Contribution" />
                    <input type="text" placeholder="Web Development" />
                    <input type="text" placeholder="Data Science" />
                    <input type="text" placeholder="Software Engineering" />
                    <input type="text" placeholder="Mobile Development" />
                    <input type="text" placeholder="UI/UX Design" />
                    <input type="text" placeholder="Digital Marketing" />
                </form>
            </div>
        </div>
     );
}
 
export default Account;