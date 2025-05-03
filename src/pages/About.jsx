import React from 'react';

function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Kurumsal</h1>
            <p className="text-lg text-blue-100">
              Ankaterm Mühendislik, 25 yıllık tecrübesiyle Ankara'da doğalgaz sistemleri konusunda lider firmadır.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-800">Hakkımızda</h2>
              <p className="text-gray-700 mb-4">
                Ankaterm Mühendislik, Ankara'da Başkentgaz yetkili firması olarak 25 yılı aşkın süredir doğalgaz sektöründe faaliyet göstermektedir. Güvenli enerji çözümleri sloganıyla yola çıkan firmamız, müşteri memnuniyetini en üst seviyede tutmak için kaliteli hizmet sunmayı ilke edinmiştir.
              </p>
              <p className="text-gray-700 mb-4">
                Makine mühendislerinden oluşan uzman kadromuz ile doğalgaz tesisatı, kombi bakımı, doğalgaz projesi çizimi ve doğalgaz abonelik işlemleri gibi birçok alanda profesyonel hizmet veriyoruz.
              </p>
              <p className="text-gray-700 mb-4">
                Ankaterm olarak Etimesgut, Bağlıca ve tüm Ankara bölgesinde hizmet vermekteyiz. Projelerinizde güvenilir bir çözüm ortağı arıyorsanız, doğru yerdesiniz.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Misyonumuz</h3>
                <p className="text-gray-700">
                  Doğalgaz sistemleri alanında yenilikçi, güvenilir ve kaliteli hizmet sunarak müşterilerimizin enerji ihtiyaçlarını en verimli şekilde karşılamak.
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">Vizyonumuz</h3>
                <p className="text-gray-700">
                  Doğalgaz sektöründe Ankara'nın lider firması olarak, teknolojik gelişmeleri takip eden, çevreye duyarlı ve sürdürülebilir enerji çözümleri sunan bir marka olmak.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-blue-800">Neden Biz?</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full p-2 mr-4">
                    <i className="fas fa-medal"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">25 Yıllık Tecrübe</h4>
                    <p className="text-gray-600">Çeyrek asırlık deneyimle doğalgaz sektörünün tüm inceliklerini biliyoruz.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full p-2 mr-4">
                    <i className="fas fa-certificate"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Başkentgaz Yetkili Firma</h4>
                    <p className="text-gray-600">Resmi olarak yetkilendirilmiş servis olmanın güvencesini sunuyoruz.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full p-2 mr-4">
                    <i className="fas fa-user-tie"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Profesyonel Ekip</h4>
                    <p className="text-gray-600">Makine mühendisliği eğitimi almış uzman kadromuzla hizmetinizdeyiz.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full p-2 mr-4">
                    <i className="fas fa-tools"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">Kaliteli Hizmet</h4>
                    <p className="text-gray-600">En son teknoloji ve yüksek kalite standartlarıyla çalışıyoruz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Ekibimiz</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ankaterm'in başarısının arkasında, konusunda uzman ve deneyimli profesyonellerden oluşan ekibimiz bulunmaktadır.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Muhammed Sami Genç</h3>
                <p className="text-gray-500 mb-4">Makine Mühendisi</p>
                <p className="text-gray-600 mb-4">
                  25 yıllık sektör deneyimiyle doğalgaz sistemleri konusunda uzmanlık sahibi olan firmamızın kurucusu ve yöneticisidir.
                </p>
                <div className="flex items-center text-gray-500">
                  <i className="fas fa-phone-alt mr-2"></i>
                  <span>0553 434 50 43</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Ahmet Yılmaz</h3>
                <p className="text-gray-500 mb-4">Baş Mühendis</p>
                <p className="text-gray-600 mb-4">
                  15 yıllık deneyime sahip makine mühendisimiz, doğalgaz projelendirme ve tesisat işlerini yönetmektedir.
                </p>
                <div className="flex items-center text-gray-500">
                  <i className="fas fa-envelope mr-2"></i>
                  <span>ahmet@ankatermcmuhendislik.com</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">Mehmet Demir</h3>
                <p className="text-gray-500 mb-4">Teknik Müdür</p>
                <p className="text-gray-600 mb-4">
                  12 yıldır ekibimizde olan Mehmet Bey, teknik servis operasyonlarımızın sorumlusudur.
                </p>
                <div className="flex items-center text-gray-500">
                  <i className="fas fa-envelope mr-2"></i>
                  <span>mehmet@ankatermuhendislik.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Box */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-blue-700 text-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <i className="fas fa-map-marker-alt text-4xl text-blue-300"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Ofisimizi Ziyaret Edin</h3>
                <p className="text-blue-100 mb-4">
                  Bağlıca Mahallesi, Bağlıca Bulvarı No: 54/4 Etimesgut / Ankara
                </p>
                <div className="flex flex-col sm:flex-row sm:space-x-4">
                  <a 
                    href="tel:+905534345043" 
                    className="bg-white text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-md font-medium inline-flex items-center mb-3 sm:mb-0"
                  >
                    <i className="fas fa-phone-alt mr-2"></i> 0553 434 50 43
                  </a>
                  <a 
                    href="https://ankatermuhendislik.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-md font-medium inline-flex items-center"
                  >
                    <i className="fas fa-globe mr-2"></i> Web Sitemiz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 