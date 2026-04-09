import Image from "next/image";
import type { Metadata } from "next";

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
                  src="/images/project-robotik-lab.jpg"
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
                    TEKNOFEST 2023 finalisti olan projemiz, engelli bireyler için
                    düşük maliyetli ve yüksek hassasiyetli protez çözümleri
                    sunuyor.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2: Small */}
            <div className="md:col-span-4 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient flex flex-col">
              <div className="h-48 md:h-64 overflow-hidden relative">
                <Image
                  src="/images/project-hidroponik.jpg"
                  alt="Akıllı Hidroponik Bahçe"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
                  Sürdürülebilirlik
                </span>
                <h4 className="text-xl md:text-2xl font-headline font-bold text-on-surface mb-3">
                  Akıllı Hidroponik Bahçe
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Okul kampüsümüzde su tüketimini %90 azaltan otonom tarım
                  projesi.
                </p>
                <span className="text-primary font-semibold flex items-center gap-2 text-sm">
                  Detayları İncele
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>

            {/* Project 3: Medium */}
            <div className="md:col-span-4 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient flex flex-col">
              <div className="h-48 md:h-64 overflow-hidden relative">
                <Image
                  src="/images/project-dijital-miras.jpg"
                  alt="Dijital Miras Arşivi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
                  Sosyal Bilimler
                </span>
                <h4 className="text-xl md:text-2xl font-headline font-bold text-on-surface mb-3">
                  Dijital Miras Arşivi
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  Yerel tarihimizi dijital ortama aktararak gelecek nesillere
                  ulaştıran kolektif çalışma.
                </p>
                <span className="text-primary font-semibold flex items-center gap-2 text-sm">
                  Detayları İncele
                  <span className="material-symbols-outlined text-sm">
                    arrow_forward
                  </span>
                </span>
              </div>
            </div>

            {/* Project 4: Wide */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient grid md:grid-cols-2">
              <div className="h-64 md:h-full overflow-hidden relative">
                <Image
                  src="/images/project-cybersafe.jpg"
                  alt="CyberSafe Junior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
                  Yazılım &amp; Kodlama
                </span>
                <h4 className="text-2xl md:text-3xl font-headline font-bold text-on-surface mb-4">
                  CyberSafe Junior
                </h4>
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  İlkokul öğrencileri için güvenli internet kullanımı ve siber
                  zorbalık farkındalığı yaratan oyun tabanlı platform.
                </p>
                <div className="flex gap-4 flex-wrap">
                  {["E-LEARNING", "PYTHON"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-high px-3 py-1 rounded text-[10px] font-bold text-on-secondary-container"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 5: Full Width */}
            <div className="md:col-span-12 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient grid md:grid-cols-2">
              <div className="h-64 md:h-[400px] overflow-hidden relative">
                <Image
                  src="/images/project-sulama.jpg"
                  alt="Akıllı Sulama Sistemi Projesi"
                  fill
                  className="object-cover"
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
