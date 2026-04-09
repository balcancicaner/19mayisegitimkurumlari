import Image from "next/image";
import Link from "next/link";

export default function Anasayfa() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-anasayfa.jpg"
            alt="19 Mayıs Teknoloji Koleji kampüs binası"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent" />
        </div>
        <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-12 w-full py-20">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container-highest text-primary font-bold text-sm tracking-widest mb-6 font-headline">
              GELECEĞİN MİMARLARI BURADA YETİŞİYOR
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tight">
              Bilimle Parlayan, <br />
              <span className="text-primary italic">Teknolojiyle</span> <br />
              Yükselen Nesiller
            </h1>
            <p className="text-secondary text-lg mb-10 max-w-lg leading-relaxed">
              19 Mayıs Eğitim Kurumları olarak, her öğrencimizin potansiyelini
              modern eğitim metotları ve teknolojik altyapıyla birleştirerek
              yarınlara hazırlıyoruz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/teknoloji-koleji"
                className="flex items-center justify-between group hero-gradient text-white px-8 py-5 rounded-lg font-bold transition-all shadow-lg shadow-primary/20 hover:-translate-y-1"
              >
                <div className="flex flex-col items-start pr-8">
                  <span className="text-xs opacity-80 uppercase tracking-widest mb-1">
                    Keşfet
                  </span>
                  <span className="text-lg">Teknoloji Koleji</span>
                </div>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
              <Link
                href="/anadolu-lisesi"
                className="flex items-center justify-between group bg-surface-container-highest text-on-surface px-8 py-5 rounded-lg font-bold transition-all hover:bg-surface-container-high hover:-translate-y-1"
              >
                <div className="flex flex-col items-start pr-8">
                  <span className="text-xs opacity-60 uppercase tracking-widest mb-1">
                    Keşfet
                  </span>
                  <span className="text-lg text-secondary">Anadolu Lisesi</span>
                </div>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Highlight Section */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-6 tracking-tight">
                Öne Çıkan <br />
                <span className="text-primary">Projelerimiz</span>
              </h2>
              <p className="text-secondary text-lg leading-relaxed">
                Öğrencilerimiz, laboratuvarlarımızda teorik bilgilerini hayata
                dokunan, yenilikçi ve sürdürülebilir projelere dönüştürüyor.
              </p>
            </div>
            <Link
              href="/projelerimiz"
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all pb-2 border-b-2 border-primary/20 hover:border-primary shrink-0"
            >
              Tüm Projeleri Gör
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                img: "/images/project-robotik-kol.jpg",
                title: "Yapay Zeka Destekli Robotik Kol",
                team: "Teknoloji Koleji - Robotik Takımı",
                desc: "Yapay zeka destekli kol, nesne tanıma ve hassas hareket kabiliyetiyle endüstriyel standartlarda geliştirildi.",
              },
              {
                img: "/images/project-akvaryum.jpg",
                title: "Akıllı Akvaryum Projesi",
                team: "Teknoloji Koleji - Robotik Takımı",
                desc: "Sürdürülebilir tarım için geliştirilen topraksız dikey bahçe sistemi, IoT sensörlerle su tasarrufu sağlıyor.",
              },
              {
                img: "/images/project-bluetooth.jpg",
                title: "Bluetooth Kontrollü Araç Projesi",
                team: "Teknoloji Koleji - Robotik Takımı",
                desc: "Bluetooth iletişim modülleri kullanılarak tasarlanan mobil kontrollü otonom araç prototipi.",
              },
            ].map((project) => (
              <div key={project.title} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-xl">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <p className="text-white text-sm">{project.desc}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm">{project.team}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools Split Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-headline font-extrabold mb-4">
              Kurumlarımız
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                img: "/images/school-teknoloji.jpg",
                title: "Teknoloji Koleji",
                badge: "STEM Odaklı",
                desc: "Yazılım, robotik kodlama ve yapay zeka odaklı müfredatımızla, dijital çağın liderlerini yetiştiriyoruz. Modern atölyeler ve endüstri iş birlikleriyle uygulamalı eğitim.",
                features: [
                  "Robotik Lab. ve Kodlama Atölyeleri",
                  "Uluslararası Proje Yarışmaları",
                ],
                href: "/teknoloji-koleji",
              },
              {
                img: "/images/school-anadolu.jpg",
                title: "Anadolu Lisesi",
                badge: "Akademik Başarı",
                desc: "Köklü akademik disiplin ve sınav başarısı odaklı yaklaşımımızla öğrencilerimizi hayallerindeki üniversitelere hazırlıyoruz. Sosyal bilimler ve sanatla harmanlanmış müfredat.",
                features: [
                  "Birebir Etüt ve Soru Çözüm Ofisleri",
                  "Kariyer Planlama ve Rehberlik",
                ],
                href: "/anadolu-lisesi",
              },
            ].map((school) => (
              <div
                key={school.title}
                className="group relative bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="h-72 md:h-80 overflow-hidden">
                  <Image
                    src={school.img}
                    alt={school.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl md:text-3xl font-headline font-bold">
                      {school.title}
                    </h3>
                    <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold shrink-0">
                      {school.badge}
                    </span>
                  </div>
                  <p className="text-secondary mb-8 leading-relaxed">
                    {school.desc}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {school.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-on-surface-variant font-medium"
                      >
                        <span className="material-symbols-outlined text-primary text-xl">
                          check_circle
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={school.href}
                    className="inline-flex items-center text-primary font-bold gap-2 group-hover:gap-4 transition-all"
                  >
                    Programı İncele
                    <span className="material-symbols-outlined">
                      chevron_right
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
