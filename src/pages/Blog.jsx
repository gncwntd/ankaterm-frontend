import React, { useState } from 'react';
import BlogPost from '../components/BlogPost';

// Sample blog post images (would come from assets)
const BLOG_IMAGES = {
  tasarruf: "/src/assets/haber 1.jpg", 
  kombiBakim: "/src/assets/haber 2.jpg",
  fatura: "/src/assets/haber 3.jpg",
  kisAylari: "/src/assets/haber 1.jpg",
  kacak: "/src/assets/haber 2.jpg",
  abonelik: "/src/assets/haber 3.jpg"
};

function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Sample blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Doğalgaz Tasarruf Yöntemleri: Faturanızı Düşürmenin 12 Etkili Yolu",
      slug: "dogalgaz-tasarruf-yontemleri",
      excerpt: "Kış aylarında artan doğalgaz faturalarınızı kontrol altında tutmak için uygulayabileceğiniz 12 etkili tasarruf yöntemini öğrenin. Kombi ayarlarından pencere yalıtımına kadar pratik öneriler.",
      date: "2025-04-01",
      image: BLOG_IMAGES.tasarruf,
      categories: ["tasarruf", "kombi"],
      tags: ["tasarruf ipuçları", "enerji verimliliği", "doğalgaz faturaları"],
      readTime: 8
    },
    {
      id: 2,
      title: "Kombi Bakımı Nasıl Yapılır? Adım Adım Kombi Bakım Rehberi",
      slug: "kombi-bakimi-nasil-yapilir",
      excerpt: "Kombinizin ömrünü uzatmak, verimli çalışmasını sağlamak ve güvenliğinizi garanti altına almak için düzenli bakım şarttır. Bakım yaptırırken nelere dikkat etmelisiniz?",
      date: "2025-03-27",
      image: BLOG_IMAGES.kombiBakim,
      categories: ["bakim", "kombi"],
      tags: ["kombi bakımı", "kış hazırlığı", "doğalgaz verimliliği"],
      readTime: 10
    },
    {
      id: 3,
      title: "Doğalgaz Faturasını Azaltmanın 10 Yolu: Uzman Önerileri",
      slug: "dogalgaz-faturasini-azaltmanin-10-yolu",
      excerpt: "Doğalgaz tüketiminizi optimize ederek faturalarınızı nasıl düşürebileceğinizi öğrenin. Uzmanlarımızdan pratik ve uygulanabilir tasarruf tavsiyeleri.",
      date: "2025-03-20",
      image: BLOG_IMAGES.fatura,
      categories: ["tasarruf", "faturalandırma"],
      tags: ["tasarruf ipuçları", "doğalgaz faturaları", "enerji verimliliği"],
      readTime: 7
    },
    {
      id: 4,
      title: "Kış Aylarında Doğalgaz Kullanımı: Dikkat Edilmesi Gerekenler",
      slug: "kis-aylarinda-dogalgaz-kullanimi",
      excerpt: "Soğuk kış aylarında doğalgaz kullanımında dikkat etmeniz gereken güvenlik önlemleri ve verimli kullanım ipuçları. Güvenlik karbonmonoksit zehirlenmesinden korunmak için alınacak önlemler.",
      date: "2025-03-15",
      image: BLOG_IMAGES.kisAylari,
      categories: ["güvenlik", "mevsimsel"],
      tags: ["kış hazırlığı", "doğalgaz güvenliği", "karbonmonoksit"],
      readTime: 9
    },
    {
      id: 5,
      title: "Doğalgaz Kaçağı Nasıl Anlaşılır? Acil Durumda Yapılması Gerekenler",
      slug: "dogalgaz-kacagi-nasil-anlasilir",
      excerpt: "Doğalgaz kaçağının belirtilerini tanıyın ve acil durumlarda yapmanız gerekenleri öğrenin. Aile güvenliğiniz için hayati öneme sahip bilgiler.",
      date: "2025-03-10",
      image: BLOG_IMAGES.kacak,
      categories: ["güvenlik", "acil durumlar"],
      tags: ["doğalgaz kaçağı", "acil durum protokolü", "güvenlik önlemleri"],
      readTime: 6
    },
    {
      id: 6,
      title: "Doğalgaz Aboneliği İçin Gereken Belgeler ve Başvuru Süreci",
      slug: "dogalgaz-aboneligi-icin-gereken-belgeler",
      excerpt: "Ankara'da doğalgaz aboneliği için gereken belgeler, başvuru koşulları ve tüm işlem sürecini adım adım anlattık. Hızlı ve sorunsuz abonelik için takip edilecek yol haritası.",
      date: "2025-03-05",
      image: BLOG_IMAGES.abonelik,
      categories: ["abonelik", "prosedürler"],
      tags: ["doğalgaz aboneliği", "başvuru belgeleri", "doğalgaz bağlantısı"],
      readTime: 5
    }
  ];
  
  // Filter by search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = activeCategory === 'all' || post.categories.includes(activeCategory);
    
    return matchesSearch && matchesCategory;
  });
  
  // Get unique categories from all posts
  const categories = ['all', ...new Set(blogPosts.flatMap(post => post.categories))];
  
  return (
    <div className="py-16">
      <div className="container mx-auto px-4" itemScope itemType="https://schema.org/Blog">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-medium">Bilgi Merkezi</span>
          <h1 className="text-4xl font-bold mt-2 mb-4" itemProp="name">Doğalgaz Blog</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Doğalgaz kullanımı, tasarruf yöntemleri, bakım ipuçları ve güvenli kullanım ile ilgili faydalı bilgiler içeren blog yazılarımızı keşfedin.
          </p>
          
          {/* Search bar */}
          <div className="mt-8 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Blog yazılarında ara..."
                className="w-full px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Blog yazılarında ara"
              />
              <button 
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600"
                aria-label="Ara"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${activeCategory === category 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'all' ? 'Tümü' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Blog posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <BlogPost key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-10">
              <i className="fas fa-search text-gray-400 text-4xl mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Aradığınız kriterlere uygun yazı bulunamadı</h3>
              <p className="text-gray-600">Lütfen başka anahtar kelimeler ile tekrar deneyin veya tüm yazıları görüntüleyin.</p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Tüm yazıları göster
              </button>
            </div>
          )}
        </div>
        
        {/* Email newsletter signup */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Doğalgaz Bülteni'ne Abone Olun</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Doğalgaz tasarruf yöntemleri, bakım ipuçları ve güncel doğalgaz haberlerini içeren bültenimize abone olun.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Abone Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog; 