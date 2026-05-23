import { PageHeader, SectionHero } from './Logo'

const integrations = [
  {
    name: 'WhatsApp Business API',
    status: 'Definido',
    statusColor: '#16a34a',
    desc: 'API oficial via provedor homologado (Z-API, Evolution API ou similar). Envio e recebimento de texto e audio.',
    details: 'Numero unico para comercial. WhatsApp tecnico (Livia) permanece separado e manual.',
  },
  {
    name: 'Google Calendar',
    status: 'Definido',
    statusColor: '#16a34a',
    desc: 'Fonte primaria de agendamento. Lembretes automaticos: 1 dia antes (ate 9h) + reconfirmacao 17h30.',
    details: 'Avaliacao so entra na agenda apos pagamento (R$ 350).',
  },
  {
    name: 'Sante (clinica)',
    status: 'A verificar',
    statusColor: '#d97706',
    desc: 'Sistema proprietario de agendamento de clinicas. Verificar se possui API para integracao.',
    details: 'Se nao tiver API, Google Calendar sera fonte unica. Verificar possibilidade de webhook ou sync.',
  },
  {
    name: 'Banco Infinity',
    status: 'A verificar',
    statusColor: '#d97706',
    desc: 'Maquininha de pagamento. Verificar integracao para link de pagamento via API.',
    details: 'Alternativas: Mercado Pago ou Asaas para gerar link de pagamento automatico.',
  },
  {
    name: 'Storage (fotos/depoimentos)',
    status: 'Definido',
    statusColor: '#16a34a',
    desc: 'Banco organizado de fotos antes/depois e depoimentos, indexado por procedimento e queixa.',
    details: 'Selecao automatica do caso mais similar ao paciente. Maximo 2-3 fotos por conversa.',
  },
]

const businessRules = [
  { rule: 'Preco so apos construir valor', desc: 'A IA nunca revela preco de cara. Primeiro entende a dor, envia provas sociais, explica beneficios — so depois aborda valores.' },
  { rule: 'Atendimento 24/7', desc: 'A IA responde instantaneamente a qualquer horario. Atendente humana opera 8h-17h30 para escalacoes.' },
  { rule: 'Transparencia sobre IA', desc: 'A IA nao menciona ser IA proativamente, mas se perguntada, responde honestamente. Nunca mente.' },
  { rule: 'Urgencia sutil, nunca pressao', desc: 'Para procedimentos de ticket alto (rino): gerar desejo, nao pressionar. Sem urgencia agressiva.' },
  { rule: 'Avaliacao paga (R$ 350)', desc: 'Paciente so entra na agenda apos pagamento da avaliacao. Formulario de pre-cadastro enviado automaticamente.' },
  { rule: 'Emojis proibidos', desc: 'Decisao firme do cliente: a IA nao usa emojis em nenhuma comunicacao.' },
  { rule: 'Tratamento pelo nome', desc: 'Sempre chamar paciente pelo nome, varias vezes na conversa. Nunca senhor/senhora.' },
  { rule: 'Follow-up nunca repetitivo', desc: 'Nunca enviar a mesma mensagem duas vezes. Alternar formatos: audio, texto, foto. Retomar a dor especifica.' },
]

const checklistAlta = [
  'Fotos antes/depois organizadas por procedimento (rino, botox, full face, labios, olheira)',
  'Depoimentos de pacientes gravados e/ou transcritos',
  'Playbook comercial completo da Dra. Renata (objecoes, argumentos, fluxo de venda)',
  'Tabela de precos e condicoes de pagamento atualizadas',
  'Acesso ao WhatsApp Business (numero comercial)',
  'Credenciais Google Calendar da clinica',
]

const checklistMedia = [
  'Logo e identidade visual da clinica em alta resolucao',
  'FAQ de procedimentos (perguntas mais frequentes dos pacientes)',
  'Lista de procedimentos com descricao tecnica simplificada',
  'Formulario de pre-cadastro/anamnese (modelo atual)',
  'Contato da Livia (WhatsApp tecnico) para escalacao',
  'Acesso ao Sante para verificar API',
]

const decisions = [
  { decision: 'Apenas 1 canal: WhatsApp comercial', detail: 'IA atuara exclusivamente no WhatsApp comercial. Instagram DM e WhatsApp tecnico ficam fora do escopo.' },
  { decision: 'Audio habilitado', detail: 'IA envia e recebe audio. Se paciente mandar audio, responde com audio.' },
  { decision: 'Avaliacao presencial como preferencia', detail: 'Presencial inclui avatar facial (simulacao). Online nao inclui.' },
  { decision: 'Sem emojis', detail: 'Anderson e Renata definiram: comunicacao sem emojis.' },
  { decision: 'Tom semi-formal', detail: 'Meio-termo: nem robotico, nem informal com girias.' },
  { decision: 'Follow-up ate 60 dias', detail: 'Apos 60 dias sem resposta, lead e encerrado com mensagem de finalizacao.' },
  { decision: 'Prova social contextualizada', detail: 'Fotos enviadas APOS entender a dor, nunca no inicio. Maximo 2-3 por conversa.' },
  { decision: 'Escalacao para Livia', detail: 'Pos-procedimento e reclamacoes vao para o WhatsApp da Livia (equipe tecnica).' },
  { decision: 'Pagamento = humano', detail: 'Fechamento de pagamento sempre transferido para atendente humano.' },
  { decision: 'Nome da IA a definir', detail: 'Anderson e Renata vao escolher o nome. IA se apresenta pelo nome escolhido.' },
  { decision: 'Multi-usuario no mesmo numero', detail: 'Varios atendentes podem intervir no mesmo numero WhatsApp via plataforma.' },
]

const pendingDecisions = [
  { item: 'Integracao com Sante', detail: 'Verificar se o sistema possui API. Impacta o fluxo de agendamento.' },
  { item: 'Gateway de pagamento', detail: 'Banco Infinity ou alternativa (Mercado Pago/Asaas). Impacta link de pagamento automatico.' },
  { item: 'Nome da IA', detail: 'Anderson e Renata vao definir. Precisa estar pronto antes do go-live.' },
  { item: 'Formulario de anamnese', detail: 'Verificar integracao com sistema juridico atual de pre-cadastro.' },
  { item: 'Modelo de LLM', detail: 'Definir entre GPT-4o, Claude ou modelo otimizado para custo vs qualidade.' },
  { item: 'Politica de privacidade', detail: 'Adequacao LGPD para armazenamento de dados de saude e conversas.' },
]

const risks = [
  { risk: 'Sante sem API', prob: 'Media', impact: 'Alto', mitigation: 'Google Calendar como fallback unico. Sync manual se necessario.' },
  { risk: 'Qualidade do audio IA', prob: 'Media', impact: 'Alto', mitigation: 'Testes extensivos. TTS com voz natural, validacao com equipe.' },
  { risk: 'Rejeicao da IA por pacientes', prob: 'Baixa', impact: 'Medio', mitigation: 'Tom humanizado, escalacao rapida para humano. Nome proprio (nao "robo").' },
  { risk: 'Custo de API elevado', prob: 'Baixa', impact: 'Medio', mitigation: 'Monitoramento de uso. Cache de respostas frequentes. Modelo otimizado.' },
  { risk: 'Turnover comercial (recorrente)', prob: 'Alta', impact: 'Baixo', mitigation: 'IA absorve o conhecimento — turnover nao impacta mais a qualidade.' },
  { risk: 'Integracao de pagamento', prob: 'Media', impact: 'Medio', mitigation: 'MVP com link manual. Automatizacao na fase 2 apos validacao.' },
  { risk: 'Dados sensiveis (LGPD)', prob: 'Baixa', impact: 'Alto', mitigation: 'Criptografia, politica de retencao, consentimento explicito.' },
  { risk: 'Volume alto de leads (600+/mes)', prob: 'Alta', impact: 'Baixo', mitigation: 'Arquitetura escalavel desde o inicio. Rate limiting por conversa.' },
]

const apiCosts = [
  { item: 'WhatsApp Business API', range: 'R$ 200 - 500/mes', note: 'Depende do volume de mensagens e provedor' },
  { item: 'LLM (GPT-4o ou similar)', range: 'R$ 300 - 800/mes', note: 'Baseado em ~600 conversas/mes com media de 15 mensagens' },
  { item: 'TTS/STT (audio)', range: 'R$ 100 - 300/mes', note: 'Whisper + TTS para envio e recebimento de audio' },
  { item: 'Infraestrutura (hosting)', range: 'R$ 100 - 200/mes', note: 'Servidor, banco de dados, storage de midias' },
  { item: 'Google Calendar API', range: 'Gratuito', note: 'Dentro da cota gratuita do Google Workspace' },
]

const investmentData = {
  oneTime: {
    total: 'R$ 22.610',
    items: [
      { item: 'Mapeamento e briefing', value: 'R$ 2.500' },
      { item: 'Desenvolvimento do Agente IA', value: 'R$ 9.000' },
      { item: 'CRM + Dashboard', value: 'R$ 5.500' },
      { item: 'Integracoes (WhatsApp, Calendar, Storage)', value: 'R$ 3.610' },
      { item: 'Testes, ajustes e go-live', value: 'R$ 2.000' },
    ],
  },
  monthly: [
    { plan: 'Essencial', value: 'R$ 999/mes', desc: 'Manutencao, monitoramento, ajustes pontuais, suporte por email' },
    { plan: 'Profissional', value: 'R$ 1.499/mes', desc: 'Essencial + otimizacoes mensais, relatorios, suporte prioritario' },
    { plan: 'Premium', value: 'R$ 1.999/mes', desc: 'Profissional + consultoria estrategica, novas features, suporte dedicado' },
  ],
}

export default function TabSpec() {
  return (
    <section className="page">
      <PageHeader tag="Referencia Tecnica" />

      <SectionHero
        title="Especificacao tecnica e regras de negocio"
        description="Integracoes, decisoes, checklist de materiais, riscos e investimento — tudo que define o projeto tecnicamente"
      />

      <h3 className="sub-title">Integracoes do sistema</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead>
            <tr><th>Sistema</th><th>Status</th><th>Descricao</th><th>Observacao</th></tr>
          </thead>
          <tbody>
            {integrations.map((intg, i) => (
              <tr key={i}>
                <td className="td-label">{intg.name}</td>
                <td><span style={{ background: intg.statusColor, color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600 }}>{intg.status}</span></td>
                <td>{intg.desc}</td>
                <td style={{ fontSize: 13, color: '#666' }}>{intg.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="sub-title">Regras de negocio</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Regra</th><th>Detalhamento</th></tr></thead>
          <tbody>
            {businessRules.map((br, i) => (
              <tr key={i}><td className="td-label">{br.rule}</td><td>{br.desc}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="sub-title">Checklist de materiais</h3>
      <div className="compare-grid">
        <div className="compare-before" style={{ borderTopColor: '#dc2626' }}>
          <h4>Prioridade alta</h4>
          <ul>{checklistAlta.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>
        <div className="compare-after" style={{ borderTopColor: '#d97706' }}>
          <h4>Prioridade media</h4>
          <ul>{checklistMedia.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>
      </div>

      <h3 className="sub-title">Decisoes tomadas (briefing 20/mai)</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>#</th><th>Decisao</th><th>Detalhe</th></tr></thead>
          <tbody>
            {decisions.map((d, i) => (
              <tr key={i}>
                <td style={{ fontWeight: 700, color: '#9c46e0', textAlign: 'center' }}>{String(i + 1).padStart(2, '0')}</td>
                <td className="td-label">{d.decision}</td>
                <td>{d.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="sub-title">Decisoes pendentes</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Item</th><th>Detalhe</th></tr></thead>
          <tbody>
            {pendingDecisions.map((pd, i) => (
              <tr key={i}><td className="td-label">{pd.item}</td><td>{pd.detail}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="sub-title">Matriz de riscos</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Risco</th><th>Probabilidade</th><th>Impacto</th><th>Mitigacao</th></tr></thead>
          <tbody>
            {risks.map((r, i) => (
              <tr key={i}>
                <td className="td-label">{r.risk}</td>
                <td style={{ textAlign: 'center' }}>
                  <span style={{
                    background: r.prob === 'Alta' ? '#dc2626' : r.prob === 'Media' ? '#d97706' : '#16a34a',
                    color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600
                  }}>{r.prob}</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span style={{
                    background: r.impact === 'Alto' ? '#dc2626' : r.impact === 'Medio' ? '#d97706' : '#16a34a',
                    color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600
                  }}>{r.impact}</span>
                </td>
                <td>{r.mitigation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h3 className="sub-title">Estimativa de custos de API</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Servico</th><th>Custo estimado</th><th>Observacao</th></tr></thead>
          <tbody>
            {apiCosts.map((ac, i) => (
              <tr key={i}>
                <td className="td-label">{ac.item}</td>
                <td style={{ fontWeight: 600, color: '#9c46e0' }}>{ac.range}</td>
                <td style={{ fontSize: 13, color: '#666' }}>{ac.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rule-box">
        <strong>Custo total estimado de APIs:</strong> R$ 700 a R$ 1.800/mes — varia conforme volume de conversas e modelo de LLM escolhido. Custos reais serao detalhados apos definicao do provedor.
      </div>

      <h3 className="sub-title">Investimento</h3>
      <div className="compare-grid">
        <div className="compare-after">
          <h4>Implantacao (unico)</h4>
          <ul>
            {investmentData.oneTime.items.map((item, i) => (
              <li key={i}><strong>{item.item}:</strong> {item.value}</li>
            ))}
          </ul>
          <div style={{ marginTop: 16, padding: '12px 16px', background: '#f0ebff', borderRadius: 8, fontWeight: 700, fontSize: 18, color: '#543285', textAlign: 'center' }}>
            Total: {investmentData.oneTime.total}
          </div>
        </div>
        <div className="compare-before" style={{ borderTopColor: '#607cf9' }}>
          <h4>Suporte mensal (pos-implantacao)</h4>
          <ul>
            {investmentData.monthly.map((plan, i) => (
              <li key={i}><strong>{plan.plan} — {plan.value}:</strong> {plan.desc}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="highlight-box">
        <p><strong>Nota:</strong> Custos de API (WhatsApp, LLM, audio) sao cobrados separadamente e variam conforme o uso. Estimativa mensal: R$ 700 a R$ 1.800. Detalhamento final apos definicao dos provedores.</p>
      </div>
    </section>
  )
}
