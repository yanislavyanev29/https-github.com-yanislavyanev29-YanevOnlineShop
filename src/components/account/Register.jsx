
import '../../styles/login-register.css'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import agent from '../../components/api/agent.js'
const Register = () => {

    const navigate = useNavigate();
    const {register,handleSubmit,setError, formState: {isSubmitting,errors,isValid,rules}} = useForm({
      mode: 'all'
    });


    function handleApiErrors(errors) {


      if(errors){
        errors.forEach((error) => {
             
              if(error.includes('Password')){
                setError('password', {message: error})
              }  else if(error.includes('Email')){
                setError('email',{message: error})
              } else if(error.includes('Username')){
                setError('username', {message: error})
              }
        });
      }
    }
    return (


        <div className="register-container">
        <div className="register_div">
    <div className="title">Register Form</div>
    <div className="social_icons">

    
      <a href="#"><i className="fab fa-facebook-f"></i> <span>Facebook</span></a>
      <a href="#"><i className="fab fa-google"></i><span>Gmail</span></a>
    </div>
    <form action="/post" onSubmit={handleSubmit((data) => 
       agent.Account.register(data)
       .then(() => {
         navigate('/login');
       })
       .catch(error => handleApiErrors(error))
      )}>

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
          message: "Username must contain and start with alphabetical letters"
        }

        
        })}
        
        />
       {errors.username? <p style={{color: 'red'}} >{errors.username?.message}</p> : null}
        <div className="icon"><i className="fas fa-user"></i></div>
      </div>
      <div className="input_box">
        <input type="text" placeholder="Email..." name="email"
         {...register('email', {

          required: 'Email is required',
          pattern: {
            value: /^\w+[\w-.]*@\w+((-\w+)|(\w*)).[a-z]{2,3}$/,
            message: 'Not a valid email address'
          }

      
         })}
        
        />
         {errors.email? <p style={{color: 'red'}}  >{errors.email?.message}</p> : null}
        <div className="icon"><i className="fas fa-user"></i></div>
      </div>
      <div className="input_box">
        <input type="password" placeholder="Password"  name="password"
        {...register('password', {
          required: 'Password is required',
         
            pattern: {
             value: /(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/,
              message: 'Password is not complex enough'
           }
        })}
       
        />
         {errors.password? <p style={{color: 'red'}} >{errors.password?.message}</p> : null}
        <div className="icon"><i className="fas fa-lock"></i></div>
        
      </div>

     

     
      <div className="option_div">
        <div className="check_box">
          <input type="checkbox"/>
          <span>Remember me</span>
        </div>
       
      </div>
      <div className="input_box button">
      <button type="submit" disabled={!isValid} >Register</button>
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