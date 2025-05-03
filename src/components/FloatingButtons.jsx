import React, { useState } from 'react';

function FloatingButtons() {
  const [showTooltip, setShowTooltip] = useState(null);
  
  return (
    <div className="fixed bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 flex flex-col gap-2 xs:gap-3 sm:gap-4 z-50">
      {/* WhatsApp Button */}
      <div className="relative" onMouseEnter={() => setShowTooltip('whatsapp')} onMouseLeave={() => setShowTooltip(null)}>
        <a 
          href="https://wa.me/905534345043" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 xs:p-3.5 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center floating-button-hover"
          aria-label="Bize WhatsApp'tan ulaşın"
        >
          <i className="fab fa-whatsapp text-lg xs:text-xl sm:text-2xl"></i>
        </a>
        {showTooltip === 'whatsapp' && (
          <span className="absolute right-full mr-2 whitespace-nowrap bg-black bg-opacity-80 text-white text-xs sm:text-sm py-1 px-2 rounded pointer-events-none hidden sm:block">
            WhatsApp ile Ulaşın
          </span>
        )}
      </div>
      
      {/* Phone Button */}
      <div className="relative" onMouseEnter={() => setShowTooltip('phone')} onMouseLeave={() => setShowTooltip(null)}>
        <a 
          href="tel:+905534345043" 
          className="bg-blue-700 text-white p-3 xs:p-3.5 sm:p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all flex items-center justify-center floating-button-hover"
          aria-label="Bizi hemen arayın"
        >
          <i className="fas fa-phone-alt text-lg xs:text-xl sm:text-2xl"></i>
        </a>
        {showTooltip === 'phone' && (
          <span className="absolute right-full mr-2 whitespace-nowrap bg-black bg-opacity-80 text-white text-xs sm:text-sm py-1 px-2 rounded pointer-events-none hidden sm:block">
            Hemen Arayın
          </span>
        )}
      </div>
    </div>
  );
}

export default FloatingButtons; 