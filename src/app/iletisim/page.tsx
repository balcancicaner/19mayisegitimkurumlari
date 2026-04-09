import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim & Kayıt",
  description:
    "19 Mayıs Eğitim Kurumları - Ön kayıt başvuru formu, iletişim bilgileri ve sıkça sorulan sorular.",
};

export default function Iletisim() {
  return (
    <>
      {/* Hero Header */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 py-12 md:py-20 mb-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-headline font-extrabold text-on-surface tracking-tight mb-6">
            Geleceğin <span className="text-primary">Temellerini</span> Birlikte
            Atalım.
          </h1>
          <p className="text-secondary text-xl max-w-xl leading-relaxed">
            19 Mayıs Eğitim Kurumları ailesine katılmak için ilk adımı atın.
            Kayıt süreci ve kurumumuzla ilgili tüm detaylara buradan
            ulaşabilirsiniz.
          </p>
        </div>
      </section>

      {/* Bento Grid: Form + Contact */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 mb-24">
        {/* Registration Form */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-6 md:p-8 lg:p-12 shadow-ambient border border-outline-variant/15">
          <h2 className="text-2xl md:text-3xl font-headline font-bold mb-8 text-on-surface">
            Ön Kayıt Başvuru Formu
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary ml-1">
                  Öğrenci Adı Soyadı
                </label>
                <input
                  type="text"
                  placeholder="Ad Soyad"
                  className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary ml-1">
                  Veli Telefon
                </label>
                <input
                  type="tel"
                  placeholder="0 (5xx) 000 00 00"
                  className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary transition-all"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary ml-1">
                  Eğitim Kademesi
                </label>
                <select className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary transition-all">
                  <option>Teknoloji Koleji</option>
                  <option>Anadolu Lisesi</option>
                  <option>Ortaokul</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-secondary ml-1">
                  Sınıf Düzeyi
                </label>
                <select className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary transition-all">
                  <option>9. Sınıf</option>
                  <option>10. Sınıf</option>
                  <option>11. Sınıf</option>
                  <option>12. Sınıf</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-secondary ml-1">
                Mesajınız (Opsiyonel)
              </label>
              <textarea
                placeholder="Sorularınızı buraya yazabilirsiniz..."
                rows={4}
                className="w-full bg-surface-container-highest border-none rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full hero-gradient text-white font-bold py-4 rounded-lg text-lg hover:shadow-lg transition-all active:scale-[0.98]"
            >
              Başvuruyu Tamamla
            </button>
          </form>
        </div>

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="hero-gradient text-white rounded-xl p-8 flex flex-col justify-between min-h-[280px] relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-4xl mb-6">
                location_on
              </span>
              <h3 className="text-2xl font-headline font-bold mb-4">
                Merkez Yerleşke
              </h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Sarıcalı Mah. Yunus Emre Cad. No:14
                <br />
                Çarşamba / SAMSUN
              </p>
            </div>
            <div className="mt-8 z-10">
              <a
                href="tel:+903621234567"
                className="flex items-center gap-3 text-xl font-bold hover:translate-x-2 transition-transform"
              >
                <span className="material-symbols-outlined">call</span>
                +90 (362) 123 45 67
              </a>
            </div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
          </div>

          <div className="bg-surface-container-high rounded-xl overflow-hidden min-h-[280px] border border-outline-variant/15 relative group flex-1">
            <Image
              src="/images/map-samsun.jpg"
              alt="Harita - Samsun, Çarşamba"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-xl p-4 rounded-lg flex justify-between items-center">
              <span className="font-bold text-on-surface">Yol Tarifi Al</span>
              <span className="material-symbols-outlined text-primary">
                directions
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 space-y-12 mb-20">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-secondary">
            Kayıt süreci ve eğitim ücretleri hakkında en çok merak edilen
            konuları sizin için derledik.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              n: "01",
              q: "Kayıt dönemi ne zaman başlar?",
              a: "Yeni eğitim yılı kayıtlarımız her yılın Mart ayı itibariyle erken kayıt avantajlarıyla başlamaktadır. Kontenjanlarımız sınırlı olup başvuru sırasına göre değerlendirme yapılmaktadır.",
            },
            {
              n: "02",
              q: "Bursluluk sınavı yapılıyor mu?",
              a: "Evet, her yıl Ocak veya Şubat aylarında düzenlenen Akademik Başarı ve Bursluluk Sınavı ile öğrencilerimize %100'e varan eğitim bursu imkanları sunulmaktadır.",
            },
            {
              n: "03",
              q: "Ücretlere yemek ve servis dahil mi?",
              a: "Eğitim ücretlerimiz kademelere göre değişiklik göstermekte olup yemek ve servis hizmetleri opsiyonel olarak sunulmaktadır. Detaylı ödeme planı için lütfen kayıt ofisimizle iletişime geçiniz.",
            },
            {
              n: "04",
              q: "Teknoloji Koleji kabul şartları nelerdir?",
              a: "Teknoloji Kolejimize başvurular mülakat ve öğrenci tanıma testi ile kabul edilmektedir. Öğrencinin teknolojiye ilgisi ve akademik hazırbulunuşluğu değerlendirilmektedir.",
            },
          ].map((faq) => (
            <div
              key={faq.n}
              className="bg-surface-container-low p-8 rounded-xl border border-transparent hover:border-primary/20 transition-all"
            >
              <div className="flex gap-4">
                <div className="bg-surface-container-highest text-primary w-12 h-12 shrink-0 rounded-lg flex items-center justify-center font-bold text-xl">
                  {faq.n}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3">{faq.q}</h4>
                  <p className="text-secondary leading-relaxed">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-screen-2xl mx-auto px-6 md:px-12 mb-12 md:mb-20">
        <div className="bg-secondary rounded-2xl p-10 md:p-16 lg:p-20 text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold text-white mb-6">
              Sizi Yerleşkemizde Misafir Edelim
            </h2>
            <p className="text-slate-300 text-lg mb-10">
              Eğitim modelimizi yakından tanımak ve fiziki olanaklarımızı görmek
              için kahve eşliğinde bir görüşme yapmaya ne dersiniz?
            </p>
            <Link
              href="/iletisim"
              className="inline-block hero-gradient text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-primary/20 transition-all"
            >
              Randevu Oluştur
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
        </div>
      </section>
    </>
  );
}
