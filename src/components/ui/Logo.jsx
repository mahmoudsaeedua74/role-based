import logo from "/logo.webp";

const Logo = ({ size = "size-28", className = "" }) => (
  <img
    src={logo}
    alt="Logo of page"
    className={`${size} object-cover rounded-full ${className}`}
  />
);

export default Logo;
