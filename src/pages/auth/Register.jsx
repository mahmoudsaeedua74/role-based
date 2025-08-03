import { useForm } from "react-hook-form";

export default function Register() {
  const {
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
          <Link
            to="/forgot-password"
            className="text-sm text-gray-700 text-end hover:underline"
          >
            Forgot your password?
          </Link>
          <button
            type="submit"
            className={`w-full flex items-center justify-center gap-2 py-2 rounded-md font-medium transition duration-200 border border-primary
            bg-primary text-white hover:bg-white hover:text-black
            `}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
