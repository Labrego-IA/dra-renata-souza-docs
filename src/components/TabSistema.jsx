import { PageHeader, SectionHero } from './Logo'

const modules = [
  {
    num: '01', title: 'Agente Comercial IA', color: '#9c46e0',
    desc: 'Atendimento 24/7 via WhatsApp com playbook da Dra. Renata — texto e audio',
    items: ['Resposta instantanea a qualquer horario', 'Identifica dor e envia provas sociais contextuais', 'Conduz para agendamento de avaliacao', 'Follow-up automatizado: 3, 7, 20, 30, 60 dias', 'Suporte a audio (envia e recebe)', 'Escalacao para humano quando necessario']
  },
  {
    num: '02', title: 'Prova Social Inteligente', color: '#607cf9',
    desc: 'Envio automatico de fotos antes/depois e depoimentos contextualizados ao caso do paciente',
    items: ['Banco organizado por procedimento e queixa', 'Selecao automatica do caso mais similar', 'Envio APOS entender a dor (nunca de cara)', 'Maximo 2-3 fotos por conversa', 'Depoimentos reforcam apos as fotos']
  },
  {
    num: '03', title: 'CRM + Dashboard', color: '#543285',
    desc: 'Pipeline visual Kanban com metricas em tempo real e historico de conversas',
    items: ['Pipeline: Novo Lead > Em Conversa > Agendou > Compareceu > Fechou', 'Metricas: leads/dia, taxa conversao, receita pipeline', 'Historico completo de conversas IA-paciente', 'Multi-usuario no mesmo numero WhatsApp', 'Filtros por procedimento e status', 'Exportacao de relatorios']
  },
  {
    num: '04', title: 'Agendamento', color: '#8b5cf6',
    desc: 'Google Calendar integrado com lembretes automaticos e formulario pre-cadastro',
    items: ['Avaliacao paga (R$ 350) — so agenda apos pagamento', 'Presencial (preferencia) ou online', 'Lembrete: 1 dia antes (ate 9h) + re-confirmacao 17h30', 'Formulario pre-cadastro enviado automaticamente', 'Verificacao de integracao com Sante']
  },
]

const compareData = {
  before: [
    'Horas de espera para responder lead',
    'Abordagem improvisada, sem padrao',
    'Prova social manual, esquece de enviar',
    'Agenda manual no Sante',
    'Follow-up inconsistente',
    'Zero visibilidade de metricas',
    'Conhecimento na cabeca da Dra. Renata',
    'Atendimento so no horario comercial',
  ],
  after: [
    'Resposta instantanea 24/7',
    'Playbook da Dra. Renata codificado na IA',
    'Prova social automatica por procedimento',
    'Google Calendar integrado',
    'Follow-up automatico: 3, 7, 20, 30, 60 dias',
    'Dashboard em tempo real',
    'Conhecimento transferido permanentemente',
    'Atendimento a qualquer horario',
  ],
}

const personality = [
  { label: 'Nome', value: 'A definir pelo cliente (Anderson e Renata vao escolher)' },
  { label: 'Apresentacao', value: 'Se apresenta pelo nome, sem mencionar IA de cara — so revela se perguntada' },
  { label: 'Linguagem', value: 'Semi-formal (meio-termo) — nem robotica, nem informal com girias' },
  { label: 'Tratamento', value: 'Chama pelo nome do paciente, varias vezes — nunca senhor/senhora' },
  { label: 'Emojis', value: 'Nao usar — decisao firme do cliente' },
  { label: 'Tom', value: 'Empatico, acolhedor, persuasivo — entender a dor primeiro' },
  { label: 'Audio', value: 'Sim — envia e recebe. Se paciente manda audio, responde com audio' },
  { label: 'Urgencia', value: 'Sutil, nunca pressao — para rino (ticket alto): gerar desejo, nao pressionar' },
]

const followUp = [
  { timing: '3 dias', approach: 'Retomar conversa mencionando a dor pelo nome. Alternar formato (audio/texto).' },
  { timing: '7 dias', approach: 'Novo angulo — enviar caso de sucesso diferente. Mudar formato de abordagem.' },
  { timing: '20 dias', approach: 'Perguntar se ja resolveu o problema, mostrar solucao alternativa.' },
  { timing: '30 dias', approach: 'Reforcar disponibilidade, mencionar resultados recentes. Tom mais direto.' },
  { timing: '60 dias', approach: 'Ultima tentativa — mensagem de encerramento. Se nao responder, finalizar.' },
]

const escalation = [
  { situation: 'Paciente pede para falar com humano', action: '"Vou transferir voce para nossa equipe!" + notificar atendente' },
  { situation: 'Reclamacao / pos-procedimento', action: 'Direcionar para WhatsApp da Livia (equipe tecnica)' },
  { situation: 'Fechamento de pagamento', action: 'Passar para atendente humano finalizar' },
  { situation: 'Pergunta tecnica sem resposta', action: '"A Dra. Renata vai te explicar na avaliacao"' },
]

const pipelineSteps = [
  { name: 'Novo Lead', desc: 'Criado automatico' },
  { name: 'Em Conversa', desc: 'IA atendendo' },
  { name: 'Agendou', desc: 'Pago + agendado' },
  { name: 'Compareceu', desc: 'Foi a avaliacao' },
  { name: 'Fechou', desc: 'Contratou' },
]

const dashboardMetrics = [
  { title: 'Leads hoje', desc: 'Total de novos leads do dia' },
  { title: 'Taxa de conversao', desc: '% de leads que agendaram avaliacao' },
  { title: 'Agendamentos', desc: 'Avaliacoes agendadas no periodo' },
  { title: 'Receita do pipeline', desc: 'Valor estimado dos leads em andamento' },
  { title: 'Conversao por procedimento', desc: '% por tipo (rino, botox, full face)' },
  { title: 'Follow-up pendentes', desc: 'Leads que precisam de reativacao' },
]

function ModuleGroupCard({ num, title, color, desc, items }) {
  return (
    <div className="module-group-card" style={{ borderTopColor: color }}>
      <div className="module-group-header">
        <div className="module-group-num" style={{ color }}>{num}</div>
      </div>
      <h4>{title}</h4>
      <p className="module-group-desc">{desc}</p>
      <ul className="module-group-items">
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

export default function TabSistema() {
  return (
    <section className="page">
      <PageHeader tag="O Sistema (TO-BE)" />

      <SectionHero
        title="Agente Comercial IA + CRM Inteligente"
        description="4 modulos integrados que transformam o atendimento da clinica — do primeiro contato ate o fechamento do procedimento"
      />

      <h3 className="sub-title">Os 4 modulos do sistema</h3>
      <div className="module-group-grid">
        {modules.map((m, i) => <ModuleGroupCard key={i} {...m} />)}
      </div>

      <h3 className="sub-title">O que muda (Antes x Depois)</h3>
      <div className="compare-grid">
        <div className="compare-before">
          <h4>Antes</h4>
          <ul>{compareData.before.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>
        <div className="compare-after">
          <h4>Depois</h4>
          <ul>{compareData.after.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>
      </div>

      <div className="highlight-box">
        <p><strong>Resultado esperado:</strong> Com resposta instantanea 24/7 e follow-up automatizado, a estimativa conservadora e converter de 1% para 3-5% dos leads — representando um aumento de R$ 15.000 a R$ 45.000/mes em faturamento adicional.</p>
      </div>

      <h3 className="sub-title">Personalidade e comunicacao da IA</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Aspecto</th><th>Definicao</th></tr></thead>
          <tbody>
            {personality.map((p, i) => (
              <tr key={i}><td className="td-label">{p.label}</td><td>{p.value}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="sub-title">O que a IA FAZ e NAO FAZ</h3>
      <div className="compare-grid">
        <div className="compare-after">
          <h4>A IA FAZ</h4>
          <ul>
            <li>Responde instantaneamente a qualquer horario</li>
            <li>Identifica a dor/desejo do paciente</li>
            <li>Explica procedimentos com conhecimento tecnico</li>
            <li>Envia fotos antes/depois contextualizadas</li>
            <li>Envia depoimentos de pacientes</li>
            <li>Explica condicoes de pagamento</li>
            <li>Conduz para agendamento de avaliacao</li>
            <li>Faz follow-up automatizado</li>
            <li>Responde e envia audio</li>
          </ul>
        </div>
        <div className="compare-before">
          <h4>A IA NAO FAZ</h4>
          <ul>
            <li>Nao da diagnostico</li>
            <li>Nao realiza pagamento (passa para humano)</li>
            <li>Nao atende pos-procedimento</li>
            <li>Nao atende reclamacoes</li>
            <li>Nao omite que e IA se perguntada</li>
            <li>Nao pressiona com urgencia agressiva</li>
            <li>Nao fala preco antes de construir valor</li>
          </ul>
        </div>
      </div>

      <h3 className="sub-title">Follow-up automatizado</h3>
      <p style={{ marginBottom: 16, color: '#666' }}>Quando o lead para de responder, a IA segue um processo de reativacao humanizado:</p>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Timing</th><th>Abordagem</th></tr></thead>
          <tbody>
            {followUp.map((f, i) => (
              <tr key={i}><td className="td-label">{f.timing}</td><td>{f.approach}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rule-box">
        <strong>Regra:</strong> Nunca enviar a mesma mensagem duas vezes. Sempre chamar pelo nome e retomar a dor especifica do paciente. Alternar formatos: audio, texto, foto.
      </div>

      <h3 className="sub-title">Escalacao para humano</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Situacao</th><th>Acao da IA</th></tr></thead>
          <tbody>
            {escalation.map((e, i) => (
              <tr key={i}><td className="td-label">{e.situation}</td><td>{e.action}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="sub-title">Pipeline visual (Kanban)</h3>
      <div className="pipeline-flow">
        {pipelineSteps.map((step, i) => (
          <div className="pipeline-item" key={i}>
            <div className={`pipeline-step ${['purple', 'blue', 'green', 'yellow', 'red'][i]}`}>
              <h5>{step.name}</h5>
              <p>{step.desc}</p>
            </div>
            {i < pipelineSteps.length - 1 && <span className="pipeline-arrow">&rarr;</span>}
          </div>
        ))}
      </div>

      <h3 className="sub-title">Metricas do Dashboard</h3>
      <div className="dashboard-grid">
        {dashboardMetrics.map((m, i) => (
          <div className="dashboard-card" key={i}>
            <div className="dashboard-card-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9c46e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <div>
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="sub-title">Permissoes de acesso</h3>
      <div className="profile-grid">
        <div className="profile-card admin">
          <div className="profile-role">Admin</div>
          <h4>Anderson Romanin</h4>
          <p>Gestor comercial e administrativo</p>
          <ul>
            <li>Dashboard completo</li>
            <li>Metricas e relatorios</li>
            <li>Conversas e configuracoes</li>
          </ul>
        </div>
        <div className="profile-card admin">
          <div className="profile-role">Admin</div>
          <h4>Dra. Renata Souza</h4>
          <p>Especialista em harmonizacao facial</p>
          <ul>
            <li>Acesso completo</li>
            <li>Validacao do playbook da IA</li>
          </ul>
        </div>
        <div className="profile-card operational">
          <div className="profile-role">Operacional</div>
          <h4>Atendente Comercial</h4>
          <p>Atendimento quando escalado pela IA</p>
          <ul>
            <li>Visualizacao de conversas</li>
            <li>Intervencao manual</li>
            <li>Sem acesso a configuracoes</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
