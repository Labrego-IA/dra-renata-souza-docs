import { PageHeader, SectionHero } from './Logo'

const phases = [
  {
    num: '01',
    title: 'Mapeamento e briefing',
    duration: '19/mai — 30/mai',
    color: '#9c46e0',
    items: [
      'Briefing detalhado com Anderson e Renata',
      'Documentação do processo comercial atual (AS-IS)',
      'Coleta de materiais (fotos, depoimentos, playbook)',
      'Definição de persona e tom da IA',
      'Validação da documentação com o cliente (reunião 25/mai)',
      'Reunião de retorno: 30/mai às 11h',
    ],
    deliverables: ['Documentação técnica completa', 'Fluxo AS-IS e TO-BE', 'Checklist de materiais'],
  },
  {
    num: '02',
    title: 'Desenvolvimento',
    duration: '03/jun — 30/jun',
    color: '#607cf9',
    items: [
      'Configuração do Agente IA (prompt engineering)',
      'Integração WhatsApp Business API',
      'Banco de provas sociais (fotos + depoimentos)',
      'CRM próprio com pipeline Kanban (migração do Kenbox)',
      'Dashboard de métricas em tempo real',
      'Sistema de follow-up automatizado',
      'Integração Google Calendar',
      'Integração InfinityPay (links de pagamento automáticos)',
    ],
    deliverables: ['Agente IA funcional', 'CRM + Dashboard', 'Integrações ativas'],
  },
  {
    num: '03',
    title: 'Testes e ajustes',
    duration: '01/jul — 14/jul',
    color: '#543285',
    items: [
      'Testes de conversação com cenários reais',
      'Validação do tom e personalidade da IA',
      'Testes de áudio (envio e recebimento)',
      'Testes de follow-up com timings reais',
      'Ajustes finos baseados em feedback',
      'Validação com o cliente',
    ],
    deliverables: ['IA validada pela equipe', 'Relatório de testes', 'Ajustes implementados'],
  },
  {
    num: '04',
    title: 'Go-Live',
    duration: '15/jul',
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
    duration: '15/jul — 05/ago (21 dias)',
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
  { action: 'Validação da documentação (reunião 25/mai)', responsible: 'Anderson e Renata', deadline: '25/mai/2026', status: 'Concluído' },
  { action: 'Gravar áudio da Dra. Renata para follow-up D7', responsible: 'Renata', deadline: '30/mai/2026', status: 'Pendente' },
  { action: 'Definir dias e horários de agendamento disponíveis', responsible: 'Anderson e Renata', deadline: '30/mai/2026', status: 'Pendente' },
  { action: 'Envio de fotos antes/depois', responsible: 'Renata', deadline: '30/mai/2026', status: 'Pendente' },
  { action: 'Envio de depoimentos', responsible: 'Renata', deadline: '30/mai/2026', status: 'Pendente' },
  { action: 'Envio de materiais: exemplos de conversas WhatsApp, detalhes dos procedimentos, tabela de valores e condições', responsible: 'Anderson e Renata', deadline: '30/mai/2026', status: 'Pendente' },
  { action: 'Reunião de retorno — alinhamento final pré-desenvolvimento', responsible: 'Todos', deadline: '30/mai/2026 às 11h', status: 'Agendado' },
  { action: 'Escolher nome da IA', responsible: 'Anderson e Renata', deadline: '02/jun/2026', status: 'Pendente' },
  { action: 'Início do desenvolvimento', responsible: 'Labrego IA', deadline: '03/jun/2026', status: 'Em breve' },
  { action: 'Agente IA funcional + integrações WhatsApp (03/jun a 17/jun)', responsible: 'Labrego IA', deadline: '17/jun/2026', status: 'Aguardando' },
  { action: 'CRM + Dashboard + follow-up automatizado (18/jun a 30/jun)', responsible: 'Labrego IA', deadline: '30/jun/2026', status: 'Aguardando' },
  { action: 'Testes e ajustes com equipe (01/jul a 14/jul)', responsible: 'Labrego IA + Renata', deadline: '14/jul/2026', status: 'Aguardando' },
  { action: 'Go-Live (sistema em produção)', responsible: 'Labrego IA', deadline: '15/jul/2026', status: 'Aguardando' },
  { action: 'Hyper-care (15/jul a 05/ago — 21 dias de acompanhamento intensivo)', responsible: 'Labrego IA', deadline: '05/ago/2026', status: 'Aguardando' },
]

const milestones = [
  { week: '19/mai', label: 'Kickoff', desc: 'Início do mapeamento' },
  { week: '25/mai', label: 'Validação', desc: 'Documentação validada' },
  { week: '30/mai', label: 'Retorno', desc: 'Reunião de alinhamento' },
  { week: '17/jun', label: 'Entrega 1', desc: 'Agente IA funcional' },
  { week: '30/jun', label: 'Entrega 2', desc: 'CRM + integrações' },
  { week: '15/jul', label: 'Go-Live', desc: 'Produção ativada' },
  { week: '05/ago', label: 'Fim HC', desc: 'Hyper-care encerrado' },
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
        description="Projeto dividido em 5 fases com acompanhamento contínuo do cliente"
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
                    background: ns.status === 'Pendente' ? '#d97706' : ns.status === 'Em breve' ? '#16a34a' : ns.status === 'Aguardando' ? '#607cf9' : '#607cf9',
                    color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600
                  }}>{ns.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="highlight-box">
        <p><strong>Reunião de retorno:</strong> 30/mai/2026 às 11h. Objetivo: alinhar materiais pendentes (áudio da Dra. Renata, dias/horários, fotos, depoimentos), confirmar detalhes finais e início do desenvolvimento em 03/jun/2026.</p>
      </div>

    </section>
  )
}
