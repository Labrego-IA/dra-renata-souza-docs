import { PageHeader, SectionHero } from './Logo'

const tools = [
  { abbr: 'IG', color: '#9c46e0', name: 'Instagram (2 perfis)', desc: 'Captacao de leads via trafego pago e organico. Gera 20 a 30 leads por dia (~600+ por mes). Um perfil direciona para WhatsApp, outro fica no Instagram DM para captacao de pacientes-modelo para cursos.' },
  { abbr: 'WA', color: '#25D366', name: 'WhatsApp Comercial', desc: '1 numero para todo o comercial. Atendente (1 pessoa) conduz vendas seguindo orientacoes da Dra. Renata. Horario 8h-17h30. Problema: demora nas respostas causa 70% de perda por tempo de espera.' },
  { abbr: 'WA', color: '#374151', name: 'WhatsApp Tecnico', desc: 'Numero separado para pos-procedimento e suporte clinico. Atendimento humano exclusivo com a Livia. Nao sera automatizado — IA e exclusivamente comercial.' },
  { abbr: 'CRM', color: '#607cf9', name: 'CRM (atual)', desc: 'Registro de leads e follow-up. Usado para retornar a leads frios, mas follow-up e inconsistente — nao e feito com constancia.' },
  { abbr: 'S', color: '#543285', name: 'Sante', desc: 'Sistema proprietario de agendamento de clinicas. Verificar se possui API para integracao. Se nao, Google Calendar sera fonte primaria.' },
  { abbr: '$', color: '#b45309', name: 'Banco Infinity', desc: 'Maquininha de pagamento. Verificar integracao para link de pagamento via API. Alternativa: Mercado Pago ou Asaas.' },
]

const painPoints = [
  { title: 'Demora na resposta', desc: 'Leads ficam horas esperando resposta. 70% dos pacientes sao perdidos por tempo de espera — procuram outra clinica.', icon: 'clock' },
  { title: 'Conversao menor que 1%', desc: 'Dos 600+ leads mensais, menos de 1% converte. Perda estimada de R$ 15.000/mes (minimo 3 vendas de R$ 5K que nao acontecem).', icon: 'x-circle' },
  { title: 'Turnover no comercial', desc: 'Ciclo repetitivo: treina atendente, fica bom, sai. Recomeca do zero a cada vez, sem retencao de conhecimento na empresa.', icon: 'user-minus' },
  { title: 'Abordagem sem persuasao', desc: 'Atendimento funciona como "tirada de pedido" — o paciente ja queria, nao houve venda construida. Sem playbook estruturado.', icon: 'file-minus' },
  { title: 'Expertise concentrada', desc: 'Quando a Dra. Renata atende pessoalmente, 80% agendam. Quando e a atendente, cai drasticamente. Impossivel escalar sem transferir esse conhecimento.', icon: 'lock' },
  { title: 'Follow-up inconsistente', desc: 'Leads frios nao sao reativados sistematicamente. Sem processo automatizado, leads que nao fecham na primeira conversa se perdem.', icon: 'alert-triangle' },
]

const clientJourney = [
  { title: 'Lead ve anuncio no Instagram', desc: 'Lead ve anuncio de rinomodelacao ou harmonizacao facial (95% trafego pago). Clica e e direcionado para WhatsApp da clinica ou fica no Instagram DM.' },
  { title: 'Atendente recebe a mensagem', desc: 'Atendente comercial (1 pessoa, 8h-17h30) recebe a mensagem. Identifica a dor do paciente — giba, ponta do nariz, olheira, labios, botox.' },
  { title: 'Envia fotos e explica beneficios', desc: 'Envia fotos de antes/depois similares ao caso do paciente. Explica beneficios e especialidades da Dra. Renata. Conduz para agendamento de avaliacao.' },
  { title: 'Pagamento da avaliacao', desc: 'Paciente paga avaliacao (R$ 350) — so entra na agenda apos pagamento. Recebe formulario de pre-cadastro (anamnese via sistema juridico).' },
  { title: 'Lembrete e avaliacao', desc: 'Lembrete 1 dia antes (ate 9h) + confirmacao as 17h30. Avaliacao com Dra. Renata — presencial inclui avatar facial (simulacao), online nao.' },
  { title: 'Fechamento', desc: 'Fechamento do procedimento e agendamento da cirurgia/procedimento. Taxa de conversao presencial: ~90% apos a avaliacao.' },
]

const icons = {
  'x-circle': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#9c46e0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="8" />
      <line x1="7" y1="7" x2="13" y2="13" />
      <line x1="13" y1="7" x2="7" y2="13" />
    </svg>
  ),
  'clock': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#9c46e0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10" cy="10" r="8" />
      <polyline points="10,5 10,10 13.5,12.5" />
    </svg>
  ),
  'user-minus': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#9c46e0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11c-2.5 0-7 1.25-7 3.75V17h14v-2.25C16 12.25 11.5 11 9 11z" />
      <circle cx="9" cy="6" r="3.5" />
      <line x1="13" y1="7" x2="19" y2="7" />
    </svg>
  ),
  'file-minus': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#9c46e0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2H5a1.5 1.5 0 0 0-1.5 1.5v13A1.5 1.5 0 0 0 5 18h10a1.5 1.5 0 0 0 1.5-1.5V7.5L12 2z" />
      <polyline points="12,2 12,7.5 16.5,7.5" />
      <line x1="7" y1="12" x2="13" y2="12" />
    </svg>
  ),
  'lock': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#9c46e0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="9" width="12" height="9" rx="1.5" ry="1.5" />
      <path d="M7 9V6.5a3 3 0 0 1 6 0V9" />
      <circle cx="10" cy="14" r="1" fill="#9c46e0" stroke="none" />
    </svg>
  ),
  'alert-triangle': (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#9c46e0" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2.5L1.5 17h17L10 2.5z" />
      <line x1="10" y1="8.5" x2="10" y2="12.5" />
      <circle cx="10" cy="15" r="0.75" fill="#9c46e0" stroke="none" />
    </svg>
  ),
}

function MetricCard({ num, label }) {
  return (
    <div className="metric-card">
      <div className="metric-num">{num}</div>
      <div className="metric-label">{label}</div>
    </div>
  )
}

function ToolCard({ abbr, color, name, desc }) {
  return (
    <div className="tool-card">
      <div className="tool-card-icon" style={{ background: color }}>{abbr}</div>
      <div className="tool-card-body">
        <h4>{name}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

function PainCard({ title, desc, icon }) {
  return (
    <div className="pain-card">
      <div className="pain-icon-box">{icons[icon]}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  )
}

function JourneyStep({ num, title, desc }) {
  return (
    <div className="journey-step">
      <div className="journey-step-num">{num}</div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default function TabHoje() {
  return (
    <section className="page">
      <PageHeader tag="Cenario atual (AS-IS)" />

      <SectionHero
        title="Como funciona o atendimento hoje"
        description="Ferramentas, processos, gargalos e a jornada completa do paciente — do anuncio ate a avaliacao com a Dra. Renata"
        style={{ background: 'linear-gradient(135deg, #543285 0%, #9c46e0 50%, #607cf9 100%)' }}
      />

      <div className="metric-row">
        <MetricCard num="600+" label="leads/mes" />
        <MetricCard num="<1%" label="conversao atual" />
        <MetricCard num="70%" label="perdidos por demora" />
        <MetricCard num="R$250k" label="faturamento/mes" />
      </div>

      <h3 className="sub-title">As ferramentas de hoje</h3>
      <p style={{ marginBottom: 16, color: '#666' }}>Cada parte do processo mora num lugar diferente. O atendimento depende de 1 pessoa no horario comercial.</p>

      <div className="tool-cards-grid">
        {tools.map((tool, i) => (
          <ToolCard key={i} {...tool} />
        ))}
      </div>

      <h3 className="sub-title">Os gargalos identificados</h3>
      <div className="pain-cards-grid">
        {painPoints.map((p, i) => (
          <PainCard key={i} {...p} />
        ))}
      </div>

      <h3 className="sub-title">A jornada do paciente hoje</h3>
      <p style={{ marginBottom: 16, color: '#666' }}>Do anuncio no Instagram ate o fechamento do procedimento — cada etapa com seus gargalos:</p>
      <div className="journey-steps">
        {clientJourney.map((step, i) => (
          <JourneyStep key={i} num={i + 1} {...step} />
        ))}
      </div>

      <div className="highlight-box">
        <p>
          <strong>Resumo:</strong> A clinica recebe 600+ leads por mes, mas perde a maioria por demora na resposta e falta de follow-up. O conhecimento comercial esta concentrado na Dra. Renata — quando ela atende, 80% agendam; quando e a atendente, a conversao cai drasticamente. O atendimento so funciona no horario comercial (8h-17h30) e nao existe processo automatizado de reativacao de leads frios.
        </p>
      </div>
    </section>
  )
}
