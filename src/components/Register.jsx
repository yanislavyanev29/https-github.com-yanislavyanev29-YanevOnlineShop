
import '../styles/login-register.css'
const Register = () => {


    return (


        <div className="register-container">
        <div className="register_div">
    <div className="title">Register Form</div>
    <div className="social_icons">

    
      <a href="#"><i className="fab fa-facebook-f"></i> <span>Facebook</span></a>
      <a href="#"><i className="fab fa-google"></i><span>Gmail</span></a>
    </div>
    <form action="#">
      <div className="input_box">
        <input type="text" placeholder="Email..." required/>
        <div className="icon"><i className="fas fa-user"></i></div>
      </div>
      <div className="input_box">
        <input type="password" placeholder="Password" required/>
        <div className="icon"><i className="fas fa-lock"></i></div>
      </div>

      <div className="input_box">
        <input type="password" placeholder="Confirm Password" required/>
        <div className="icon"><i className="fas fa-lock"></i></div>
      </div>

      <div className="input_box">
        <input type="phone" placeholder="Phone Number..." required/>
        <div className="icon"><i className="fas fa-mobile-alt"></i></div>
      </div>
      <div className="option_div">
        <div className="check_box">
          <input type="checkbox"/>
          <span>Remember me</span>
        </div>
       
      </div>
      <div className="input_box button">
        <input type="submit" value="Register"/>
      </div>
      <div className="sign_up">
        You are a member? <a href="#">Signin now</a>
      </div>
    </form>
  </div>
  </div>
    )
}

export default Register;