import { useState } from "react";
import PasswordEye from "./PasswordEye";
import FormError from "./FormError";
const Input = ({
  name,
  type,
  register,
  placeholder,
  errors,
  className = "",
  maxLength,
  ...props
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const inputType =
    type === "password" ? (isShowPassword ? "text" : "password") : type;

  return (
    <div className={`relative w-full ${className}`}>
      <input
        {...register(name)}
        id={name}
        name={name}
        type={inputType}
        placeholder={placeholder}
        className="w-full h-[52px] rounded-md bg-gary-300 border-[#E5E5E5] mt-0.5 border-2 focus:outline-none focus:border-blue-600 transition-colors duration-200 px-4 py-2"
        autoComplete={
          type === "password"
            ? "new-password"
            : type === "email" || name === "email"
            ? "username"
            : undefined
        }
        maxLength={maxLength}
        {...props}
      />

      {type === "password" && (
        <button
          type="button"
          onClick={() => setIsShowPassword((prev) => !prev)}
          className="absolute end-4 top-1/2 -translate-y-1/2 cursor-pointer focus:outline-none"
          tabIndex={-1}
        >
          <PasswordEye isShowPassword={isShowPassword} />
        </button>
      )}

      {errors?.[name] && <FormError error={errors[name].message} />}
    </div>
  );
};

export default Input;
