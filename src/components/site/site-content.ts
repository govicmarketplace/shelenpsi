import {
  HeartHandshake,
  Brain,
  Sparkles,
  Laptop,
  Home as HomeIcon,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  brand: {
    name: "Bruna Chelen",
    role: "Psicóloga Clínica • CRP 00/00000",
    tagline: "Terapia Cognitivo Comportamental",
  },
  contact: {
    email: "contato@brunachelen.com.br",
    phone: "+55 21 90000-0000",
    instagram: "@brunachelen.psi",
    whatsapp: "https://wa.me/5521900000000",
    location: "Botafogo & Tijuca - Rio de Janeiro, RJ",
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Como funciona", href: "#metodo" },
    { label: "Atendimentos", href: "#atendimentos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
  ],
  ctaLabel: "Agendar Atendimento",
  hero: {
    eyebrow: "Atendimento Online e Presencial",
    title: "A ansiedade e o esgotamento não precisam",
    titleHighlight: "ditar a sua vida",
    subtitle:
      "Psicoterapia baseada em Terapia Cognitivo Comportamental (TCC) para que você retome o equilíbrio emocional, a clareza e a sensação de controle sobre a própria rotina.",
    badges: ["Online para todo o Brasil", "Presencial no Rio de Janeiro"],
    image: "/images/hero-bruna.png",
    imageAlt: "Bruna Chelen, psicóloga clínica, sentada em um sofá aconchegante",
  },
  problems: {
    eyebrow: "Por onde começamos?",
    title: "Talvez você tenha se",
    titleHighlight: "acostumado a viver com:",
  },
  methodology: {
    eyebrow: "A abordagem",
    title: "Um processo terapêutico baseado em",
    titleHighlight: "TCC (Terapia Cognitivo Comportamental)",
    intro:
      "A TCC é uma das abordagens com maior evidência científica. Trabalha a relação entre pensamentos, emoções e comportamentos, com objetivos claros e práticos.",
  },
  value: {
    eyebrow: "O que você vai encontrar",
    title: "Iniciar terapia pode gerar dúvidas. Minha proposta é que você tenha:",
    titleHighlight: "",
    image: "/images/about-bruna.png",
    imageAlt: "Bruna Chelen sentada em uma poltrona, ambiente acolhedor",
  },
  logistics: {
    eyebrow: "Atendimentos",
    title: "Como funcionam os",
    titleHighlight: "atendimentos",
  },
  about: {
    eyebrow: "Quem irá lhe ajudar",
    title: "Uma jornada construída com",
    titleHighlight: "presença, escuta e técnica",
    paragraphs: [
      "Sou Bruna Chelen, psicóloga clínica formada pela UFRJ, com especialização em Terapia Cognitivo Comportamental. Atuo no tratamento de ansiedade, estresse crônico, esgotamento e dificuldades emocionais do dia a dia.",
      "Acredito em um espaço terapêutico seguro, livre de julgamentos, onde cada pessoa possa compreender seus padrões, desenvolver habilidades emocionais e construir uma relação mais saudável consigo mesma.",
    ],
    credentials: [
      "Graduação em Psicologia pela UFRJ",
      "Pós-graduação em TCC",
      "Atendimento online e presencial",
      "Foco em regulação emocional",
    ],
    image: "/images/about-bruna.png",
    profileImage: "/images/profile-bruna.png",
    name: "Bruna Chelen",
    role: "Psicóloga Clínica • CRP 00/00000",
  },
  testimonials: {
    eyebrow: "Quem já começou",
    title: "O que dizem as pessoas que",
    titleHighlight: "decidiram começar",
  },
  faq: {
    eyebrow: "Dúvidas comuns",
    title: "Perguntas",
    titleHighlight: "Frequentes",
  },
  finalCta: {
    title: "O primeiro passo é o mais importante.",
    titleHighlight: "Vamos dar esse passo juntos?",
    subtitle:
      "Agende sua conversa inicial sem compromisso. Será um espaço para você se apresentar e tirar dúvidas sobre o processo.",
  },
};

export const problems: {
  image: string;
  alt: string;
  title: string;
  description: string;
}[] = [
  {
    image: "/images/problem-burnout.png",
    alt: "Homem exausto trabalhando tarde da noite no laptop",
    title: "Esgotamento e cansaço constante",
    description:
      "A sensação de que a energia nunca é suficiente, dias que se repetem e a dificuldade de desligar mesmo quando seria hora de descansar.",
  },
  {
    image: "/images/problem-anxiety.png",
    alt: "Mulher deitada na cama com expressão preocupada",
    title: "Ansiedade e dificuldade para dormir",
    description:
      "Pensamentos acelerados à noite, preocupação antecipada e aquela sensação de que algo precisa ser resolvido o tempo todo.",
  },
  {
    image: "/images/problem-sadness.png",
    alt: "Homem sentado na beira da cama com as mãos na cabeça",
    title: "Tristeza e sensação de peso",
    description:
      "Dias em que tudo parece difícil, motivação que oscila e a impressão de estar distante de si mesmo e das pessoas ao redor.",
  },
];

export const methodology: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: HeartHandshake,
    title: "Compreensão inicial",
    description:
      "Um espaço para entender seu momento, sua história e os padrões que se repetem. Aqui construímos um vínculo seguro e sem julgamentos.",
  },
  {
    icon: Brain,
    title: "Plano terapêutico personalizado",
    description:
      "Definimos juntos objetivos claros e alcançáveis, organizando o processo em etapas que fazem sentido para a sua realidade.",
  },
  {
    icon: Sparkles,
    title: "Desenvolvimento de habilidades",
    description:
      "Reconhecer pensamentos automáticos, regular emoções e praticar novos comportamentos no dia a dia. Você ganha autonomia emocional.",
  },
];

export const valueProps: { title: string; description: string }[] = [
  {
    title: "Um espaço seguro e sem julgamentos",
    description:
      "Um ambiente acolhedor onde você pode falar sobre qualquer tema, no seu tempo, sem medo de avaliação.",
  },
  {
    title: "Estratégias baseadas em evidência",
    description:
      "Ferramentas práticas da TCC que ajudam a entender padrões e construir mudanças reais e sustentáveis.",
  },
  {
    title: "Foco em autonomia emocional",
    description:
      "Você aprende a reconhecer emoções, regular reações e tomar decisões mais alinhadas com o que importa para você.",
  },
  {
    title: "Atendimento flexível e próximo",
    description:
      "Sessões online para o Brasil e presenciais no Rio de Janeiro, com horários pensados para caber na sua rotina.",
  },
];

export const logistics: {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
  badge: string;
}[] = [
  {
    icon: Laptop,
    title: "Atendimentos Online",
    description:
      "Sessões por videochamada, com a mesma estrutura e qualidade do atendimento presencial. Acesso de qualquer lugar com privacidade.",
    highlights: [
      "Para todo o Brasil e exterior",
      "Plataforma segura e sigilosa",
      "Horários flexíveis",
    ],
    badge: "Brasil & Mundo",
  },
  {
    icon: HomeIcon,
    title: "Atendimentos Presenciais",
    description:
      "Encontros em consultório, em ambiente preparado para a sua comodidade. No Rio de Janeiro, com fácil acesso.",
    highlights: [
      "Botafogo - RJ",
      "Tijuca - RJ",
      "Ambiente acolhedor",
    ],
    badge: "Rio de Janeiro",
  },
];

export const testimonials: {
  name: string;
  initials: string;
  date: string;
  rating: number;
  text: string;
  accent: string;
}[] = [
  {
    name: "Mariana A.",
    initials: "MA",
    date: "Março / 2025",
    rating: 5,
    text: "Comecei a terapia sem saber o que esperar. Em poucas sessões já dormia melhor e entendia meus ciclos de ansiedade. A Bruna tem uma escuta muito cuidadosa.",
    accent: "bg-rose-200 text-rose-800",
  },
  {
    name: "Rafael T.",
    initials: "RT",
    date: "Janeiro / 2025",
    rating: 5,
    text: "Cheguei esgotado do trabalho. As ferramentas práticas da TCC me ajudaram a colocar limites reais e a recuperar energia. Mudou minha relação com o descanso.",
    accent: "bg-emerald-200 text-emerald-800",
  },
  {
    name: "Camila R.",
    initials: "CR",
    date: "Novembro / 2024",
    rating: 5,
    text: "Atendimento online no meu horário de almoço. Prático, sério e humano. Me sinto muito mais no controle das minhas emoções depois de alguns meses.",
    accent: "bg-amber-200 text-amber-800",
  },
  {
    name: "João P.",
    initials: "JP",
    date: "Setembro / 2024",
    rating: 5,
    text: "Sem julgamentos, com método. A combinação perfeita para mim. As sessões presenciais no Rio são em um espaço muito acolhedor.",
    accent: "bg-rose-200 text-rose-800",
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Você aceita plano de saúde?",
    answer:
      "Os atendimentos são particulares. Após cada sessão, emito recibo que pode ser usado para reembolso junto ao seu plano, conforme a cobertura contratada.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "Cada sessão tem duração aproximada de 50 minutos, com frequência semanal na maioria dos casos. O ritmo é definido em conjunto, de acordo com a sua necessidade.",
  },
  {
    question: "Qual a sua abordagem?",
    answer:
      "Trabalho com a Terapia Cognitivo Comportamental (TCC), uma abordagem com forte base científica, focada na relação entre pensamentos, emoções e comportamentos, com objetivos claros e práticos.",
  },
  {
    question: "Como é a conversa inicial?",
    answer:
      "A conversa inicial é o momento de você se apresentar, contar um pouco sobre o que está sentindo e tirar dúvidas. É um espaço sem compromisso, no qual definimos juntos se faz sentido seguirmos.",
  },
  {
    question: "Como funciona o atendimento online?",
    answer:
      "As sessões online acontecem por videochamada em plataforma segura. Você precisa apenas de um local privado e de uma boa conexão. Atendo pessoas em todo o Brasil e no exterior.",
  },
  {
    question: "Gostaria de atendimento presencial, é possível?",
    answer:
      "Sim. Tenho atendimentos presenciais em consultórios no Rio de Janeiro (Botafogo e Tijuca). Podemos combinar o melhor dia e horário para você.",
  },
];
