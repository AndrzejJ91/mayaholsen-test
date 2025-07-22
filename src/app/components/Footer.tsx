"use client";
import Image from "next/image";



export default function Footer() {
  return (
    <footer className="bg-gray-100 w-full py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo + opis */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Mayaholsen Logo" className="h-8 w-auto" />
            <span className="text-lg font-bold text-gray-800">Mayaholsen</span>
          </div>
          <p className="text-sm text-gray-600">
            Mayaholsen ist ein innovatives Unternehmen für hochwertige Dachlösungen. Vertrauen Sie auf jahrzehntelange Erfahrung.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/facebook.png" alt="Facebook" className="h-6 w-6" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/instagram.png" alt="Instagram" className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/icons/linkedin.png" alt="LinkedIn" className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-gray-800">Quick Links</h4>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Blog</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">FAQs</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Support</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Über uns</a>
        </div>

        {/* Produkte */}
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-gray-800">Produkte</h4>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Dachziegel</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Fassaden</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Zubehör</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Team</a>
        </div>

        {/* Rechtliches */}
        <div className="flex flex-col gap-2">
          <h4 className="text-sm font-semibold text-gray-800">Rechtliches</h4>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">AGB</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Datenschutz</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Impressum</a>
        </div>
      </div>

      {/* Stopka dolna */}
      <div className="mt-12 text-center text-xs text-gray-400">
        <p>© {new Date().getFullYear()} Mayaholsen. Alle Rechte vorbehalten.</p>
        <p className="mt-2">
          Social Media Icons erstellt von{" "}
          <a
            href="https://www.flaticon.com/authors/freepik"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            Freepik
          </a>{" "}
          –{" "}
          <a
            href="https://www.flaticon.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-gray-600"
          >
            www.flaticon.com
          </a>
        </p>
      </div>
    </footer>
  );
}
