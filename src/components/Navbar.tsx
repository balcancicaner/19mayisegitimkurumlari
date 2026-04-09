"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Anasayfa", href: "/" },
  { label: "Kurumsal", href: "/kurumsal" },
  { label: "Teknoloji Koleji", href: "/teknoloji-koleji" },
  { label: "Anadolu Lisesi", href: "/anadolu-lisesi" },
  { label: "Projelerimiz", href: "/projelerimiz" },
  { label: "Medya", href: "/medya" },
  { label: "İletişim", href: "/iletisim" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-header shadow-sm"
          : "bg-surface"
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-12 py-4 w-full max-w-screen-2xl mx-auto">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.png"
            alt="19 Mayıs Eğitim Kurumları"
            width={48}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-7 font-headline font-bold tracking-tight text-sm">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 transition-colors duration-300 ${
                  isActive
                    ? "text-primary border-b-2 border-primary"
                    : "text-secondary hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/iletisim"
            className="hidden md:inline-flex hero-gradient text-white px-6 py-2.5 rounded-lg font-headline font-bold text-sm tracking-tight hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Kayıt
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menüyü aç/kapat"
          >
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-col gap-1 bg-surface">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-3 px-4 rounded-lg font-headline font-bold text-sm transition-all ${
                  isActive
                    ? "text-primary bg-surface-container-highest"
                    : "text-secondary hover:text-primary hover:bg-surface-container-low"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/iletisim"
            className="mt-2 hero-gradient text-white px-6 py-3 rounded-lg font-bold text-sm text-center"
          >
            Kayıt Başvurusu
          </Link>
        </div>
      </div>
    </header>
  );
}
