import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import QuickAccess from './components/QuickAccess';
import Services from './components/Services';
import Statistics from './components/Statistics';
import News from './components/News';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import FloatingButtons from './components/FloatingButtons';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Contact from './pages/Contact';

function HomePage() {
  return (
    <>
      <HeroSection />
      
      <section className="py-8" aria-labelledby="hizli-erisim-baslik">
        <h2 id="hizli-erisim-baslik" className="sr-only">Hızlı Erişim</h2>
        <QuickAccess />
      </section>
      
      <section id="hizmetlerimiz" className="py-16 bg-gray-50" aria-labelledby="hizmetlerimiz-baslik">
        <h2 id="hizmetlerimiz-baslik" className="text-3xl font-bold text-center mb-10">Hizmetlerimiz</h2>
        <Services />
      </section>
      
      <section id="istatistikler" className="py-16" aria-labelledby="istatistikler-baslik">
        <h2 id="istatistikler-baslik" className="text-3xl font-bold text-center mb-10">Başarı İstatistiklerimiz</h2>
        <Statistics />
      </section>
      
      <section id="haberler" className="py-16 bg-gray-50" aria-labelledby="haberler-baslik">
        <h2 id="haberler-baslik" className="text-3xl font-bold text-center mb-10">Haberler ve Duyurular</h2>
        <News />
      </section>
      
      <FAQ />
      
      <section id="iletisim" className="py-16" aria-labelledby="iletisim-baslik">
        <h2 id="iletisim-baslik" className="text-3xl font-bold text-center mb-10">İletişim</h2>
        <CallToAction />
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/kurumsal" element={<About />} />
            <Route path="/hizmetlerimiz" element={<ServicesPage />} />
            <Route path="/iletisim" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;