import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

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
      <Button type="button" onClick={handleBack}>
        <AiOutlineArrowLeft />
        Back
      </Button>
    </div>
  );
}
