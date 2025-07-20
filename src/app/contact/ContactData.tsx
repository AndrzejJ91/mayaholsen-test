export default function ContactData() {
  return (
    <section className="relative bg-neutral-100 w-full min-h-screen pt-30 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Maya-holsen – Kontakt</h1>

        {/* Lokalizacje główne */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            {
              title: "Werk Hüllhorst",
              address: "Tonstraße 78\nDE-32609 Hüllhorst",
              phone: "+49 5744 940-0",
              email: "info@meyer-holsen.de",
            },
            {
              title: "Werk Rahden",
              address: "Zum Kleihügel 30\nDE-32369 Rahden",
              phone: "+49 5771 97440",
              email: "info@meyer-holsen.de",
            },
          ].map((loc) => (
            <div
              key={loc.title}
              className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md hover:scale-[1.01] transition"
            >
              <h3 className="font-semibold text-lg mb-2">{loc.title}</h3>
              <p className="text-sm whitespace-pre-line">{loc.address}</p>
              <p className="text-sm mt-2">📞 {loc.phone}</p>
              <p className="text-sm">✉ {loc.email}</p>
            </div>
          ))}
        </div>

        {/* Godziny */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md hover:scale-[1.01] transition">
            <h2 className="font-semibold text-lg mb-2">Verladezeiten (Hüllhorst & Rahden)</h2>
            <p className="text-sm">Mo–Do: 06:00 – 22:00<br />Fr: 06:00 – 20:00</p>
            <p className="text-xs text-gray-500 mt-2">
              Bitte melden Sie sich einen Tag vorher zur Abholung an.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md hover:scale-[1.01] transition">
            <h2 className="font-semibold text-lg mb-2">Büroöffnungszeiten</h2>
            <p className="text-sm">Mo–Do: 07:30 – 17:00<br />Fr: 07:30 – 12:30</p>
          </div>
        </div>

        {/* Palettenlieferung na końcu */}
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:border-blue-300 hover:shadow-md hover:scale-[1.01] transition md:w-2/3 mx-auto">
          <h3 className="font-semibold text-lg mb-2">Palettenanlieferung (EUROPAL GmbH)</h3>
          <p className="text-sm">Zur Porta 5<br />DE-32457 Porta Westfalica</p>
          <p className="text-sm mt-2">📞 +49 571 9341633</p>
        </div>

        {/* Przycisk do doradców i verwaltung */}
        <div className="mt-12 text-center space-x-4">
          <a
            href="/contact/advisors"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            Zu unseren Fachberatern
          </a>
          <a
            href="/contact/verwaltung"
            className="inline-block bg-gray-200 text-gray-800 px-5 py-2 rounded hover:bg-gray-300 transition"
          >
            Verwaltung & Ansprechpartner
          </a>
        </div>
      </div>
    </section>
  );
}
