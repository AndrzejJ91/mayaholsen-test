"use client";
import Image from "next/image";


export default function DachkeramikBox() {
  return (
    <div className="w-full md:w-[400px] bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer">
      <Image
        src="/foto-hero.jpg"
        alt="hero-foto"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">Dachkeramik</h3>
      <p className="text-sm text-gray-700 mb-4">
        Entdecken Sie 13 Dachziegel-Modelle, eine beeindruckende Farbwelt und verschiedene Glanzgrade.
      </p>
      <button className="border border-black rounded-sm bg-white px-4 py-2 text-sm hover:bg-black hover:text-white transition-all cursor-pointer">
        Finden Sie Ihren Dachziegel
      </button>
    </div>
  );
}