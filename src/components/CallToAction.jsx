import React from 'react';

function CallToAction() {
  return (
    <section className="py-12 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Doğalgaz Aboneliği İçin Hemen Başvurun</h2>
            <p className="text-blue-200">Kolay abonelik süreçleri ve özel fırsatlardan yararlanın.</p>
          </div>
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            <a href="#" className="bg-white text-blue-900 hover:bg-blue-100 font-medium py-3 px-6 rounded-lg transition-colors text-center">
              Online Başvuru
            </a>
            <a href="#" className="border border-white text-white hover:bg-blue-800 font-medium py-3 px-6 rounded-lg transition-colors text-center">
              Detaylı Bilgi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;