import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, Globe, ArrowUpRight } from 'lucide-react';

export default function Navbar({ lang, setLang, t }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const shouldReduceMotion = useReducedMotion();

  const navItems = [
    { id: 'home', label: t.nav.home, href: '#home' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'experience', label: t.nav.experience, href: '#experience' },
    { id: 'projects', label: t.nav.projects, href: '#projects' },
    { id: 'skills', label: t.nav.skills, href: '#skills' },
    { id: 'credentials', label: t.nav.education, href: '#credentials' },
    { id: 'contact', label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const sectionIds = [
        'home',
        'about',
        'experience',
        'projects',
        'skills',
        'credentials',
        'contact',
      ];
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <a
          href="#home"
          className="brand-logo"
          onClick={() => handleNavClick('home')}
          aria-label="Marco Vasquez — Home"
        >
          <span className="brand-monogram" aria-hidden="true">
            MV
          </span>
          <span className="brand-text-group">
            <span className="brand-name">MARCO VASQUEZ</span>
            <span className="brand-tag">choluteca.hn // dev</span>
          </span>
        </a>

        <nav className="nav-links-desktop" aria-label="Primary Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link-item ${isActive ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId={shouldReduceMotion ? undefined : 'nav-pill'}
                    className="nav-active-pill"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="nav-actions">
          <div
            className="lang-switcher"
            role="group"
            aria-label={t.nav.langLabel}
          >
            <Globe
              size={14}
              style={{ marginLeft: '8px', marginRight: '4px', color: 'var(--text-muted)' }}
              aria-hidden="true"
            />
            <button
              type="button"
              className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
              onClick={() => setLang('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
          </div>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? t.nav.menuClose : t.nav.menuOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            id="mobile-navigation-drawer"
            className="mobile-nav-drawer"
            aria-label="Mobile Navigation"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
