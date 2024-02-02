import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import "../../Stylesheet/login.css";
import { toast } from "react-toastify";
import { resetPassword } from "../../services/api/authApi";
import Button from "../../lib/components/ui/Button";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const token = new URLSearchParams(location.search).get("token");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword); // Toggle the showPassword state
  };
  const [userDetail, setUserDetail] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleChange = (name: string, value: string) => {
    setUserDetail({ ...userDetail, [name]: value });
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (userDetail.confirmPassword !== userDetail.password) {
      toast.error("Password does not match");
      return;
    }
    setIsBusy(true);
    const payload = {
      newPassword: userDetail.password,
      newPasswordConfirmation: userDetail.confirmPassword,
    };
    await resetPassword(payload, token)
      .then(() => {
        toast.success("Password updated successfully");
        setIsBusy(false);
        setTimeout(() => {
          navigate("/auth/login");
        }, 1000);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setIsBusy(false);
      });
  };
  return (
    <>
      <div className="main_login">
        <div className="bg-primary h-screen w-full mont">
          <div className="w-full h-full bg-login">
            <div className="box h-full flex items-center justify-center">
              <div className="lg:w-[550px] mx-auto bg-white lg:px-16 p-6">
                <Link to="/">
                  <img
                    src={
                      "https://res.cloudinary.com/greenmouse-tech/image/upload/v1706009737/GuardMaster/Guardmaster_transparent1_1_1_wzdsac.png"
                    }
                    alt="logo"
                    className="w-[250px] lg:w-96 mx-auto my-6"
                    width={400}
                    height={80}
                  />
                </Link>
                <div className="my-8 lg:mt-16 mb-5 mx-auto">
                  <form onSubmit={handleSubmit} className="login_form">
                    <div className="input">
                      <label htmlFor="password">Password</label>
                      <div>
                        <input
                          type={showPassword ? "text" : "password"}
                          name="password"
                          placeholder="Enter Password"
                          value={userDetail.password}
                          onChange={(e) =>
                            handleChange("password", e.target.value)
                          }
                        />
                        <span
                          className="toggle-password"
                          onClick={togglePassword}
                        >
                          <span className="eye-icon">
                            <AiFillEye />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="input mt-6">
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
                        <span
                          className="toggle-password"
                          onClick={togglePassword}
                        >
                          <span className="eye-icon">
                            <AiFillEye />
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="mt-12">
                      <div>
                        <div>
                          <Button title={isBusy ? "Updating..." : "Update"} />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
