import { PageHeader, SectionHero } from './Logo'

export default function TabSpec() {
  return (
    <section className="page">
      <PageHeader tag="Fluxograma do Agente" />

      <SectionHero
        title="Fluxo completo da conversa"
        description="Visualização interativa de todas as etapas do atendimento — do primeiro contato até o agendamento"
      />

      <div style={{ textAlign: 'center', padding: '48px 0' }}>
        <p style={{ fontSize: 16, color: '#666', marginBottom: 24 }}>
          O fluxograma mostra o passo a passo completo da conversa do Agente IA com o paciente, incluindo todas as etapas, decisões e integrações.
        </p>
        <a
          href="/fluxograma-agente.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            padding: '14px 32px',
            background: 'linear-gradient(135deg, #9c46e0 0%, #607cf9 100%)',
            color: '#fff',
            borderRadius: 10,
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Abrir fluxograma interativo
        </a>
      </div>
    </section>
  )
}
