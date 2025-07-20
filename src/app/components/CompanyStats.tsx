"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function CompanyStats() {
  const stats = [
    { value: 165, suffix: "+", label: "Jahre Erfahrung" },
    { value: 40, suffix: "", label: "Jahre Garantie" },
    { value: 13, suffix: "", label: "Ziegelmodelle" },
    { value: 100, suffix: "%", label: "Made in Deutschland" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // tylko raz
    threshold: 0.3,     // 30% komponentu musi być widoczne
  });

  return (
    <section ref={ref} className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 gap-8 text-center">
        {stats.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <span className="text-5xl md:text-6xl font-bold text-red-700">
              {inView ? <CountUp end={item.value} duration={2} /> : 0}{item.suffix}
            </span>
            <span className="text-base md:text-lg text-gray-700 mt-3">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

