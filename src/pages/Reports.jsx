import { useEffect, useState } from "react";
import { FaUsers, FaChartBar, FaDollarSign } from "react-icons/fa";
import { MdOutlineReport } from "react-icons/md";

const reportStats = [
  {
    id: 1,
    title: "Total Users",
    value: 1245,
    icon: <FaUsers className="text-primary size-6" />,
  },
  {
    id: 2,
    title: "Active Reports",
    value: 32,
    icon: <MdOutlineReport className="text-primary size-6" />,
  },
  {
    id: 3,
    title: "Total Revenue",
    value: 12530,
    isCurrency: true,
    icon: <FaDollarSign className="text-primary size-6" />,
  },
  {
    id: 4,
    title: "Conversion Rate",
    value: 7.4,
    isPercentage: true,
    icon: <FaChartBar className="text-primary size-6" />,
  },
];

function CountUp({ value, isCurrency, isPercentage }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = +value;
    const duration = 1000; 
    const increment = end / (duration / 16); 

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [value]);

  const formatted = isPercentage
    ? `${count.toFixed(1)}%`
    : isCurrency
    ? `$${Math.floor(count).toLocaleString()}`
    : Math.floor(count).toLocaleString();

  return <span>{formatted}</span>;
}

export default function Reports() {
  return (
    <section className="mt-8">
      <div className="px-4 space-y-6">
        {/* Heading */}
        <div>
          <h2 className="text-xl font-bold text-zinc-900 mb-4">Reports</h2>
          <p className="text-secondary-color text-sm mt-1">
            Overview of your platform performance.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap gap-4 justify-center">
          {reportStats.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[300px] h-[230px] bg-white border
               border-border-color rounded-xl p-5 flex flex-col justify-center
                text-center items-center gap-3 shadow-sm hover:shadow-md cursor-pointer hover:scale-105 transition-all duration-200"
            >
              <div className="bg-primary/10 p-3 rounded-full">{item.icon}</div>
              <h4 className="font-semibold text-base text-black-color">
                {item.title}
              </h4>
              <div className="text-2xl font-bold text-black-color">
                <CountUp
                  value={item.value}
                  isCurrency={item.isCurrency}
                  isPercentage={item.isPercentage}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
