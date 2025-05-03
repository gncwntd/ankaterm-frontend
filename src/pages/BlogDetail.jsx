import React from 'react';
import { useParams, Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';

// Mock blog post data (in real app, this would come from an API or CMS)
const blogPosts = {
  "dogalgaz-tasarruf-yontemleri": {
    title: "Doğalgaz Tasarruf Yöntemleri: Faturanızı Düşürmenin 12 Etkili Yolu",
    date: "2025-04-01",
    author: "Mehmet Yılmaz",
    authorTitle: "Ankaterm Enerji Verimliliği Uzmanı",
    image: "/src/assets/haber 1.jpg",
    readTime: 8,
    categories: ["tasarruf", "kombi"],
    tags: ["tasarruf ipuçları", "enerji verimliliği", "doğalgaz faturaları"],
    excerpt: "Kış aylarında artan doğalgaz faturalarınızı kontrol altında tutmak için uygulayabileceğiniz 12 etkili tasarruf yöntemini öğrenin. Kombi ayarlarından pencere yalıtımına kadar pratik öneriler.",
    content: `
      <p>Doğalgaz faturalarının özellikle kış aylarında aile bütçesinde ciddi bir yük oluşturduğunu hepimiz biliyoruz. Ancak doğru yöntemlerle ve bazı küçük alışkanlık değişiklikleriyle faturalarınızı önemli ölçüde düşürebilirsiniz.</p>
      
      <p>İşte doğalgaz faturanızı düşürmek için uygulayabileceğiniz 12 etkili yöntem:</p>
      
      <h2>1. Kombi Sıcaklığını Optimize Edin</h2>
      <p>Evinizin sıcaklığını her 1 derece düşürdüğünüzde, doğalgaz tüketiminiz yaklaşık %5-8 azalır. İdeal oda sıcaklığı 20-22°C arasındadır. Uyku sırasında veya evde kimse yokken sıcaklığı 16-17°C'ye düşürebilirsiniz.</p>
      
      <h2>2. Programlanabilir Termostat Kullanın</h2>
      <p>Akıllı veya programlanabilir bir termostat, ısıtma programınızı otomatikleştirerek gereksiz enerji kullanımını azaltır. Evde olmadığınız saatlerde otomatik olarak ısıyı düşürmesi için programlayabilirsiniz.</p>
      
      <h2>3. Pencereleri Yalıtın</h2>
      <p>Pencerelerden kaynaklanan ısı kaybı, toplam ısı kaybının %25-30'unu oluşturabilir. Pencere kenarlarına yalıtım bantları yapıştırmak veya perde kullanmak bile büyük fark yaratır.</p>
      
      <h2>4. Radyatörlerin Verimini Artırın</h2>
      <p>Radyatörlerin arkasına yansıtıcı paneller yerleştirmek, ısının duvarlar tarafından emilmesini önler ve odaya daha fazla ısı yayılmasını sağlar. Ayrıca, radyatörlerin önünde mobilya bulundurmamaya özen gösterin.</p>
      
      <h2>5. Düzenli Kombi Bakımı Yaptırın</h2>
      <p>Yılda en az bir kez profesyonel kombi bakımı yaptırmak, kombinin verimini %15'e kadar artırabilir. Düzenli bakım hem enerji tasarrufu sağlar hem de kombinin ömrünü uzatır.</p>
      
      <h2>6. Kapı Altlarındaki Boşlukları Kapatın</h2>
      <p>Kapı altlarından giren soğuk hava, oda sıcaklığını düşürerek kombinin daha fazla çalışmasına neden olur. Kapı altı süngerleri veya rüzgarlıklar kullanarak bu sorunu çözebilirsiniz.</p>
      
      <h2>7. Kalorifer Peteklerini Temizleyin</h2>
      <p>Peteklerin içinde biriken hava ve kireç, ısı transferini engeller. Peteklerin havasını almak ve düzenli olarak temizlemek, ısıtma verimliliğini artırır.</p>
      
      <h2>8. Güneş Enerjisinden Faydalanın</h2>
      <p>Güneşli günlerde perdeleri açarak güneş ışınlarının evinizi ısıtmasına izin verin. Gece olduğunda ise ısı kaybını önlemek için perdeleri kapatın.</p>
      
      <h2>9. Yemek Pişirirken Enerji Tasarrufu Yapın</h2>
      <p>Ocak yerine fırın kullanıyorsanız, fırının ısısından evinizi ısıtmak için fırını kullandıktan sonra kapağını açık bırakabilirsiniz. Ayrıca, tencere kapaklarını kapalı tutmak pişirme süresini kısaltır.</p>
      
      <h2>10. Ev İçi Nemini Dengeleyin</h2>
      <p>Nemli hava ısıyı daha iyi tutar. Özellikle kuru kış aylarında, evde %40-60 arasında bir nem seviyesi sağlamak, daha düşük sıcaklıklarda bile konfor hissinizi artırır.</p>
      
      <h2>11. Kullanılmayan Odaları Kapatın</h2>
      <p>Kullanmadığınız odaların kapılarını kapalı tutun ve radyatörlerini kısın. Böylece kombinin ısıtması gereken alan azalarak doğalgaz tüketimi düşer.</p>
      
      <h2>12. Doğru Giyinin</h2>
      <p>Evinizde kalın giysiler ve çorap giymek, kombi sıcaklığını 1-2 derece düşürmenize olanak tanır. Bu küçük değişiklik bile yıllık faturanızda ciddi tasarruf sağlayabilir.</p>
      
      <h2>Sonuç</h2>
      <p>Bu yöntemleri uyguladığınızda, doğalgaz faturanızda %20-30 arasında tasarruf sağlayabilirsiniz. Üstelik evinizin konforundan ödün vermeden! Hem bütçeniz hem de çevre için faydalı olacak bu önerileri deneyin ve fark yaratın.</p>
      
      <p>Doğalgaz tesisatınızda herhangi bir sorun yaşarsanız veya kombi bakımı için profesyonel destek almak isterseniz, Ankaterm olarak 7/24 hizmetinizdeyiz. 0212 123 45 67 numaralı telefonumuzdan bize ulaşabilirsiniz.</p>
    `,
    relatedPosts: [2, 3, 4]
  }
};

// Dummy related posts data
const relatedPostsData = [
  {
    id: 2,
    title: "Kombi Bakımı Nasıl Yapılır? Adım Adım Kombi Bakım Rehberi",
    slug: "kombi-bakimi-nasil-yapilir",
    excerpt: "Kombinizin ömrünü uzatmak, verimli çalışmasını sağlamak ve güvenliğinizi garanti altına almak için düzenli bakım şarttır.",
    date: "2025-03-27",
    image: "/src/assets/haber 2.jpg",
    readTime: 10
  },
  {
    id: 3,
    title: "Doğalgaz Faturasını Azaltmanın 10 Yolu: Uzman Önerileri",
    slug: "dogalgaz-faturasini-azaltmanin-10-yolu",
    excerpt: "Doğalgaz tüketiminizi optimize ederek faturalarınızı nasıl düşürebileceğinizi öğrenin.",
    date: "2025-03-20",
    image: "/src/assets/haber 3.jpg",
    readTime: 7
  },
  {
    id: 4,
    title: "Kış Aylarında Doğalgaz Kullanımı: Dikkat Edilmesi Gerekenler",
    slug: "kis-aylarinda-dogalgaz-kullanimi",
    excerpt: "Soğuk kış aylarında doğalgaz kullanımında dikkat etmeniz gereken güvenlik önlemleri ve verimli kullanım ipuçları.",
    date: "2025-03-15",
    image: "/src/assets/haber 1.jpg",
    readTime: 9
  }
];

function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts[slug];
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Yazı Bulunamadı</h1>
        <p className="text-gray-600 mb-8">Aradığınız blog yazısı bulunamadı veya kaldırılmış olabilir.</p>
        <Link to="/blog" className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
          Blog Ana Sayfasına Dön
        </Link>
      </div>
    );
  }
  
  return (
    <div className="py-16">
      <article 
        className="container mx-auto px-4" 
        itemScope 
        itemType="https://schema.org/BlogPosting"
      >
        <meta itemProp="datePublished" content={post.date} />
        <meta itemProp="author" content={post.author} />
        <meta itemProp="publisher" content="Ankaterm Doğalgaz Hizmetleri" />
        
        {/* Breadcrumbs */}
        <nav 
          className="mb-6 text-sm" 
          aria-label="Breadcrumb"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <ol className="flex flex-wrap items-center text-gray-500">
            <li 
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              <Link to="/" itemProp="item" className="hover:text-blue-600">
                <span itemProp="name">Ana Sayfa</span>
              </Link>
              <meta itemProp="position" content="1" />
              <span className="mx-2">/</span>
            </li>
            <li 
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
              className="flex items-center"
            >
              <Link to="/blog" itemProp="item" className="hover:text-blue-600">
                <span itemProp="name">Blog</span>
              </Link>
              <meta itemProp="position" content="2" />
              <span className="mx-2">/</span>
            </li>
            <li 
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
              className="flex items-center text-gray-700 font-medium"
            >
              <span itemProp="name">{post.title}</span>
              <meta itemProp="position" content="3" />
            </li>
          </ol>
        </nav>
        
        {/* Post header */}
        <header className="mb-10">
          <h1 
            className="text-4xl font-bold mb-6" 
            itemProp="headline"
          >
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-500 mb-6 gap-4">
            <time dateTime={post.date} className="flex items-center">
              <i className="far fa-calendar-alt mr-2"></i>
              {new Date(post.date).toLocaleDateString('tr-TR', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </time>
            <span className="flex items-center">
              <i className="far fa-clock mr-2"></i>
              {post.readTime} dakika okuma
            </span>
            <span className="flex items-center" itemProp="author" itemScope itemType="https://schema.org/Person">
              <i className="far fa-user mr-2"></i>
              <span itemProp="name">{post.author}</span>
              {post.authorTitle && (
                <span className="ml-1 text-gray-400">- {post.authorTitle}</span>
              )}
            </span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {post.categories.map(category => (
              <Link 
                key={category} 
                to={`/blog?category=${category}`} 
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            ))}
          </div>
        </header>
        
        {/* Feature image */}
        <div className="mb-10">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-auto rounded-xl shadow-md" 
            itemProp="image"
          />
        </div>
        
        {/* Post content */}
        <div 
          className="prose prose-lg max-w-none mb-12"
          itemProp="articleBody"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        
        {/* Tags */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-3">Etiketler</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <Link 
                key={tag} 
                to={`/blog?tag=${tag}`} 
                className="bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
        
        {/* Share buttons */}
        <div className="border-t border-b border-gray-200 py-6 my-10">
          <h3 className="text-lg font-semibold mb-4">Bu Yazıyı Paylaşın</h3>
          <div className="flex gap-3">
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=https://www.ankaterm.com/blog/${slug}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Facebook'ta paylaş"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href={`https://twitter.com/intent/tweet?url=https://www.ankaterm.com/blog/${slug}&text=${post.title}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors"
              aria-label="Twitter'da paylaş"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a 
              href={`https://wa.me/?text=${post.title} https://www.ankaterm.com/blog/${slug}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
              aria-label="WhatsApp'ta paylaş"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a 
              href={`https://www.linkedin.com/shareArticle?mini=true&url=https://www.ankaterm.com/blog/${slug}&title=${post.title}&summary=${post.excerpt}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
              aria-label="LinkedIn'de paylaş"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <button 
              onClick={() => navigator.clipboard.writeText(`https://www.ankaterm.com/blog/${slug}`)}
              className="bg-gray-200 text-gray-700 p-3 rounded-full hover:bg-gray-300 transition-colors"
              aria-label="Linki kopyala"
            >
              <i className="fas fa-link"></i>
            </button>
          </div>
        </div>
        
        {/* Author info */}
        <div className="bg-gray-50 p-6 rounded-xl mb-12">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-3xl">
              <i className="fas fa-user"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">{post.author}</h3>
              <p className="text-gray-500 mb-3">{post.authorTitle}</p>
              <p className="text-gray-700">
                Ankaterm ekibinin deneyimli üyelerinden. Enerji verimliliği ve doğalgaz sistemleri konusunda uzmanlaşmış, 10 yılı aşkın sektör tecrübesine sahip.
              </p>
            </div>
          </div>
        </div>
        
        {/* Related posts */}
        <section>
          <h2 className="text-2xl font-bold mb-6">İlgili Yazılar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPostsData.map(relatedPost => (
              <BlogPost key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </section>
        
        {/* Comment section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Yorumlar</h2>
          <div className="bg-gray-50 p-6 rounded-xl text-center">
            <p className="text-gray-600 mb-4">Bu yazı hakkında görüşlerinizi bizimle paylaşın.</p>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              Yorum Ekle
            </button>
          </div>
        </section>
      </article>
    </div>
  );
}

export default BlogDetail; 