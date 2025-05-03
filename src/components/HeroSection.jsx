import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section 
      className="hero-section h-[400px] sm:h-96 md:h-[500px] flex items-center text-white relative overflow-hidden"
      itemScope
      itemType="https://schema.org/Service"
    >
      <meta itemProp="serviceType" content="Doğalgaz Hizmetleri" />
      <meta itemProp="provider" content="Ankaterm Doğalgaz" />
      <meta itemProp="areaServed" content="Ankara" />
      
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-2xl">
          <span className="inline-block bg-blue-600 text-white text-xs sm:text-sm font-medium px-2 py-1 rounded-full mb-2">
            Ankara'nın Güvenilir Doğalgaz Firması
          </span>
          
          <h1 
            className="text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight"
            itemProp="name"
          >
            Ankara'da Doğalgaz Hizmetleri
          </h1>
          
          <p 
            className="text-xs xs:text-sm sm:text-base md:text-xl mb-3 sm:mb-6 md:mb-8 text-gray-100 line-clamp-3 sm:line-clamp-none"
            itemProp="description"
          >
            Çankaya, Keçiören ve tüm Ankara'da 25 yıllık tecrübemizle kesintisiz ve güvenli doğalgaz hizmeti sunuyoruz. 
            Doğalgaz abonelik işlemleri, arıza servisi ve bakım hizmetleriyle yanınızdayız.
          </p>
          
          <div className="flex flex-row gap-2 sm:gap-4">
            <Link 
              to="/hizmetlerimiz/abonelik-islemleri" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg transition-colors text-center inline-flex items-center justify-center text-xs sm:text-sm"
              aria-label="Doğalgaz abonelik işlemleri hakkında bilgi alın"
            >
              <i className="fas fa-user-plus mr-1.5 sm:mr-2"></i>
              <span className="whitespace-nowrap">Abonelik İşlemleri</span>
            </Link>
            
            <Link 
              to="/hizmetlerimiz" 
              className="bg-white hover:bg-gray-100 text-blue-800 font-medium py-1.5 sm:py-2 md:py-3 px-3 sm:px-4 md:px-6 rounded-lg transition-colors text-center inline-flex items-center justify-center text-xs sm:text-sm"
              aria-label="Ankaterm doğalgaz hizmetleri hakkında bilgi alın"
            >
              <i className="fas fa-fire mr-1.5 sm:mr-2"></i>
              <span className="whitespace-nowrap">Hizmetlerimiz</span>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Trust indicators */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-blue-800 py-1.5 sm:py-3">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-1 gap-x-3 items-center justify-items-center md:justify-items-start text-xs sm:text-sm text-blue-100">
            <div className="flex items-center">
              <i className="fas fa-certificate mr-1 sm:mr-2"></i>
              <span>EPDK Lisanslı</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-tools mr-1 sm:mr-2"></i>
              <span>7/24 Servis</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-users mr-1 sm:mr-2"></i>
              <span>250.000+ Müşteri</span>
            </div>
            <div className="flex items-center">
              <i className="fas fa-shield-alt mr-1 sm:mr-2"></i>
              <span>%100 Memnuniyet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;