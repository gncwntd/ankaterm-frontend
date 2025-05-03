import React from 'react';

function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">İletişim</h1>
            <p className="text-lg text-blue-100">
              Ankaterm doğalgaz hizmetleri için bize ulaşın. Sorularınızı yanıtlamak ve
              ihtiyaçlarınıza çözüm sunmak için buradayız.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-blue-800">İletişim Bilgilerimiz</h2>
              
              <div className="bg-blue-50 p-8 rounded-lg mb-8">
                <div className="flex items-start mb-6">
                  <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Adres</h3>
                    <p className="text-gray-700">
                      Bağlıca Mahallesi, Bağlıca Bulvarı<br />
                      No: 54/4 Etimesgut / Ankara
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Telefon</h3>
                    <p className="text-gray-700 mb-1">
                      <a href="tel:+905534345043" className="hover:text-blue-600">0553 434 50 43</a>
                    </p>
                    <p className="text-gray-700">
                      <a href="tel:+903127000000" className="hover:text-blue-600">0312 700 00 00</a> (Ofis)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">E-posta</h3>
                    <p className="text-gray-700">
                      <a href="mailto:info@ankatermuhendislik.com" className="hover:text-blue-600">
                        info@ankatermuhendislik.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Çalışma Saatleri</h3>
                    <p className="text-gray-700">Pazartesi - Cuma: 08:30 - 18:00</p>
                    <p className="text-gray-700">Cumartesi: 09:00 - 14:00</p>
                    <p className="text-gray-700">Pazar: Kapalı</p>
                    <p className="text-red-600 mt-2 font-medium">* Acil servis hizmetimiz 7/24 aktiftir.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-800">Sosyal Medya</h3>
                <div className="flex space-x-4">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-blue-400 hover:bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://wa.me/905534345043" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-blue-800">Bize Ulaşın</h2>
                <form>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Adınız Soyadınız *</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefon Numaranız *</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-posta Adresiniz *</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Hangi Hizmetimizle İlgileniyorsunuz?</label>
                    <select id="service" name="service" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Seçiniz</option>
                      <option value="abonelik">Doğalgaz Abonelik İşlemleri</option>
                      <option value="bakim">Kombi Bakım ve Onarım</option>
                      <option value="tesisat">Doğalgaz Tesisatı</option>
                      <option value="proje">Doğalgaz Projesi Çizimi</option>
                      <option value="kalorifer">Kalorifer Tesisatı</option>
                      <option value="danismanlik">Keşif ve Danışmanlık</option>
                      <option value="diger">Diğer</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mesajınız *</label>
                    <textarea id="message" name="message" rows="5" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
                  </div>
                  
                  <div className="flex items-start mb-6">
                    <input type="checkbox" id="privacy" name="privacy" required className="mt-1 mr-3" />
                    <label htmlFor="privacy" className="text-gray-700 text-sm">
                      Kişisel verilerimin işlenmesine ilişkin <a href="/gizlilik-politikasi" className="text-blue-600 hover:underline">aydınlatma metnini</a> okudum ve kabul ediyorum.
                    </label>
                  </div>
                  
                  <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 rounded-lg shadow-md transition-colors">
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Ofisimize Ulaşım</h2>
            <div className="rounded-lg overflow-hidden shadow-md h-96">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12245.609286831854!2d32.6698649!3d39.8984371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e5123ef127b%3A0x9cbf0a47a98a69e4!2sBa%C4%9Fl%C4%B1ca%2C%20Ankara!5e0!3m2!1str!2str!4v1620578942951!5m2!1str!2str" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                title="Ankaterm Ofis"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Acil Doğalgaz Arıza Hattı</h2>
              <p className="text-red-100">
                Doğalgaz acil durumlarında 7/24 yanınızdayız.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+905534345043" 
                className="bg-white text-red-600 hover:bg-red-100 py-3 px-6 rounded-lg font-bold text-xl flex items-center justify-center"
              >
                <i className="fas fa-phone-alt mr-3"></i> 0553 434 50 43
              </a>
              <a 
                href="https://wa.me/905534345043" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-bold flex items-center justify-center"
              >
                <i className="fab fa-whatsapp mr-3 text-xl"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact; 