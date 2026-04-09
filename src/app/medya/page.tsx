import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medya",
  description:
    "19 Mayıs Eğitim Kurumları - Haberler, duyurular ve kampüsten kareler. Geleceği bizimle keşfedin.",
};

export default function Medya() {
  return (
    <>
      {/* Editorial Hero Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20 mb-12 md:mb-24 flex flex-col md:flex-row gap-12 md:gap-16 items-start">
        <div className="w-full md:w-5/12">
          <h2 className="text-secondary font-headline font-bold text-sm tracking-widest uppercase mb-4">
            Haberler &amp; Duyurular
          </h2>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-8">
            Geleceği <br />
            <span className="text-primary">Bizimle</span> Keşfedin.
          </h1>
          <p className="text-secondary text-lg leading-relaxed max-w-md">
            Eğitimde inovasyon, teknoloji ve akademik mükemmeliyet
            yolculuğumuzdan en son haberler, etkinlikler ve basında biz.
          </p>
        </div>
        <div className="w-full md:w-7/12 relative">
          <div className="aspect-video rounded-xl overflow-hidden bg-surface-container-highest shadow-2xl relative z-10">
            <Image
              src="/images/medya-hero.jpg"
              alt="Okul Etkinliği"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-48 md:w-64 h-48 md:h-64 bg-surface-container-low rounded-xl -z-10" />
        </div>
      </section>

      {/* Bento Grid: News & Events */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="flex justify-between items-end mb-12">
          <h3 className="font-headline font-bold text-3xl md:text-4xl text-on-surface">
            Güncel Medya
          </h3>
          <button className="text-primary font-semibold flex items-center gap-2 hover:underline">
            Tümünü Gör
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Featured News */}
          <div className="md:col-span-2 bg-surface-container-lowest p-6 md:p-8 rounded-xl flex flex-col md:flex-row gap-6 md:gap-8 items-center shadow-sm">
            <div className="w-full md:w-1/2 aspect-square rounded-lg overflow-hidden relative">
              <Image
                src="/images/medya-robotik.jpg"
                alt="Robotik Yarışması"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <span className="bg-surface-container-highest text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Teknoloji Koleji
              </span>
              <h4 className="text-xl md:text-2xl font-headline font-bold mt-4 mb-3 leading-tight">
                Robotik Takımımız Bölge Şampiyonu Oldu
              </h4>
              <p className="text-secondary text-sm mb-6">
                Öğrencilerimiz, bu yıl düzenlenen Ulusal Robotik
                Turnuvası&apos;nda yenilikçi projeleriyle birincilik kürsüsüne
                çıktı.
              </p>
              <a
                href="#"
                className="text-primary font-bold flex items-center gap-2 group"
              >
                Devamını Oku
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  east
                </span>
              </a>
            </div>
          </div>

          {/* Secondary Cards */}
          <div className="bg-surface-container-low p-6 rounded-xl shadow-sm">
            <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
              <Image
                src="/images/medya-bahar.jpg"
                alt="Kültür Sanat"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-secondary text-xs font-semibold">
              12 Mayıs 2024
            </span>
            <h4 className="text-lg md:text-xl font-headline font-bold mt-2 leading-tight">
              Geleneksel Bahar Şenliği Coşkuyla Kutlandı
            </h4>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
            <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
              <Image
                src="/images/medya-mezuniyet.jpg"
                alt="Akademik Başarı"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-secondary text-xs font-semibold">
              05 Mayıs 2024
            </span>
            <h4 className="text-lg md:text-xl font-headline font-bold mt-2 leading-tight">
              YKS Hazırlık Süreçleri ve Başarı Stratejileri
            </h4>
          </div>

          {/* Press Releases Card */}
          <div className="hero-gradient text-white p-8 rounded-xl flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-4xl mb-6">
                news
              </span>
              <h4 className="text-2xl font-headline font-bold mb-4">
                Basın Bültenleri
              </h4>
              <p className="opacity-90 text-sm">
                Kurumumuzla ilgili resmi duyurulara ve basın materyallerine
                buradan ulaşabilirsiniz.
              </p>
            </div>
            <button className="mt-8 bg-white text-primary font-bold py-3 px-6 rounded-lg self-start transition-transform hover:scale-105">
              Bültenleri İndir
            </button>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl shadow-sm">
            <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
              <Image
                src="/images/medya-agac.jpg"
                alt="Sosyal Sorumluluk"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-secondary text-xs font-semibold">
              28 Nisan 2024
            </span>
            <h4 className="text-lg md:text-xl font-headline font-bold mt-2 leading-tight">
              &apos;Geleceğe Nefes&apos; Ağaç Dikme Etkinliğimiz
            </h4>
          </div>
        </div>
      </section>

      {/* Photo Gallery: Asymmetric Layout */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="mb-12">
          <h3 className="font-headline font-bold text-3xl md:text-4xl text-on-surface mb-2">
            Kampüsten Kareler
          </h3>
          <p className="text-secondary">
            Eğitim ortamımızdan ve sosyal aktivitelerimizden anlar.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8 aspect-[16/10] bg-surface-container rounded-xl overflow-hidden relative group">
            <Image
              src="/images/gallery-kutuphane.jpg"
              alt="Modern Kütüphane"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <span className="text-white font-headline font-bold text-xl">
                Modern Öğrenme Alanları
              </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 aspect-square bg-surface-container rounded-xl overflow-hidden relative group">
            <Image
              src="/images/gallery-spor.jpg"
              alt="Spor Salonu"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <span className="text-white font-headline font-bold text-xl">
                Spor Aktiviteleri
              </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4 aspect-[4/5] bg-surface-container rounded-xl overflow-hidden relative group">
            <Image
              src="/images/gallery-sanat.jpg"
              alt="Sanat Atölyesi"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <span className="text-white font-headline font-bold text-xl">
                Sanat Atölyeleri
              </span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-8 aspect-video bg-surface-container rounded-xl overflow-hidden relative group">
            <Image
              src="/images/gallery-lab.jpg"
              alt="Laboratuvar"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
              <span className="text-white font-headline font-bold text-xl">
                Bilim ve Deney
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-20">
        <div className="bg-surface-container-low rounded-xl p-8 md:p-12 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-[0.03] rounded-full translate-x-1/2 -translate-y-1/2" />
          <div className="z-10 max-w-xl">
            <h3 className="text-3xl md:text-4xl font-headline font-black text-on-surface mb-4">
              Gelişmelerden Haberdar Olun
            </h3>
            <p className="text-secondary text-lg">
              Eğitim dünyasındaki yenilikleri ve kurumumuzdaki gelişmeleri
              e-posta adresinize gönderelim.
            </p>
          </div>
          <div className="z-10 w-full md:w-auto">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="px-6 py-4 rounded-lg bg-white border-none shadow-sm focus:ring-2 focus:ring-primary min-w-[250px] md:min-w-[300px]"
              />
              <button
                type="submit"
                className="hero-gradient text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
