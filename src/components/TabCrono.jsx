import { PageHeader, SectionHero } from './Logo'

const phases = [
  {
    num: '01',
    title: 'Mapeamento e briefing',
    duration: 'Semanas 1-2',
    color: '#9c46e0',
    items: [
      'Briefing detalhado com Anderson e Renata',
      'Documentação do processo comercial atual (AS-IS)',
      'Coleta de materiais (fotos, depoimentos, playbook)',
      'Definição de persona e tom da IA',
      'Validação da documentação com o cliente',
    ],
    deliverables: ['Documentação técnica completa', 'Fluxo AS-IS e TO-BE', 'Checklist de materiais'],
  },
  {
    num: '02',
    title: 'Desenvolvimento',
    duration: 'Semanas 3-6',
    color: '#607cf9',
    items: [
      'Configuração do Agente IA (prompt engineering)',
      'Integração WhatsApp Business API',
      'Banco de provas sociais (fotos + depoimentos)',
      'CRM com pipeline Kanban',
      'Dashboard de métricas em tempo real',
      'Sistema de follow-up automatizado',
      'Integração Google Calendar',
    ],
    deliverables: ['Agente IA funcional', 'CRM + Dashboard', 'Integrações ativas'],
  },
  {
    num: '03',
    title: 'Testes e ajustes',
    duration: 'Semanas 7-8',
    color: '#543285',
    items: [
      'Testes de conversação com cenários reais',
      'Validação do tom e personalidade da IA',
      'Testes de áudio (envio e recebimento)',
      'Testes de follow-up com timings reais',
      'Ajustes finos baseados em feedback',
      'Demo semanal para o cliente',
    ],
    deliverables: ['IA validada pela equipe', 'Relatório de testes', 'Ajustes implementados'],
  },
  {
    num: '04',
    title: 'Go-Live',
    duration: 'Fim da semana 8',
    color: '#16a34a',
    items: [
      'Deploy em produção',
      'Ativação gradual (% de leads)',
      'Monitoramento em tempo real',
      'Treinamento da equipe no CRM/Dashboard',
    ],
    deliverables: ['Sistema em produção', 'Equipe treinada', 'Monitoramento ativo'],
  },
  {
    num: '05',
    title: 'Hyper-Care',
    duration: '21 dias pós go-live',
    color: '#d97706',
    items: [
      'Acompanhamento diário das conversas',
      'Ajustes rápidos baseados em feedback real',
      'Relatório semanal de performance',
      'Otimização contínua do prompt',
      'Suporte prioritário para equipe',
    ],
    deliverables: ['3 relatórios semanais', 'Ajustes implementados', 'Transição para suporte regular'],
  },
]

const nextSteps = [
  { action: 'Validação desta documentação', responsible: 'Anderson e Renata', deadline: '26/mai/2026', status: 'Pendente' },
  { action: 'Envio de fotos antes/depois', responsible: 'Renata', deadline: '28/mai/2026', status: 'Pendente' },
  { action: 'Envio de depoimentos', responsible: 'Renata', deadline: '28/mai/2026', status: 'Pendente' },
  { action: 'Playbook comercial detalhado', responsible: 'Renata', deadline: '30/mai/2026', status: 'Pendente' },
  { action: 'Definir gateway de pagamento', responsible: 'Anderson + Labrego IA', deadline: '02/jun/2026', status: 'Pendente' },
  { action: 'Escolher nome da IA', responsible: 'Anderson e Renata', deadline: '02/jun/2026', status: 'Pendente' },
  { action: 'Início do desenvolvimento', responsible: 'Labrego IA', deadline: '03/jun/2026', status: 'Aguardando' },
]

const milestones = [
  { week: 'S1', label: 'Kickoff', desc: 'Início do mapeamento' },
  { week: 'S2', label: 'Validação', desc: 'Documentação aprovada' },
  { week: 'S4', label: 'Demo 1', desc: 'IA conversando' },
  { week: 'S6', label: 'Demo 2', desc: 'CRM + integrações' },
  { week: 'S8', label: 'Go-Live', desc: 'Produção ativada' },
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
        <strong>Entregáveis:</strong>
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

      <h3 className="sub-title">Próximos passos</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Ação</th><th>Responsável</th><th>Prazo</th><th>Status</th></tr></thead>
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
        <p><strong>Reunião de validação:</strong> Agendada para 26/mai/2026. Objetivo: validar esta documentação, alinhar checklist de materiais e confirmar início do desenvolvimento em 03/jun/2026.</p>
      </div>

      <div className="rule-box">
        <strong>Modelo de acompanhamento:</strong> Demos semanais durante todo o desenvolvimento. Cliente tem acesso ao ambiente de homologação para acompanhar evolução em tempo real. Ajustes incorporados no sprint seguinte.
      </div>
    </section>
  )
}
