import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Code2, Database, Sparkles, GraduationCap } from 'lucide-react';

export default function About({ t }) {
  const shouldReduceMotion = useReducedMotion();

  const pillarIcons = {
    'web-mobile': <Code2 size={20} aria-hidden="true" />,
    'db-backend': <Database size={20} aria-hidden="true" />,
    'modern-frontend': <Sparkles size={20} aria-hidden="true" />,
  };

  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
      };

  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div className="section-header" {...revealProps}>
          <div className="section-meta">
            <span className="section-number">{t.about.sectionNumber}</span>
            <span className="section-line" aria-hidden="true" />
            <span>{t.about.sectionTag}</span>
          </div>
          <h2 className="section-title">{t.about.headline}</h2>
        </motion.div>

        <div className="about-editorial-layout">
          {/* Left Column: Personal Introduction Narrative */}
          <motion.div className="about-story-card" {...revealProps}>
            <p className="about-lead-paragraph">{t.about.introParagraphs[0]}</p>
            <p className="about-body-paragraph">{t.about.introParagraphs[1]}</p>
            <p className="about-body-paragraph">{t.about.introParagraphs[2]}</p>

            <div className="about-ethos-box">
              <span className="about-ethos-tag">{t.about.bento.mindset.tag}</span>
              <p className="about-ethos-quote">“{t.about.bento.mindset.quote}”</p>
            </div>
          </motion.div>

          {/* Right Column: Academic Status & Core Engineering Pillars */}
          <div className="about-bento-column">
            <motion.div className="about-edu-highlight" {...revealProps}>
              <div className="edu-badge-row">
                <span className="edu-tag-mono">
                  <GraduationCap
                    size={14}
                    style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }}
                  />
                  {t.about.bento.education.tag}
                </span>
                <span className="edu-status-pill">
                  {t.about.bento.education.status}
                </span>
              </div>
              <h3 className="about-edu-title">{t.about.bento.education.title}</h3>
              <p className="about-edu-inst">{t.about.bento.education.institution}</p>
              <p className="about-edu-desc">{t.about.bento.education.description}</p>
            </motion.div>

            <div className="about-pillars-grid">
              {t.about.bento.pillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.id}
                  className="about-pillar-card"
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                >
                  <div className="pillar-icon-box">
                    {pillarIcons[pillar.id] || <Code2 size={20} />}
                  </div>
                  <div>
                    <h4 className="pillar-title">{pillar.title}</h4>
                    <p className="pillar-desc">{pillar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
