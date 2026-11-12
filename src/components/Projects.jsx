import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Search,
  FolderKanban,
  Smartphone,
  Database,
  Server,
  BarChart3,
} from 'lucide-react';

function EmployeeRecordsMockup({ mockupData }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredEmployees = mockupData.sampleEmployees.filter((emp) => {
    const matchesQuery =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.dni.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      statusFilter === 'All' || emp.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesQuery && matchesStatus;
  });

  return (
    <div className="mockup-container">
      <div className="mockup-window-bar">
        <div className="window-dots" aria-hidden="true">
          <span className="window-dot accent" />
          <span className="window-dot" />
          <span className="window-dot" />
        </div>
        <span className="mockup-window-title">{mockupData.windowTitle}</span>
        <FolderKanban size={14} style={{ color: 'var(--accent)' }} aria-hidden="true" />
      </div>

      <div className="mockup-disclaimer-bar">
        <ShieldCheck size={13} aria-hidden="true" />
        <span>{mockupData.disclaimer}</span>
      </div>

      <div className="mockup-body">
        <div className="hr-stats-row">
          {mockupData.stats.map((st, idx) => (
            <div key={idx} className="hr-stat-box">
              <div className="hr-stat-val">{st.value}</div>
              <div className="hr-stat-lbl">{st.label}</div>
            </div>
          ))}
        </div>

        <div className="hr-controls-row">
          <div style={{ position: 'relative', flex: 1, minWidth: '180px' }}>
            <Search
              size={14}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-muted)',
              }}
              aria-hidden="true"
            />
            <input
              type="text"
              className="hr-search-input"
              style={{ width: '100%', paddingLeft: '30px' }}
              placeholder={mockupData.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label={mockupData.searchPlaceholder}
            />
          </div>

          <div className="hr-filter-group" role="group" aria-label="Employee Status Filter">
            <button
              type="button"
              className={`hr-filter-btn ${statusFilter === 'All' ? 'active' : ''}`}
              onClick={() => setStatusFilter('All')}
            >
              {mockupData.filterAll}
            </button>
            <button
              type="button"
              className={`hr-filter-btn ${statusFilter === 'Active' ? 'active' : ''}`}
              onClick={() => setStatusFilter('Active')}
            >
              {mockupData.filterActive}
            </button>
            <button
              type="button"
              className={`hr-filter-btn ${statusFilter === 'Inactive' ? 'active' : ''}`}
              onClick={() => setStatusFilter('Inactive')}
            >
              {mockupData.filterInactive}
            </button>
          </div>
        </div>

        <div className="hr-records-list">
          {filteredEmployees.map((emp) => (
            <div key={emp.id} className="hr-record-item">
              <div className="hr-record-top">
                <div>
                  <div className="hr-emp-name">{emp.name}</div>
                  <div className="hr-emp-dni">
                    ID: {emp.dni} • {emp.department} ({emp.role})
                  </div>
                </div>
                <span
                  className={`hr-status-pill ${
                    emp.status === 'Active' ? 'active' : 'inactive'
                  }`}
                >
                  {emp.status === 'Active'
                    ? mockupData.filterActive
                    : mockupData.filterInactive}
                </span>
              </div>
              <div className="hr-doc-pills">
                {emp.categories.map((cat, idx) => (
                  <span key={idx} className="hr-doc-chip">
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SurveyAnalyticsMockup({ mockupData }) {
  const [selectedDeptId, setSelectedDeptId] = useState('all');
  const currentDept =
    mockupData.departments.find((d) => d.id === selectedDeptId) ||
    mockupData.departments[0];

  return (
    <div className="mockup-container">
      <div className="mockup-window-bar">
        <div className="window-dots" aria-hidden="true">
          <span className="window-dot accent" />
          <span className="window-dot" />
          <span className="window-dot" />
        </div>
        <span className="mockup-window-title">{mockupData.windowTitle}</span>
        <BarChart3 size={14} style={{ color: 'var(--accent)' }} aria-hidden="true" />
      </div>

      <div className="mockup-disclaimer-bar">
        <ShieldCheck size={13} aria-hidden="true" />
        <span>{mockupData.disclaimer}</span>
      </div>

      <div className="mockup-body">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '14px',
          }}
          role="tablist"
          aria-label="Department Survey Filter"
        >
          {mockupData.departments.map((dept) => {
            const isSelected = dept.id === selectedDeptId;
            return (
              <button
                key={dept.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`hr-filter-btn ${isSelected ? 'active' : ''}`}
                onClick={() => setSelectedDeptId(dept.id)}
              >
                {dept.name}
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
            marginBottom: '14px',
          }}
        >
          <div className="hr-stat-box">
            <div className="hr-stat-val" style={{ color: 'var(--accent)' }}>
              {currentDept.overallScore}
            </div>
            <div className="hr-stat-lbl">{currentDept.name}</div>
          </div>
          <div className="hr-stat-box">
            <div className="hr-stat-val">{currentDept.responses}</div>
            <div className="hr-stat-lbl">PHP / MariaDB Aggregated</div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {currentDept.metrics.map((metric, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '10px 12px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '0.8rem',
                  marginBottom: '6px',
                }}
              >
                <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
                  {metric.label}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--accent)',
                    fontWeight: 700,
                  }}
                >
                  {metric.score}%
                </span>
              </div>
              <div
                style={{
                  width: '100%',
                  height: '6px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '999px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${metric.score}%`,
                    height: '100%',
                    background: 'var(--accent)',
                    borderRadius: '999px',
                    transition: 'width 0.35s ease',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VetClinicMobileMockup({ mockupData }) {
  const [activeTab, setActiveTab] = useState('pets');

  return (
    <div className="mockup-container">
      <div className="mockup-window-bar">
        <div className="window-dots" aria-hidden="true">
          <span className="window-dot accent" />
          <span className="window-dot" />
          <span className="window-dot" />
        </div>
        <span className="mockup-window-title">{mockupData.windowTitle}</span>
        <Smartphone size={14} style={{ color: 'var(--accent)' }} aria-hidden="true" />
      </div>

      <div className="mockup-disclaimer-bar">
        <Server size={13} aria-hidden="true" />
        <span>{mockupData.disclaimer}</span>
      </div>

      <div className="mockup-body">
        <div className="vet-mobile-shell">
          <div className="vet-mobile-notch" aria-hidden="true" />

          <div className="vet-tabs-bar" role="tablist" aria-label="Veterinary Mobile Views">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'pets'}
              className={`vet-tab-btn ${activeTab === 'pets' ? 'active' : ''}`}
              onClick={() => setActiveTab('pets')}
            >
              {mockupData.tabs.pets}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'appointments'}
              className={`vet-tab-btn ${activeTab === 'appointments' ? 'active' : ''}`}
              onClick={() => setActiveTab('appointments')}
            >
              {mockupData.tabs.appointments}
            </button>
          </div>

          <div className="vet-pet-cards" role="tabpanel">
            {mockupData.samplePets.map((pet) => (
              <div key={pet.id} className="vet-pet-card">
                <div>
                  <div className="vet-pet-name">
                    {pet.name}{' '}
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      ({pet.age})
                    </span>
                  </div>
                  <div className="vet-pet-meta">
                    {activeTab === 'pets'
                      ? `${pet.species} • ${pet.owner}`
                      : `${pet.reason} • ${pet.owner}`}
                  </div>
                </div>
                <div className="vet-appt-badge">{pet.nextVisit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ t }) {
  const [expandedIds, setExpandedIds] = useState({
    'employee-records-system': true,
    'department-survey-analysis-system': false,
    'veterinary-clinic-mobile-app': false,
  });
  const shouldReduceMotion = useReducedMotion();

  const toggleExpand = (id) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderProjectMockup = (project) => {
    if (project.id === 'employee-records-system') {
      return <EmployeeRecordsMockup mockupData={project.mockupData} />;
    }
    if (project.id === 'department-survey-analysis-system') {
      return <SurveyAnalyticsMockup mockupData={project.mockupData} />;
    }
    return <VetClinicMobileMockup mockupData={project.mockupData} />;
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-meta">
            <span className="section-number">{t.projects.sectionNumber}</span>
            <span className="section-line" aria-hidden="true" />
            <span>{t.projects.sectionTag}</span>
          </div>
          <h2 className="section-title">{t.projects.headline}</h2>
          <p className="section-subtitle">{t.projects.subheadline}</p>
        </motion.div>

        <div className="projects-honesty-banner">
          <Database size={15} style={{ color: 'var(--accent)', flexShrink: 0 }} aria-hidden="true" />
          <span>{t.projects.honestyBanner}</span>
        </div>

        <div className="projects-stack">
          {t.projects.items.map((project, index) => {
            const isExpanded = !!expandedIds[project.id];
            return (
              <motion.article
                key={project.id}
                className="project-showcase-card"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 28 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
              >
                <div className="project-top-grid">
                  {/* Project Narrative & Tech Stack */}
                  <div>
                    <div className="project-meta-row">
                      <span className="project-index-badge">{project.number}</span>
                      <span className="project-status-tag">{project.statusBadge}</span>
                    </div>

                    <p className="project-category-text">{project.category}</p>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-context-org">{project.contextOrg}</p>

                    <p className="project-summary">{project.summary}</p>
                    <p className="project-mission">{project.mission}</p>

                    <p className="project-block-label">{t.projects.techStackTitle}</p>
                    <div className="tech-tags-wrap">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="project-expand-btn"
                      onClick={() => toggleExpand(project.id)}
                      aria-expanded={isExpanded}
                    >
                      <span>
                        {isExpanded
                          ? t.projects.collapseDetailsBtn
                          : t.projects.exploreDetailsBtn}
                      </span>
                      {isExpanded ? (
                        <ChevronUp size={16} aria-hidden="true" />
                      ) : (
                        <ChevronDown size={16} aria-hidden="true" />
                      )}
                    </button>
                  </div>

                  {/* Interactive Interface Reconstruction Mockup */}
                  <div>{renderProjectMockup(project)}</div>
                </div>

                {/* Expandable Architectural Breakdown & Capabilities */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      className="project-details-drawer"
                      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div>
                        <p className="project-block-label">
                          {t.projects.capabilitiesTitle}
                        </p>
                        <ul className="capabilities-checklist">
                          {project.capabilities.map((cap, idx) => (
                            <li key={idx} className="capability-item">
                              <CheckCircle2
                                size={16}
                                className="capability-icon"
                                aria-hidden="true"
                              />
                              <span>{cap}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="project-block-label">
                          {t.projects.previewTabArchitecture}
                        </p>
                        <div className="arch-layers-stack">
                          {project.architectureNotes.map((node, idx) => (
                            <div key={idx} className="arch-layer-card">
                              <div className="arch-layer-title">{node.layer}</div>
                              <div className="arch-layer-detail">{node.detail}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
