"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function BewerbungClient() {
    const params = useSearchParams();
    const stelle = params.get("stelle") || "Allgemeine Bewerbung";

    const inputClass =
        "w-full bg-gray-50 border border-gray-300 rounded-md pl-3 pr-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition";

    return (
        <section className="w-full py-20 bg-neutral-100 px-2 sm:px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-bold mb-4">Jetzt bewerben</h2>
                    <p className="text-gray-600 text-sm max-w-xl mx-auto">
                        Du bewirbst dich für: <strong>{stelle}</strong>
                    </p>
                </div>

                <form className="w-full bg-white shadow-lg rounded-lg p-6 space-y-6">
                    <input type="hidden" name="stelle" value={stelle} />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" placeholder="Vorname" className={inputClass} required />
                        <input type="text" placeholder="Nachname" className={inputClass} required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="email" placeholder="E-Mail" className={inputClass} required />
                        <input type="text" placeholder="Telefonnummer" className={inputClass} />
                    </div>

                    <textarea
                        placeholder="Nachricht oder Motivation"
                        className={inputClass + " h-32 resize-none"}
                    />

                    <div>
                        <label className="block text-sm text-gray-600 mb-1 font-medium">Anhänge (z.B. Lebenslauf)</label>
                        <label
                            htmlFor="upload"
                            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-md p-6 text-gray-500 cursor-pointer hover:border-red-400 hover:text-red-600 transition"
                        >
                            <svg className="w-8 h-8 mb-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v9m0 0l-3-3m3 3l3-3m-6-3a4 4 0 114 4 4 4 0 01-4-4z" />
                            </svg>
                            <span className="text-sm">Datei auswählen oder hier klicken</span>
                            <span className="text-xs text-gray-400 mt-1">PDF, JPG oder DOC bis 5 MB</span>
                        </label>

                        <input
                            id="upload"
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        />
                    </div>

                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-red-700 text-white px-6 py-2 rounded hover:bg-red-800 transition"
                        >
                            Bewerbung absenden
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
