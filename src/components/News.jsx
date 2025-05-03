import React from 'react';
import { Link } from 'react-router-dom';
import haber1 from '../assets/haber 1.jpg';
import haber2 from '../assets/haber 2.jpg';
import haber3 from '../assets/haber 3.jpg';

function News() {
  // Sample news data with proper structure
  const newsItems = [
    {
      id: 1,
      title: "Enerji Verimliliği Semineri",
      slug: "enerji-verimliligi-semineri",
      date: "2025-04-15",
      image: haber1,
      altText: "Ankaterm Enerji Verimliliği Semineri - Doğalgaz tasarruf konferansı",
      summary: "Ankaterm olarak düzenlediğimiz enerji verimliliği seminerimize tüm müşterilerimizi davet ediyoruz. Seminerde enerji tasarrufu sağlayan önemli ipuçları paylaşılacaktır.",
      category: "Etkinlik"
    },
    {
      id: 2,
      title: "Doğalgaz Güvenliği Eğitimi",
      slug: "dogalgaz-guvenligi-egitimi",
      date: "2025-04-08",
      image: haber2,
      altText: "Ankaterm Doğalgaz Güvenliği Eğitimi - Vatandaşlar için güvenlik bilgilendirmesi",
      summary: "Evde doğalgaz kullanımında dikkat edilmesi gereken güvenlik önlemleri ve acil durum müdahaleleri hakkında kapsamlı bir eğitim programı düzenliyoruz.",
      category: "Eğitim"
    },
    {
      id: 3,
      title: "Sistem Bakım Çalışması",
      slug: "sistem-bakim-calismasi",
      date: "2025-04-02",
      image: haber3,
      altText: "Ankaterm Doğalgaz Sistem Bakım Çalışması - Çankaya bölgesi altyapı bakımı",
      summary: "10-12 Mayıs tarihleri arasında Çankaya bölgesinde yapılacak altyapı ve bakım çalışmaları hakkında önemli bilgilendirme. Çalışmalardan etkilenecek bölgeler ve süreler.",
      category: "Duyuru"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-blue-600 font-medium block mb-2">Güncel Bilgiler</span>
            <h2 id="haberler-baslik" className="text-3xl font-bold mb-2">Haberler ve Duyurular</h2>
            <p className="text-gray-600">Ankaterm'in en güncel haberlerinden ve duyurularından haberdar olun.</p>
          </div>
          <Link 
            to="/haberler" 
            className="text-blue-600 hover:text-blue-800 font-medium hidden md:flex items-center"
            aria-label="Tüm doğalgaz haberlerini ve duyurularını görüntüleyin"
          >
            Tüm Haberler <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article 
              key={item.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-shadow hover:shadow-lg"
              itemScope 
              itemType="https://schema.org/NewsArticle"
            >
              <meta itemProp="publisher" content="Ankaterm Doğalgaz" />
              <Link to={`/haberler/${item.slug}`}>
                <img 
                  src={item.image} 
                  alt={item.altText} 
                  className="w-full h-48 object-cover" 
                  loading="lazy"
                  itemProp="image"
                />
              </Link>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <time 
                    dateTime={item.date} 
                    className="text-sm text-gray-500"
                    itemProp="datePublished"
                  >
                    {new Date(item.date).toLocaleDateString('tr-TR', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </time>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2" itemProp="headline">
                  <Link 
                    to={`/haberler/${item.slug}`} 
                    className="hover:text-blue-700 transition-colors"
                    itemProp="url"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4" itemProp="description">
                  {item.summary}
                </p>
                <Link 
                  to={`/haberler/${item.slug}`} 
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                  aria-label={`${item.title} hakkında detaylı bilgi`}
                >
                  Devamını Oku 
                  <span className="sr-only">{item.title} hakkında</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-8 md:hidden">
          <Link 
            to="/haberler" 
            className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            aria-label="Tüm doğalgaz haberleri ve duyurularını görüntüleyin"
          >
            Tüm Haberler <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-16 bg-blue-50 rounded-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-xl font-bold mb-2">Doğalgaz Bültenimize Abone Olun</h3>
            <p className="text-gray-600">Ankara'daki doğalgaz haberleri, bakım duyuruları ve tasarruf ipuçları için e-posta listemize katılın.</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="px-4 py-2 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full md:w-auto"
              aria-label="E-posta adresiniz"
            />
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-colors"
              aria-label="Doğalgaz bültenine abone ol"
            >
              Abone Ol
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;