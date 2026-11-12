import React, { useState, useEffect } from 'react';
import { translations } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('en');
  const t = translations[lang] || translations.en;

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) {
      descMeta.setAttribute('content', t.meta.description);
    }
  }, [lang, t]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {t.meta.skipToContent}
      </a>

      {/* Subtle Architectural Background Grid & Glow */}
      <div className="bg-atmosphere" aria-hidden="true">
        <div className="bg-grid-pattern" />
        <div className="bg-glow-orb" />
        <div className="bg-glow-orb-secondary" />
      </div>

      <Navbar lang={lang} setLang={setLang} t={t} />

      <main id="main-content">
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>

      <Footer t={t} />
    </>
  );
}
