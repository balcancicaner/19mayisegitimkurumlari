import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anadolu Lisesi",
  description:
    "19 Mayıs Anadolu Lisesi - YKS başarısında butik yaklaşım. Maksimum 15 kişilik sınıflarda akademik mükemmeliyet.",
};

export default function AnadoluLisesi() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-surface py-20">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 z-10">
            <span className="inline-block bg-surface-container-highest text-primary font-bold px-4 py-1 rounded-full text-sm mb-6 tracking-wider font-label">
              2026-2027 AKADEMİK DÖNEM
            </span>
            <h1 className="font-headline font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight text-on-surface mb-8 tracking-tight">
              YKS Başarısında <br />
              <span className="text-gradient">Butik</span> Yaklaşım
            </h1>
            <p className="text-secondary text-xl max-w-lg leading-relaxed mb-10 font-light">
              Maksimum 15 kişilik sınıflarda, maksimum odaklı ve akademik
              derinliği olan bir eğitim modeli ile hedeflerinize emin adımlarla
              ilerleyin.
            </p>
            <div className="flex items-center gap-6">
              <button className="hero-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl shadow-primary/20 hover:opacity-90 transition-all">
                Programı İncele
              </button>
              <div className="flex items-center gap-3 cursor-pointer group">
                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">
                  play_circle
                </span>
                <span className="font-semibold text-on-surface">
                  Tanıtım Filmi
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative h-[400px] lg:h-[600px]">
            <div className="absolute inset-0 bg-surface-container-low rounded-xl -rotate-2 scale-105" />
            <Image
              src="/images/hero-anadolu.jpg"
              alt="19 Mayıs Anadolu Lisesi Kampüs ve Sınıf"
              fill
              className="relative z-10 object-cover rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "15", label: "Maksimum Sınıf Mevcudu" },
            { value: "%100", label: "YKS Başarı Odaklılık" },
            { value: "7/24", label: "Dijital Mentorluk" },
            { value: "10+", label: "Yabancı Dil Projesi" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl font-headline font-black text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-secondary font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Focus: Bento Grid */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <div className="mb-20">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-4">
            Neden 19 Mayıs <br />
            Anadolu Lisesi?
          </h2>
          <div className="w-24 h-1.5 bg-primary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm border-l-8 border-primary group hover:shadow-xl transition-all">
            <span className="material-symbols-outlined text-5xl text-primary mb-6">
              school
            </span>
            <h3 className="text-2xl md:text-3xl font-headline font-bold mb-6">
              Akademik Derinlik ve YKS Odaklılık
            </h3>
            <p className="text-secondary text-lg leading-relaxed mb-8">
              Müfredatımız sadece bilgi aktarımı değil, sınav stratejilerini de
              içeren kapsamlı bir akademik koçluk sistemi üzerine kuruludur. Her
              öğrencimiz bir proje, her başarı bir mirastır.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Kişiselleştirilmiş Program", "Haftalık Deneme Sınavları"].map(
                (f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 text-primary font-bold"
                  >
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    {f}
                  </div>
                )
              )}
            </div>
          </div>

          <div className="bg-surface-container-high p-8 md:p-12 rounded-xl flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-6">
                group
              </span>
              <h3 className="text-2xl font-headline font-bold mb-4">
                Butik Eğitim Anlayışı
              </h3>
              <p className="text-secondary">
                Sınıflarda kaybolmayın. Maksimum 15 kişilik ortamda
                öğretmenlerinizle doğrudan iletişim kurun.
              </p>
            </div>
            <div className="mt-8 text-primary font-bold inline-flex items-center gap-2">
              Detaylar
              <span className="material-symbols-outlined">arrow_forward</span>
            </div>
          </div>

          <div className="hero-gradient text-white p-8 md:p-12 rounded-xl flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl mb-6">
                memory
              </span>
              <h3 className="text-2xl font-headline font-bold mb-4">
                Teknolojik Altyapı
              </h3>
              <p className="text-white/80">
                Teknoloji kolejimizin tüm imkanları Anadolu Lisesi
                öğrencilerimizin de hizmetinde. Robotik laboratuvarlarından yapay
                zeka destekli öğrenme platformlarına kadar her şey hazır.
              </p>
            </div>
          </div>

          <div className="md:col-span-2 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-headline font-bold mb-4">
                Geleceğin Kampüsü
              </h3>
              <p className="text-secondary">
                Şehrin gürültüsünden uzak, odaklanma odaklı, modern mimariyle
                tasarlanmış sosyal ve akademik alanlar.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-48 bg-surface-container-high rounded-lg overflow-hidden relative">
              <Image
                src="/images/anadolu-kampus.jpg"
                alt="Kampüs Alanı"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Tracking System */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
          <div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border border-surface-container-high">
                <Image
                  src="/images/anadolu-kocluk.jpg"
                  alt="Birebir Öğrenci Koçluğu ve Rehberlik"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-2xl font-headline font-bold">
                    Birebir Akademik Koçluk
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {[
                {
                  icon: "notifications_active",
                  title: "Anlık Veli Bilgilendirme",
                  desc: "Çocuğunuzun devamsızlık durumundan ödev takibine, sınav sonuç analizlerinden rehberlik notlarına kadar her detaya mobil uygulamamız üzerinden anında erişebilirsiniz.",
                },
                {
                  icon: "person_search",
                  title: "Birebir Koçluk Desteği",
                  desc: "Yapay zekadan gelen veriler, uzman eğitim koçlarımız tarafından yorumlanır ve her öğrenci için 'butik' bir gelişim stratejisi belirlenir.",
                },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 flex items-start gap-4 hover:shadow-lg hover:bg-white transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-primary text-3xl shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="inline-block bg-primary/10 text-primary font-bold px-4 py-1 rounded-full text-sm mb-6 tracking-wider font-label">
              YENİ NESİL EĞİTİM TEKNOLOJİSİ
            </span>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-8 leading-tight">
              Yapay Zeka Destekli <br />
              <span className="text-gradient">Öğrenci Takip</span> Sistemi
            </h2>
            <p className="text-secondary text-lg leading-relaxed mb-12 font-light italic border-l-4 border-primary/20 pl-6 py-4 rounded-r-lg">
              19 Mayıs Anadolu Lisesi olarak, her öğrencimizin öğrenme hızının
              ve ilgi alanının benzersiz olduğuna inanıyoruz. Geleneksel
              yöntemlerin ötesine geçerek, yapay zeka destekli analiz
              sistemimizle gelişim süreçlerini saniye saniye takip ediyoruz.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: "analytics",
                  title: "Kişiselleştirilmiş Analiz",
                  desc: "Yapay zekamız, öğrencinin deneme sınavlarındaki performansını analiz ederek hangi konularda eksik olduğunu (kazanım bazlı) milimetrik olarak tespit eder.",
                },
                {
                  icon: "target",
                  title: "Hedef Odaklı Yönlendirme",
                  desc: "Sistem, eksik tespit edilen konular için öğrenciye özel 'akıllı çalışma planları' ve 'farklılaştırılmış soru bankası önerileri' sunar.",
                },
                {
                  icon: "batch_prediction",
                  title: "Tahminleme Modellemesi",
                  desc: "Öğrencinin geçmiş verilerini kullanarak, YKS yolculuğundaki gelişim grafiğini modeller ve olası riskli dönemleri rehberlik birimimize önceden raporlar.",
                },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="p-6 bg-surface-container-low rounded-xl border border-outline-variant/30 flex items-start gap-4 hover:shadow-lg hover:bg-white transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-primary text-3xl shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-on-surface mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-secondary leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar */}
      <section className="bg-surface-container-low py-20 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-20">
          <div className="md:w-1/3">
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold mb-8">
              Duyurular &amp; <br />
              Etkinlikler
            </h2>
            <p className="text-secondary mb-12">
              Akademik takvimimiz ve okulumuzdaki güncel gelişmelerden haberdar
              olun.
            </p>
            <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
              Tümünü Görüntüle
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="md:w-2/3 space-y-6">
            {[
              {
                month: "Mayıs",
                day: "19",
                title: "Gençlik ve Spor Bayramı Özel Kutlamaları",
                desc: "Okulumuz bahçesinde gerçekleşecek olan büyük şölene tüm velilerimiz davetlidir.",
                accent: true,
              },
              {
                month: "Haz",
                day: "15",
                title: "YKS Kampı ve Motivasyon Seminerleri",
                desc: "Sınav öncesi son hazırlıklar ve rehberlik birimimizden altın tavsiyeler.",
                accent: false,
              },
              {
                month: "Eyl",
                day: "09",
                title: "Yeni Akademik Yıl Başlangıcı",
                desc: "2024-2025 eğitim-öğretim yılı oryantasyon haftası programı açıklandı.",
                accent: false,
              },
            ].map((event) => (
              <div
                key={event.day + event.month}
                className="bg-surface-container-lowest p-6 rounded-lg flex gap-6 md:gap-8 items-center hover:bg-white transition-all cursor-pointer shadow-sm"
              >
                <div
                  className={`flex flex-col items-center ${event.accent ? "hero-gradient" : "bg-secondary"} text-white px-4 py-3 rounded-lg min-w-[70px] md:min-w-[80px]`}
                >
                  <span className="text-xs uppercase font-bold">
                    {event.month}
                  </span>
                  <span className="text-2xl font-black">{event.day}</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{event.title}</h4>
                  <p className="text-secondary text-sm">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto hero-gradient rounded-3xl p-10 md:p-16 relative overflow-hidden text-center text-white">
          <div className="relative z-10">
            <h2 className="font-headline text-4xl md:text-5xl font-black mb-8 leading-tight">
              Geleceğinizi Birlikte Planlayalım.
            </h2>
            <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 font-light">
              Butik eğitim modelimiz ve uzman kadromuzla tanışmak için hemen
              randevu alın, kampüsümüzü birlikte gezelim.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform"
              >
                Başvuru Formu
              </Link>
              <Link
                href="/iletisim"
                className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />
        </div>
      </section>
    </>
  );
}
