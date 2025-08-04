import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Button } from "../components/ui/button";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Button type="button" onClick={() => navigate("/login")}>
        <AiOutlineArrowLeft />
        Back
      </Button>
    </div>
  );
};

export default NotFoundPage;
