import React from 'react';

function Statistics() {
  return (
    <section className="gradient-blue py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="uppercase text-sm tracking-wider">Yıllık Tecrübe</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">250K+</div>
            <div className="uppercase text-sm tracking-wider">Mutlu Müşteri</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="uppercase text-sm tracking-wider">Şehirde Hizmet</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="uppercase text-sm tracking-wider">Teknik Destek</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;