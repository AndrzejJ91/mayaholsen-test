"use client";

import { useState } from "react";
import dachziegelData from "../products";
import { notFound } from "next/navigation";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';
import Calc from "./Calc";
import OdereForm from "./OrderForm";

export default function TileDetailPage({ params }: { params: { slug: string } }) {
  const product = dachziegelData.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedColor = product.colors?.[selectedIndex];

  const [selectGalleryIndex, setSelectGalleryIndex] = useState(0);
  const galleryImages = product.gallery || [];
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 fade-slide-down">
      <h1 className="text-3xl font-bold mb-6">{product.title}</h1>

      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Obrazek + galeria + kolory */}
        <div className="flex flex-col items-start">
          <div className="flex gap-4">
            {/* Miniaturki po lewej */}
            {galleryImages.length > 0 && (
              <div className="flex flex-col gap-2">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedIndex(-1); // dezaktywuj kolor
                      setSelectGalleryIndex(idx);
                    }}
                    className={`w-16 h-16 rounded-md border ${idx === selectGalleryIndex && selectedIndex === -1 ? "ring-2 ring-black" : "border-gray-200"}`}
                  >
                    <img
                      src={img}
                      alt={`Galeriebild ${idx + 1}`}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Główne zdjęcie */}
            <div className="w-[300px] h-[380px] bg-white rounded-md shadow overflow-hidden mb-3 relative group">
              <Zoom>
                <img
                  src={
                    selectedIndex >= 0
                      ? product.colors?.[selectedIndex]?.img || product.img
                      : galleryImages[selectGalleryIndex] || product.img
                  }
                  alt={selectedColor?.name || product.title}
                  className="w-full h-full object-contain"
                />
              </Zoom>
            </div>
          </div>

          {/* Kolory pod spodem */}
          <div className="flex gap-2 flex-wrap mt-2">
            {product.colors?.map((color, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedIndex(idx);
                  setSelectGalleryIndex(-1); // dezaktywuj galerię
                }}
                className={`w-5 h-5 rounded-full border ${idx === selectedIndex ? "ring-2 ring-black" : "border-gray-300"
                  }`}
                style={{ backgroundColor: (color as any).hex || "#ccc" }}
                title={color.name}
                aria-label={`Farbe: ${color.name}`}
              />
            ))}
          </div>
        </div>

        {/* Opis i dane */}
        <div className="flex-1">
          {/* Podtytuł i długi opis */}
          {product.details && (
            <>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {product.details.subtitle}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                {product.details.text}
              </p>

              <ul className="space-y-2 text-sm text-gray-700 mb-6">
                {product.details.benefits.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-600 mt-[2px]">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              
            </>
          )}
        
          {/* Dane techniczne */}
          {product.specs && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">Technische Daten</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                <li><strong>Gesamtfläche:</strong> {product.specs.gesamtflaeche}</li>
                <li><strong>Deckfläche:</strong> {product.specs.deckflaeche}</li>
                <li><strong>Lattweite:</strong> {product.specs.lattweite}</li>
                <li><strong>Gewicht:</strong> {product.specs.gewicht}</li>
                <li><strong>Regeldachneigung:</strong> {product.specs.regeldachneigung}</li>
                <li><strong>Bedarf:</strong> {product.specs.bedarf}</li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <OdereForm productName={product.title} color={selectedColor?.name} />
      <Calc params={{ slug: params.slug }} />
      
    </section>
  );
}

