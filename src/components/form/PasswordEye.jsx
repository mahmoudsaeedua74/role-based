import { BsEye } from "react-icons/bs";
import { FiEyeOff } from "react-icons/fi";

const PasswordEye = ({ isShowPassword }) => {
  return isShowPassword ? <BsEye size={20} /> : <FiEyeOff size={20} />;
};

export default PasswordEye;
