import { useMemo, useState, type CSSProperties } from 'react'
import { motion } from 'framer-motion'
import './App.css'

type Mission = {
  id: string
  number: string
  title: string
  description: string
  accent: 'gold' | 'blue' | 'cyan' | 'violet'
  icon: 'infrastructure' | 'shield' | 'planet' | 'radar'
  background: string
  iconPath: string
}

const missions: Mission[] = [
  {
    id: 'enterprise-dc',
    number: '01',
    title: 'Infraestructura de DC Enterprise',
    description:
      'Disenamos la base solida de nuestras operaciones. Conectividad, rendimiento y escalabilidad para misiones criticas.',
    accent: 'gold',
    icon: 'infrastructure',
    background: '/academy/missions/mission-01-bg.webp',
    iconPath: '/academy/icons/mission-01-icon.svg',
  },
  {
    id: 'resilience',
    number: '02',
    title: 'Alta disponibilidad, continuidad y disaster recovery',
    description:
      'Aseguramos nuestras misiones ante cualquier falla. Resiliencia, recuperacion y continuidad del negocio.',
    accent: 'blue',
    icon: 'shield',
    background: '/academy/missions/mission-02-bg.webp',
    iconPath: '/academy/icons/mission-02-icon.svg',
  },
  {
    id: 'hybrid-cloud',
    number: '03',
    title: 'Nube hibrida e interconexion con nube publica',
    description:
      'Exploramos nuevos mundos. Conectamos nuestro universo local con nubes publicas de forma segura y eficiente.',
    accent: 'cyan',
    icon: 'planet',
    background: '/academy/missions/mission-03-bg.webp',
    iconPath: '/academy/icons/mission-03-icon.svg',
  },
  {
    id: 'automation',
    number: '04',
    title: 'Integracion, automatizacion y operacion',
    description:
      'Integramos tecnologias y automatizamos procesos para operar como una sola tripulacion estelar.',
    accent: 'violet',
    icon: 'radar',
    background: '/academy/missions/mission-04-bg.webp',
    iconPath: '/academy/icons/mission-04-icon.svg',
  },
]

const Icon = ({ name }: { name: Mission['icon'] | 'academy' | 'profile' | 'briefing' | 'trophy' | 'folder' | 'settings' }) => {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.7,
  }

  return (
    <svg className="icon" viewBox="0 0 64 64" role="presentation" aria-hidden="true">
      {name === 'academy' && (
        <>
          <path {...common} d="M32 5l5.8 15.6L53 14 46.4 29.2 61 36l-16 3.2L48 56 32 47.2 16 56l3-16.8L3 36l14.6-6.8L11 14l15.2 6.6L32 5Z" />
          <circle {...common} cx="32" cy="32" r="8" />
        </>
      )}
      {name === 'profile' && (
        <>
          <circle {...common} cx="32" cy="22" r="9" />
          <path {...common} d="M16 53c3.4-10 9-15 16-15s12.6 5 16 15" />
          <circle {...common} cx="32" cy="32" r="28" />
        </>
      )}
      {name === 'infrastructure' && (
        <>
          <path {...common} d="M18 43h28M22 43l2-18h16l2 18M27 25l5-7 5 7M15 49h34" />
          <path {...common} d="M24 33h16M18 43l-5 6M46 43l5 6M32 18v-7" />
          <path {...common} d="M16 20l6 4M48 20l-6 4" />
        </>
      )}
      {name === 'shield' && (
        <>
          <path {...common} d="M32 8l22 9v14c0 13-8.8 22-22 26-13.2-4-22-13-22-26V17l22-9Z" />
          <path {...common} d="M20 33l8 8 17-18" />
          <path {...common} d="M13 49l38-34" />
        </>
      )}
      {name === 'planet' && (
        <>
          <circle {...common} cx="30" cy="31" r="15" />
          <path {...common} d="M7 40c8 7 27 5 42-5s20-24 13-29" />
          <path {...common} d="M20 44c7 2 18 0 28-6" />
          <path {...common} d="M43 44h12c4 0 7 3 7 7H35c0-4 3-7 8-7Z" />
        </>
      )}
      {name === 'radar' && (
        <>
          <circle {...common} cx="32" cy="32" r="19" />
          <circle {...common} cx="32" cy="32" r="9" />
          <path {...common} d="M32 7v50M7 32h50M32 32l17-17" />
          <circle {...common} cx="49" cy="15" r="4" />
          <circle {...common} cx="20" cy="45" r="3" />
        </>
      )}
      {name === 'briefing' && (
        <>
          <path {...common} d="M18 10h28v44H18z" />
          <path {...common} d="M24 20h16M24 30h16M24 40h10" />
        </>
      )}
      {name === 'trophy' && (
        <>
          <path {...common} d="M22 12h20v10c0 8-4 14-10 14S22 30 22 22V12Z" />
          <path {...common} d="M22 18H12c0 8 4 13 12 14M42 18h10c0 8-4 13-12 14M32 36v10M24 54h16M28 46h8" />
        </>
      )}
      {name === 'folder' && (
        <>
          <path {...common} d="M8 20h18l5 7h25v25H8z" />
          <path {...common} d="M8 20v-6h18l5 6" />
        </>
      )}
      {name === 'settings' && (
        <>
          <circle {...common} cx="32" cy="32" r="7" />
          <path {...common} d="M32 8v8M32 48v8M8 32h8M48 32h8M15 15l6 6M43 43l6 6M49 15l-6 6M21 43l-6 6" />
        </>
      )}
    </svg>
  )
}

function App() {
  const [selectedMission, setSelectedMission] = useState(missions[0])

  const progress = useMemo(
    () => missions.findIndex((mission) => mission.id === selectedMission.id) * 25,
    [selectedMission],
  )

  return (
    <main className="academy-shell">
      <section className="mission-screen" aria-label="Tech Top Talent Academy mission dashboard">
        <header className="hud-header">
          <div className="brand-panel">
            <span className="brand-emblem">
              <Icon name="academy" />
            </span>
            <div>
              <strong>Tech Top Talent</strong>
              <span>Academy</span>
            </div>
          </div>

          <div className="control-label">
            <span />
            Mission Control
            <span />
          </div>

          <div className="profile-panel">
            <Icon name="profile" />
            <div>
              <strong>Top Gun Cadet</strong>
              <span>Nivel 01</span>
              <small>0 / 4000 XP</small>
            </div>
          </div>
        </header>

        <section className="hero-copy">
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            Arquitectos Estelares
          </motion.h1>
          <p>Disenamos hoy, el futuro de las misiones criticas</p>
          <div className="mission-divider">
            <span />
            Selecciona tu mision
            <span />
          </div>
        </section>

        <section className="mission-grid" aria-label="Misiones disponibles">
          {missions.map((mission, index) => (
            <motion.article
              className={`mission-tile ${mission.accent} ${selectedMission.id === mission.id ? 'selected' : ''}`}
              key={mission.id}
              style={{ '--mission-bg': `url(${mission.background})` } as CSSProperties}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="mission-number">{mission.number}</span>
              <div className="mission-art" aria-hidden="true">
                <img
                  src={mission.iconPath}
                  alt=""
                  onError={(event) => event.currentTarget.classList.add('asset-missing')}
                />
                <span className="fallback-icon">
                  <Icon name={mission.icon} />
                </span>
              </div>
              <h2>{mission.title}</h2>
              <p>{mission.description}</p>
              <button type="button" onClick={() => setSelectedMission(mission)}>
                Iniciar mision
              </button>
            </motion.article>
          ))}
        </section>

        <section className="lower-console">
          <div className="progress-panel">
            <strong>Tu progreso</strong>
            <div className="progress-row">
            <div className="progress-ring" style={{ '--progress': `${progress * 3.6}deg` } as CSSProperties}>
                <span>{progress}%</span>
              </div>
              <ul>
                <li>0 / 4 misiones completadas</li>
                <li>0 / 12 desafios superados</li>
                <li>0 / 48 logros obtenidos</li>
                <li>Rango: Cadete Estelar</li>
              </ul>
            </div>
          </div>

          <div className="viewport-panel" aria-label="Vista de cabina" />

          <div className="comms-panel">
            <strong>Comunicaciones</strong>
            <p>
              Bienvenido Cadete. Tu entrenamiento comienza ahora. La galaxia necesita arquitectos preparados para cualquier mision.
            </p>
            <div className="signal-bars">
              {Array.from({ length: 38 }).map((_, index) => (
                <span key={index} style={{ '--bar': `${18 + ((index * 13) % 32)}px` } as CSSProperties} />
              ))}
            </div>
          </div>
        </section>

        <nav className="bottom-nav" aria-label="Navegacion principal">
          <a href="#tablero" className="active">
            <Icon name="academy" />
            Tablero
          </a>
          <a href="#ranking">
            <Icon name="trophy" />
            Ranking
          </a>
          <a href="#recursos">
            <Icon name="folder" />
            Recursos
          </a>
          <a href="#briefing">
            <Icon name="briefing" />
            Briefing
          </a>
          <a href="#ajustes">
            <Icon name="settings" />
            Ajustes
          </a>
        </nav>
      </section>
    </main>
  )
}

export default App
