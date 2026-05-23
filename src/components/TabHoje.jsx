import { PageHeader, SectionHero } from './Logo'

const tools = [
  { abbr: 'IG', color: '#9c46e0', name: 'Instagram (2 perfis)', desc: 'Captação de leads via tráfego pago e orgânico. Gera 20 a 30 leads por dia (~600+ por mês). Um perfil direciona para WhatsApp, outro fica no Instagram DM para captação de pacientes-modelo para cursos.' },
  { abbr: 'WA', color: '#25D366', name: 'WhatsApp Comercial', desc: '1 número para todo o comercial. Atendente (1 pessoa) conduz vendas seguindo orientações da Dra. Renata. Horário 8h-17h30. Problema: demora nas respostas causa 70% de perda por tempo de espera.' },
  { abbr: 'WA', color: '#374151', name: 'WhatsApp Técnico', desc: 'Número separado para pós-procedimento e suporte clínico. Atendimento humano exclusivo com a Lívia. Não será automatizado — IA é exclusivamente comercial.' },
  { abbr: 'CRM', color: '#607cf9', name: 'CRM (atual)', desc: 'Registro de leads e follow-up. Usado para retornar a leads frios, mas follow-up é inconsistente — não é feito com constância.' },
  { abbr: 'S', color: '#543285', name: 'Santé', desc: 'Sistema proprietário de agendamento de clínicas. Verificar se possui API para integração. Se não, Google Calendar será fonte primária.' },
  { abbr: '$', color: '#b45309', name: 'Banco Infinity', desc: 'Maquininha de pagamento. Verificar integração para link de pagamento via API. Alternativa: Mercado Pago ou Asaas.' },
]

const painPoints = [
  { title: 'Demora na resposta', desc: 'Leads ficam horas esperando resposta. 70% dos pacientes são perdidos por tempo de espera — procuram outra clínica.', icon: 'clock' },
  { title: 'Conversão menor que 1%', desc: 'Dos 600+ leads mensais, menos de 1% converte. Perda estimada de R$ 15.000/mês (mínimo 3 vendas de R$ 5K que não acontecem).', icon: 'x-circle' },
  { title: 'Turnover no comercial', desc: 'Ciclo repetitivo: treina atendente, fica bom, sai. Recomeça do zero a cada vez, sem retenção de conhecimento na empresa.', icon: 'user-minus' },
  { title: 'Abordagem sem persuasão', desc: 'Atendimento funciona como "tirada de pedido" — o paciente já queria, não houve venda construída. Sem playbook estruturado.', icon: 'file-minus' },
  { title: 'Expertise concentrada', desc: 'Quando a Dra. Renata atende pessoalmente, 80% agendam. Quando é a atendente, cai drasticamente. Impossível escalar sem transferir esse conhecimento.', icon: 'lock' },
  { title: 'Follow-up inconsistente', desc: 'Leads frios não são reativados sistematicamente. Sem processo automatizado, leads que não fecham na primeira conversa se perdem.', icon: 'alert-triangle' },
]

const clientJourney = [
  { title: 'Lead vê anúncio no Instagram', desc: 'Lead vê anúncio de rinomodelação ou harmonização facial (95% tráfego pago). Clica e é direcionado para WhatsApp da clínica ou fica no Instagram DM.' },
  { title: 'Atendente recebe a mensagem', desc: 'Atendente comercial (1 pessoa, 8h-17h30) recebe a mensagem. Identifica a dor do paciente — giba, ponta do nariz, olheira, lábios, botox.' },
  { title: 'Envia fotos e explica benefícios', desc: 'Envia fotos de antes/depois similares ao caso do paciente. Explica benefícios e especialidades da Dra. Renata. Conduz para agendamento de avaliação.' },
  { title: 'Pagamento da avaliação', desc: 'Paciente paga avaliação (R$ 350) — só entra na agenda após pagamento. Recebe formulário de pré-cadastro (anamnese via sistema jurídico).' },
  { title: 'Lembrete e avaliação', desc: 'Lembrete 1 dia antes (até 9h) + confirmação às 17h30. Avaliação com Dra. Renata — presencial inclui avatar facial (simulação), online não.' },
  { title: 'Fechamento', desc: 'Fechamento do procedimento e agendamento da cirurgia/procedimento. Taxa de conversão presencial: ~90% após a avaliação.' },
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
      <PageHeader tag="Cenário atual (AS-IS)" />

      <SectionHero
        title="Como funciona o atendimento hoje"
        description="Ferramentas, processos, gargalos e a jornada completa do paciente — do anúncio até a avaliação com a Dra. Renata"
        style={{ background: 'linear-gradient(135deg, #543285 0%, #9c46e0 50%, #607cf9 100%)' }}
      />

      <div className="metric-row">
        <MetricCard num="600+" label="leads/mês" />
        <MetricCard num="<1%" label="conversão atual" />
        <MetricCard num="70%" label="perdidos por demora" />
        <MetricCard num="R$250k" label="faturamento/mes" />
      </div>

      <h3 className="sub-title">As ferramentas de hoje</h3>
      <p style={{ marginBottom: 16, color: '#666' }}>Cada parte do processo mora num lugar diferente. O atendimento depende de 1 pessoa no horário comercial.</p>

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
      <p style={{ marginBottom: 16, color: '#666' }}>Do anúncio no Instagram até o fechamento do procedimento — cada etapa com seus gargalos:</p>
      <div className="journey-steps">
        {clientJourney.map((step, i) => (
          <JourneyStep key={i} num={i + 1} {...step} />
        ))}
      </div>

      <div className="highlight-box">
        <p>
          <strong>Resumo:</strong> A clínica recebe 600+ leads por mês, mas perde a maioria por demora na resposta e falta de follow-up. O conhecimento comercial está concentrado na Dra. Renata — quando ela atende, 80% agendam; quando é a atendente, a conversão cai drasticamente. O atendimento só funciona no horário comercial (8h-17h30) e não existe processo automatizado de reativação de leads frios.
        </p>
      </div>
    </section>
  )
}
