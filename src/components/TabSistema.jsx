import { PageHeader, SectionHero } from './Logo'

/* ================================================================
   DADOS — FLUXO DETALHADO DO AGENTE COMERCIAL IA
   ================================================================ */

const conversationFlow = [
  {
    etapa: 0,
    title: 'Recepção da mensagem',
    color: '#9c46e0',
    description: 'A IA recebe a mensagem do paciente via WhatsApp Business API e classifica o tipo de mídia antes de processar.',
    steps: [
      {
        passo: '0.1',
        title: 'Classificação do tipo de mídia',
        detail: 'O sistema identifica o formato recebido: texto, áudio, imagem, vídeo, sticker, documento ou localização.',
      },
      {
        passo: '0.2',
        title: 'Processamento por tipo',
        detail: 'Texto: processado diretamente pelo LLM. Áudio: convertido para texto via Speech-to-Text (Whisper/Deepgram) e depois processado. Imagem: a IA responde "Recebi sua foto! Vou analisar com a equipe." e notifica o atendente humano. Vídeo: mesmo tratamento de imagem. Sticker: ignorado silenciosamente, aguarda próxima mensagem do paciente.',
      },
      {
        passo: '0.3',
        title: 'Registro no banco de dados',
        detail: 'Toda mensagem recebida é salva: timestamp, tipo de mídia, conteúdo (ou transcrição), ID do contato, número de telefone.',
      },
    ],
    dataStored: ['timestamp da mensagem', 'tipo de mídia (texto/áudio/imagem/vídeo/sticker)', 'conteúdo original ou transcrição', 'telefone do remetente', 'ID único da conversa'],
    dialogExample: {
      context: 'Paciente envia um áudio de 30 segundos perguntando sobre rinomodelação',
      iaResponse: '"Oi, [Nome]! Entendi perfeitamente o que você falou. Você mencionou que tem uma insatisfação com o nariz, certo? Vou te explicar como funciona a rinomodelação aqui na clínica da Dra. Renata."',
      note: 'A IA transcreve o áudio internamente e responde por texto ou áudio, dependendo da preferência detectada do paciente.',
    },
  },
  {
    etapa: 1,
    title: 'Identificação do contato',
    color: '#607cf9',
    description: 'A IA verifica se o contato é novo ou se já existe no banco de dados, carregando o contexto completo do histórico anterior.',
    steps: [
      {
        passo: '1.1',
        title: 'Busca no banco de dados',
        detail: 'Consulta pelo número de telefone. Se encontrar registro, carrega: nome, procedimento de interesse, última interação, status no pipeline, histórico de conversas.',
      },
      {
        passo: '1.2',
        title: 'Contato novo',
        detail: 'Se não existir registro, cria um novo lead no pipeline com status "Novo Lead". Extrai o nome do perfil do WhatsApp (se disponível) ou pergunta na saudação.',
      },
      {
        passo: '1.3',
        title: 'Contato retornando',
        detail: 'Se for um retorno, a IA retoma a conversa com contexto: "Oi, [Nome]! Que bom te ver de volta. Da última vez conversamos sobre [procedimento]. Quer continuar de onde paramos?"',
      },
      {
        passo: '1.4',
        title: 'Classificação de origem',
        detail: 'A IA identifica de onde veio o lead: Instagram Ads (link com UTM), indicação, retorno espontâneo, ou campanha específica. Essa informação é salva para métricas.',
      },
    ],
    dataStored: ['nome completo do paciente', 'telefone', 'origem do lead (Instagram, indicação, orgânico)', 'status no pipeline (Novo Lead)', 'data e hora do primeiro contato', 'flag: novo vs retorno'],
    dialogExample: {
      context: 'Lead novo chega via link do Instagram Ads',
      iaResponse: '"Olá! Seja bem-vinda à clínica da Dra. Renata Souza, especialista em harmonização facial. Meu nome é [Nome da IA] e estou aqui para te ajudar. Qual o seu nome?"',
      note: 'A IA se apresenta pelo nome próprio, sem mencionar que é inteligência artificial. Só revela se perguntada diretamente.',
    },
  },
  {
    etapa: 2,
    title: 'Saudação e identificação da dor',
    color: '#543285',
    description: 'Após identificar o contato, a IA conduz uma conversa empática para entender qual é a queixa específica do paciente e qual procedimento é mais adequado.',
    steps: [
      {
        passo: '2.1',
        title: 'Saudação personalizada',
        detail: 'Cumprimentar pelo nome, de forma acolhedora e sem emojis. Tom semi-formal. Perguntar como pode ajudar.',
      },
      {
        passo: '2.2',
        title: 'Identificação do procedimento de interesse',
        detail: 'Perguntas abertas para entender o que o paciente busca: "O que te trouxe até a clínica?" ou "Qual é a sua principal preocupação estética?" — nunca perguntar de forma clínica.',
      },
      {
        passo: '2.3',
        title: 'Mapeamento da queixa específica',
        detail: 'Dentro do procedimento, identificar a dor exata. Para rinomodelação: giba, ponta caída, largura, assimetria, dorso. Para preenchimento: olheira funda, lábios finos, mento recuado. Para botox: rugas frontais, pés de galinha, entresobrancelha.',
      },
      {
        passo: '2.4',
        title: 'Histórico do paciente',
        detail: 'Perguntar se já fez algum procedimento antes, se já pesquisou sobre o assunto, se tem medo ou insegurança específica. Isso alimenta o contexto para personalizar o restante da conversa.',
      },
      {
        passo: '2.5',
        title: 'Classificação da temperatura do lead',
        detail: 'Com base nas respostas, a IA classifica internamente: QUENTE (quer agendar logo), MORNO (interessado mas tem dúvidas), FRIO (só pesquisando). Isso determina o ritmo da conversa.',
      },
    ],
    dataStored: ['procedimento de interesse principal', 'queixa específica (ex: giba, ponta, olheira)', 'se já fez procedimentos antes', 'nível de insegurança/medo', 'temperatura do lead (quente/morno/frio)', 'palavras-chave da dor do paciente'],
    dialogExample: {
      context: 'Paciente diz que quer "arrumar o nariz"',
      iaResponse: '"Que bom que você deu esse passo, [Nome]. A Dra. Renata é referência em rinomodelação aqui na região de Jundiaí. Me conta um pouquinho mais: o que mais te incomoda no seu nariz? É a ponta, o dorso, a largura, ou algo mais específico?"',
      note: 'A IA nunca oferece procedimentos de cara. Primeiro entende a dor, depois apresenta a solução. O nome do paciente é usado várias vezes ao longo da conversa.',
    },
  },
  {
    etapa: 3,
    title: 'Construção de valor e prova social',
    color: '#8b5cf6',
    description: 'Com a dor mapeada, a IA apresenta a expertise da Dra. Renata e envia provas sociais contextualizadas (fotos antes/depois e depoimentos) que são similares ao caso do paciente.',
    steps: [
      {
        passo: '3.1',
        title: 'Apresentação da especialidade',
        detail: 'A IA destaca que a Dra. Renata é especialista em harmonização facial, com foco no procedimento de interesse do paciente. Usa argumentos de autoridade: anos de experiência, número de procedimentos realizados, resultados consistentes.',
      },
      {
        passo: '3.2',
        title: 'Seleção inteligente de prova social',
        detail: 'O sistema busca no banco de provas sociais o caso mais similar à queixa do paciente. Se a dor é "ponta caída", seleciona fotos de pacientes que tinham ponta caída e corrigiram. Nunca envia caso de giba se a dor é ponta.',
      },
      {
        passo: '3.3',
        title: 'Envio de fotos antes/depois',
        detail: 'Máximo 2-3 fotos por conversa. Enviadas com contexto: "Olha como ficou essa paciente que tinha uma queixa muito parecida com a sua, [Nome]." Nunca enviar fotos de cara na primeira mensagem.',
      },
      {
        passo: '3.4',
        title: 'Envio de depoimentos',
        detail: 'Após as fotos, enviar 1 depoimento relevante de paciente satisfeito. Formato texto ou áudio. Reforça a prova social com evidência de terceiros.',
      },
      {
        passo: '3.5',
        title: 'Diferencial do avatar facial',
        detail: 'Mencionar que na avaliação presencial, a Dra. Renata utiliza tecnologia de avatar facial que mostra exatamente como ficaria o resultado no rosto do paciente. Esse diferencial só é revelado como incentivo para o agendamento presencial.',
      },
    ],
    dataStored: ['quais provas sociais foram enviadas (IDs das fotos)', 'quais depoimentos foram enviados', 'reação do paciente às provas sociais', 'se demonstrou interesse ou resistência após ver as fotos'],
    dialogExample: {
      context: 'Paciente com queixa de ponta caída do nariz, após mapeamento da dor',
      iaResponse: '"[Nome], vou te mostrar o resultado de uma paciente que tinha uma queixa muito parecida com a sua. Ela também se incomodava com a ponta do nariz e fez a rinomodelação com a Dra. Renata. Olha o antes e depois:" [envia foto] "E olha o que ela disse depois do procedimento:" [envia depoimento]',
      note: 'As fotos são sempre contextualizadas com a queixa específica. Nunca é um envio genérico. O paciente precisa se ver no caso apresentado.',
    },
  },
  {
    etapa: 4,
    title: 'Apresentação de condições e tratamento de objeções',
    color: '#9c46e0',
    description: 'Somente após construir valor, a IA apresenta as condições comerciais e trata objeções com técnicas específicas para cada tipo de resistência.',
    steps: [
      {
        passo: '4.1',
        title: 'Revelação de preço (na hora certa)',
        detail: 'A IA NUNCA fala preço antes de construir valor. Sequência obrigatória: entender dor > apresentar resultados > mostrar provas > somente depois, informar faixa de preço. Se o paciente perguntar preço de cara, a IA redireciona: "Antes de falar sobre investimento, me conta o que te incomoda para eu entender melhor seu caso."',
      },
      {
        passo: '4.2',
        title: 'Condições de pagamento',
        detail: 'Informar formas de pagamento disponíveis: parcelamento no cartão, parte dinheiro + parte cartão, diversas opções flexíveis. Sempre posicionar como investimento, nunca como custo.',
      },
      {
        passo: '4.3',
        title: 'Avaliação obrigatória: R$ 350',
        detail: 'Explicar que o primeiro passo é a avaliação com a Dra. Renata (R$ 350). Presencial é preferência (conversão mais alta). Online também disponível. O pagamento é obrigatório para confirmar a agenda.',
      },
      {
        passo: '4.4',
        title: 'Objeção de preço da avaliação',
        detail: 'Se o paciente demonstrar resistência ao valor de R$ 350: "Esse valor é descontado do seu procedimento, [Nome]. Ou seja, se você decidir fazer, esse investimento já faz parte do valor total." Nunca zerar ou eliminar o valor.',
      },
      {
        passo: '4.5',
        title: 'Objeção de medo/insegurança',
        detail: 'Enviar depoimentos de pacientes que tinham medo e ficaram satisfeitos. Mencionar o avatar facial: "Na avaliação presencial, a Dra. Renata mostra exatamente como ficaria o resultado no seu rosto antes de qualquer procedimento." Reforçar experiência e especialidade.',
      },
      {
        passo: '4.6',
        title: 'Objeção de recuperação/dor',
        detail: 'Responder dúvidas sobre repouso, tempo de recuperação, se pode trabalhar. Para dúvidas muito técnicas: "Essa é uma ótima pergunta! A especialista é a Dra. Renata, que vai poder te explicar em detalhes na avaliação."',
      },
      {
        passo: '4.7',
        title: 'Objeção de tempo/agenda',
        detail: 'Oferecer flexibilidade de horários. Mencionar que a avaliação dura aproximadamente 2 horas e que, dependendo do caso, o procedimento pode ser feito no mesmo dia.',
      },
    ],
    dataStored: ['objeções levantadas pelo paciente', 'tipo de objeção (preço/medo/recuperação/tempo)', 'como cada objeção foi tratada', 'se o paciente aceitou a condição ou manteve resistência', 'faixa de preço informada'],
    dialogExample: {
      context: 'Paciente pergunta "quanto custa a rinomodelação?" logo na segunda mensagem',
      iaResponse: '"[Nome], o investimento varia de acordo com cada caso porque cada nariz tem suas particularidades. Antes de falar sobre valores, me conta: o que mais te incomoda no seu nariz? Assim consigo te dar informações mais precisas e te mostrar resultados de pacientes com casos parecidos com o seu."',
      note: 'A IA redireciona a conversa para a construção de valor. Nunca fala preço de imediato. A sequência é: dor > valor > prova social > preço.',
    },
  },
  {
    etapa: 5,
    title: 'Agendamento da avaliação',
    color: '#607cf9',
    description: 'O paciente decidiu agendar. A IA conduz o processo de agendamento, coleta dados necessários e encaminha para o pagamento.',
    steps: [
      {
        passo: '5.1',
        title: 'Tipo de avaliação',
        detail: 'Oferecer avaliação presencial (preferência) ou online. Reforçar que presencial tem diferencial do avatar facial. "A avaliação presencial é a que mais recomendamos porque a Dra. Renata consegue fazer uma análise completa e mostrar o resultado projetado no seu rosto."',
      },
      {
        passo: '5.2',
        title: 'Verificação de disponibilidade',
        detail: 'Consultar Google Calendar para horários disponíveis. Oferecer 2-3 opções de data/horário. Não oferecer horários lotados.',
      },
      {
        passo: '5.3',
        title: 'Confirmação de data e horário',
        detail: 'Confirmar com o paciente a data e horário escolhidos. Informar endereço da clínica em Jundiaí-SP.',
      },
      {
        passo: '5.4',
        title: 'Informar sobre pagamento',
        detail: '"Para confirmar sua avaliação na agenda da Dra. Renata, o próximo passo é o pagamento de R$ 350. Vou te enviar o link agora!" A IA gera o link de pagamento automaticamente via API InfinitePay (Pix gratuito ou cartão até 12x) e envia direto no WhatsApp.',
      },
      {
        passo: '5.5',
        title: 'Envio do formulário de pré-cadastro',
        detail: 'Após confirmação do agendamento, enviar o link do formulário de anamnese (sistema jurídico). Solicitar preenchimento até 24 horas antes da avaliação.',
      },
      {
        passo: '5.6',
        title: 'Programação de lembretes',
        detail: 'Agendar automaticamente: lembrete 1 dia antes (até 9h da manhã) + re-confirmação às 17h30 se não respondeu o primeiro lembrete.',
      },
    ],
    dataStored: ['tipo de avaliação escolhida (presencial/online)', 'data e horário agendados', 'status de pagamento (pendente/confirmado)', 'formulário de pré-cadastro enviado (sim/não)', 'lembretes programados', 'status do pipeline atualizado para "Agendou"'],
    dialogExample: {
      context: 'Paciente aceita agendar avaliação presencial',
      iaResponse: '"Ótimo, [Nome]! A Dra. Renata tem disponibilidade na quinta-feira dia 29 às 14h ou na sexta dia 30 às 10h. Qual horário fica melhor para você? A clínica fica em Jundiaí-SP. Assim que você escolher, já te envio o link de pagamento!"',
      note: 'A IA oferece opções reais de agenda (consultando Google Calendar). Após a escolha, gera e envia o link de pagamento via InfinitePay automaticamente.',
    },
  },
  {
    etapa: 6,
    title: 'Classificação e encaminhamento',
    color: '#543285',
    description: 'Em qualquer momento da conversa, a IA pode precisar classificar o caso e encaminhar para o canal correto: humano comercial, equipe técnica, ou manter no fluxo automatizado.',
    steps: [
      {
        passo: '6.1',
        title: 'Paciente pede para falar com humano',
        detail: 'A IA responde: "Vou transferir você para nossa equipe. Um momento!" e notifica o atendente comercial via alerta no dashboard. Salva o contexto completo da conversa para que o humano continue de onde parou.',
      },
      {
        passo: '6.2',
        title: 'Reclamação ou pós-procedimento',
        detail: 'Se o paciente mencionar problemas com procedimento já realizado, dor pós-cirúrgica, insatisfação com resultado, ou qualquer questão clínica: "Vou encaminhar você para nossa equipe técnica que vai te ajudar!" e direciona para o WhatsApp da Lívia (equipe de pós).',
      },
      {
        passo: '6.3',
        title: 'Fechamento de pagamento',
        detail: 'Quando o paciente confirma o horário, a IA gera o link de pagamento via API InfinitePay (Pix gratuito ou cartão até 12x) e envia direto na conversa. Webhook confirma o pagamento em tempo real e atualiza o status no CRM.',
      },
      {
        passo: '6.4',
        title: 'Pergunta técnica sem resposta',
        detail: 'Para dúvidas muito específicas que não estão na base de conhecimento (ex: contraindicações raras, interações medicamentosas, casos clínicos complexos): "Essa é uma ótima pergunta, [Nome]! A Dra. Renata vai te explicar em detalhes na avaliação."',
      },
      {
        passo: '6.5',
        title: 'Múltiplos procedimentos',
        detail: 'Se o paciente demonstrar interesse em mais de um procedimento, a IA conduz normalmente sem limitar. Na avaliação, procedimentos podem ser realizados juntos. "Inclusive, muitos pacientes aproveitam para fazer mais de um procedimento na mesma sessão."',
      },
    ],
    dataStored: ['motivo do encaminhamento', 'para quem foi encaminhado (humano/Lívia/Dra. Renata)', 'contexto completo da conversa até o momento', 'flag de escalação no pipeline', 'timestamp da escalação'],
    dialogExample: {
      context: 'Paciente pergunta sobre efeitos colaterais específicos de um medicamento pós-rinomodelação',
      iaResponse: '"[Nome], essa é uma pergunta muito importante e a melhor pessoa para te responder é a própria Dra. Renata, que vai avaliar o seu caso individualmente. Na avaliação, ela explica tudo em detalhes, incluindo cuidados pré e pós-procedimento."',
      note: 'A IA nunca inventa respostas médicas. Para qualquer dúvida técnica além da base, encaminha para a avaliação.',
    },
  },
  {
    etapa: 7,
    title: 'Handoff e finalização',
    color: '#8b5cf6',
    description: 'Após conduzir o paciente até o agendamento (ou escalação), a IA finaliza a interação mantendo a porta aberta e programando os próximos passos automáticos.',
    steps: [
      {
        passo: '7.1',
        title: 'Confirmação final',
        detail: 'Recapitular o que foi combinado: procedimento de interesse, data/horário da avaliação, valor, formulário de pré-cadastro. "Resumindo, [Nome]: sua avaliação com a Dra. Renata está marcada para [data] às [horário]. Não esqueça de preencher o formulário que enviei."',
      },
      {
        passo: '7.2',
        title: 'Mensagem de encerramento',
        detail: 'Despedida acolhedora sem emojis: "Se tiver qualquer dúvida até lá, é só me mandar mensagem. Estou aqui para ajudar. Até breve, [Nome]!"',
      },
      {
        passo: '7.3',
        title: 'Atualização do pipeline',
        detail: 'Move o lead para a coluna correspondente no Kanban: "Agendou" (se agendou), "Em Conversa" (se ainda está engajado), ou mantém para follow-up.',
      },
      {
        passo: '7.4',
        title: 'Programação de lembretes',
        detail: 'Se agendou: lembrete 1 dia antes + re-confirmação. Se não agendou mas mostrou interesse: programar follow-up em 3 dias.',
      },
      {
        passo: '7.5',
        title: 'Registro completo',
        detail: 'Salvar resumo estruturado da conversa: procedimento, queixa, objeções, temperatura do lead, próximos passos, observações relevantes para o atendente humano.',
      },
    ],
    dataStored: ['resumo estruturado da conversa', 'próximos passos programados (lembretes/follow-up)', 'status final do pipeline', 'observações para o atendente humano', 'satisfação percebida do paciente'],
    dialogExample: {
      context: 'Paciente agendou avaliação para quinta-feira',
      iaResponse: '"Perfeito, [Nome]! Sua avaliação com a Dra. Renata está confirmada para quinta-feira, dia 29, às 14h. A clínica fica na [endereço] em Jundiaí. Vou te enviar um formulário de pré-cadastro para você preencher antes. Se tiver qualquer dúvida até lá, é só me mandar mensagem. Até quinta, [Nome]!"',
      note: 'A IA encerra de forma calorosa, confirmando todos os detalhes, e programa os lembretes automáticos.',
    },
  },
]

/* ================================================================
   DADOS — PROCESSOS PARALELOS
   ================================================================ */

const parallelProcesses = [
  {
    title: 'Paciente faz perguntas durante o fluxo',
    description: 'A qualquer momento, o paciente pode fazer perguntas fora da sequência (ex: "Dói muito?", "Quanto tempo demora?"). A IA responde a pergunta sem perder o fio da conversa e retorna para a etapa em que estava.',
    iaAction: 'Responde a pergunta de forma completa e natural, depois retoma: "[Nome], respondendo sua pergunta sobre recuperação: o tempo médio é de X dias. Voltando ao que estávamos conversando sobre..."',
  },
  {
    title: 'Paciente pede para falar com humano',
    description: 'Se em qualquer etapa o paciente solicitar um atendente humano, a IA transfere imediatamente sem tentar reter o lead.',
    iaAction: '"Claro, [Nome]! Vou transferir você para nossa equipe agora mesmo. Um momento!" + notificação no dashboard + contexto completo da conversa é salvo para o atendente.',
  },
  {
    title: 'Paciente retorna após inatividade',
    description: 'Se o paciente parou de responder e volta dias ou semanas depois, a IA detecta o retorno e retoma com contexto.',
    iaAction: '"Oi, [Nome]! Que bom te ver de volta. Da última vez, você tinha interesse em [procedimento] e conversamos sobre [dor específica]. Quer retomar de onde paramos?"',
  },
  {
    title: 'Paciente envia mensagem fora do horário',
    description: 'A IA funciona 24/7. Mesmo às 2h da manhã, responde instantaneamente com a mesma qualidade e personalidade.',
    iaAction: 'Resposta imediata, idêntica ao horário comercial. Se precisar de ação humana (pagamento, escalação), informa: "[Nome], nosso time financeiro te retorna no próximo horário comercial para finalizar."',
  },
  {
    title: 'Paciente pergunta se é um robô/IA',
    description: 'A IA nunca mente. Se perguntada diretamente, confirma com naturalidade.',
    iaAction: '"Sim, [Nome], sou uma assistente virtual com inteligência artificial da clínica da Dra. Renata. Fui treinada com todo o conhecimento da equipe para te ajudar da melhor forma possível. Posso continuar te ajudando?"',
  },
  {
    title: 'Paciente envia imagem/foto',
    description: 'Se o paciente enviar uma foto (ex: do próprio nariz pedindo avaliação), a IA não faz diagnóstico mas acolhe.',
    iaAction: '"Recebi sua foto, [Nome]! Consigo ver o que te incomoda. Mas para uma análise realmente precisa, a Dra. Renata precisa avaliar pessoalmente. Na avaliação, ela usa tecnologia de avatar facial que mostra exatamente como ficaria o resultado."',
  },
]

/* ================================================================
   DADOS — TRATAMENTO DE MÍDIA
   ================================================================ */

const mediaHandling = [
  {
    type: 'Texto',
    received: 'Processado diretamente pelo LLM. Análise de intenção, extração de entidades (procedimento, queixa, objeção).',
    sent: 'Resposta em texto formatado, sem emojis, com parágrafos curtos para facilitar leitura no celular.',
    priority: 'Padrão',
  },
  {
    type: 'Áudio',
    received: 'Convertido para texto via Speech-to-Text (Whisper/Deepgram). Transcrição salva no banco. Se o paciente prefere áudio, a IA detecta essa preferência.',
    sent: 'Text-to-Speech gera áudio com voz feminina natural e profissional. Usado quando o paciente demonstra preferência por áudio.',
    priority: 'Alta — diferencial competitivo',
  },
  {
    type: 'Imagem',
    received: 'A IA confirma recebimento e acolhe: "Recebi sua foto!" Não faz diagnóstico visual. Notifica atendente humano se necessário.',
    sent: 'Fotos de antes/depois do banco de provas sociais. Enviadas com contexto e legenda personalizada.',
    priority: 'Alta — prova social',
  },
  {
    type: 'Vídeo',
    received: 'Mesmo tratamento de imagem: confirmação de recebimento, sem análise. Salva referência no histórico.',
    sent: 'Depoimentos em vídeo de pacientes (quando disponíveis no banco). Não implementado na fase 1.',
    priority: 'Baixa (fase futura)',
  },
  {
    type: 'Sticker',
    received: 'Ignorado silenciosamente. A IA aguarda a próxima mensagem de texto ou áudio para responder.',
    sent: 'A IA nunca envia stickers.',
    priority: 'N/A',
  },
  {
    type: 'Documento',
    received: 'Confirmação de recebimento. Se for documento relevante (ex: exame), notifica atendente humano.',
    sent: 'Formulário de pré-cadastro, comprovante de agendamento.',
    priority: 'Média',
  },
  {
    type: 'Localização',
    received: 'A IA agradece e envia o endereço da clínica com link do Google Maps.',
    sent: 'Endereço da clínica em Jundiaí-SP, com link para Google Maps.',
    priority: 'Baixa',
  },
]

/* ================================================================
   DADOS — GUARDRAILS EXPANDIDOS
   ================================================================ */

const guardrailsFaz = [
  'Responde instantaneamente a qualquer horário (24/7, incluindo madrugada, feriados e fins de semana)',
  'Identifica a dor/desejo do paciente antes de qualquer oferta',
  'Explica procedimentos com conhecimento técnico baseado na base de dados da clínica',
  'Envia fotos de antes/depois contextualizadas à queixa específica do paciente',
  'Envia depoimentos de pacientes satisfeitos como reforço de prova social',
  'Apresenta valor e especialidade da Dra. Renata antes de falar preço',
  'Explica condições de pagamento de forma transparente',
  'Conduz para agendamento de avaliação (presencial preferencial, online disponível)',
  'Faz follow-up automatizado em leads que pararam de responder (3, 7, 20, 30, 60 dias)',
  'Envia lembretes de avaliação agendada (1 dia antes + re-confirmação)',
  'Responde e envia áudios quando detecta preferência do paciente por voz',
  'Chama o paciente pelo nome várias vezes ao longo da conversa',
  'Adapta o tom conforme a temperatura do lead (mais acolhedor para inseguros, mais direto para decididos)',
  'Retoma contexto de conversas anteriores quando paciente retorna',
  'Responde perguntas sobre procedimentos fora da base usando conhecimento geral (sem informar valores)',
  'Transfere para humano imediatamente quando solicitado, sem tentar reter',
  'Alterna formatos de comunicação no follow-up (texto, áudio, foto) para não repetir abordagem',
  'Salva histórico completo de cada interação para consulta futura',
  'Classifica leads por temperatura (quente/morno/frio) para priorização',
  'Trata objeções com técnicas específicas para cada tipo de resistência',
]

const guardrailsNaoFaz = [
  'Não dá diagnóstico médico ou estético — sempre encaminha para avaliação com a Dra. Renata',
  'Pagamento automatizado — gera link via InfinitePay (Pix ou cartão) e envia direto na conversa',
  'Não atende pós-procedimento — direciona para WhatsApp da Lívia (equipe técnica)',
  'Não atende reclamações — direciona para o número de pós-procedimento',
  'Não omite que é IA se perguntada diretamente — responde com honestidade e naturalidade',
  'Não pressiona o paciente com urgência agressiva (especialmente para rinomodelação/ticket alto)',
  'Não fala preço antes de construir valor — sempre segue a sequência: dor > valor > prova > preço',
  'Não envia provas sociais genéricas — sempre contextualiza com a queixa específica do paciente',
  'Não usa emojis — decisão firme do cliente',
  'Não usa linguagem excessivamente formal ("senhor/senhora") nem informal com gírias',
  'Não envia a mesma mensagem duas vezes no follow-up',
  'Não inventa informações sobre procedimentos que não estão na base de dados',
  'Não informa valores de procedimentos que não estão cadastrados no sistema',
  'Não faz promessas de resultado ("garantido", "com certeza vai ficar perfeito")',
  'Não zera ou elimina o valor da avaliação (R$ 350) — pode informar que é descontado do procedimento',
  'Não tenta reter o paciente quando ele pede explicitamente para falar com humano',
  'Não compartilha dados de outros pacientes (nomes, fotos identificáveis sem autorização)',
  'Não envia mais de 3 fotos de antes/depois na mesma conversa',
  'Não revela que é IA proativamente — só se perguntada',
  'Não faz ligações telefônicas — somente texto e áudio via WhatsApp',
]

/* ================================================================
   DADOS — SEÇÕES EXISTENTES (ATUALIZADAS COM ACENTOS)
   ================================================================ */

const modules = [
  {
    num: '01', title: 'Agente Comercial IA', color: '#9c46e0',
    desc: 'Atendimento 24/7 via WhatsApp com playbook da Dra. Renata — texto e áudio',
    items: ['Resposta instantânea a qualquer horário', 'Identifica dor e envia provas sociais contextuais', 'Conduz para agendamento de avaliação', 'Follow-up automatizado: 3, 7, 20, 30, 60 dias', 'Suporte a áudio (envia e recebe)', 'Escalação para humano quando necessário']
  },
  {
    num: '02', title: 'Prova Social Inteligente', color: '#607cf9',
    desc: 'Envio automático de fotos antes/depois e depoimentos contextualizados ao caso do paciente',
    items: ['Banco organizado por procedimento e queixa', 'Seleção automática do caso mais similar', 'Envio APÓS entender a dor (nunca de cara)', 'Máximo 2-3 fotos por conversa', 'Depoimentos reforçam após as fotos']
  },
  {
    num: '03', title: 'CRM + Dashboard', color: '#543285',
    desc: 'Pipeline visual Kanban com métricas em tempo real e histórico de conversas',
    items: ['Pipeline: Novo Lead > Em Conversa > Agendou > Compareceu > Fechou', 'Métricas: leads/dia, taxa conversão, receita pipeline', 'Histórico completo de conversas IA-paciente', 'Multi-usuário no mesmo número WhatsApp', 'Filtros por procedimento e status', 'Exportação de relatórios']
  },
  {
    num: '04', title: 'Agendamento', color: '#8b5cf6',
    desc: 'Google Calendar integrado com lembretes automáticos e formulário pré-cadastro',
    items: ['Avaliação paga (R$ 350) — só agenda após pagamento', 'Presencial (preferência) ou online', 'Lembrete: 1 dia antes (até 9h) + re-confirmação 17h30', 'Formulário pré-cadastro enviado automaticamente', 'Integração com Google Calendar para disponibilidade']
  },
]

const personality = [
  { label: 'Nome', value: 'A definir pelo cliente (Anderson e Renata vão escolher)' },
  { label: 'Apresentação', value: 'Se apresenta pelo nome, sem mencionar IA de cara — só revela se perguntada' },
  { label: 'Linguagem', value: 'Semi-formal (meio-termo) — nem robótica, nem informal com gírias' },
  { label: 'Tratamento', value: 'Chama pelo nome do paciente, várias vezes — nunca senhor/senhora' },
  { label: 'Emojis', value: 'Não usar — decisão firme do cliente' },
  { label: 'Tom', value: 'Empático, acolhedor, persuasivo — entender a dor primeiro' },
  { label: 'Áudio', value: 'Sim — envia e recebe. Se paciente manda áudio, responde com áudio' },
  { label: 'Urgência', value: 'Sutil, nunca pressão — para rino (ticket alto): gerar desejo, não pressionar' },
]

const followUp = [
  { timing: '3 dias', approach: 'Retomar conversa mencionando a dor pelo nome. Alternar formato (áudio/texto).', example: '"[Nome], lembrei de você! Vi que você tinha interesse em melhorar [queixa]. Temos novidades que podem te interessar..."' },
  { timing: '7 dias', approach: 'Novo ângulo — enviar caso de sucesso diferente. Mudar formato de abordagem.', example: '"[Nome], queria te mostrar o resultado de uma paciente que tinha uma queixa muito parecida com a sua. Olha como ficou:" [envia foto diferente]' },
  { timing: '20 dias', approach: 'Perguntar se já resolveu o problema, mostrar solução alternativa.', example: '"Oi, [Nome]! Já faz um tempinho que conversamos sobre [procedimento]. Você já resolveu essa questão? Se ainda tiver interesse, posso te contar sobre uma condição especial."' },
  { timing: '30 dias', approach: 'Reforçar disponibilidade, mencionar resultados recentes. Tom mais direto.', example: '"[Nome], a agenda da Dra. Renata para [mês] já está abrindo. Se quiser garantir um horário para a avaliação, estou aqui para ajudar."' },
  { timing: '60 dias', approach: 'Última tentativa — mensagem de encerramento. Se não responder, finalizar.', example: '"[Nome], estou encerrando nosso atendimento por enquanto. Se no futuro tiver interesse em [procedimento], é só me mandar uma mensagem. A clínica da Dra. Renata está sempre aqui para você."' },
]

const escalation = [
  { situation: 'Paciente pede para falar com humano', action: '"Vou transferir você para nossa equipe!" + notificar atendente via dashboard com contexto completo' },
  { situation: 'Reclamação / pós-procedimento', action: 'Direcionar para WhatsApp da Lívia (equipe técnica de pós-procedimento)' },
  { situation: 'Fechamento de pagamento', action: 'IA gera link de pagamento via InfinitePay (Pix ou cartão até 12x) e envia direto na conversa' },
  { situation: 'Pergunta técnica sem resposta na base', action: '"A Dra. Renata vai te explicar em detalhes na avaliação"' },
  { situation: 'Paciente insatisfeito ou irritado', action: 'Transferir imediatamente para humano — nunca tentar resolver reclamação via IA' },
  { situation: 'Dúvida sobre medicamentos/contraindicações', action: '"Essa informação é muito importante e precisa ser avaliada pela Dra. Renata pessoalmente"' },
]

const pipelineSteps = [
  { name: 'Novo Lead', desc: 'Criado automaticamente quando a IA inicia conversa', details: 'Dados: nome, telefone, origem, timestamp. Trigger: primeira mensagem recebida.' },
  { name: 'Em Conversa', desc: 'IA conduzindo atendimento ativo', details: 'Move automático após troca de mensagens. IA identificando dor e construindo valor.' },
  { name: 'Agendou', desc: 'Avaliação paga + data confirmada', details: 'Move quando pagamento confirmado + slot no Google Calendar reservado.' },
  { name: 'Compareceu', desc: 'Paciente foi à avaliação', details: 'Marcação manual ou integração com sistema da clínica.' },
  { name: 'Fechou', desc: 'Procedimento contratado', details: 'Marcação manual. Alimenta métricas de conversão e receita.' },
]

const dashboardMetrics = [
  { title: 'Leads hoje', desc: 'Total de novos leads do dia, com comparativo vs média' },
  { title: 'Taxa de conversão', desc: '% de leads que agendaram avaliação (meta: 3-5%)' },
  { title: 'Agendamentos', desc: 'Avaliações agendadas no período, presencial vs online' },
  { title: 'Receita do pipeline', desc: 'Valor estimado dos leads em andamento por procedimento' },
  { title: 'Conversão por procedimento', desc: '% por tipo (rinomodelação, botox, preenchimento, full face)' },
  { title: 'Follow-up pendentes', desc: 'Leads que precisam de reativação — priorizados por temperatura' },
]

/* ================================================================
   COMPONENTES AUXILIARES
   ================================================================ */

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

function EtapaCard({ etapa, title, color, description, steps, dataStored, dialogExample }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div className="phase-card" style={{ marginBottom: 0 }}>
        <div className="phase-card-num" style={{ background: `linear-gradient(180deg, ${color}, ${color}dd)` }}>
          {etapa}
        </div>
        <div className="phase-card-body">
          <h4>ETAPA {etapa}: {title}</h4>
          <p>{description}</p>
        </div>
      </div>

      {/* Passos detalhados */}
      <div className="journey-steps" style={{ marginTop: 16 }}>
        {steps.map((step, i) => (
          <div className="journey-step" key={i}>
            <div className="journey-step-num">{step.passo}</div>
            <h4>{step.title}</h4>
            <p>{step.detail}</p>
          </div>
        ))}
      </div>

      {/* Exemplo de diálogo */}
      {dialogExample && (
        <div className="highlight-box" style={{ marginTop: 8 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#9c46e0', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 8 }}>Exemplo de diálogo</p>
          <p style={{ fontSize: 12, color: '#888', marginBottom: 6 }}><strong>Contexto:</strong> {dialogExample.context}</p>
          <p style={{ fontSize: 13, color: '#1a1a2e', fontStyle: 'italic', marginBottom: 6 }}><strong>A IA diz:</strong> {dialogExample.iaResponse}</p>
          {dialogExample.note && <p style={{ fontSize: 12, color: '#666' }}><strong>Nota:</strong> {dialogExample.note}</p>}
        </div>
      )}

      {/* Dados salvos */}
      {dataStored && dataStored.length > 0 && (
        <div className="rule-box" style={{ marginTop: 8 }}>
          <strong>Dados salvos nesta etapa:</strong>
          <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0' }}>
            {dataStored.map((d, i) => (
              <li key={i} style={{ fontSize: 12, color: '#555', padding: '2px 0', paddingLeft: 16, position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: '#607cf9' }}>&#8594;</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

/* ================================================================
   COMPONENTE PRINCIPAL
   ================================================================ */

export default function TabSistema() {
  return (
    <section className="page">
      <PageHeader tag="O Sistema (TO-BE)" />

      <SectionHero
        title="Agente Comercial IA + CRM Inteligente"
        description="4 módulos integrados que transformam o atendimento da clínica — do primeiro contato até o fechamento do procedimento. Abaixo, cada etapa do fluxo conversacional com exemplos reais de diálogo, dados salvos e regras de negócio."
      />

      <div className="highlight-box" style={{ marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div>
          <strong>Fluxograma interativo disponível</strong>
          <p style={{ margin: '4px 0 0', fontSize: 14, color: '#555' }}>Visualize todo o fluxo do agente IA com diagramas navegáveis por etapa, processos paralelos e arquitetura do sistema.</p>
        </div>
        <a
          href="/fluxograma-agente.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'linear-gradient(135deg, #607cf9, #9c46e0)', color: '#fff',
            padding: '10px 20px', borderRadius: 8, fontWeight: 600, fontSize: 14,
            textDecoration: 'none', whiteSpace: 'nowrap',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="22 12 16 12 14 15 10 9 8 12 2 12" />
          </svg>
          Abrir fluxograma
        </a>
      </div>

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 1: FLUXO CONVERSACIONAL DETALHADO (8 ETAPAS)
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">Fluxo conversacional completo do Agente IA</h3>
      <p style={{ marginBottom: 8, color: '#666', fontSize: 14, lineHeight: 1.7 }}>
        O agente comercial segue um fluxo de 8 etapas para conduzir o paciente desde a primeira mensagem até o agendamento da avaliação. Cada etapa tem passos detalhados, exemplos de diálogo e dados que são salvos no banco para alimentar o CRM e o dashboard.
      </p>

      <div className="highlight-box" style={{ marginBottom: 24 }}>
        <p><strong>Regra fundamental:</strong> A IA nunca pula etapas. Sempre segue a sequência: receber mensagem &rarr; identificar contato &rarr; entender a dor &rarr; construir valor &rarr; tratar objeções &rarr; agendar. Se o paciente tentar ir direto ao preço, a IA redireciona gentilmente para a construção de valor primeiro.</p>
      </div>

      {conversationFlow.map((etapa) => (
        <EtapaCard key={etapa.etapa} {...etapa} />
      ))}

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 2: TRATAMENTO DE MÍDIA
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">Tratamento de mídia (tipos de mensagem)</h3>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        A IA lida com diferentes tipos de mídia recebidos e enviados via WhatsApp. Cada tipo tem um comportamento específico.
      </p>

      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Quando recebe</th>
              <th>Quando envia</th>
              <th>Prioridade</th>
            </tr>
          </thead>
          <tbody>
            {mediaHandling.map((m, i) => (
              <tr key={i}>
                <td className="td-label">{m.type}</td>
                <td>{m.received}</td>
                <td>{m.sent}</td>
                <td><span className={`tag ${m.priority === 'Alta — diferencial competitivo' || m.priority === 'Alta — prova social' ? 'tag-purple' : m.priority === 'Média' ? 'tag-yellow' : m.priority === 'Padrão' ? 'tag-blue' : 'tag-gray'}`}>{m.priority}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rule-box">
        <strong>Regra de áudio:</strong> Se o paciente manda áudio, a IA entende que ele prefere comunicação por voz. A partir desse momento, pode alternar entre responder por texto e por áudio, conforme o contexto. No follow-up, se a última interação foi por texto, tentar áudio, e vice-versa.
      </div>

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 3: PROCESSOS PARALELOS
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">Processos paralelos e cenários especiais</h3>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        Durante o fluxo principal, situações paralelas podem ocorrer a qualquer momento. A IA precisa lidar com cada uma sem perder o contexto da conversa.
      </p>

      {parallelProcesses.map((proc, i) => (
        <div className="scenario-card" key={i}>
          <h3>{proc.title}</h3>
          <p style={{ marginBottom: 10 }}>{proc.description}</p>
          <div style={{ background: 'rgba(96, 124, 249, 0.06)', borderRadius: 8, padding: '10px 14px', fontSize: 13 }}>
            <strong style={{ color: '#9c46e0', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.8px' }}>Ação da IA:</strong>
            <p style={{ marginTop: 4, color: '#333', fontStyle: 'italic' }}>{proc.iaAction}</p>
          </div>
        </div>
      ))}

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 4: GUARDRAILS EXPANDIDOS
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">O que a IA FAZ e NÃO FAZ (guardrails completos)</h3>
      <p style={{ marginBottom: 16, color: '#666', fontSize: 14 }}>
        Lista completa de comportamentos permitidos e proibidos do agente comercial. Essas regras são invioláveis e garantem que a IA mantenha a qualidade e segurança do atendimento.
      </p>

      <div className="compare-grid">
        <div className="compare-after">
          <h4>A IA FAZ ({guardrailsFaz.length} regras)</h4>
          <ul>
            {guardrailsFaz.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        <div className="compare-before">
          <h4>A IA NÃO FAZ ({guardrailsNaoFaz.length} regras)</h4>
          <ul>
            {guardrailsNaoFaz.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 5: OS 4 MÓDULOS DO SISTEMA
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">Os 4 módulos do sistema</h3>
      <div className="module-group-grid">
        {modules.map((m, i) => <ModuleGroupCard key={i} {...m} />)}
      </div>

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 7: PERSONALIDADE E COMUNICAÇÃO
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">Personalidade e comunicação da IA</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Aspecto</th><th>Definição</th></tr></thead>
          <tbody>
            {personality.map((p, i) => (
              <tr key={i}><td className="td-label">{p.label}</td><td>{p.value}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="rule-box">
        <strong>Regra de transparência:</strong> A IA NÃO se identifica como IA na primeira mensagem. Se apresenta apenas pelo nome. Se o paciente perguntar diretamente se é uma IA, responde com honestidade: "Sim, sou uma assistente virtual com inteligência artificial da clínica da Dra. Renata." Nunca mente sobre sua natureza.
      </div>

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 8: FOLLOW-UP AUTOMATIZADO
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">Follow-up automatizado</h3>
      <p style={{ marginBottom: 16, color: '#666' }}>Quando o lead para de responder, a IA segue um processo de reativação humanizado com exemplos de mensagem para cada timing:</p>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Timing</th><th>Abordagem</th><th>Exemplo de mensagem</th></tr></thead>
          <tbody>
            {followUp.map((f, i) => (
              <tr key={i}>
                <td className="td-label">{f.timing}</td>
                <td>{f.approach}</td>
                <td style={{ fontStyle: 'italic', fontSize: 12, color: '#555' }}>{f.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rule-box">
        <strong>Regras de follow-up:</strong> Nunca enviar a mesma mensagem duas vezes. Sempre chamar pelo nome e retomar a dor específica do paciente. Alternar formatos: áudio, texto, foto. Cada follow-up deve parecer natural, como se a pessoa estivesse lembrando do paciente. Se mandou áudio e não respondeu, tentar texto. Se mandou texto, tentar áudio.
      </div>

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 9: ESCALAÇÃO PARA HUMANO
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">Escalação para humano</h3>
      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Situação</th><th>Ação da IA</th></tr></thead>
          <tbody>
            {escalation.map((e, i) => (
              <tr key={i}><td className="td-label">{e.situation}</td><td>{e.action}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="highlight-box">
        <p><strong>Canais de escalação:</strong> Atendente comercial (pagamentos e dúvidas gerais) | Lívia / equipe técnica (pós-procedimento e reclamações) | Dra. Renata (dúvidas técnicas complexas, respondidas na avaliação).</p>
      </div>

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 10: PIPELINE KANBAN
          ───────────────────────────────────────────────────────── */}

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

      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Coluna</th><th>Descrição</th><th>Dados e automação</th></tr></thead>
          <tbody>
            {pipelineSteps.map((step, i) => (
              <tr key={i}>
                <td className="td-label">{step.name}</td>
                <td>{step.desc}</td>
                <td style={{ fontSize: 12, color: '#666' }}>{step.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 11: MÉTRICAS DO DASHBOARD
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">Métricas do Dashboard</h3>
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

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 12: BANCO DE PROVAS SOCIAIS
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">Banco de provas sociais — estrutura</h3>

      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Tipo de prova</th><th>Organização</th><th>Regras de envio</th></tr></thead>
          <tbody>
            <tr>
              <td className="td-label">Fotos antes/depois</td>
              <td>Organizadas por procedimento (rinomodelação, botox, preenchimento labial, olheira, full face) + por tipo de queixa dentro de cada procedimento (giba, ponta, dorso, largura)</td>
              <td>Selecionar caso SIMILAR ao do paciente. Se a dor é "ponta caída", enviar caso de ponta. Máximo 2-3 fotos por conversa.</td>
            </tr>
            <tr>
              <td className="td-label">Depoimentos</td>
              <td>Por procedimento. Formato: texto, áudio ou vídeo. Cada depoimento tagueado com procedimento e queixa.</td>
              <td>Enviar APÓS as fotos, como reforço de prova social. 1 depoimento por conversa. Priorizar formato compatível com preferência do paciente.</td>
            </tr>
            <tr>
              <td className="td-label">Casos de sucesso</td>
              <td>Narrativas curtas combinando foto + depoimento + contexto ("essa paciente tinha a mesma queixa que você")</td>
              <td>Usado no follow-up para apresentar ângulo novo. Cada follow-up usa um caso diferente.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rule-box">
        <strong>Regra de envio:</strong> Provas sociais são enviadas SOMENTE após a ETAPA 2 (identificação da dor). Nunca enviar fotos genéricas. A seleção é sempre contextualizada: a IA busca no banco o caso com a queixa mais similar à do paciente e envia com contexto personalizado.
      </div>

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 13: AGENDAMENTO — REGRAS DETALHADAS
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">Agendamento — regras detalhadas</h3>

      <div className="detail-table-wrap">
        <table className="detail-table">
          <thead><tr><th>Regra</th><th>Detalhe</th></tr></thead>
          <tbody>
            <tr><td className="td-label">Avaliação paga</td><td>Paciente só entra na agenda após pagamento de R$ 350. Sem exceções.</td></tr>
            <tr><td className="td-label">Tipos de avaliação</td><td>Presencial (preferência — conversão maior) e online. Ambas incluem avatar facial.</td></tr>
            <tr><td className="td-label">Duração</td><td>Aproximadamente 2 horas (avaliação + possibilidade de procedimento no mesmo dia).</td></tr>
            <tr><td className="td-label">Múltiplos procedimentos</td><td>Podem ser feitos na mesma sessão ("já está anestesiado, aproveita"). A IA informa essa possibilidade.</td></tr>
            <tr><td className="td-label">Google Calendar</td><td>Integração principal para consulta de disponibilidade e reserva de slots.</td></tr>
            <tr><td className="td-label">Lembrete</td><td>1 dia antes (até 9h da manhã) + re-confirmação às 17h30 se não respondeu o primeiro.</td></tr>
            <tr><td className="td-label">Pré-cadastro</td><td>Link do formulário de anamnese enviado após confirmação. Preenchimento solicitado até 24h antes.</td></tr>
            <tr><td className="td-label">No-show</td><td>Mensagem empática + oferta de reagendamento. Raro (paciente já pagou, poucos faltam).</td></tr>
            <tr><td className="td-label">Pagamento</td><td>IA conduz até a decisão e gera link de pagamento automático via InfinitePay (API POST /links). Pix gratuito + cartão até 12x. Webhook confirma pagamento em tempo real.</td></tr>
          </tbody>
        </table>
      </div>

      {/* ─────────────────────────────────────────────────────────
          SEÇÃO 14: PERMISSÕES DE ACESSO
          ───────────────────────────────────────────────────────── */}

      <h3 className="sub-title">Permissões de acesso</h3>
      <div className="profile-grid">
        <div className="profile-card admin">
          <div className="profile-role">Admin</div>
          <h4>Anderson Romanin</h4>
          <p>Gestor comercial e administrativo</p>
          <ul>
            <li>Dashboard completo com todas as métricas</li>
            <li>Relatórios e exportação de dados</li>
            <li>Histórico de todas as conversas IA-paciente</li>
            <li>Configurações do sistema e da IA</li>
            <li>Gestão de usuários e permissões</li>
          </ul>
        </div>
        <div className="profile-card admin">
          <div className="profile-role">Admin</div>
          <h4>Dra. Renata Souza</h4>
          <p>Especialista em harmonização facial</p>
          <ul>
            <li>Acesso completo ao sistema</li>
            <li>Validação e ajuste do playbook da IA</li>
            <li>Aprovação de provas sociais no banco</li>
            <li>Visualização de métricas e conversas</li>
          </ul>
        </div>
        <div className="profile-card operational">
          <div className="profile-role">Operacional</div>
          <h4>Atendente Comercial</h4>
          <p>Atendimento quando escalado pela IA</p>
          <ul>
            <li>Visualização de conversas atribuídas</li>
            <li>Intervenção manual em conversas ativas</li>
            <li>Processamento de pagamentos</li>
            <li>Sem acesso a configurações ou relatórios</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
