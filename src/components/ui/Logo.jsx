import { useSelector } from "react-redux";
import logo from "/logo.webp";

const Logo = ({ size = "size-28", className = "" }) => {
  const user =
    useSelector((state) => state.auth.user) ||
    JSON.parse(localStorage.getItem("user"));

  const imageSrc = user?.avatar || logo;
  const userName = user?.name || "App Name";

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={imageSrc}
        alt="Logo or User Avatar"
        className={`${size} object-cover rounded-full ${className}`}
      />
      <span className="text-lg font-semibold text-primary">{userName}</span>
    </div>
  );
};

export default Logo;
