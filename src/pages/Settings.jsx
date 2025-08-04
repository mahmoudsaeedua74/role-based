import { AiOutlineQuestionCircle } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaLanguage } from "react-icons/fa";
import { MdPayments } from "react-icons/md";

const settings = [
  {
    id: 1,
    icon: (
      <AiOutlineQuestionCircle className="size-[60px] sm:size-20 text-primary" />
    ),
    title: "Support & Help",
    description: "Get assistance or report an issue you’re facing.",
  },
  {
    id: 2,
    icon: (
      <RiLockPasswordLine className="size-[60px] sm:size-20 text-primary" />
    ),
    title: "Privacy & Security",
    description: "Manage your account security and privacy settings.",
  },
  {
    id: 3,
    icon: <FaLanguage className="size-[60px] sm:size-20 text-primary" />,
    title: "Language",
    description: "Choose your preferred language for the interface.",
  },
  {
    id: 4,
    icon: <MdPayments className="size-[60px] sm:size-20 text-primary" />,
    title: "Payment & Banking",
    description: "Update your payment methods and bank details.",
  },
];

export default function Setting() {
  return (
    <section className="mt-[20px] sm:mt-[32px] sm:space-y-[26px]">
      <div className="px-[20px]  sm:p-[10px] space-y-[10px]">
        <h3 className="text-xl font-bold text-zinc-900 mb-4"> Setting :</h3>
      </div>
      <div className="py-[24px] px-[20px] cursor-pointer sm:p-10 flex flex-wrap justify-center gap-4 sm:gap-5 bg-white rounded-xl">
        {settings.map((item) => (
          <div
            key={item.id}
            className="border  w-full sm:w-[343px] h-[264px] shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-200 border-border-color  justify-center flex flex-col text-center items-center rounded-md p-3 space-y-3"
          >
            {item.icon}
            <h4 className="text-black-color font-bold sm:text-h5">
              {item.title}
            </h4>
            <p className="text-secondary-color text-xs sm:text-[14px] w-[229px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
