import React from 'react';
import { Link } from 'react-router-dom';

function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Doğalgaz Abonelik İşlemleri",
      icon: "fa-user-plus",
      color: "bg-blue-600",
      description: "Doğalgaz abonelik başvurusu ve aktivasyon işlemlerini hızlı ve sorunsuz bir şekilde yürütüyoruz.",
      details: [
        "Başkentgaz abonelik başvurularının yapılması",
        "Gerekli evrakların hazırlanması",
        "Mühendislik projesinin çizilmesi ve onayı",
        "İç tesisat kontrollerinin gerçekleştirilmesi",
        "Sayaç ve regülatör montajı",
        "Gaz açma işlemleri"
      ],
      longDescription: "Doğalgaz abonelik işlemlerini Başkentgaz yetkili servis olarak profesyonel şekilde yürütüyoruz. İç tesisat projesinin çizimi, onay süreçlerinin takibi, gerekli evrakların hazırlanması ve doğalgaz açılışının en hızlı şekilde yapılmasını sağlıyoruz. Müşterilerimizin zaman kaybetmeden doğalgaz konforuna kavuşması için tüm prosedürleri takip ediyoruz."
    },
    {
      id: 2,
      title: "Doğalgaz Kombi Bakımı ve Onarım",
      icon: "fa-tools",
      color: "bg-orange-500",
      description: "Kombinizin verimli çalışması, ömrünün uzaması ve yakıt tasarrufu sağlaması için düzenli bakım ve onarım hizmetleri sunuyoruz.",
      details: [
        "Yıllık periyodik kombi bakımı",
        "Kombi arıza tespit ve onarımı",
        "Kombi parça değişimi",
        "Kombi yazılım güncellemesi",
        "Verimlilik testleri",
        "24/7 acil servis hizmeti"
      ],
      longDescription: "Doğalgaz kombinizin verimli çalışması ve uzun ömürlü olması için düzenli bakım şarttır. Ankaterm olarak tüm marka ve model kombilerin yıllık bakımını profesyonel ekipmanlarla yapıyor, arıza durumunda hızlı müdahale ile sorunu çözüyoruz. Periyodik bakımlar sayesinde kombi arızalarını minimize ediyor, yakıt tasarrufunu maksimize ediyoruz. Bakım sonrası kombinin tüm parametrelerini kontrol ederek ideal verimlilik değerlerinde çalışmasını sağlıyoruz."
    },
    {
      id: 3,
      title: "Doğalgaz Tesisatı",
      icon: "fa-fire",
      color: "bg-red-600",
      description: "Güvenli ve standardlara uygun doğalgaz tesisatı kurulumu ve yenileme hizmetleri sunuyoruz.",
      details: [
        "Daire içi doğalgaz tesisatı çekilmesi",
        "Sızdırmazlık testleri",
        "Doğalgaz hattı tadilatı",
        "Doğalgaz borusu taşıma işlemi",
        "Doğalgaz kaçak tespiti",
        "Gaz kesme ve açma işlemleri"
      ],
      longDescription: "Doğalgaz tesisatı, güvenlik açısından büyük önem taşır. Ankaterm olarak, TSE ve Başkentgaz standartlarına uygun şekilde doğalgaz tesisatı kurulumu yapıyoruz. Mevcut tesisatınızın kontrolü, gerekli durumlarda yenilenmesi, kaçak tespiti ve onarımı gibi hizmetleri uzman ekibimizle gerçekleştiriyoruz. Doğalgaz tesisatınızın güvenli ve verimli çalışması için gerekli tüm kontrolleri titizlikle yapıyor, potansiyel sorunları önceden tespit ederek önlem alıyoruz."
    },
    {
      id: 4,
      title: "Doğalgaz Projesi Çizimi",
      icon: "fa-drafting-compass",
      color: "bg-green-600",
      description: "Profesyonel makine mühendislerimiz tarafından doğalgaz projelerinin çizimi ve onay süreçlerinin takibi.",
      details: [
        "İç tesisat projesi çizimi",
        "Kolon projesi çizimi",
        "Ortak tesisat projesi",
        "Endüstriyel tesisat projesi",
        "Proje tadilatı",
        "Resmi kurum onay süreçleri"
      ],
      longDescription: "Doğalgaz kullanımının ilk adımı doğru bir mühendislik projesidir. Ankaterm mühendislik ekibi olarak, konut, işyeri ve endüstriyel tesisler için doğalgaz projelerini hazırlıyor, gerekli hesaplamaları yapıyor ve onay süreçlerini takip ediyoruz. Projelerimizi dijital ortamda en güncel CAD yazılımlarıyla hazırlayarak müşterilerimize hızlı ve hatasız bir hizmet sunuyoruz. Hazırladığımız projeler, Başkentgaz'ın teknik şartnamelerine uygun olarak onaylanmakta ve uygulanmaktadır."
    },
    {
      id: 5,
      title: "Kalorifer Tesisatı",
      icon: "fa-temperature-high",
      color: "bg-yellow-500",
      description: "Merkezi sistem kalorifer tesisatı kurulumu, bakımı ve onarımı hizmetleri.",
      details: [
        "Merkezi sistem kalorifer tesisatı",
        "Kalorifer kazanı bakımı",
        "Radyatör montajı ve değişimi",
        "Kalorifer tesisatı temizliği",
        "Kalorifer tesisatı yalıtımı",
        "Kazan dairesi revizyonu"
      ],
      longDescription: "Kalorifer sistemlerinin verimli çalışması için profesyonel kurulum ve düzenli bakım gereklidir. Ankaterm olarak merkezi sistem kalorifer tesisatı kurulumu, kazanların bakımı, radyatörlerin montajı ve değişimi gibi hizmetleri sunuyoruz. Ayrıca tesisatın temizliği, yalıtımı ve verimlilik kontrollerini gerçekleştirerek ısınma maliyetlerinizi düşürmeye yardımcı oluyoruz. Kazan dairelerinin revizyonu ve modernizasyonu konusunda da uzman ekibimizle yanınızdayız."
    },
    {
      id: 6,
      title: "Doğalgaz Keşif ve Danışmanlık",
      icon: "fa-search",
      color: "bg-purple-600",
      description: "Doğalgaz kullanımı için keşif yapılması, maliyet hesabı, tasarruf yöntemleri konusunda danışmanlık.",
      details: [
        "Yerinde keşif hizmeti",
        "Doğalgaz dönüşüm maliyeti hesabı",
        "Kombi seçimi danışmanlığı",
        "Enerji tasarrufu danışmanlığı",
        "Mevcut tesisatın analizi",
        "Optimum çözüm önerileri"
      ],
      longDescription: "Doğalgaz kullanımına geçiş yapmak isteyen veya mevcut sistemini yenilemek isteyen müşterilerimize keşif ve danışmanlık hizmeti veriyoruz. Yerinde inceleme yaparak, evinizin veya işyerinizin doğalgaz dönüşüm maliyetini hesaplıyor, ihtiyaçlarınıza en uygun kombi, radyatör ve tesisat planını öneriyoruz. Enerji verimliliği konusunda bilgi vererek, uzun vadede tasarruf etmenize yardımcı oluyoruz. Mevcut tesisatın analizi sonucunda optimum çözüm önerileri sunarak, en ekonomik ve verimli doğalgaz kullanımını sağlıyoruz."
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Hizmetlerimiz</h1>
            <p className="text-lg text-blue-100">
              Ankaterm olarak Ankara'da kapsamlı doğalgaz hizmetleri sunuyoruz. 
              Profesyonel ekibimiz ve 25 yıllık deneyimimizle yanınızdayız.
            </p>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`${service.color} h-2 w-full`}></div>
                <div className="p-6">
                  <div className={`${service.color} text-white rounded-full w-12 h-12 flex items-center justify-center mb-4`}>
                    <i className={`fas ${service.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="mb-5 space-y-2">
                    {service.details.slice(0, 3).map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={`#service-${service.id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm inline-flex items-center">
                    Detaylı Bilgi <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Descriptions */}
      {services.map((service) => (
        <section id={`service-${service.id}`} key={service.id} className={`py-16 ${service.id % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`${service.id % 2 === 0 ? 'lg:order-2' : ''}`}>
                <div className={`${service.color} text-white rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                  <i className={`fas ${service.icon} text-2xl`}></i>
                </div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">{service.title}</h2>
                <p className="text-gray-700 mb-6">
                  {service.longDescription}
                </p>
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">Sunduğumuz Hizmetler</h3>
                  <ul className="space-y-3">
                    {service.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <div className={`${service.color} text-white rounded-full p-1 mr-3 flex-shrink-0`}>
                          <i className="fas fa-check text-xs"></i>
                        </div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={`bg-gray-100 p-8 rounded-lg shadow-inner ${service.id % 2 === 0 ? 'lg:order-1' : ''}`}>
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-bold mb-4 text-blue-700">Neden Bu Hizmetimizi Seçmelisiniz?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-500 text-white rounded-full p-1 mr-3 flex-shrink-0">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Uzman Kadro</h4>
                        <p className="text-gray-600 text-sm">Deneyimli makine mühendisleri ve teknik ekibimizle kaliteli hizmet garantisi.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-500 text-white rounded-full p-1 mr-3 flex-shrink-0">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Hızlı Çözüm</h4>
                        <p className="text-gray-600 text-sm">Acil durumlarda hızlı müdahale ve çözüm odaklı yaklaşım.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-500 text-white rounded-full p-1 mr-3 flex-shrink-0">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Uygun Fiyat</h4>
                        <p className="text-gray-600 text-sm">Kaliteli hizmeti uygun fiyatlarla sunuyoruz.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-500 text-white rounded-full p-1 mr-3 flex-shrink-0">
                        <i className="fas fa-check"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Garanti</h4>
                        <p className="text-gray-600 text-sm">Sunduğumuz tüm hizmetlerde işçilik ve malzeme garantisi.</p>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <Link
                      to="/iletisim"
                      className={`${service.color} hover:bg-opacity-90 text-white py-3 px-6 rounded-lg font-medium inline-flex items-center shadow-md`}
                    >
                      Hemen Teklif Alın <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 bg-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Profesyonel Doğalgaz Hizmetleri İçin Bize Ulaşın</h2>
            <p className="text-blue-100 mb-8">
              Ankara'da 25 yıllık tecrübemizle doğalgaz abonelik, kombi bakım, tesiat ve daha birçok hizmette yanınızdayız.
              Güvenilir ve kaliteli hizmet için hemen arayın.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="tel:+905534345043" 
                className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center"
              >
                <i className="fas fa-phone-alt mr-2"></i> 0553 434 50 43
              </a>
              <Link 
                to="/iletisim"
                className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-2"></i> İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage; 