import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

const VerifyUser = () => {
  const myParam = new URLSearchParams(location.search).get("token");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    VerifyUser();
  }, []);
  const VerifyUser = () => {
    axios
      .get("/auth/verify-email", {
        headers: {
          Authorization: `Bearer ${myParam}`,
        },
      })
      .then(() => {
        toast.success("Email verified successfully");
        setIsLoading(false);
        setIsSuccess(true);
        setTimeout(() => {
          navigate("/auth/login");
        }, 2000);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setIsLoading(false);
        setIsError(true);
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
                    className="w-[250px] mx-auto my-6"
                    width={400}
                    height={80}
                  />
                </Link>
                <div className="my-8 lg:mt-16 mb-5 mx-auto">
                  {isLoading && (
                    <div className="w-full h-36 place-center">
                      <BeatLoader size={34} />
                    </div>
                  )}
                  {isSuccess && (
                    <div>
                      <img
                        src={
                          "https://res.cloudinary.com/greenmouse-tech/image/upload/v1705925994/rsh/check-mark_vhbeuv.png"
                        }
                        alt="check"
                        className="w-6/12 mx-auto"
                      />
                      <p className="text-center text-black fw-600 text-lg lg:text-xl">
                        Accout confirmation Successful
                      </p>
                      <p className="mt-4 fw-600 text-gray-500 text-center italics fs-300">
                        Redirecting to login...
                      </p>
                    </div>
                  )}
                  {isError && (
                    <div>
                      <img
                        src={
                          "https://res.cloudinary.com/greenmouse-tech/image/upload/v1705929170/rsh/failed_zbvdtm.gif"
                        }
                        alt="check"
                        className="w-4/12 mx-auto"
                      />
                      <p className="text-center text-black mt-5 fw-600 text-lg lg:text-xl">
                        Accout confirmation Failed
                      </p>
                      <p className="mt-4 fw-600 text-gray-500 text-center italics fs-300">
                        Please make sure you click on the correct link on the
                        verication mail.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyUser;
