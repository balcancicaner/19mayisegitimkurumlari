import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#635D5D] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-12 py-16 w-full max-w-screen-2xl mx-auto font-body text-sm leading-relaxed">
        <div className="space-y-6">
          <span className="text-xl font-bold text-white block">
            19 Mayıs Eğitim Kurumları
          </span>
          <p className="text-slate-300">
            Akademik mükemmeliyet ve teknolojik yetkinlikle donatılmış bireyler
            için doğru adres.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-white hover:text-[#E31E24] cursor-pointer transition-colors">
              language
            </span>
            <span className="material-symbols-outlined text-white hover:text-[#E31E24] cursor-pointer transition-colors">
              public
            </span>
            <span className="material-symbols-outlined text-white hover:text-[#E31E24] cursor-pointer transition-colors">
              share
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Kurumsal</h4>
          <ul className="space-y-3">
            {[
              { label: "Anasayfa", href: "/" },
              { label: "Kurumsal", href: "/kurumsal" },
              { label: "Misyon & Vizyon", href: "/kurumsal" },
              { label: "Tarihçemiz", href: "/kurumsal" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-slate-300 hover:text-[#E31E24] transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Okullarımız</h4>
          <ul className="space-y-3">
            {[
              { label: "Teknoloji Koleji", href: "/teknoloji-koleji" },
              { label: "Anadolu Lisesi", href: "/anadolu-lisesi" },
              { label: "Projelerimiz", href: "/projelerimiz" },
              { label: "Kayıt Süreci", href: "/iletisim" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-slate-300 hover:text-[#E31E24] transition-all"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">İletişim</h4>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">mail</span>
              info@19mayiskoleji.com.tr
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">phone</span>
              +90 (362) 833 23 53
            </li>
            <li className="flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">phone</span>
              +90 (541) 385 19 55
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm mt-1">
                location_on
              </span>
              <span>
                Çay Mah. Mustafa Kemal Güneşdoğdu Cad. No:19 Çarşamba - Samsun
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700/50 py-8 px-6 md:px-12 w-full max-w-screen-2xl mx-auto text-center text-slate-400 text-xs">
        <p>© 2026 19 Mayıs Eğitim Kurumları. Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
}
