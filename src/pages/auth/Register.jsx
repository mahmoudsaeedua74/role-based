import { useForm } from "react-hook-form";
import { loginSchema } from "../../validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { setUser } from "../../store/sliceAuth/authSlice";
import { login } from "../../api/authApi";
import FormInlineError from "../../components/form/FormError";
import Input from "../../components/form/Input";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { loginFormData, permissionToPath } from "../../data";
import { Button } from "../../components/ui/button";

export default function Register() {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    toast.loading("Logging in...");
    try {
      const response = await login(data.email, data.password);
      const user = response.data;
      toast.dismiss();
      toast.success("Login successful!");
      // Save user data to Redux store and also persist it in localStorage
      // so that the user stays logged in even after a page refresh
      dispatch(setUser(user));
      localStorage.setItem("user", JSON.stringify(user));

      // base on the role of user will redirect on him pages
      const firstPermission = user.permissions[0];
      navigate(permissionToPath[firstPermission] || "/");
    } catch (error) {
      toast.dismiss();
      toast.error(
        error?.response?.data?.message || "Login failed. Check email/password."
      );
      setError(
        error?.response?.data?.message || "Login failed. Check email/password."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-primary mb-6">
          Login to your account
        </h1>
        {error && <FormInlineError error={error} />}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          noValidate
        >
          {loginFormData.map((formInput, idx) => (
            <div key={idx} className="flex flex-col space-y-2">
              <label
                htmlFor={formInput.name}
                className="text-gray-500 font-medium"
              >
                {formInput.label}
              </label>
              <Input
                name={formInput.name}
                type={formInput.type}
                placeholder={formInput.placeholder}
                register={register}
                errors={errors}
              />
            </div>
          ))}
          <Link
            to="/forgot-password"
            className="text-sm text-gray-700 text-end hover:underline"
          >
            Forgot your password?
          </Link>
          <Button
            type="submit"
            disabled={!isValid}
            loading={isLoading}
            size="full"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </section>
  );
}
