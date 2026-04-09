import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#635D5D] text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-12 py-16 w-full max-w-screen-2xl mx-auto font-body text-sm leading-relaxed">
        <div className="space-y-6">
          <span className="text-xl font-bold text-white block">
            19 Mayıs Eğitim Kurumları
          </span>
          <p className="text-slate-300 opacity-80">
            Türkiye&apos;nin teknoloji ve akademik eğitimde öncü kuruluşu.
            Geleceği şekillendiren nesiller için varız.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
              aria-label="Web sitesi"
            >
              <span className="material-symbols-outlined text-sm">public</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
              aria-label="E-posta"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-slate-500 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
              aria-label="Paylaş"
            >
              <span className="material-symbols-outlined text-sm">share</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Hızlı Bağlantılar</h4>
          <ul className="space-y-4">
            {[
              { label: "Anasayfa", href: "/" },
              { label: "Kurumsal", href: "/kurumsal" },
              { label: "Teknoloji Koleji", href: "/teknoloji-koleji" },
              { label: "Anadolu Lisesi", href: "/anadolu-lisesi" },
            ].map((item) => (
              <li key={item.href}>
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
          <h4 className="text-white font-semibold mb-6">Kurumsal</h4>
          <ul className="space-y-4">
            {[
              { label: "Projelerimiz", href: "/projelerimiz" },
              { label: "Medya", href: "/medya" },
              { label: "KVKK", href: "#" },
              { label: "İletişim", href: "/iletisim" },
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
          <h4 className="text-white font-semibold mb-6">Bülten</h4>
          <p className="text-slate-300 text-xs mb-4">
            Gelişmelerden haberdar olmak için e-posta listemize katılın.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="E-posta Adresiniz"
              className="w-full bg-slate-800 border-none rounded-lg px-4 py-2 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-primary text-sm"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg font-bold hover:bg-primary-container transition-colors text-sm"
            >
              Abone Ol
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-700/50 py-8 px-6 md:px-12 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs gap-4">
        <p>© 2026 19 Mayıs Eğitim Kurumları. Tüm Hakları Saklıdır.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">
            Kullanım Koşulları
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Gizlilik Politikası
          </a>
          <a href="#" className="hover:text-white transition-colors">
            KVKK
          </a>
        </div>
      </div>
    </footer>
  );
}
