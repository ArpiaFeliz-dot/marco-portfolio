import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  GraduationCap,
  Award,
  CheckCircle2,
  Calendar,
  ExternalLink,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';

export default function Education({ t }) {
  const shouldReduceMotion = useReducedMotion();
  const secEdu = t.education.academicCard.secondaryEducation;

  return (
    <section id="credentials" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-meta">
            <span className="section-number">{t.education.sectionNumber}</span>
            <span className="section-line" aria-hidden="true" />
            <span>{t.education.sectionTag}</span>
          </div>
          <h2 className="section-title">{t.education.headline}</h2>
          <p className="section-subtitle">{t.education.subheadline}</p>
        </motion.div>

        <div className="credentials-grid">
          {/* Left Column: University Education + Technical Secondary + Engineering Congresses */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <motion.div
              className="university-feature-card"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 22 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5 }}
            >
              <div className="uni-badge-top">
                <span className="uni-type-tag">
                  <GraduationCap
                    size={14}
                    style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }}
                  />
                  {t.education.academicCard.badge}
                </span>
                <span className="uni-status-tag">{t.education.academicCard.status}</span>
              </div>

              <h3 className="uni-degree-title">{t.education.academicCard.degree}</h3>
              <p className="uni-institution-name">
                {t.education.academicCard.institution}
              </p>
              <p className="uni-summary-text">{t.education.academicCard.summary}</p>

              <ul className="uni-highlights-list">
                {t.education.academicCard.highlights.map((item, idx) => (
                  <li key={idx} className="uni-highlight-item">
                    <CheckCircle2
                      size={16}
                      style={{ color: 'var(--accent)', flexShrink: 0 }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {secEdu && (
                <div
                  style={{
                    marginTop: '22px',
                    paddingTop: '18px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--accent)',
                        letterSpacing: '0.06em',
                      }}
                    >
                      {secEdu.badge}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {secEdu.period}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {secEdu.degree}
                  </div>
                  <div
                    style={{
                      fontSize: '0.86rem',
                      color: 'var(--text-secondary)',
                      marginTop: '2px',
                    }}
                  >
                    {secEdu.institution}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Engineering Congresses & Technological Updates */}
            {t.education.conferences && (
              <div className="certs-column">
                <p className="certs-column-heading" style={{ marginTop: '6px' }}>
                  {t.education.conferencesTitle}
                </p>
                {t.education.conferences.map((conf, idx) => (
                  <motion.div
                    key={conf.id}
                    className="cert-credential-card"
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 16 }}
                    whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                  >
                    <div className="cert-top-row">
                      <span className="cert-issuer">
                        <BookOpen
                          size={13}
                          style={{
                            display: 'inline',
                            marginRight: '6px',
                            verticalAlign: 'middle',
                          }}
                        />
                        {conf.issuer}
                      </span>
                      <span className="cert-badge-pill">{conf.badge}</span>
                    </div>
                    <h4 className="cert-title" style={{ fontSize: '1.02rem' }}>
                      {conf.title}
                    </h4>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      <Calendar size={12} aria-hidden="true" />
                      <span>{conf.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Verified Certifications & Technical Badges */}
          <div className="certs-column">
            <p className="certs-column-heading">
              {t.education.certificationsTitle}
            </p>
            {t.education.certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                className="cert-credential-card"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 18 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.07 }}
              >
                <div className="cert-top-row">
                  <span className="cert-issuer">
                    <Award
                      size={14}
                      style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }}
                    />
                    {cert.issuer}
                  </span>
                  <span className="cert-badge-pill">{cert.badge}</span>
                </div>

                <h4 className="cert-title">{cert.title}</h4>
                <p className="cert-focus">{cert.focus}</p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '10px',
                    marginTop: '6px',
                    paddingTop: '10px',
                    borderTop: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      gap: '12px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {cert.date && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <Calendar size={12} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                        {cert.date}
                      </span>
                    )}
                    {cert.credentialId && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                        <ShieldCheck size={12} style={{ color: 'var(--accent)' }} aria-hidden="true" />
                        {cert.credentialId}
                      </span>
                    )}
                  </div>

                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.74rem',
                        fontWeight: 600,
                        color: 'var(--accent)',
                      }}
                    >
                      <span>{t.education.verifyLabel}</span>
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
