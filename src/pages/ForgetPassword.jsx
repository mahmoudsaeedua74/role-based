import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Button } from "../components/ui/button";

const ForgetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        This Page is Upcoming soon
      </h2>
      <Button type="button" onClick={() => navigate("/login")}>
        <AiOutlineArrowLeft />
        Back
      </Button>
    </div>
  );
};

export default ForgetPassword;
