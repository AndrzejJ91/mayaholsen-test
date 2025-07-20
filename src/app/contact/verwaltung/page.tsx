export default function Verwaltung() {
  const zentrale = [
    {
      name: "Heike Jost",
      role: "Zentrale",
      email: "heike.jost@meyer-holsen.de",
      phone: "+49 5744 940-0",
    },
  ];

  const vertrieb = [
    {
      name: "Peter Grothaus",
      role: "Produktionsplanung",
      email: "peter.grothaus@meyer-holsen.de",
      phone: "+49 5744 940-116",
    },
    {
      name: "Jan Niklas Nagelschmidt",
      role: "Verkaufsberatung",
      email: "jan-niklas.nagelschmidt@meyer-holsen.de",
      phone: "+49 5744 940-131",
    },
    {
      name: "Jutta Rensink",
      role: "Auftragsbearbeitung",
      email: "jutta.rensink@meyer-holsen.de",
      phone: "+49 5744 940-145",
    },
    {
      name: "Susanne Grothe",
      role: "Fakturierung",
      email: "susanne.grothe@meyer-holsen.de",
      phone: "+49 5744 940-119",
    },
    {
      name: "Daniela Baloi",
      role: "Exportabwicklung",
      email: "daniela.baloi@meyer-holsen.de",
      phone: "+49 5744 940-117",
    },
    {
      name: "Yvonne Sonnberger",
      role: "Exportabwicklung",
      email: "yvonne.sonnberger@meyer-holsen.de",
      phone: "+49 5744 940-105",
    },
  ];

  const logistik = [
    {
      name: "Klaudia Kirchhoff",
      role: "Disposition | Fuhrpark",
      email: "klaudia.kirchhoff@meyer-holsen.de",
      phone: "+49 5744 940-109",
    },
    {
      name: "Achim Siebe",
      role: "Disposition | Fuhrpark Rahden",
      email: "achim.siebe@meyer-holsen.de",
      phone: "+49 5771 9744-190",
    },
    {
      name: "Georg Wittner",
      role: "Disposition | Fuhrpark Holsen",
      email: "georg.wittner@meyer-holsen.de",
      phone: "+49 5744 940-115",
    },
  ];

  const personal = [
    {
      name: "Michael Ruschmeier",
      role: "Personalleiter",
      email: "michael.ruschmeier@meyer-holsen.de",
      phone: "+49 5744 940-125",
    },
    {
      name: "Eugen Paul",
      role: "Personalreferent",
      email: "eugen.paul@meyer-holsen.de",
      phone: "+49 5744 940-135",
    },
  ];

  const renderGroup = (title: string, people: typeof zentrale) => (
    <div className="mb-16">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">{title}</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {people.map((person) => (
          <div
            key={person.email}
            className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200"
          >
            <h4 className="font-semibold text-gray-800 text-lg">{person.name}</h4>
            <p className="text-gray-500 text-sm">{person.role}</p>
            <p className="mt-2 text-sm">📞 {person.phone}</p>
            <p className="text-sm">
              ✉{" "}
              <a
                href={`mailto:${person.email}`}
                className="text-blue-600 hover:underline"
              >
                {person.email}
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="mt-20 px-4">
      <h2 className="text-2xl font-bold mb-10 text-center">Verwaltung</h2>
      {renderGroup("Zentrale", zentrale)}
      {renderGroup("Vertrieb Innendienst", vertrieb)}
      {renderGroup("Logistik", logistik)}
      {renderGroup("Personalmanagement", personal)}
    </section>
  );
}
