import React, { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Doğalgaz aboneliği başvurusu nasıl yapılır?",
      answer: "Ankaterm'e doğalgaz aboneliği başvurusu yapmak için web sitemizden online başvuru formunu doldurabilir, 0212 123 45 67 numaralı telefonumuzu arayabilir veya ofisimize şahsen gelerek başvurunuzu yapabilirsiniz. Gerekli belgeler: kimlik fotokopisi, tapu veya kira sözleşmesi ve ikametgah belgesidir."
    },
    {
      question: "Doğalgaz faturamı nereden ödeyebilirim?",
      answer: "Doğalgaz faturanızı anlaşmalı bankalar, PTT şubeleri, mobil ödeme uygulamaları veya Ankaterm ofislerinden ödeyebilirsiniz. Ayrıca web sitemiz üzerinden online ödeme seçeneğimiz de bulunmaktadır."
    },
    {
      question: "Doğalgaz kaçağı şüphesi durumunda ne yapmalıyım?",
      answer: "Doğalgaz kaçağı şüphesi durumunda öncelikle vanayı kapatın, pencere ve kapıları açarak ortamı havalandırın, elektrikli cihazları kullanmayın, çakmak/kibrit yakmayın ve hemen 187 Doğalgaz Acil hattını veya 0212 123 45 67 numaralı acil servis hattımızı arayın."
    },
    {
      question: "Kombi bakımı ne sıklıkla yapılmalıdır?",
      answer: "Kombi bakımının yılda en az bir kez, tercihen kış sezonu öncesinde (Eylül-Ekim aylarında) yapılması önerilir. Düzenli bakım, cihazınızın daha verimli çalışmasını sağlar, arıza riskini azaltır ve doğalgaz faturalarınızda tasarruf etmenize yardımcı olur."
    },
    {
      question: "Ankara'da hangi bölgelere doğalgaz hizmeti veriyorsunuz?",
      answer: "Ankaterm olarak Ankara'nın tüm merkez ilçelerine (Çankaya, Keçiören, Yenimahalle, Etimesgut, Mamak, Altındağ, Sincan, Pursaklar) doğalgaz hizmeti vermekteyiz. Hizmet bölgenizin kapsama alanında olup olmadığını öğrenmek için 0212 123 45 67 numaralı müşteri hizmetlerimizi arayabilirsiniz."
    },
    {
      question: "Doğalgaz sayacı nasıl okunur?",
      answer: "Doğalgaz sayacınızı okumak için, sayaç üzerindeki rakamlara bakmanız yeterlidir. Sayaçlar genellikle soldan sağa doğru okunur ve metreküp (m³) cinsinden gösterim yapar. Sayaç okumalarınızı mobil uygulamamız üzerinden de kontrol edebilir veya sayaç okuma hizmetimizden yararlanabilirsiniz."
    },
    {
      question: "Doğalgaz aboneliğimi taşıma işlemi nasıl yapılır?",
      answer: "Taşınma durumunda doğalgaz aboneliğinizi yeni adresinize taşımak için en az 3 iş günü öncesinden 0212 123 45 67 numaralı müşteri hizmetlerimizi aramanız veya web sitemizden taşınma formunu doldurmanız gerekmektedir. Eski adresinizde kapama işlemi yapılacak ve yeni adresinizde açma işlemi için randevu verilecektir."
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="sikca-sorulan-sorular">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Sıkça Sorulan Sorular</h2>
        
        <div className="max-w-3xl mx-auto" itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 border border-gray-200 rounded-lg"
              itemScope 
              itemProp="mainEntity" 
              itemType="https://schema.org/Question"
            >
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left font-medium focus:outline-none"
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span itemProp="name">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div className="px-6 py-4 border-t border-gray-200">
                  <p itemProp="text" className="text-gray-700">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ; 