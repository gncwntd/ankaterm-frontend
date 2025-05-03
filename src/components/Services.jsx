import React from 'react';
import { Link } from 'react-router-dom';
import dagitim from '../assets/doğalgaz dağıtım.jpg';
import abonelik from '../assets/abonelik işlemleri.jpg';
import bakim from '../assets/bakım ve onarım.jpg';

function Services() {
  return (
    <div className="container mx-auto px-3 sm:px-4">
      <div className="text-center mb-6 sm:mb-12">
        <span className="text-blue-600 font-medium text-xs sm:text-sm">Profesyonel Hizmet</span>
        <h2 id="hizmetlerimiz-baslik" className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">Doğalgaz Hizmetlerimiz</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          Ankaterm olarak Ankara'da 25 yıldır evlere ve işyerlerine güvenilir doğalgaz hizmeti sunmaktayız. Çankaya, Keçiören, Mamak ve tüm Ankara'da doğalgaz ihtiyaçlarınız için yanınızdayız.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        <article className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100" itemScope itemType="https://schema.org/Service">
          <meta itemProp="provider" content="Ankaterm Doğalgaz Hizmetleri" />
          <meta itemProp="areaServed" content="Ankara" />
          
          <div className="h-40 sm:h-48 bg-gray-200 relative overflow-hidden">
            <img 
              src={dagitim} 
              alt="Ankara Doğalgaz Dağıtım Hizmetleri" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              loading="lazy"
              itemProp="image"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2" itemProp="name">Doğalgaz Dağıtım Hizmetleri</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 line-clamp-3" itemProp="description">
              Güvenli ve kesintisiz doğalgaz dağıtım hizmetimizle evinizi ve işyerinizi ısıtıyoruz. Ankaterm kalitesiyle profesyonel çözümler sunuyoruz.
            </p>
            <Link
              to="/hizmetlerimiz/dogalgaz-dagitim" 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-xs sm:text-sm"
              aria-label="Doğalgaz dağıtım hizmetleri hakkında detaylı bilgi alın"
            >
              Detaylı Bilgi <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </article>
        
        <article className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100" itemScope itemType="https://schema.org/Service">
          <meta itemProp="provider" content="Ankaterm Doğalgaz Hizmetleri" />
          <meta itemProp="areaServed" content="Ankara" />
          
          <div className="h-40 sm:h-48 bg-gray-200 relative overflow-hidden">
            <img 
              src={abonelik} 
              alt="Ankara Doğalgaz Abonelik İşlemleri" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy" 
              itemProp="image"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2" itemProp="name">Doğalgaz Abonelik İşlemleri</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 line-clamp-3" itemProp="description">
              Hızlı ve kolay abonelik süreciyle doğalgaz kullanmaya hemen başlayın. Ankaterm ile abonelik işlemleri artık çok daha kolay.
            </p>
            <Link
              to="/hizmetlerimiz/abonelik-islemleri" 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-xs sm:text-sm"
              aria-label="Doğalgaz abonelik işlemleri hakkında detaylı bilgi alın"
            >
              Detaylı Bilgi <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </article>
        
        <article className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100" itemScope itemType="https://schema.org/Service">
          <meta itemProp="provider" content="Ankaterm Doğalgaz Hizmetleri" />
          <meta itemProp="areaServed" content="Ankara" />
          
          <div className="h-40 sm:h-48 bg-gray-200 relative overflow-hidden">
            <img 
              src={bakim} 
              alt="Ankara Doğalgaz Bakım ve Onarım Hizmetleri" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              loading="lazy"
              itemProp="image"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-semibold mb-2" itemProp="name">Doğalgaz Bakım ve Onarım</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 line-clamp-3" itemProp="description">
              Profesyonel ekibimizle doğalgaz sistemlerinizin bakım ve onarımını gerçekleştiriyoruz. Düzenli bakım ile enerji tasarrufu sağlayın.
            </p>
            <Link
              to="/hizmetlerimiz/bakim-onarim" 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center text-xs sm:text-sm"
              aria-label="Doğalgaz bakım ve onarım hizmetleri hakkında detaylı bilgi alın"
            >
              Detaylı Bilgi <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </article>
      </div>
      
      <div className="mt-8 sm:mt-12 text-center">
        <Link
          to="/hizmetlerimiz" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors inline-flex items-center text-xs sm:text-sm"
          aria-label="Tüm doğalgaz hizmetlerimizi inceleyin"
        >
          Tüm Hizmetlerimizi İnceleyin <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
}

export default Services;