import '../../styles/login-register.css'
import { Link, useNavigate , useLocation } from 'react-router';
import { FieldValues, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../redux/accountSlice';
import { ErrorSharp } from '@material-ui/icons';

const Login = () => {

   const navigate = useNavigate ();
   const location = useLocation();
   const dispatch = useDispatch();
   const {register, handleSubmit, formState: {isSubmitting, errors,isValid}} = useForm({
     mode: 'all'
   })

   async function submitForm(data){

    try{

       await dispatch(signInUser(data));
       navigate(location.state?.from?.pathname || '/categories')
    } catch(error){
      console.log(error);
    }
   }



    return (
    <div className="login-container">
        <div className="login_div">
    <div className="title">Login Form</div>
    <div className="social_icons">
      <a href="#"><i className="fab fa-facebook-f"></i> <span>Facebook</span></a>
      <a href="#"><i className="fab fa-google"></i><span>Gmail</span></a>
    </div>
    <form action="/post" onSubmit={handleSubmit(submitForm)}>
      <div className="input_box">
        <input type="text" placeholder="User name..." name="username" 
        {...register('username', {required: 'Username is required'})}
        error={!!errors.username}
        helperText={errors?.username?.message}
        />
        <div className="icon"><i className="fas fa-user"></i></div>
      </div>
      <div className="input_box">
        <input type="password" placeholder="Password" name="password"
         {...register('password', {required: 'Password is required'})}
         error={!!errors.password}
         helperText={errors?.password?.message}
        required/>
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
        Not a member? <a href="#" disabled={!isValid} >Signup now</a>
      </div>
    </form>
  </div>
  </div>
    )
}

export default Login;