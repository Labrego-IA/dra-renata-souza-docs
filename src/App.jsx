import { useState, useEffect } from 'react'
import TabHoje from './components/TabHoje'
import TabSistema from './components/TabSistema'
import TabSpec from './components/TabSpec'
import TabCrono from './components/TabCrono'

const IconAlertCircle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
)

const IconLayout = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="9" y1="21" x2="9" y2="9" />
  </svg>
)

const IconFileText = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
)

const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
)

const IconMenu = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const IconX = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const summaryCards = [
  { id: 'hoje', num: '01', title: 'Hoje (as is)', desc: 'Como funciona o atendimento hoje — ferramentas, processos e gargalos identificados', color: '#9c46e0' },
  { id: 'sistema', num: '02', title: 'O Sistema (to be)', desc: '4 módulos que transformam o atendimento: Agente IA, Prova Social, CRM e Agendamento', color: '#607cf9' },
  { id: 'spec', num: '03', title: 'Referência Técnica', desc: 'Regras de negócio, integrações, decisões tomadas e pendentes, checklist de materiais', color: '#9c46e0' },
  { id: 'crono', num: '04', title: 'Cronograma', desc: '8 semanas de projeto + 21 dias de hyper-care com demos semanais', color: '#543285' },
]

function Summary({ onNavigate }) {
  return (
    <div className="summary">
      <div className="summary-inner">
        <div className="summary-header">
          <h1>Agente Comercial IA + CRM Inteligente</h1>
          <p>Documentação técnica completa do projeto — atendimento 24/7 via WhatsApp com playbook da Dra. Renata, pipeline visual e follow-up automatizado</p>
        </div>
        <div className="summary-grid">
          {summaryCards.map(card => (
            <button key={card.id} className="summary-card" onClick={() => onNavigate(card.id)}>
              <div className="summary-card-num" style={{ color: card.color }}>{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <span className="summary-card-arrow" style={{ color: card.color }}>Ver seção &rarr;</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

function App() {
  const [activeTab, setActiveTab] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const tabs = [
    { id: 'hoje', label: 'Hoje (as is)', icon: <IconAlertCircle /> },
    { id: 'sistema', label: 'O Sistema (to be)', icon: <IconLayout /> },
    { id: 'spec', label: 'Referência Técnica', icon: <IconFileText /> },
    { id: 'crono', label: 'Cronograma', icon: <IconCalendar /> },
  ]

  const handleNavigate = (tabId) => {
    setActiveTab(tabId)
    setMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header className="app-header">
        <div className="header-inner">
          <div className="header-left">
            <img src="/logo-labrego.png" alt="Labrego IA" className="header-logo" onClick={() => { setActiveTab(null); setMenuOpen(false); }} style={{ cursor: 'pointer' }} />
            <div className="header-divider" />
            <span className="header-project" onClick={() => { setActiveTab(null); setMenuOpen(false); }} style={{ cursor: 'pointer' }}>Dra. Renata Souza</span>
            <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <button
              className={`header-tab mobile-only ${activeTab === null ? 'active' : ''}`}
              onClick={() => { setActiveTab(null); setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Início
            </button>
            {tabs.map(tab => (
              <button
                key={tab.id}
                className={`header-tab ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => handleNavigate(tab.id)}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </nav>
          <div className="header-meta" />
        </div>
      </header>
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}

      <main className="app-main">
        {activeTab === null && <Summary onNavigate={handleNavigate} />}
        <div style={{ display: activeTab === 'hoje' ? 'block' : 'none' }}><TabHoje /></div>
        <div style={{ display: activeTab === 'sistema' ? 'block' : 'none' }}><TabSistema /></div>
        <div style={{ display: activeTab === 'spec' ? 'block' : 'none' }}><TabSpec /></div>
        <div style={{ display: activeTab === 'crono' ? 'block' : 'none' }}><TabCrono /></div>
      </main>

      <footer className="app-footer">
        <img src="/logo-labrego.png" alt="Labrego IA" style={{ height: 16, opacity: 0.4 }} />
        <span>Documentação Técnica — Dra. Renata Souza</span>
      </footer>

      {showTop && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Voltar ao topo">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}
    </>
  )
}

export default App
