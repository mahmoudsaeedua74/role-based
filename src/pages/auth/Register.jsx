import { useForm } from "react-hook-form";
// login form data
const loginFormData = [
  {
    label: "Email address",
    name: "email",
    placeholder: "Put your email",
    type: "email",
  },
  {
    label: "Password",
    name: "password",
    placeholder: "Put your password",
    type: "password",
  },
];
export default function Register() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center text-primary mb-6">
          Login to your account
        </h1>
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
          <button
            type="submit"
            disabled={!isValid}
            className={`w-full flex items-center justify-center gap-2 py-2 rounded-md font-medium transition duration-200 border border-primary
            ${
              !isValid
                ? "opacity-50 cursor-not-allowed bg-gray-300 text-gray-500 border-gray-300"
                : "bg-primary text-white hover:bg-white hover:text-black"
            }
            `}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
