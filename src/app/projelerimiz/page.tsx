import Image from "next/image";
import type { Metadata } from "next";
import { BASE_PATH } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projelerimiz",
  description:
    "19 Mayıs Eğitim Kurumları - Geleceği projelerimizle inşa ediyoruz. Teknoloji, sürdürülebilirlik ve sosyal sorumluluk projeleri.",
};

export default function Projelerimiz() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 px-6 md:px-12 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-end gap-12">
          <div className="md:w-2/3">
            <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface tracking-tight leading-tight mb-8">
              Geleceği <span className="text-primary">Projelerimizle</span>{" "}
              <br />
              İnşa Ediyoruz.
            </h1>
            <p className="text-lg text-secondary max-w-xl leading-relaxed">
              Öğrencilerimizin akademik bilgilerini pratiğe döktüğü, teknolojik
              inovasyonları ve sosyal sorumluluk bilincini harmanladığı ödüllü
              çalışmalarımız.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-end">
            <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
              <span className="text-3xl font-black text-primary block">
                300+
              </span>
              <span className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Tamamlanan Proje
              </span>
            </div>
          </div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-surface-container-highest rounded-full blur-3xl opacity-50 -z-10" />
      </section>

      {/* Bento Grid Projects Showcase */}
      <section className="px-6 md:px-12 py-20 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Featured Project 1: Large */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient group cursor-pointer">
              <div className="relative h-[350px] md:h-[500px]">
                <Image
                  src={`${BASE_PATH}/images/project-robotik-lab.jpg`}
                  alt="AI Destekli Robotik Kol"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 md:p-10">
                  <span className="inline-block px-3 py-1 hero-gradient text-white text-xs font-bold rounded-full mb-4 uppercase tracking-widest">
                    Teknoloji &amp; İnovasyon
                  </span>
                  <h3 className="text-3xl md:text-4xl font-headline font-bold text-white mb-3">
                    AI Destekli Robotik Kol
                  </h3>
                  <p className="text-white/80 max-w-lg">
                    Her yıl gerçekleştirdiğimiz bilim şenliğimizden bir proje.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2: Small */}
            <div className="md:col-span-4 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient flex flex-col">
              <div className="h-48 md:h-64 overflow-hidden relative">
                <Image
                  src={`${BASE_PATH}/images/project-hidroponik.jpg`}
                  alt="Akıllı Akvaryum Projesi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
                  Sürdürülebilirlik
                </span>
                <h4 className="text-xl md:text-2xl font-headline font-bold text-on-surface mb-3">
                  Akıllı Akvaryum Projesi
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Sıcaklık kontrolü, otomatik yemleme, su seviyesi ölçer ve
                  kalite sensörleri ile kendi kendini temizleme özelliği bulunan
                  akıllı akvaryum projesi
                </p>
                <span className="text-primary font-semibold flex items-center gap-2 text-sm">
                  Detayları İncele
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>

            {/* Erasmus+ International Success Section */}
            <div className="md:col-span-12 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient">
              <div className="grid md:grid-cols-2">
                <div className="h-[400px] md:h-[600px] overflow-hidden relative">
                  <Image
                    src={`${BASE_PATH}/images/project-erasmus.jpg`}
                    alt="Geleceğin Teknolojisi Avrupa'da Şekilleniyor"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-8 md:p-16 flex flex-col justify-center">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-4">
                    Uluslararası Başarı
                  </span>
                  <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface mb-8 leading-tight">
                    Geleceğin Teknolojisi Avrupa&apos;da Şekilleniyor:
                    Öğrencilerimiz Almanya ve Polonya&apos;dan Döndü!
                  </h2>
                  <div className="space-y-6 mb-10">
                    <p className="text-secondary leading-relaxed">
                      <strong className="text-on-surface">
                        19 Mayıs Eğitim Kurumları
                      </strong>{" "}
                      olarak, öğrencilerimizin mesleki ve kişisel gelişimlerini
                      sınırların ötesine taşımaya devam ediyoruz. Erasmus+
                      Programı kapsamında gerçekleştirdiğimiz projelerle, toplam
                      33 öğrencimiz ve 2 öğretmenimiz Avrupa&apos;nın merkezinde
                      eğitim ve staj deneyimi kazandı.
                    </p>
                    <p className="text-secondary leading-relaxed">
                      Projemiz kapsamında 30 öğrencimiz, Almanya ve
                      Polonya&apos;da kendi alanlarında staj yaparak küresel iş
                      dünyasının kapılarını araladı. Katılımcı öğrencilerimiz bu
                      süreçte branşlarındaki en güncel teknolojileri yerinde
                      inceleme fırsatı bulurken, uluslararası standartlarda
                      mesleki bir deneyim kazandılar.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {["ERASMUS+", "INTERNATIONAL", "ENGINEERING"].map((tag) => (
                      <span
                        key={tag}
                        className="bg-surface-container-high px-4 py-1.5 rounded text-[11px] font-bold text-on-secondary-container tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-primary font-bold flex items-center gap-2 text-base">
                    Haberin Devamını Oku
                    <span className="material-symbols-outlined text-xl">
                      arrow_forward
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Project 5: Full Width */}
            <div className="md:col-span-12 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient grid md:grid-cols-2">
              <div className="h-[400px] md:h-auto overflow-hidden bg-surface-container-low flex items-center justify-center p-8">
                <Image
                  src={`${BASE_PATH}/images/project-sulama.jpg`}
                  alt="Akıllı Sulama Sistemi Projesi"
                  width={600}
                  height={400}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
                  Tarım Teknolojileri &amp; IoT
                </span>
                <h4 className="text-2xl md:text-3xl font-headline font-bold text-on-surface mb-4">
                  Akıllı Sulama Sistemi Projesi
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-4">
                  Toprak nem sensörleri ve Arduino tabanlı kontrol ünitesi ile
                  bitkilerin ihtiyacı olan suyu otomatik olarak belirleyen
                  sistem.
                </p>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Su tasarrufu ve verimlilik odaklı yazılım altyapısı ile doğa
                  dostu teknolojik çözüm.
                </p>
                <div className="flex gap-4 flex-wrap">
                  {["ARDUINO", "SENSORS", "SUSTAINABILITY"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-high px-3 py-1 rounded text-[10px] font-bold text-on-secondary-container"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="mt-8 text-primary font-semibold flex items-center gap-2 text-sm">
                  Projeyi İncele
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Projects Section */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-20">
            <div className="md:w-1/3">
              <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-on-surface mb-6 leading-tight">
                Kurumsal <br />
                Akademik Vizyon
              </h2>
              <p className="text-secondary mb-8">
                Eğitim modelimizi güçlendiren, uluslararası iş birlikleri ve
                akademik araştırmalarla desteklenen kurumsal projelerimiz.
              </p>
              <ul className="space-y-4">
                {[
                  "Erasmus+ Akreditasyonu",
                  "Cambridge English Hazırlık Merkezi",
                  "TÜBİTAK 4006 Destekleri",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary">
                      verified_user
                    </span>
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                {
                  icon: "biotech",
                  title: "STEM Entegrasyonu",
                  desc: "Müfredatımızı tamamen STEM odaklı projelere dönüştürerek öğrencilerimizin problem çözme yeteneklerini geliştiriyoruz.",
                },
                {
                  icon: "public",
                  title: "Global Citizen Projesi",
                  desc: "Farklı kültürlerle kurulan dijital köprüler sayesinde öğrencilerimiz dünya vatandaşı olma yolunda ilerliyor.",
                },
                {
                  icon: "palette",
                  title: "Sanat ve Estetik",
                  desc: 'Teknolojiyi sanatla birleştiren "ArtTech" sergilerimizle yaratıcılığın sınırlarını zorluyoruz.',
                },
                {
                  icon: "history_edu",
                  title: "Yazar Atölyeleri",
                  desc: "Öğrencilerimizin kendi eserlerini yayımladığı okul içi yayınevi ve editörlük projeleri.",
                },
              ].map((card) => (
                <div
                  key={card.icon}
                  className="bg-surface-container-lowest p-8 rounded-xl shadow-ambient border-t-4 border-primary"
                >
                  <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-primary">
                      {card.icon}
                    </span>
                  </div>
                  <h5 className="text-xl font-bold mb-3">{card.title}</h5>
                  <p className="text-sm text-secondary leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto rounded-3xl hero-gradient p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <h2 className="text-3xl md:text-4xl font-headline font-extrabold text-white mb-6 relative z-10">
            Proje Detaylarını Katalog Halinde İndirin
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 relative z-10">
            2023-2024 Akademik Yılı Proje Kataloğumuzda tüm teknik detayları,
            öğrenci kadrolarını ve kazanılan ödülleri bulabilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-lowest transition-colors flex items-center gap-3">
              <span className="material-symbols-outlined">download</span>
              Kataloğu İndir (PDF)
            </button>
            <button className="bg-transparent border-2 border-white/40 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors">
              Bizimle İletişime Geçin
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
