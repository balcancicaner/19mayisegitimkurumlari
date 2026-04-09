import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurumsal",
  description:
    "19 Mayıs Eğitim Kurumları - Köklerimiz Akademi, Gücümüz Teknoloji, Hedefimiz Liderlik.",
};

const LEADERS = [
  {
    name: "Muzaffer Batlıcancı",
    role: "Kurucu Müdür",
    img: "/images/team-muzaffer.jpg",
    desc: "Mühendis olarak edindiği 12 yıllık tecrübesiyle kurumumuzun stratejik vizyonuna liderlik etmektedir.",
  },
  {
    name: "Süleyman Yıldırım",
    role: "Eğitim Koordinatörü",
    img: "/images/team-suleyman.jpg",
    desc: "Eğitim programlarının geliştirilmesi ve akademik süreçlerin koordinasyonundan sorumludur.",
  },
  {
    name: "Caner Akın",
    role: "Teknoloji Direktörü",
    img: "/images/team-caner.jpg",
    desc: "Kampüslerimizin dijital dönüşümü ve teknolojik altyapısından sorumludur.",
  },
  {
    name: "Bedirhan Ateş",
    role: "Müdür Yardımcısı",
    img: "/images/team-bedirhan.jpg",
    desc: "Eğitim kurumumuzun büyüme ve gelişim hedeflerine katkıda bulunmaktadır.",
  },
];

export default function Kurumsal() {
  return (
    <>
      {/* Hero Section: Editorial Style */}
      <section className="relative min-h-[500px] flex items-center pt-20 pb-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <span className="text-primary font-headline font-bold tracking-widest uppercase text-sm mb-6 block">
              Geleceği Tasarlayan Miras
            </span>
            <h1 className="text-on-surface font-headline font-extrabold leading-tight tracking-tight text-4xl md:text-5xl lg:text-7xl">
              Köklerimiz Akademi, Gücümüz Teknoloji,
              <span className="text-primary block">Hedefimiz Liderlik.</span>
            </h1>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="text-secondary text-lg leading-relaxed border-l-2 border-primary-container pl-6">
              Cumhuriyet değerlerini teknolojiyle harmanlayan, özgür düşünen ve
              yaratan nesiller yetiştirme yolculuğumuzun hikayesi.
            </p>
          </div>
        </div>
      </section>

      {/* History: Asymmetric Layout */}
      <section className="bg-surface-container-low py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] bg-surface-container-highest rounded-xl overflow-hidden shadow-ambient rotate-2 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/building-kampus.jpg"
                  alt="19 Mayıs Teknoloji Koleji - Modern Kampüs Binası"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 md:-bottom-10 md:-right-10 w-48 md:w-64 aspect-square hero-gradient p-6 md:p-8 rounded-xl shadow-ambient flex flex-col justify-end">
                <span className="text-white font-headline font-black text-5xl md:text-6xl block leading-none mb-2">
                  600+
                </span>
                <span className="text-white font-label text-base md:text-lg font-bold uppercase tracking-wider leading-tight">
                  mezun
                </span>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-on-surface font-headline font-extrabold text-4xl">
                Biz Kimiz ?
              </h2>
              <div className="space-y-6 text-secondary text-lg leading-relaxed">
                <p>
                  <strong>19 Mayıs Eğitim Kurumları</strong>, 2019 yılında
                  eğitim-öğretim hayatına kapılarını açan, Samsun&apos;un
                  yenilikçi ve dinamik eğitim üssüdür. 22 modern derslik, 9
                  teknik laboratuvar, 4 ihtisas laboratuvarı ve geniş sosyal
                  olanaklarıyla donatılan kampüsümüz; özgüveni yüksek, çağdaş
                  değerleri benimseyen ve sorgulayan bireyler yetiştirme
                  misyonuyla yoluna devam etmektedir.
                </p>
                <p>
                  Kurumsal çatımız altında yer alan birimlerimizle, öğrenci
                  odaklı eğitimde yeni bir standart belirliyoruz:
                </p>
                <ul className="list-disc pl-5 space-y-4">
                  <li>
                    <strong>19 Mayıs Teknoloji Koleji:</strong> Yüksek
                    teknolojiyle donatılmış eğitim ortamı ve teknik eğitime
                    getirdiği yenilikçi bakış açısıyla; geleceğin
                    mühendislerini ve teknik liderlerini yetiştiren, devlet
                    destekli ve tematik bir eğitim modelidir.
                  </li>
                  <li>
                    <strong>19 Mayıs Anadolu Lisesi:</strong> Eğitimdeki başarı
                    ve tecrübemizi akademik bir zirveyle taçlandırmak adına;
                    2026-2027 eğitim-öğretim yılı itibarıyla hayata geçirdiğimiz
                    yeni birimimizdir.{" "}
                    <strong>Butik eğitim anlayışını</strong> merkezine alan
                    Anadolu Lisemiz, öğrencilerimizi Türkiye&apos;nin en saygın
                    üniversitelerine hazırlayan akademik odaklı bir yapıdır.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision: Bento Grid */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 bg-white p-8 md:p-12 rounded-xl shadow-ambient border-t-4 border-primary group hover:bg-primary-container transition-colors duration-500">
              <span className="material-symbols-outlined text-primary text-5xl mb-8 group-hover:text-white">
                lightbulb
              </span>
              <h3 className="text-on-surface font-headline font-bold text-3xl mb-6 group-hover:text-white">
                Misyonumuz
              </h3>
              <p className="text-secondary text-lg leading-relaxed group-hover:text-white/90">
                <strong>19 Mayıs Eğitim Kurumları</strong> olarak misyonumuz;
                köklü akademik değerleri ileri teknoloji imkanlarıyla
                harmanlayarak, öğrencilerimizin bireysel yeteneklerini en üst
                seviyeye çıkarmaktır. Bünyemizdeki 19 Mayıs Teknoloji Koleji ile
                yarının teknik liderlerini ve mühendislerini yetiştirirken; 19
                Mayıs Anadolu Lisesi ile butik eğitim anlayışını benimseyen,
                akademik disiplini yüksek ve üniversite hedeflerine odaklanmış
                bireyler hazırlıyoruz.
              </p>
            </div>

            <div className="bg-surface-container-highest p-8 md:p-12 rounded-xl shadow-ambient flex flex-col justify-center">
              <span className="material-symbols-outlined text-primary text-5xl mb-8">
                visibility
              </span>
              <h3 className="text-on-surface font-headline font-bold text-3xl mb-6">
                Vizyonumuz
              </h3>
              <p className="text-secondary text-lg leading-relaxed">
                Eğitimde dijital dönüşümün ve akademik mükemmeliyetin öncüsü
                olarak; Türkiye&apos;nin en saygın üniversitelerine öğrenci
                gönderen ve teknolojik inovasyonda referans kabul edilen bir
                eğitim markası olmaktır.
              </p>
            </div>

            {[
              {
                title: "Akademik Mükemmellik",
                desc: "Ulusal ve uluslararası müfredat entegrasyonu ile en yüksek eğitim standartlarını sağlıyoruz.",
              },
              {
                title: "Teknolojik Odak",
                desc: "Geleceğin dillerini (kodlama, AI, robotik) bugünden öğrencilerimize öğretiyoruz.",
              },
              {
                title: "Etik Değerler",
                desc: "Dürüstlük, saygı ve sorumluluk bilincini eğitimimizin her aşamasına entegre ediyoruz.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 md:p-10 rounded-xl shadow-ambient"
              >
                <h4 className="font-headline font-bold text-xl text-primary mb-4">
                  {value.title}
                </h4>
                <p className="text-secondary text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-surface-container-low">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-on-surface font-headline font-extrabold text-4xl md:text-5xl mb-6">
                Liderlik Kadromuz
              </h2>
              <p className="text-secondary text-lg">
                Eğitimde dönüşüme liderlik eden, vizyoner akademik ve idari
                kadromuzla tanışın.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {LEADERS.map((leader) => (
              <div key={leader.name} className="group">
                <div className="aspect-[3/4] bg-white rounded-xl overflow-hidden mb-6 shadow-ambient transition-transform group-hover:-translate-y-2 relative">
                  <Image
                    src={leader.img}
                    alt={`${leader.name} - ${leader.role}`}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h4 className="font-headline font-bold text-2xl text-on-surface">
                  {leader.name}
                </h4>
                <p className="text-primary font-medium mb-4">{leader.role}</p>
                <p className="text-secondary text-sm leading-relaxed">
                  {leader.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <div className="hero-gradient rounded-xl p-10 md:p-16 lg:p-24 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-white font-headline font-extrabold text-3xl md:text-4xl lg:text-5xl mb-6">
                Geleceğe İlk Adımı Bugün Atın
              </h2>
              <p className="text-white/90 text-lg">
                Okulumuzu ziyaret ederek eğitim anlayışımızı yerinde görebilir,
                uzman eğitimcilerimizle görüşebilirsiniz.
              </p>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/iletisim"
                className="bg-white text-primary px-10 py-4 rounded-lg font-bold shadow-ambient hover:bg-surface-container-low transition-colors text-center"
              >
                Randevu Alın
              </Link>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Broşürü İndir
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
