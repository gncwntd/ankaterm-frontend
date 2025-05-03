import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="Ankaterm Logo" className="h-10 w-10 mr-2" />
              <div>
                <h2 className="text-xl font-bold text-white">Ankaterm</h2>
                <p className="text-blue-300 text-sm">Doğalgaz Hizmetleri</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Başkentgaz yetkili firması olarak 25 yıllık tecrübemizle Ankara'da doğalgaz sistemleri konusunda hizmet vermekteyiz.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <i className="fas fa-map-marker-alt text-blue-400 mr-3"></i>
                <span>Bağlıca Mahallesi, Bağlıca Bulvarı No: 54/4 Etimesgut / Ankara</span>
              </p>
              <p className="flex items-center text-gray-300">
                <i className="fas fa-phone-alt text-blue-400 mr-3"></i>
                <a href="tel:+905534345043" className="hover:text-blue-300">0553 434 50 43</a>
              </p>
              <p className="flex items-center text-gray-300">
                <i className="fas fa-envelope text-blue-400 mr-3"></i>
                <a href="mailto:info@ankatermuhendislik.com" className="hover:text-blue-300">info@ankatermuhendislik.com</a>
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-300 transition-colors">Ana Sayfa</Link>
              </li>
              <li>
                <Link to="/kurumsal" className="text-gray-300 hover:text-blue-300 transition-colors">Kurumsal</Link>
              </li>
              <li>
                <Link to="/hizmetlerimiz" className="text-gray-300 hover:text-blue-300 transition-colors">Hizmetlerimiz</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-blue-300 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-gray-300 hover:text-blue-300 transition-colors">İletişim</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hizmetlerimiz#service-1" className="text-gray-300 hover:text-blue-300 transition-colors">Doğalgaz Abonelik İşlemleri</Link>
              </li>
              <li>
                <Link to="/hizmetlerimiz#service-2" className="text-gray-300 hover:text-blue-300 transition-colors">Kombi Bakımı ve Onarım</Link>
              </li>
              <li>
                <Link to="/hizmetlerimiz#service-3" className="text-gray-300 hover:text-blue-300 transition-colors">Doğalgaz Tesisatı</Link>
              </li>
              <li>
                <Link to="/hizmetlerimiz#service-4" className="text-gray-300 hover:text-blue-300 transition-colors">Doğalgaz Projesi Çizimi</Link>
              </li>
              <li>
                <Link to="/hizmetlerimiz#service-5" className="text-gray-300 hover:text-blue-300 transition-colors">Kalorifer Tesisatı</Link>
              </li>
            </ul>
          </div>
          
          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Çalışma Saatleri</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Pazartesi - Cuma:</span>
                <span className="text-gray-300">08:30 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Cumartesi:</span>
                <span className="text-gray-300">09:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Pazar:</span>
                <span className="text-gray-300">Kapalı</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium text-white mb-2">Bizi Takip Edin</h4>
              <div className="flex space-x-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-pink-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-blue-400 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://wa.me/905534345043" target="_blank" rel="noopener noreferrer" className="bg-gray-800 hover:bg-green-600 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Ankaterm. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4">
              <Link to="/gizlilik-politikasi" className="text-gray-500 hover:text-gray-300 text-sm">Gizlilik Politikası</Link>
              <Link to="/kullanim-sartlari" className="text-gray-500 hover:text-gray-300 text-sm">Kullanım Şartları</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;