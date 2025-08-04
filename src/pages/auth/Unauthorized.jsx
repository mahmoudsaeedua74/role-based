import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function Unauthorized() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className=" text-red-500 mt-20 gap-4 text-2xl  flex flex-col items-center  text-center px-4">
      <p className="text-gray-700  font-medium">
        Sorry you do not have Access Here
      </p>
      <button
        type="button"
        onClick={handleBack}
        className="flex items-center justify-center gap-2 py-2 px-6 rounded-md font-medium transition duration-200 border border-primary bg-primary text-white hover:bg-white hover:text-black"
      >
        <AiOutlineArrowLeft />
        Back
      </button>
    </div>
  );
}
