import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`bg-white shadow-lg sticky top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'py-1.5 sm:py-2' : 'py-2.5 sm:py-4'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" title="Ankaterm Ana Sayfa" className="flex items-center space-x-1.5 sm:space-x-2">
              <div className="relative overflow-hidden">
                <div className={`absolute inset-0 bg-blue-500 rounded-full opacity-10 ${isScrolled ? 'scale-90' : 'scale-110'} transition-transform duration-300`}></div>
                <img 
                  src={logo} 
                  alt="Ankaterm Doğalgaz Logo" 
                  className={`transition-all relative z-10 ${
                    isScrolled ? 'h-8 w-8 sm:h-9 sm:w-9' : 'h-9 w-9 sm:h-11 sm:w-11'
                  }`} 
                />
              </div>
              <div className="flex flex-col">
                <span className={`text-blue-700 font-bold transition-all ${
                  isScrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'
                }`}>Ankaterm</span>
                <span className="text-gray-500 text-xs -mt-1">Doğalgaz Hizmetleri</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav 
            aria-label="Ana Menü" 
            className="hidden lg:flex items-center space-x-1 xl:space-x-2"
          >
            {[
              { to: '/', label: 'Ana Sayfa', isActive: true },
              { to: '/kurumsal', label: 'Kurumsal', isActive: false },
              { to: '/hizmetlerimiz', label: 'Hizmetlerimiz', isActive: false },
              // { to: '/dogalgaz-tuketim', label: 'Doğalgaz Tüketim', isActive: false },
              { to: '/blog', label: 'Blog', isActive: false },
              { to: '/iletisim', label: 'İletişim', isActive: false }
            ].map((item, index) => (
              <Link 
                key={index}
                to={item.to} 
                className={`px-2 py-1.5 rounded-md text-sm font-medium transition-all hover:bg-blue-50 ${
                  item.isActive 
                    ? 'text-blue-700 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <a 
              href="tel:+905534345043" 
              className="flex items-center text-sm text-gray-700 hover:text-blue-700 transition-colors"
              aria-label="Bizi hemen arayın: 0553 434 50 43"
            >
              <div className="bg-blue-50 p-1.5 rounded-full mr-1.5">
                <i className="fas fa-phone-alt text-blue-700"></i>
              </div>
              <span className="hidden lg:inline">0553 434 50 43</span>
            </a>
            
            <Link 
              to="/online-islemler" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 py-1.5 rounded-md font-medium text-sm shadow-sm hover:shadow transition-all flex items-center"
            >
              <i className="fas fa-user mr-2"></i> 
              <span>Online İşlemler</span>
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:flex items-center space-x-2 lg:hidden">
            <a 
              href="tel:+905534345043"
              className="sm:bg-blue-50 p-1.5 sm:p-2 rounded-full text-blue-700 hidden sm:flex md:hidden"
              aria-label="Bizi hemen arayın"
            >
              <i className="fas fa-phone-alt"></i>
            </a>
            
            <button 
              className={`p-1.5 rounded-md ${menuOpen ? 'bg-gray-100' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Ana menüyü aç"
            >
              <i className={`fas ${menuOpen ? 'fa-times text-blue-700' : 'fa-bars text-gray-700'} text-xl`}></i>
            </button>
          </div>
        </div>
        
        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden relative">
            <nav 
              id="mobile-menu" 
              aria-label="Mobil Menü" 
              className="py-3 mt-3 border-t border-gray-100 animate-slideDown space-y-0"
            >
              {[
                { to: '/', label: 'Ana Sayfa', isActive: true },
                { to: '/kurumsal', label: 'Kurumsal', isActive: false },
                { to: '/hizmetlerimiz', label: 'Hizmetlerimiz', isActive: false },
                { to: '/dogalgaz-tuketim', label: 'Doğalgaz Tüketim', isActive: false },
                { to: '/blog', label: 'Blog', isActive: false },
                { to: '/iletisim', label: 'İletişim', isActive: false }
              ].map((item, index) => (
                <Link 
                  key={index}
                  to={item.to} 
                  className={`block px-3 py-2 ${
                    item.isActive 
                      ? 'text-blue-700 bg-blue-50 font-medium'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-700'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-3 mt-3 border-t border-gray-100">
                <Link 
                  to="/online-islemler" 
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2.5 rounded-md block text-center font-medium text-sm shadow-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  <i className="fas fa-user mr-2"></i> Online İşlemler
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;