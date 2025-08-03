import { useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

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

      <button
        type="button"
        onClick={() => navigate("/login")}
        className="flex items-center justify-center gap-2 py-2 px-6 rounded-md font-medium transition duration-200 border border-primary bg-primary text-white hover:bg-white hover:text-black"
      >
        <AiOutlineArrowLeft />
        Back to Login
      </button>
    </div>
  );
};

export default NotFoundPage;
