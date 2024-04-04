import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

const LoginPrompt = () => {
    const navigate = useNavigate()
  return (
    <div className="py-5 text-center">
      <div>
        <p className="fw-600 text-xl lg:text-3xl">
          Welcome to Guardmasters!
        </p>
        <p className="mt-8 text-gray-600">
          Please Login to purchase a course and don't miss out on the latest
          deals and promotions.
        </p>
      </div>
      <div className="mt-8">
        <Button title={'Join Our Community'} onClick={() => navigate('/auth/login')}/>
      </div>
    </div>
  );
};

export default LoginPrompt;
