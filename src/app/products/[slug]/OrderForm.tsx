"use client";

import { useState } from "react";

export default function OrderForm({ productName, color }: { productName: string; color?: string }) {
  const [show, setShow] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <div className="mt-6">
      {!sent ? (
        <>
          <button
            onClick={() => setShow(!show)}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
          >
            Jetzt bestellen
          </button>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              show ? "max-h-[1000px] opacity-100 scale-100 mt-6" : "max-h-0 opacity-0 scale-95"
            }`}
          >
            <form
              action="https://formspree.io/f/maya1234" // ← podmień na swój
              method="POST"
              onSubmit={() => setSent(true)}
              className="space-y-4 border rounded-md p-6 bg-gray-50"
            >
              <input type="hidden" name="Produkt" value={productName} />
              {color && <input type="hidden" name="Farbe" value={color} />}

              <div>
                <label className="block text-sm font-medium text-gray-700">Ihr Name</label>
                <input
                  type="text"
                  name="Name"
                  required
                  className="w-full mt-1 border rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Ihre E-Mail</label>
                <input
                  type="email"
                  name="Email"
                  required
                  className="w-full mt-1 border rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Gewünschte Menge oder Fläche</label>
                <input
                  type="text"
                  name="Menge"
                  placeholder="z.B. 120 Stück oder 75 m²"
                  className="w-full mt-1 border rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Nachricht (optional)</label>
                <textarea
                  name="Nachricht"
                  rows={3}
                  className="w-full mt-1 border rounded-md p-2"
                />
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
              >
                Anfrage absenden
              </button>
            </form>
          </div>
        </>
      ) : (
        <p className="text-green-600 font-semibold text-lg">Vielen Dank! Wir melden uns in Kürze.</p>
      )}
    </div>
  );
}
