import { PageHeader, SectionHero } from './Logo'

const phases = [
  {
    num: '01',
    title: 'Mapeamento e briefing',
    duration: 'Semanas 1-2',
    color: '#9c46e0',
    items: [
      'Briefing detalhado com Anderson e Renata',
      'Documentacao do processo comercial atual (AS-IS)',
      'Coleta de materiais (fotos, depoimentos, playbook)',
      'Definicao de persona e tom da IA',
      'Validacao da documentacao com o cliente',
    ],
    deliverables: ['Documentacao tecnica completa', 'Fluxo AS-IS e TO-BE', 'Checklist de materiais'],
  },
  {
    num: '02',
    title: 'Desenvolvimento',
    duration: 'Semanas 3-6',
    color: '#607cf9',
    items: [
      'Configuracao do Agente IA (prompt engineering)',
      'Integracao WhatsApp Business API',
      'Banco de provas sociais (fotos + depoimentos)',
      'CRM com pipeline Kanban',
      'Dashboard de metricas em tempo real',
      'Sistema de follow-up automatizado',
      'Integracao Google Calendar',
    ],
    deliverables: ['Agente IA funcional', 'CRM + Dashboard', 'Integracoes ativas'],
  },
  {
    num: '03',
    title: 'Testes e ajustes',
    duration: 'Semanas 7-8',
    color: '#543285',
    items: [
      'Testes de conversacao com cenarios reais',
      'Validacao do tom e personalidade da IA',
      'Testes de audio (envio e recebimento)',
      'Testes de follow-up com timings reais',
      'Ajustes finos baseados em feedback',
      'Demo semanal para o cliente',
    ],
    deliverables: ['IA validada pela equipe', 'Relatorio de testes', 'Ajustes implementados'],
  },
  {
    num: '04',
    title: 'Go-Live',
    duration: 'Fim da semana 8',
    color: '#16a34a',
    items: [
      'Deploy em producao',
      'Ativacao gradual (% de leads)',
      'Monitoramento em tempo real',
      'Treinamento da equipe no CRM/Dashboard',
    ],
    deliverables: ['Sistema em producao', 'Equipe treinada', 'Monitoramento ativo'],
  },
  {
    num: '05',
    title: 'Hyper-Care',
    duration: '21 dias pos go-live',
    color: '#d97706',
    items: [
      'Acompanhamento diario das conversas',
      'Ajustes rapidos baseados em feedback real',
      'Relatorio semanal de performance',
      'Otimizacao continua do prompt',
      'Suporte prioritario para equipe',
    ],
    deliverables: ['3 relatorios semanais', 'Ajustes implementados', 'Transicao para suporte regular'],
  },
]

const nextSteps = [
  { action: 'Validacao desta documentacao', responsible: 'Anderson e Renata', deadline: '26/mai/2026', status: 'Pendente' },
  { action: 'Envio de fotos antes/depois', responsible: 'Renata', deadline: '28/mai/2026', status: 'Pendente' },
  { action: 'Envio de depoimentos', responsible: 'Renata', deadline: '28/mai/2026', status: 'Pendente' },
  { action: 'Playbook comercial detalhado', responsible: 'Renata', deadline: '30/mai/2026', status: 'Pendente' },
  { action: 'Verificar API do Sante', responsible: 'Labrego IA', deadline: '30/mai/2026', status: 'Pendente' },
  { action: 'Definir gateway de pagamento', responsible: 'Anderson + Labrego IA', deadline: '02/jun/2026', status: 'Pendente' },
  { action: 'Escolher nome da IA', responsible: 'Anderson e Renata', deadline: '02/jun/2026', status: 'Pendente' },
  { action: 'Inicio do desenvolvimento', responsible: 'Labrego IA', deadline: '03/jun/2026', status: 'Aguardando' },
]

const milestones = [
  { week: 'S1', label: 'Kickoff', desc: 'Inicio do mapeamento' },
  { week: 'S2', label: 'Validacao', desc: 'Documentacao aprovada' },
  { week: 'S4', label: 'Demo 1', desc: 'IA conversando' },
  { week: 'S6', label: 'Demo 2', desc: 'CRM + integracoes' },
  { week: 'S8', label: 'Go-Live', desc: 'Producao ativada' },
  { week: 'S11', label: 'Fim HC', desc: 'Hyper-care encerrado' },
]

function PhaseCard({ num, title, duration, color, items, deliverables }) {
  return (
    <div className="phase-card" style={{ borderLeftColor: color }}>
      <div className="phase-card-header">
        <span className="phase-card-num" style={{ color }}>{num}</span>
        <div>
          <h4>{title}</h4>
          <span className="phase-card-duration">{duration}</span>
        </div>
      </div>
      <ul className="phase-card-items">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <div className="phase-card-deliverables">
        <strong>Entregaveis:</strong>
        <ul>
          {deliverables.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default function TabCrono() {
  return (
    <section className="page">
      <PageHeader tag="Cronograma" />

      <SectionHero
        title="8 semanas + 21 dias de hyper-care"
        description="Projeto dividido em 5 fases com demos semanais para acompanhamento do cliente"
      />

      <h3 className="sub-title">Linha do tempo</h3>
      <div className="timeline-bar">
        {milestones.map((m, i) => (
          <div className="timeline-milestone" key={i}>
            <div className="timeline-dot" />
            <div className="timeline-label">
              <strong>{m.week}</strong>
              <span>{m.label}</span>
              <small>{m.desc}</small>
            </div>
          </div>
        ))}
      </div>

      <h3 className="sub-title">Fases do projeto</h3>
      <div className="phase-cards-grid">
        {phases.map((phase, i) => <PhaseCard key={i} {...phase} />)}
      </div>

      <h3 className="sub-title">Proximos passos</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Acao</th><th>Responsavel</th><th>Prazo</th><th>Status</th></tr></thead>
          <tbody>
            {nextSteps.map((ns, i) => (
              <tr key={i}>
                <td>{ns.action}</td>
                <td className="td-label">{ns.responsible}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{ns.deadline}</td>
                <td>
                  <span style={{
                    background: ns.status === 'Pendente' ? '#d97706' : '#607cf9',
                    color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600
                  }}>{ns.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="highlight-box">
        <p><strong>Reuniao de validacao:</strong> Agendada para 26/mai/2026. Objetivo: validar esta documentacao, alinhar checklist de materiais e confirmar inicio do desenvolvimento em 03/jun/2026.</p>
      </div>

      <div className="rule-box">
        <strong>Modelo de acompanhamento:</strong> Demos semanais durante todo o desenvolvimento. Cliente tem acesso ao ambiente de homologacao para acompanhar evolucao em tempo real. Ajustes incorporados no sprint seguinte.
      </div>
    </section>
  )
}
