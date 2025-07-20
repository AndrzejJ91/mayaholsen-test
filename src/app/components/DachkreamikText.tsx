"use client";


export default function DachkeramikText() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
        Ein Dach, das Generationen überdauert – Qualität, die bleibt.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-semibold mb-4">Verlässlichkeit für Profis</h3>
          <p className="text-sm text-gray-700 mb-4">
            Bauen Sie auf Materialien, die funktionieren – Tag für Tag, Projekt für Projekt.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
            <li>Reduzierter Verlegeaufwand dank intelligenter Formgebung</li>
            <li>Extrem robuste Ziegel – weniger Reklamationen, mehr Vertrauen</li>
            <li>Zufriedene Kunden und ein Ruf, der neue Aufträge bringt</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Sicherheit für Ihr Zuhause</h3>
          <p className="text-sm text-gray-700 mb-4">
            Ein Dach von Mayaholsen bedeutet: Ruhe, Schutz und dauerhafte Schönheit.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
            <li>40 Jahre Garantie auf Witterungsbeständigkeit</li>
            <li>Farbtreue Oberflächen – zeitlos und pflegeleicht</li>
            <li>Ein Zuhause mit Wert, heute und für kommende Generationen</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
