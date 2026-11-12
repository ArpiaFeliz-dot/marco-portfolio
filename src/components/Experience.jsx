import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience({ t }) {
  const shouldReduceMotion = useReducedMotion();

  if (!t.experience) return null;

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-meta">
            <span className="section-number">{t.experience.sectionNumber}</span>
            <span className="section-line" aria-hidden="true" />
            <span>{t.experience.sectionTag}</span>
          </div>
          <h2 className="section-title">{t.experience.headline}</h2>
          <p className="section-subtitle">{t.experience.subheadline}</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          {t.experience.items.map((item, idx) => (
            <motion.article
              key={item.id}
              className="project-showcase-card"
              style={{ padding: '34px' }}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 22 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '14px',
                }}
              >
                <span className="project-status-tag">
                  <Briefcase
                    size={13}
                    style={{
                      display: 'inline',
                      marginRight: '6px',
                      verticalAlign: 'middle',
                    }}
                  />
                  {item.typeBadge}
                </span>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '14px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={13} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                    {item.period}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={13} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                    {item.location}
                  </span>
                </div>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.35rem, 2.2vw, 1.75rem)',
                  fontWeight: 800,
                  color: 'var(--text-primary)',
                  marginBottom: '4px',
                }}
              >
                {item.role}
              </h3>

              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--accent)',
                  marginBottom: '20px',
                }}
              >
                {item.company}
              </p>

              <ul
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginBottom: '22px',
                }}
              >
                {item.highlights.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.94rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}
                  >
                    <CheckCircle2
                      size={16}
                      style={{
                        color: 'var(--accent)',
                        flexShrink: 0,
                        marginTop: '4px',
                      }}
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="tech-tags-wrap" style={{ marginBottom: 0 }}>
                {item.technologies.map((tech, tIdx) => (
                  <span key={tIdx} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
