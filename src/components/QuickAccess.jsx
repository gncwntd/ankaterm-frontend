import React from 'react';

function QuickAccess() {
  return (
    <section className="bg-gray-100 py-4 sm:py-8">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="bg-white p-3 sm:p-6 rounded-lg shadow-md flex items-center border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-2 sm:mr-4 flex-shrink-0">
              <i className="fas fa-file-invoice text-blue-600 text-sm sm:text-xl"></i>
            </div>
            <div>
              <h3 className="font-medium text-sm sm:text-lg">Fatura Sorgulama</h3>
              <p className="text-xs sm:text-sm text-gray-600">Faturalarınızı görüntüleyin.</p>
            </div>
          </div>
          
          <div className="bg-white p-3 sm:p-6 rounded-lg shadow-md flex items-center border-l-4 border-red-500 hover:shadow-lg transition-shadow">
            <div className="bg-red-100 p-2 sm:p-3 rounded-full mr-2 sm:mr-4 flex-shrink-0">
              <i className="fas fa-exclamation-triangle text-red-600 text-sm sm:text-xl"></i>
            </div>
            <div>
              <h3 className="font-medium text-sm sm:text-lg">Acil Durum</h3>
              <p className="text-xs sm:text-sm text-gray-600">444 1 GAZ (429)</p>
            </div>
          </div>

          <div className="bg-white p-3 sm:p-6 rounded-lg shadow-md flex items-center border-l-4 border-green-500 hover:shadow-lg transition-shadow">
            <div className="bg-green-100 p-2 sm:p-3 rounded-full mr-2 sm:mr-4 flex-shrink-0">
              <i className="fas fa-credit-card text-green-600 text-sm sm:text-xl"></i>
            </div>
            <div>
              <h3 className="font-medium text-sm sm:text-lg">Online Ödeme</h3>
              <p className="text-xs sm:text-sm text-gray-600">Güvenli ödeme yapın.</p>
            </div>
          </div>

          <div className="bg-white p-3 sm:p-6 rounded-lg shadow-md flex items-center border-l-4 border-yellow-500 hover:shadow-lg transition-shadow">
            <div className="bg-yellow-100 p-2 sm:p-3 rounded-full mr-2 sm:mr-4 flex-shrink-0">
              <i className="fas fa-tools text-yellow-600 text-sm sm:text-xl"></i>
            </div>
            <div>
              <h3 className="font-medium text-sm sm:text-lg">Arıza Bildirimi</h3>
              <p className="text-xs sm:text-sm text-gray-600">7/24 teknik destek.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuickAccess;