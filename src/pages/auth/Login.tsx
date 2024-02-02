import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import "../../Stylesheet/login.css";
import { loginUser } from "../../services/api/authApi";
import { toast } from "react-toastify";
import Button from "../../lib/components/ui/Button";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate()

  const togglePassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };
  const [isBusy, setIsBusy] = useState(false)
  const [userDetail, setUserDetail] = useState({
    email: "",
    password: "",
  });
  const handleChange = (name:string, value:string) => {
    setUserDetail({ ...userDetail, [name]: value });
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault()
    setIsBusy(true)
    const payload = {
      email: userDetail.email,
      password: userDetail.password
    }
    await loginUser(payload)
    .then((data) => {
      toast.success('Login Successful')
      setIsBusy(false)
      window.location.replace(`https://guardstudent.netlify.app/auth/${data.accessToken}`)
    })
    .catch((error) => {
      console.log(error);
      toast.error(error?.response?.data?.message)
      setIsBusy(false)
    })
  }

  return (
    <div className="main_login">
      <div className="side1">
        <div>
          <img src={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706278834/rsh/logo2-removebg-preview_fcvxwc.png'} alt="logo" className="cursor-pointer" onClick={() => navigate('/')}/>
          <div>
            <h3>Welcome Back!</h3>
            <p>
              Your security is our priority. Log in now to access your account
              and stay updated on all safety measures and reports.
            </p>
          </div>

          <Link to='/auth/register'>SIGN UP</Link>
        </div>
      </div>
      <div className="side2">
        <div className="don hidden lg:flex">
          <p>Don’t have an account?</p>
          <Link to='/auth/register' >Sign Up</Link>
        </div>
        
        <div className="login">
        <div className="login_logo">
            <img src={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1706009737/GuardMaster/Guardmaster_transparent1_1_1_wzdsac.png'} alt="logo" onClick={() => navigate('/')} />
            <h3>Welcome Back!</h3>
        </div>
          <h2>Log in</h2>
          <form onSubmit={handleSubmit} className="login_form">
            <div className="input">
              <label htmlFor="email">Email</label>
              <div>
                <input type="text" placeholder="Enter Email"  value={userDetail.email}
                    onChange={(e) => handleChange("email", e.target.value)}/>
              </div>
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <div>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter Password"
                  value={userDetail.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
                <span className="toggle-password" onClick={togglePassword}>
                  <span className="eye-icon">
                    <AiFillEye />
                  </span>
                </span>
              </div>
            </div>

            <Link to={'/forget'}>Forgot Password?</Link>
            <div>
                <div>
                  <Button title={isBusy ? "Siging Up ..." : "Sign Up"}/>
                </div>
              </div>
          </form>
          <div className="don2 flex lg:hidden gap-x-2">
          <p>Don’t have an account?</p>
          <span className="font-semibold text-blue-900 cursor-pointer" onClick={() => navigate('/auth/register')}>Sign Up</span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
