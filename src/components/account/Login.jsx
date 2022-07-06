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
        {...register('username', 
        {required: 'Username is required',
        minLength: {
          value: 3,
          message: "Username must be atleast 3 characters long",
        },
        maxLength: {
          value: 30,
          message: "Username must be atmost 30 characters long"
        },
        pattern: {
          value: /^[A-Za-z]+/,
          message: "Username must contain alphabetical letters"
        }
      
      })}
        error={!!errors.username}
        helperText={errors?.username?.message}
        />
         {errors.username? <p style={{color: 'red'}} >{errors.username?.message}</p> : null}
        <div className="icon"><i className="fas fa-user"></i></div>
      </div>
      <div className="input_box">
        <input type="password" placeholder="Password" name="password"
         {...register('password', {
           
          required: 'Password is required',
          pattern: {
            value: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
             message: 'Password is not complex enough'
          }
        })}
         error={!!errors.password}
         helperText={errors?.password?.message}
        required/>
          {errors.password? <p style={{color: 'red'}} >{errors.password?.message}</p> : null}
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
        <button type="submit" disabled={!isValid}>Login</button>
      </div>
      <div className="sign_up">
        Not a member? <a href="#" >Signup now</a>
      </div>
    </form>
  </div>
  </div>
    )
}

export default Login;