import { useState } from "react";
// import "react-phone-number-input/style.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import "../../Stylesheet/login.css";
import { toast } from "react-toastify";
import { registerUser } from "../../services/api/authApi";
import RegisterSuccess from "../../lib/components/auth/RegisterSuccess";
import Button from "../../lib/components/ui/Button";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [pop, showPop] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
  });
  const handleChange = (name: string, value: string) => {
    setUserDetail({ ...userDetail, [name]: value });
  };
  const handleSubmit = async (e: any) => {
    if (userDetail.confirmPassword !== userDetail.password) {
      toast.error("Password does not match");
      return;
    }
    e.preventDefault();
    setIsBusy(true);
    const payload = {
      firstName: userDetail.firstName,
      lastName: userDetail.lastName,
      phone: userDetail.phone,
      email: userDetail.email,
      password: userDetail.password,
    };
    await registerUser(payload)
      .then((data) => {
        toast.success(data.message);
        showPop(true);
        setIsBusy(false);
      })
      .catch((error) => {
        toast.error(error?.response?.data?.message);
        setIsBusy(false);
      });
  };

  return (
    <>
      <div className="main_login">
        <div className="side1 reg order1">
          <div>
            <img
              src={
                "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706278834/rsh/logo2-removebg-preview_fcvxwc.png"
              }
              alt="logo"
              className="cursor-pointer"
              onClick={() => navigate("/")}
            />
            <div>
              <h3>Hello!</h3>
              <p>
                Welcome to GuardMasters – Where Your Safety is
                Our Priority! <br />
                <br />
                Sign up today for peace of mind and top-tier security services.
              </p>
            </div>

            <Link to="/auth/login"> SIGN IN</Link>
          </div>
        </div>
        <div className="side2">
          <div className="don">
            <p>Already have an account?</p>
            <Link to="/auth/login">Sign In</Link>
          </div>
          <div className="login">
            <div className="login_logo">
              <img
                src={
                  "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706009737/GuardMaster/Guardmaster_transparent1_1_1_wzdsac.png"
                }
                alt="logo"
                onClick={() => navigate("/")}
              />
            </div>
            <h2 onClick={() => showPop(true)}>Sign Up</h2>
            <form onSubmit={handleSubmit} className="login_form">
              <div className="double">
                <div className="input">
                  <label htmlFor="firstName">First Name</label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      value={userDetail.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                    />
                  </div>
                </div>
                <div className="input">
                  <label htmlFor="lastName">Last Name</label>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      value={userDetail.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="input">
                <label htmlFor="email">Email</label>
                <div>
                  <input
                    type="email"
                    placeholder="Enter Email"
                    value={userDetail.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </div>
              </div>
              <div className="input">
                <label htmlFor="phone">Phone Number</label>
                <div>
                  {/* <div>
                  <PhoneInput  defaultCountry="US" value={userDetail.phone} onChange={(value) => handleChange("phone", value)} />
                  </div> */}
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    value={userDetail.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
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
              <div className="input">
                <label htmlFor="password">Comfirm Password</label>
                <div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Comfirm Password"
                    value={userDetail.confirmPassword}
                    onChange={(e) =>
                      handleChange("confirmPassword", e.target.value)
                    }
                  />
                  <span className="toggle-password" onClick={togglePassword}>
                    <span className="eye-icon">
                      <AiFillEye />
                    </span>
                  </span>
                </div>
              </div>

              <p className="log_p">
                I have read and agreed to GuardMaster{" "}
                <span>Privacy Policy </span> and <span>Terms of Use</span>
              </p>
              <div>
                <div>
                  <Button title={isBusy ? "Siging Up ..." : "Sign Up"}/>
                </div>
              </div>
              {/* <button>{isBusy ? "Siging Up ..." : "Sign Up"}</button> */}
            </form>
            <div className="don2 lg:hidden flex gap-x-2">
              <p>Already have an account?</p>
              <span
                className="font-semibold text-blue-900"
                onClick={() => navigate("/auth/login")}
              >
                Sign In
              </span>
            </div>
          </div>
        </div>
      </div>
      <RegisterSuccess pop={pop} showPop={showPop} />
    </>
  );
};

export default Register;
