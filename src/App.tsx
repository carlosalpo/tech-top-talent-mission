import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'

type MissionPhase = {
  id: string
  title: string
  status: string
  signal: number
  altitude: string
  copy: string
  details: string[]
}

type IconName = 'radar' | 'orbit' | 'shield' | 'rocket' | 'bolt' | 'signal'

const missionPhases: MissionPhase[] = [
  {
    id: 'scan',
    title: 'Talent Scan',
    status: 'Active sweep',
    signal: 94,
    altitude: 'Sector LATAM-7',
    copy: 'AI-assisted sourcing is mapping high-signal engineers, product builders, and operators across priority corridors.',
    details: ['42 markets indexed', '18 warm pathways', '7 priority skill clusters'],
  },
  {
    id: 'align',
    title: 'Mission Alignment',
    status: 'Crew sync',
    signal: 87,
    altitude: 'Orbit 02',
    copy: 'Candidate motivation, compensation range, and role intent are being synchronized before the final approach.',
    details: ['Role fit calibrated', 'Comp bands confirmed', 'Interview loops staged'],
  },
  {
    id: 'launch',
    title: 'Launch Window',
    status: 'Ready',
    signal: 99,
    altitude: 'T-minus 48h',
    copy: 'Shortlisted talent is queued for stakeholder review with decision-ready evidence and launch recommendations.',
    details: ['5 finalist dossiers', '2 backup trajectories', '48h decision runway'],
  },
]

const crewMetrics = [
  { label: 'Mission fit', value: '96%', trend: '+14%' },
  { label: 'Time to shortlist', value: '72h', trend: '-38%' },
  { label: 'Signal integrity', value: '9.4', trend: '+2.1' },
  { label: 'Talent orbit', value: '124', trend: '+31' },
]

const candidateStreams = [
  { name: 'Frontend Systems', strength: 92, color: 'cyan' },
  { name: 'AI Product', strength: 84, color: 'green' },
  { name: 'Data Platforms', strength: 78, color: 'amber' },
  { name: 'Revenue Ops', strength: 69, color: 'coral' },
]

const Icon = ({ name }: { name: IconName }) => {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
  }

  return (
    <svg className="icon" viewBox="0 0 24 24" role="presentation" aria-hidden="true">
      {name === 'radar' && (
        <>
          <path {...common} d="M4 13a8 8 0 0 1 16 0" />
          <path {...common} d="M7 13a5 5 0 0 1 10 0" />
          <path {...common} d="M12 13l6-7" />
          <circle {...common} cx="12" cy="13" r="2" />
          <path {...common} d="M4 19h16" />
        </>
      )}
      {name === 'orbit' && (
        <>
          <circle {...common} cx="12" cy="12" r="3" />
          <path {...common} d="M3 12c0-3 4-5.5 9-5.5S21 9 21 12s-4 5.5-9 5.5S3 15 3 12Z" />
          <path {...common} d="M8.2 4.7c2.6-1.5 6.3.7 8.8 5s2.8 8.7.2 10.2-6.3-.7-8.8-5-2.8-8.7-.2-10.2Z" />
        </>
      )}
      {name === 'shield' && (
        <>
          <path {...common} d="M12 3l7 3v5c0 4.5-2.8 8.1-7 10-4.2-1.9-7-5.5-7-10V6l7-3Z" />
          <path {...common} d="M9 12l2 2 4-5" />
        </>
      )}
      {name === 'rocket' && (
        <>
          <path {...common} d="M13 4c3.7.5 6.5 3.3 7 7l-6 6-7-7 6-6Z" />
          <path {...common} d="M7 10l-3 1 4 4-1 3 4-2" />
          <circle {...common} cx="14.5" cy="9.5" r="1.5" />
        </>
      )}
      {name === 'bolt' && <path {...common} d="M13 2L4 14h7l-1 8 10-13h-7l0-7Z" />}
      {name === 'signal' && (
        <>
          <path {...common} d="M4 18v2" />
          <path {...common} d="M9 14v6" />
          <path {...common} d="M14 10v10" />
          <path {...common} d="M19 5v15" />
        </>
      )}
    </svg>
  )
}

function App() {
  const [selectedPhase, setSelectedPhase] = useState(missionPhases[0])
  const [boosted, setBoosted] = useState(false)

  const readiness = useMemo(
    () => Math.min(selectedPhase.signal + (boosted ? 4 : 0), 100),
    [boosted, selectedPhase.signal],
  )

  return (
    <main className="mission-shell">
      <section className="hero-panel">
        <div className="top-bar" aria-label="Mission status">
          <div className="brand-lockup">
            <span className="brand-mark">
              <Icon name="orbit" />
            </span>
            <span>Tech Top Talent</span>
          </div>
          <div className="live-status">
            <span className="pulse-dot" />
            Mission control online
          </div>
        </div>

        <div className="hero-grid">
          <motion.div
            className="command-copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="eyebrow">Recruiting command deck</p>
            <h1>Tech Top Talent mission control.</h1>
            <p className="lede">
              Track sourcing signals, mission readiness, and launch windows from one sci-fi operations surface built for decisive hiring teams.
            </p>
            <div className="hero-actions">
              <button className="primary-action" type="button" onClick={() => setBoosted((value) => !value)}>
                <Icon name="bolt" />
                {boosted ? 'Stabilize Boost' : 'Boost Signal'}
              </button>
              <a className="secondary-action" href="#mission-phases">
                <Icon name="radar" />
                View Phases
              </a>
            </div>
          </motion.div>

          <motion.div
            className="radar-console"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="radar-orb">
              <motion.div
                className="radar-sweep"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <div className="orbit-ring ring-one" />
              <div className="orbit-ring ring-two" />
              {candidateStreams.map((stream, index) => (
                <motion.span
                  className={`signal-node ${stream.color}`}
                  key={stream.name}
                  animate={{ scale: [1, 1.25, 1], opacity: [0.75, 1, 0.75] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.35 }}
                />
              ))}
              <div className="radar-core">
                <strong>{readiness}%</strong>
                <span>Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="metrics-grid" aria-label="Mission metrics">
        {crewMetrics.map((metric, index) => (
          <motion.article
            className="metric-card"
            key={metric.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <em>{metric.trend}</em>
          </motion.article>
        ))}
      </section>

      <section className="operations-grid" id="mission-phases">
        <div className="phase-selector">
          <div className="section-heading">
            <Icon name="rocket" />
            <div>
              <p className="eyebrow">Mission sequence</p>
              <h2>Choose an objective</h2>
            </div>
          </div>
          <div className="phase-list">
            {missionPhases.map((phase) => (
              <button
                className={phase.id === selectedPhase.id ? 'phase-button active' : 'phase-button'}
                key={phase.id}
                type="button"
                onClick={() => setSelectedPhase(phase)}
              >
                <span>{phase.title}</span>
                <small>{phase.status}</small>
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            className="mission-card"
            key={selectedPhase.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35 }}
          >
            <div className="mission-card-header">
              <div>
                <p className="eyebrow">{selectedPhase.altitude}</p>
                <h2>{selectedPhase.title}</h2>
              </div>
              <div className="signal-badge">
                <Icon name="signal" />
                {selectedPhase.signal}%
              </div>
            </div>
            <p>{selectedPhase.copy}</p>
            <div className="detail-grid">
              {selectedPhase.details.map((detail) => (
                <span key={detail}>{detail}</span>
              ))}
            </div>
          </motion.article>
        </AnimatePresence>
      </section>

      <section className="stream-panel" aria-label="Talent streams">
        <div className="section-heading">
          <Icon name="shield" />
          <div>
            <p className="eyebrow">Signal telemetry</p>
            <h2>Talent streams</h2>
          </div>
        </div>
        <div className="stream-list">
          {candidateStreams.map((stream) => (
            <div className="stream-row" key={stream.name}>
              <div>
                <strong>{stream.name}</strong>
                <span>{stream.strength}% signal strength</span>
              </div>
              <div className="stream-track">
                <motion.span
                  className={stream.color}
                  initial={{ width: 0 }}
                  animate={{ width: `${stream.strength}%` }}
                  transition={{ duration: 0.8 }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
