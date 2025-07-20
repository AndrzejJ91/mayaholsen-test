"use client";

import { ChevronDown } from "lucide-react";
import { faqs } from "./FaqData";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 w-full min-h-screen py-20 px-4 flex flex-col items-center my-fade-in">
      {/* Tytuł sekcji */}
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Häufig gestellte Fragen (FAQ)
        </h1>
        <p className="text-gray-600 text-base">
          Hier finden Sie Antworten auf die häufigsten Fragen rund um unsere Produkte, Lieferung und Services.
        </p>
      </div>

      {/* Lista FAQ */}
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-evenly transition-all duration-300"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggle(idx)}
            >
              <h4 className="text-md font-semibold text-gray-800">
                {faq.question}
              </h4>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              />
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === idx ? "max-h-[500px] mt-4" : "max-h-0"
              }`}
            >
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

