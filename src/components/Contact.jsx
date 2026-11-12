import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Linkedin,
  Github,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

export default function Contact({ t }) {
  const [copied, setCopied] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = socialLinks.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-meta">
            <span className="section-number">{t.contact.sectionNumber}</span>
            <span className="section-line" aria-hidden="true" />
            <span>{t.contact.sectionTag}</span>
          </div>
          <h2 className="section-title">{t.contact.headline}</h2>
          <p className="section-subtitle">{t.contact.supportingText}</p>
        </motion.div>

        <div className="contact-layout">
          {/* Direct Email Action Panel */}
          <motion.div
            className="contact-primary-panel"
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 22 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="identity-pill" style={{ marginBottom: '20px' }}>
                <span className="pulse-dot" aria-hidden="true" />
                <span>{t.nav.status}</span>
              </div>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {t.contact.supportingText}
              </p>
            </div>

            <div className="contact-email-box">
              <span className="contact-email-label">{t.contact.emailLabel}</span>
              <a
                href={`mailto:${socialLinks.email}`}
                className="contact-email-value"
              >
                {socialLinks.email}
              </a>

              <div className="contact-email-actions">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="btn-primary"
                >
                  <Mail size={17} aria-hidden="true" />
                  <span>{t.contact.sendEmailBtn}</span>
                </a>

                <button
                  type="button"
                  className="btn-secondary"
                  onClick={handleCopyEmail}
                  aria-live="polite"
                >
                  {copied ? (
                    <>
                      <Check
                        size={17}
                        style={{ color: 'var(--accent)' }}
                        aria-hidden="true"
                      />
                      <span style={{ color: 'var(--accent)' }}>
                        {t.contact.copiedFeedback}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy size={17} aria-hidden="true" />
                      <span>{t.contact.copyEmailBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Professional Channels & Location Column */}
          <div className="contact-channels-column">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
            >
              <div className="channel-card-top">
                <div className="channel-title-group">
                  <Linkedin size={20} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                  <span className="channel-name">
                    {t.contact.linkedinCard.title}
                  </span>
                </div>
                <span className="channel-handle">
                  {t.contact.linkedinCard.handle}
                </span>
              </div>
              <p className="channel-desc">
                {t.contact.linkedinCard.description}
              </p>
              <span className="channel-cta">
                <span>{t.contact.linkedinCard.cta}</span>
                <ArrowUpRight size={15} style={{ color: 'var(--accent)' }} aria-hidden="true" />
              </span>
            </a>

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="channel-card"
            >
              <div className="channel-card-top">
                <div className="channel-title-group">
                  <Github size={20} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                  <span className="channel-name">
                    {t.contact.githubCard.title}
                  </span>
                </div>
                <span className="channel-handle">
                  {t.contact.githubCard.handle}
                </span>
              </div>
              <p className="channel-desc">{t.contact.githubCard.description}</p>
              <span className="channel-cta">
                <span>{t.contact.githubCard.cta}</span>
                <ArrowUpRight size={15} style={{ color: 'var(--accent)' }} aria-hidden="true" />
              </span>
            </a>

            <div className="channel-card">
              <div className="channel-card-top">
                <div className="channel-title-group">
                  <MapPin size={20} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                  <span className="channel-name">
                    {t.contact.locationCard.title}
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.84rem',
                  color: 'var(--text-primary)',
                  fontWeight: 600,
                }}
              >
                {t.contact.locationCard.value}
              </p>
              <p className="channel-desc">{t.contact.locationCard.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
