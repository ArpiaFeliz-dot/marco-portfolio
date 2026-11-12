import React from 'react';
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

export default function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-identity">
            <div className="footer-brand-row">
              <span className="brand-monogram" aria-hidden="true">
                MV
              </span>
              <span>
                {t.footer.name} — {t.footer.location}
              </span>
            </div>
            <p className="footer-closing-phrase">{t.footer.closingPhrase}</p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
              }}
            >
              © {currentYear} {t.footer.name}. {t.footer.rights}
            </p>
          </div>

          <div className="footer-links-right">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-link"
              aria-label="GitHub"
            >
              <Github size={15} aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={15} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp size={14} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
