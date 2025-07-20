"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
    { label: "Dachkeramik", href: "/products" },
    { label: "Systemkeramik", href: "/SystemKeramik" },
    { label: "Fasady", href: "/fasaden" },
    { label: "Denkmalschutz", href: "/denkmal" },
    { label: "Jobs", href: "/jobs" },
    { label: "FAQ", href: "/faq" },
    { label: "Kontakt", href: "/contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => window.removeEventListener("scroll", handleScroll)
  },[])

    return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full bg-white transition-all duration-300 z-50",
        scrolled && "shadow-md rounded-b-lg"
      )}
    >
      <div className="w-full px-[15%] py-4 flex items-center justify-start">
        <Link href="/">
          <img
            src="/logo.png"
            alt="logo"
            className="h-12 sm:h-16 w-auto object-contain"
          />
        </Link>
        <nav className="hidden md:flex flex-1 justify-center gap-8 text-md text-gray-800">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "hover:transition-colors",
                pathname === link.href && "text-red-700 font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}


