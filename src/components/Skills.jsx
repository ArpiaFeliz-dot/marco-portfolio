import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Skills({ t }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-meta">
            <span className="section-number">{t.skills.sectionNumber}</span>
            <span className="section-line" aria-hidden="true" />
            <span>{t.skills.sectionTag}</span>
          </div>
          <h2 className="section-title">{t.skills.headline}</h2>
          <p className="section-subtitle">{t.skills.subheadline}</p>
        </motion.div>

        {/* Honest Proficiency Context Legend */}
        <div className="skills-legend-bar" aria-label={t.skills.legendTitle}>
          <span className="legend-label">{t.skills.legendTitle}:</span>
          <div className="legend-item">
            <span className="tier-dot core" aria-hidden="true" />
            <span>{t.skills.tiers.core}</span>
          </div>
          <div className="legend-item">
            <span className="tier-dot working" aria-hidden="true" />
            <span>{t.skills.tiers.working}</span>
          </div>
          <div className="legend-item">
            <span className="tier-dot foundational" aria-hidden="true" />
            <span>{t.skills.tiers.foundational}</span>
          </div>
        </div>

        {/* Categorized Skills Bento Grid */}
        <div className="skills-bento-grid">
          {t.skills.categories.map((category, idx) => (
            <motion.div
              key={category.id}
              className="skill-category-card"
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
            >
              <div className="skill-cat-header">
                <span className="skill-cat-code">{category.code}</span>
                <h3 className="skill-cat-title">{category.title}</h3>
                <p className="skill-cat-desc">{category.description}</p>
              </div>

              <div className="skill-items-list">
                {category.items.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item-row">
                    <div className="skill-item-top">
                      <span className="skill-item-name">{skill.name}</span>
                      <span
                        className={`tier-dot ${skill.tier}`}
                        title={t.skills.tiers[skill.tier]}
                        aria-label={t.skills.tiers[skill.tier]}
                      />
                    </div>
                    <span className="skill-item-context">{skill.context}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
