import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  MapPin,
  ArrowRight,
  MessageSquare,
  Github,
  Linkedin,
  Terminal,
  Layers,
  Cpu,
} from 'lucide-react';
import { socialLinks } from '../data/portfolioData';

export default function Hero({ t }) {
  const [activeModuleId, setActiveModuleId] = useState('frontend');
  const shouldReduceMotion = useReducedMotion();

  const modules = t.hero.visualCard.modules;
  const activeModule =
    modules.find((m) => m.id === activeModuleId) || modules[0];

  const fadeUp = (delay = 0) =>
    shouldReduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
        };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Editorial Identity & Call to Action */}
          <div className="hero-content">
            <motion.div className="hero-eyebrow-row" {...fadeUp(0.05)}>
              <span className="identity-pill">
                <span className="pulse-dot" aria-hidden="true" />
                {t.hero.eyebrow}
              </span>
              <span className="location-pill">
                <MapPin size={13} aria-hidden="true" style={{ color: 'var(--accent)' }} />
                {t.hero.location}
              </span>
            </motion.div>

            <motion.p className="hero-name-display" {...fadeUp(0.1)}>
              <span>Marco Vasquez</span> — {t.hero.roleHeadline}
            </motion.p>

            <motion.h1 className="hero-main-headline" {...fadeUp(0.16)}>
              {t.hero.mainHeadline}
            </motion.h1>

            <motion.p className="hero-supporting-text" {...fadeUp(0.22)}>
              {t.hero.supportingText}
            </motion.p>

            <motion.div className="hero-cta-group" {...fadeUp(0.28)}>
              <a href="#projects" className="btn-primary">
                <span>{t.hero.viewWorkBtn}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a href="#contact" className="btn-secondary">
                <MessageSquare size={17} aria-hidden="true" />
                <span>{t.hero.letsTalkBtn}</span>
              </a>
            </motion.div>

            <motion.div className="hero-socials-bar" {...fadeUp(0.34)}>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-link"
                aria-label={t.hero.githubLabel}
              >
                <Github size={15} aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill-link"
                aria-label={t.hero.linkedinLabel}
              >
                <Linkedin size={15} aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Abstract Architectural System Node */}
          <motion.div
            className="hero-visual-card"
            initial={shouldReduceMotion ? {} : { opacity: 0, scale: 0.96, y: 20 }}
            animate={shouldReduceMotion ? {} : { opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="visual-card-topbar">
              <div className="window-dots" aria-hidden="true">
                <span className="window-dot accent" />
                <span className="window-dot" />
                <span className="window-dot" />
              </div>
              <span className="visual-card-title">
                {t.hero.visualCard.headerTitle}
              </span>
              <span className="visual-status-badge">
                {t.hero.visualCard.statusBadge}
              </span>
            </div>

            <div className="visual-card-body">
              <div className="blueprint-schematic">
                <div className="schematic-svg-wrap" aria-hidden="true">
                  <svg
                    width="88"
                    height="88"
                    viewBox="0 0 88 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="44"
                      cy="44"
                      r="40"
                      stroke="rgba(212, 255, 0, 0.22)"
                      strokeWidth="1.2"
                      strokeDasharray="4 4"
                    />
                    <circle
                      cx="44"
                      cy="44"
                      r="28"
                      stroke="rgba(255, 255, 255, 0.16)"
                      strokeWidth="1.2"
                    />
                    <polygon
                      points="44,12 72,28 72,60 44,76 16,60 16,28"
                      stroke="#D4FF00"
                      strokeOpacity="0.65"
                      strokeWidth="1.5"
                      fill="rgba(212, 255, 0, 0.06)"
                    />
                    <circle cx="44" cy="44" r="6" fill="#D4FF00" />
                    <line
                      x1="44"
                      y1="12"
                      x2="44"
                      y2="38"
                      stroke="#D4FF00"
                      strokeWidth="1.2"
                    />
                    <line
                      x1="72"
                      y1="60"
                      x2="49"
                      y2="47"
                      stroke="#D4FF00"
                      strokeWidth="1.2"
                    />
                    <line
                      x1="16"
                      y1="60"
                      x2="39"
                      y2="47"
                      stroke="#D4FF00"
                      strokeWidth="1.2"
                    />
                  </svg>
                </div>

                <div className="schematic-info">
                  <div className="schematic-row">
                    <span className="schematic-label">
                      {t.hero.visualCard.focusLabel}
                    </span>
                    <span className="schematic-val">
                      {t.hero.visualCard.focusValue}
                    </span>
                  </div>
                  <div className="schematic-row">
                    <span className="schematic-label">
                      {t.hero.visualCard.stackLabel}
                    </span>
                    <span className="schematic-val" style={{ color: 'var(--accent)' }}>
                      {t.hero.visualCard.stackValue}
                    </span>
                  </div>
                  <div className="schematic-row">
                    <span className="schematic-label">
                      {t.hero.visualCard.educationLabel}
                    </span>
                    <span className="schematic-val">
                      {t.hero.visualCard.educationValue}
                    </span>
                  </div>
                </div>
              </div>

              <div className="interactive-modules-header">
                <Terminal size={13} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                <span>{t.hero.visualCard.interactiveHint}</span>
              </div>

              <div className="module-tabs" role="tablist" aria-label="Architectural Focus Modules">
                {modules.map((mod) => {
                  const isSelected = mod.id === activeModuleId;
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      className={`module-tab-btn ${isSelected ? 'active' : ''}`}
                      onClick={() => setActiveModuleId(mod.id)}
                    >
                      <span className="module-tab-title">{mod.label}</span>
                      <span className="module-tab-tag">{mod.tag}</span>
                    </button>
                  );
                })}
              </div>

              <div className="module-inspector-panel" role="tabpanel">
                {activeModule.detail}
              </div>

              <div className="visual-card-footer">
                <span>
                  <Layers size={12} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle' }} />
                  {t.hero.visualCard.coordinates}
                </span>
                <span>
                  <Cpu size={12} style={{ display: 'inline', marginRight: '5px', verticalAlign: 'middle', color: 'var(--accent)' }} />
                  UTF-8 // ES6+
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
