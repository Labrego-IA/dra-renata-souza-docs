import { PageHeader, SectionHero } from './Logo'

const integrations = [
  {
    name: 'WhatsApp Business API',
    status: 'Definido',
    statusColor: '#16a34a',
    desc: 'API oficial via provedor homologado (Z-API, Evolution API ou similar). Envio e recebimento de texto e áudio.',
    details: 'Número único para comercial. WhatsApp técnico (Lívia) permanece separado e manual.',
  },
  {
    name: 'Google Calendar',
    status: 'Definido',
    statusColor: '#16a34a',
    desc: 'Fonte primária de agendamento. Lembretes automáticos: 1 dia antes (até 9h) + reconfirmação 17h30.',
    details: 'Avaliação só entra na agenda após pagamento (R$ 350).',
  },
  {
    name: 'Santé (clínica)',
    status: 'A verificar',
    statusColor: '#d97706',
    desc: 'Sistema proprietário de agendamento de clínicas. Verificar se possui API para integração.',
    details: 'Se não tiver API, Google Calendar será fonte única. Verificar possibilidade de webhook ou sync.',
  },
  {
    name: 'Banco Infinity',
    status: 'A verificar',
    statusColor: '#d97706',
    desc: 'Maquininha de pagamento. Verificar integração para link de pagamento via API.',
    details: 'Alternativas: Mercado Pago ou Asaas para gerar link de pagamento automático.',
  },
  {
    name: 'Storage (fotos/depoimentos)',
    status: 'Definido',
    statusColor: '#16a34a',
    desc: 'Banco organizado de fotos antes/depois e depoimentos, indexado por procedimento e queixa.',
    details: 'Seleção automática do caso mais similar ao paciente. Máximo 2-3 fotos por conversa.',
  },
]

const businessRules = [
  { rule: 'Preço só após construir valor', desc: 'A IA nunca revela preço de cara. Primeiro entende a dor, envia provas sociais, explica benefícios — só depois aborda valores.' },
  { rule: 'Atendimento 24/7', desc: 'A IA responde instantaneamente a qualquer horário. Atendente humana opera 8h-17h30 para escalações.' },
  { rule: 'Transparência sobre IA', desc: 'A IA não menciona ser IA proativamente, mas se perguntada, responde honestamente. Nunca mente.' },
  { rule: 'Urgência sutil, nunca pressão', desc: 'Para procedimentos de ticket alto (rino): gerar desejo, não pressionar. Sem urgência agressiva.' },
  { rule: 'Avaliação paga (R$ 350)', desc: 'Paciente só entra na agenda após pagamento da avaliação. Formulário de pré-cadastro enviado automaticamente.' },
  { rule: 'Emojis proibidos', desc: 'Decisão firme do cliente: a IA não usa emojis em nenhuma comunicação.' },
  { rule: 'Tratamento pelo nome', desc: 'Sempre chamar paciente pelo nome, várias vezes na conversa. Nunca senhor/senhora.' },
  { rule: 'Follow-up nunca repetitivo', desc: 'Nunca enviar a mesma mensagem duas vezes. Alternar formatos: áudio, texto, foto. Retomar a dor específica.' },
]

const checklistAlta = [
  'Fotos antes/depois organizadas por procedimento (rino, botox, full face, lábios, olheira)',
  'Depoimentos de pacientes gravados e/ou transcritos',
  'Playbook comercial completo da Dra. Renata (objeções, argumentos, fluxo de venda)',
  'Tabela de preços e condições de pagamento atualizadas',
  'Acesso ao WhatsApp Business (número comercial)',
  'Credenciais Google Calendar da clínica',
]

const checklistMedia = [
  'Logo e identidade visual da clínica em alta resolução',
  'FAQ de procedimentos (perguntas mais frequentes dos pacientes)',
  'Lista de procedimentos com descrição técnica simplificada',
  'Formulário de pré-cadastro/anamnese (modelo atual)',
  'Contato da Lívia (WhatsApp técnico) para escalação',
  'Acesso ao Santé para verificar API',
]

const decisions = [
  { decision: 'Apenas 1 canal: WhatsApp comercial', detail: 'IA atuará exclusivamente no WhatsApp comercial. Instagram DM e WhatsApp técnico ficam fora do escopo.' },
  { decision: 'Áudio habilitado', detail: 'IA envia e recebe áudio. Se paciente mandar áudio, responde com áudio.' },
  { decision: 'Avaliação presencial como preferência', detail: 'Presencial inclui avatar facial (simulação). Online não inclui.' },
  { decision: 'Sem emojis', detail: 'Anderson e Renata definiram: comunicação sem emojis.' },
  { decision: 'Tom semi-formal', detail: 'Meio-termo: nem robótico, nem informal com gírias.' },
  { decision: 'Follow-up até 60 dias', detail: 'Após 60 dias sem resposta, lead é encerrado com mensagem de finalização.' },
  { decision: 'Prova social contextualizada', detail: 'Fotos enviadas APÓS entender a dor, nunca no início. Máximo 2-3 por conversa.' },
  { decision: 'Escalação para Lívia', detail: 'Pós-procedimento e reclamações vão para o WhatsApp da Lívia (equipe técnica).' },
  { decision: 'Pagamento = humano', detail: 'Fechamento de pagamento sempre transferido para atendente humano.' },
  { decision: 'Nome da IA a definir', detail: 'Anderson e Renata vão escolher o nome. IA se apresenta pelo nome escolhido.' },
  { decision: 'Multi-usuário no mesmo número', detail: 'Vários atendentes podem intervir no mesmo número WhatsApp via plataforma.' },
]

const pendingDecisions = [
  { item: 'Integração com Santé', detail: 'Verificar se o sistema possui API. Impacta o fluxo de agendamento.' },
  { item: 'Gateway de pagamento', detail: 'Banco Infinity ou alternativa (Mercado Pago/Asaas). Impacta link de pagamento automático.' },
  { item: 'Nome da IA', detail: 'Anderson e Renata vão definir. Precisa estar pronto antes do go-live.' },
  { item: 'Formulário de anamnese', detail: 'Verificar integração com sistema jurídico atual de pré-cadastro.' },
  { item: 'Modelo de LLM', detail: 'Definir entre GPT-4o, Claude ou modelo otimizado para custo vs qualidade.' },
  { item: 'Política de privacidade', detail: 'Adequação LGPD para armazenamento de dados de saúde e conversas.' },
]

const risks = [
  { risk: 'Santé sem API', prob: 'Média', impact: 'Alto', mitigation: 'Google Calendar como fallback único. Sync manual se necessário.' },
  { risk: 'Qualidade do áudio IA', prob: 'Média', impact: 'Alto', mitigation: 'Testes extensivos. TTS com voz natural, validação com equipe.' },
  { risk: 'Rejeição da IA por pacientes', prob: 'Baixa', impact: 'Médio', mitigation: 'Tom humanizado, escalação rápida para humano. Nome próprio (não "robô").' },
  { risk: 'Custo de API elevado', prob: 'Baixa', impact: 'Médio', mitigation: 'Monitoramento de uso. Cache de respostas frequentes. Modelo otimizado.' },
  { risk: 'Turnover comercial (recorrente)', prob: 'Alta', impact: 'Baixo', mitigation: 'IA absorve o conhecimento — turnover não impacta mais a qualidade.' },
  { risk: 'Integração de pagamento', prob: 'Média', impact: 'Médio', mitigation: 'MVP com link manual. Automatização na fase 2 após validação.' },
  { risk: 'Dados sensíveis (LGPD)', prob: 'Baixa', impact: 'Alto', mitigation: 'Criptografia, política de retenção, consentimento explícito.' },
  { risk: 'Volume alto de leads (600+/mês)', prob: 'Alta', impact: 'Baixo', mitigation: 'Arquitetura escalável desde o início. Rate limiting por conversa.' },
]

const apiCosts = [
  { item: 'WhatsApp Business API', range: 'R$ 200 - 500/mês', note: 'Depende do volume de mensagens e provedor' },
  { item: 'LLM (GPT-4o ou similar)', range: 'R$ 300 - 800/mês', note: 'Baseado em ~600 conversas/mês com média de 15 mensagens' },
  { item: 'TTS/STT (áudio)', range: 'R$ 100 - 300/mês', note: 'Whisper + TTS para envio e recebimento de áudio' },
  { item: 'Infraestrutura (hosting)', range: 'R$ 100 - 200/mês', note: 'Servidor, banco de dados, storage de mídias' },
  { item: 'Google Calendar API', range: 'Gratuito', note: 'Dentro da cota gratuita do Google Workspace' },
]

const investmentData = {
  oneTime: {
    total: 'R$ 22.610',
    items: [
      { item: 'Mapeamento e briefing', value: 'R$ 2.500' },
      { item: 'Desenvolvimento do Agente IA', value: 'R$ 9.000' },
      { item: 'CRM + Dashboard', value: 'R$ 5.500' },
      { item: 'Integrações (WhatsApp, Calendar, Storage)', value: 'R$ 3.610' },
      { item: 'Testes, ajustes e go-live', value: 'R$ 2.000' },
    ],
  },
  monthly: [
    { plan: 'Essencial', value: 'R$ 999/mês', desc: 'Manutenção, monitoramento, ajustes pontuais, suporte por email' },
    { plan: 'Profissional', value: 'R$ 1.499/mês', desc: 'Essencial + otimizações mensais, relatórios, suporte prioritário' },
    { plan: 'Premium', value: 'R$ 1.999/mês', desc: 'Profissional + consultoria estratégica, novas features, suporte dedicado' },
  ],
}

export default function TabSpec() {
  return (
    <section className="page">
      <PageHeader tag="Referência Técnica" />

      <SectionHero
        title="Especificação técnica e regras de negócio"
        description="Integrações, decisões, checklist de materiais, riscos e investimento — tudo que define o projeto tecnicamente"
      />

      <h3 className="sub-title">Integrações do sistema</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead>
            <tr><th>Sistema</th><th>Status</th><th>Descrição</th><th>Observação</th></tr>
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

      <h3 className="sub-title">Regras de negócio</h3>
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
          <h4>Prioridade média</h4>
          <ul>{checklistMedia.map((item, i) => <li key={i}>{item}</li>)}</ul>
        </div>
      </div>

      <h3 className="sub-title">Decisões tomadas (briefing 20/mai)</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>#</th><th>Decisão</th><th>Detalhe</th></tr></thead>
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

      <h3 className="sub-title">Decisões pendentes</h3>
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
          <thead><tr><th>Risco</th><th>Probabilidade</th><th>Impacto</th><th>Mitigação</th></tr></thead>
          <tbody>
            {risks.map((r, i) => (
              <tr key={i}>
                <td className="td-label">{r.risk}</td>
                <td style={{ textAlign: 'center' }}>
                  <span style={{
                    background: r.prob === 'Alta' ? '#dc2626' : r.prob === 'Média' ? '#d97706' : '#16a34a',
                    color: '#fff', padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 600
                  }}>{r.prob}</span>
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span style={{
                    background: r.impact === 'Alto' ? '#dc2626' : r.impact === 'Médio' ? '#d97706' : '#16a34a',
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
          <thead><tr><th>Serviço</th><th>Custo estimado</th><th>Observação</th></tr></thead>
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
        <strong>Custo total estimado de APIs:</strong> R$ 700 a R$ 1.800/mês — varia conforme volume de conversas e modelo de LLM escolhido. Custos reais serão detalhados após definição do provedor.
      </div>

      <h3 className="sub-title">Investimento</h3>
      <div className="compare-grid">
        <div className="compare-after">
          <h4>Implantação (único)</h4>
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
          <h4>Suporte mensal (pós-implantação)</h4>
          <ul>
            {investmentData.monthly.map((plan, i) => (
              <li key={i}><strong>{plan.plan} — {plan.value}:</strong> {plan.desc}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="highlight-box">
        <p><strong>Nota:</strong> Custos de API (WhatsApp, LLM, áudio) são cobrados separadamente e variam conforme o uso. Estimativa mensal: R$ 700 a R$ 1.800. Detalhamento final após definição dos provedores.</p>
      </div>
    </section>
  )
}
