import Image from "next/image";
import type { Metadata } from "next";
import { BASE_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Teknoloji Koleji",
  description:
    "19 Mayıs Teknoloji Koleji - Mesleki eğitimde yeni nesil vizyon. %100 devlet desteği ile geleceğin teknolojisi burada başlıyor.",
};

export default function TeknolojiKoleji() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={`${BASE_PATH}/images/hero-teknoloji.jpg`}
            alt="19 Mayıs Teknoloji Koleji modern kampüs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent" />
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 py-20">
          <div className="max-w-2xl">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6">
              GELECEĞİN TEKNOLOJİSİ BURADA BAŞLIYOR
            </span>
            <h1 className="font-headline text-5xl md:text-6xl font-extrabold text-on-surface leading-[1.1] mb-8 tracking-tight">
              Mesleki Eğitimde <br />
              <span className="text-primary">Yeni Nesil Vizyon</span>
            </h1>
            <p className="text-xl text-secondary leading-relaxed mb-10">
              19 Mayıs Teknoloji Koleji, öğrencilerini sadece sınava değil,
              geleceğin endüstrilerine{" "}
              <span className="text-primary font-bold">%100 devlet desteği</span>{" "}
              ve akademik avantajlarla hazırlar.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="hero-gradient text-white px-8 py-4 rounded-lg font-bold text-lg shadow-xl shadow-primary/20 hover:-translate-y-0.5 transition-all">
                Teknik Program
              </button>
              <button className="bg-surface-container-highest text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-high transition-colors">
                Meslek Programı
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Vocational Highlights */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
              19 Mayıs Teknoloji Kolejine Kayıt Olan Tüm Öğrencilere Devlet
              Tarafından Kesintisiz 4 Yıl Boyunca{" "}
              <span className="text-primary">Eğitim Ücret Desteği</span>{" "}
              Verilmektedir.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "bolt",
                title: "Elektrik-Elektronik\nRobotik Kodlama\nYazılım",
                desc: "Teoriden pratiğe; Elektrik-Elektronik, Robotik Kodlama ve Yazılımın gücüyle öğrencilerimizi küresel teknoloji standartlarına taşıyoruz.",
                features: ["Robotik Kodlama", "Yapay Zeka"],
              },
              {
                icon: "precision_manufacturing",
                title: "Üniversiteye Ek Puan",
                desc: "Üniversitelerin mühendislik bölümlerine ek kontenjan, ön lisans bölümlerine ek puan avantajı sağlıyoruz.",
                features: ["Ek Kontenjan ( MTOK )", "Ek Puan ( Katsayı )"],
              },
              {
                icon: "code",
                title: "İki Farklı Eğitim Programı",
                desc: "Öğrencilerimiz teknik anadolu veya meslek anadolu programlarından istediğini seçebilir.",
                features: [
                  "Teknik Anadolu Programı",
                  "Meslek Anadolu Programı",
                ],
              },
            ].map((card) => (
              <div
                key={card.icon}
                className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border-l-4 border-primary group hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">
                    {card.icon}
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold mb-4 group-hover:text-primary transition-colors whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="text-secondary leading-relaxed mb-6">
                  {card.desc}
                </p>
                <ul className="space-y-3 text-sm font-medium text-on-surface-variant">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-lg">
                        check_circle
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-surface-container-low relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <span
            className="material-symbols-outlined text-primary"
            style={{
              fontSize: "400px",
              fontVariationSettings: '"FILL" 1',
            }}
          >
            school
          </span>
        </div>
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <h2 className="font-headline text-3xl md:text-4xl font-extrabold mb-8 leading-tight">
                Teknoloji Koleji&apos;nin <br />
                <span className="text-primary underline decoration-primary-container decoration-8 underline-offset-4">
                  Ayrıcalıklı Dünyası
                </span>
              </h2>
              <div className="space-y-8">
                {[
                  {
                    n: 1,
                    title: "Devlet Teşviki ile Eğitim",
                    desc: "Eğitim süreci boyunca velilerimize hiçbir mali yük getirmeyen, %100 devlet destekli eğitim modeli uyguluyoruz.",
                  },
                  {
                    n: 2,
                    title: "Üniversite Ek Puan Avantajı",
                    desc: "Mezunlarımız kendi alanlarında bir bölüme yerleşirken ek puan (M.T.O.K.) ve özel kontenjan hakkı kazanırlar.",
                  },
                  {
                    n: 3,
                    title: "İş Yeri Açma Belgesi",
                    desc: "Mezuniyetle birlikte teknisyen unvanı ve Avrupa birliği ülkelerinde geçerli iş yeri açma belgesi verilir.",
                  },
                  {
                    n: 4,
                    title: "EuroPass Sertifika Eki",
                    desc: "Uluslararası geçerliliğe sahip sertifika eki ile Avrupa'da kariyer imkanı.",
                  },
                  {
                    n: 5,
                    title: "KOSGEB Hibe Desteği",
                    desc: "Kendi işini kurmak isteyen mezunlara özel hibe ve kredi avantajları.",
                  },
                ].map((item) => (
                  <div key={item.n} className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full hero-gradient text-white flex items-center justify-center font-bold">
                      {item.n}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-secondary">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-1 rounded-2xl shadow-2xl rotate-1 lg:rotate-2">
              <div className="bg-primary-container/10 p-8 md:p-12 rounded-xl text-center">
                <span className="material-symbols-outlined text-primary text-7xl mb-6">
                  workspace_premium
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-primary mb-4 tracking-tight">
                  KONTENJANLARIMIZ SINIRLIDIR
                </h3>
                <p className="text-on-surface font-medium mb-8">
                  Geleceğinize bugün yatırım yapın. 2024-2025 kayıt dönemi için
                  ön başvurunuzu oluşturun.
                </p>
                <form className="space-y-4 text-left">
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    className="w-full px-6 py-4 rounded-lg bg-white border-0 shadow-sm focus:ring-2 focus:ring-primary"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon Numarası"
                    className="w-full px-6 py-4 rounded-lg bg-white border-0 shadow-sm focus:ring-2 focus:ring-primary"
                  />
                  <button
                    type="submit"
                    className="w-full hero-gradient text-white py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/30"
                  >
                    Başvuru Yap
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
