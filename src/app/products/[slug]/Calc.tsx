"use client";

import dachziegelData from "../products";
import { useState } from "react";

export default function Calc({ params }: { params: { slug: string } }) {
  const product = dachziegelData.find((p) => p.slug === params.slug);

  const [tilesCount, setTilesCount] = useState("");
  const [area, setArea] = useState("");

  if (!product || !product.specs) {
    return <div>Produkt nicht gefunden oder unvollständige Daten.</div>;
  }

  const bedarfRaw = product.specs.bedarf;
  const tilesPerM2 = Number(bedarfRaw?.match(/\d+/)?.[0] || 14);
  const price = product.specs.preisProStueck || 1.49;

  const m2FromTiles = +tilesCount / tilesPerM2;
  const tilesFromM2 = +area * tilesPerM2;
  const priceFromTiles = +tilesCount * price;
  const priceFromArea = tilesFromM2 * price;

  return (
    <div className="bg-white border border-gray-200 shadow-sm p-6 rounded-2xl mt-16">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">Kalkulator Dachziegel</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kalkulacja z liczby sztuk */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Stückzahl eingeben:
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
            value={tilesCount}
            onChange={(e) => setTilesCount(e.target.value)}
            placeholder="z.B. 140"
          />
          <div className="mt-4 text-gray-700 text-base space-y-1">
            <p>Fläche: <strong>{m2FromTiles.toFixed(2)}</strong> m²</p>
            <p>Preis: <strong>{priceFromTiles.toFixed(2)}</strong> €</p>
          </div>
        </div>

        {/* Kalkulacja z powierzchni */}
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Fläche in m² eingeben:
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black transition"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="z.B. 75"
          />
          <div className="mt-4 text-gray-700 text-base space-y-1">
            <p>Benötigte Ziegel: <strong>{tilesFromM2.toFixed(0)}</strong> Stk.</p>
            <p>Preis: <strong>{priceFromArea.toFixed(2)}</strong> €</p>
          </div>
        </div>
      </div>
    </div>
  );
}
