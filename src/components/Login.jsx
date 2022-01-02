import '../styles/login-register.css'

const Login = () => {


    return (
    <div className="login-container">
        <div className="login_div">
    <div className="title">Login Form</div>
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
      <div className="option_div">
        <div className="check_box">
          <input type="checkbox"/>
          <span>Remember me</span>
        </div>
        <div className="forget_div">
          <a href="#">Forgot password?</a>
        </div>
      </div>
      <div className="input_box button">
        <input type="submit" value="Login"/>
      </div>
      <div className="sign_up">
        Not a member? <a href="#">Signup now</a>
      </div>
    </form>
  </div>
  </div>
    )
}

export default Login;