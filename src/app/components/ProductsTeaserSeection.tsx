"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";

export default function ProductTeaser() {
  const products = [
    { title: "Vario", img: "/dachowki/vario.jpg", slug: "vario" },
    { title: "Piano", img: "/dachowki/piano.jpg", slug: "piano" },
    { title: "Ravensberga", img: "/dachowki/ravensberga.jpg", slug: "ravensberga" },
    { title: "Opus", img: "/dachowki/opus.jpg", slug: "opus" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-in-out",
      once: true
    })

  }, []);

  return (
    <>
      <h2 className="text-3xl font-bold text-center text-gray-800 mt-16"
        data-aos="fade-up"
      >
        Unsere Produkte
      </h2>
      <section className="w-full min-h-[90vh] bg-white px-6 md:px-12 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-gray-100 rounded-xl shadow-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, reiciendis.
              </p>
              <Image
                src={product.img}
                alt={product.title}
                width={192} // 48 * 4 = 192
                height={128} // przykładowa wysokość, możesz dopasować do proporcji zdjęcia
                className="w-48 h-auto object-contain rounded-md hover:scale-105 transition-transform duration-300 mb-4"
              />
              <button
                className="mt-auto bg-black text-white py-2 px-4 rounded-md text-sm hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
                onClick={() => alert(`dachowki/${product.slug}`)} // tu możesz dać Link z Next.js
              >
                Mehr erfahren
              </button>
            </div>
          ))}
        </div>
        {/* Button na środku pod gridem */}
        <a
          href="/products"
          className="mt-4 inline-block bg-black text-white py-3 px-6 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors duration-300 shadow-lg"
        >
          Mehr Produkte anzeigen
        </a>
      </section>
    </>
  );
}

