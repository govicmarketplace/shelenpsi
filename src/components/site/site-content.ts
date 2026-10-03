import {
  Radar,
  LineChart,
  Compass,
  Laptop,
  Home as HomeIcon,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  brand: {
    name: "Shelen Santos",
    role: "Psicóloga Comportamental • CRP-04/56080",
    tagline: "Rota Antiburnout",
  },
  contact: {
    email: "shelenpsi@gmail.com",
    phone: "+55 34 9253-0868",
    instagram: "@shelenpsi",
    whatsapp: "https://wa.me/5534925308688",
    location: "Online para o Brasil & Presencial",
  },
  nav: [
    { label: "Início", href: "#inicio" },
    { label: "A Rota", href: "#metodo" },
    { label: "Atendimentos", href: "#atendimentos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Dúvidas", href: "#faq" },
  ],
  // Default CTA label (used by final form + as fallback)
  ctaLabel: "Quero começar agora",
  hero: {
    eyebrow: "Rota Antiburnout",
    title: "Psicoterapia focada em Burnout para quem",
    titleHighlight: "cansou de viver no limite",
    subtitle:
      "Você sente um cansaço que não passa com o descanso e vive sobrecarregada? Conheça o acompanhamento terapêutico que te ajuda a sair do esgotamento sem precisar largar a sua carreira.",
    badges: ["Para mulheres de 25 a 45 anos", "Online e presencial"],
    image: "/images/shelen-psi-burnout2.png",
    imageAlt: "Shelen Santos, psicóloga, foto oficial",
    ctaLabel: "Quero sair da sobrecarga",
    secondaryCtaLabel: "Conhecer a Rota",
  },
  problems: {
    eyebrow: "Você no limite",
    title: "Talvez você tenha se",
    titleHighlight: "acostumado a viver com:",
    closingText:
      "Esses sintomas mostram que você está no limite do burnout. Mas a culpa não é sua. Existe um caminho prático para reorganizar seus padrões de comportamento e recuperar a sua energia.",
    ctaLabel: "Quero sair da sobrecarga",
  },
  methodology: {
    eyebrow: "A solução",
    title: "Conheça o Acompanhamento Terapêutico",
    titleHighlight: "Rota Antiburnout",
    intro:
      "Um método focado na Psicologia Comportamental Baseada em Evidências para identificar a raiz da sua sobrecarga no ambiente de trabalho e construir mudanças práticas.",
    ctaLabel: "Quero conhecer a Rota Antiburnout",
  },
  value: {
    eyebrow: "O que você alcança",
    title: "Iniciar a Rota Antiburnout vai transformar a sua rotina. Minha proposta é que você",
    titleHighlight: "alcance:",
    image: "/images/shelen-benefits.jpg",
    imageAlt: "Shelen Santos, psicóloga, foto oficial",
    ctaLabel: "Agendar minha primeira sessão",
  },
  logistics: {
    eyebrow: "Atendimentos",
    title: "Como funcionam os",
    titleHighlight: "atendimentos",
    ctaLabel: "Quero conhecer a Rota Antiburnout",
  },
  about: {
    eyebrow: "Sua guia",
    title: "Quem irá te guiar",
    titleHighlight: "nesta Rota?",
    paragraphs: [
      "Sou a Shelen Santos, psicóloga especialista em Psicologia Comportamental. Meu foco é ajudar mulheres de 25 a 45 anos que estão no limite do esgotamento e do burnout a recuperarem o controle de suas vidas.",
      "Trabalho com práticas baseadas em evidências para te ajudar a identificar a raiz da sua sobrecarga no trabalho e construir uma rotina mais leve e sustentável. Você não precisa largar a sua profissão para ter paz, você só precisa das ferramentas certas para reorganizar a sua rota.",
    ],
    credentials: [
      "Psicologia Comportamental",
      "Foco em Burnout",
      "Mulheres 25-45 anos",
      "Online e Presencial",
    ],
    education: [
      {
        degree: "Graduação em Psicologia",
        school: "Faculdade Pitágoras de Uberlândia",
      },
      {
        degree: "Pós-Graduação Lato Sensu",
        school:
          "Psicologia Comportamental e Cognitiva – Faculdade Venda Nova do Imigrante",
      },
    ],
    image: "/images/shelen-about.jpg",
    profileImage: "/images/shelen-about.jpg",
    name: "Shelen Santos",
    role: "Psicóloga Comportamental • CRP-04/56080",
    ctaLabel: "Falar com a Shelen no WhatsApp",
    whatsappUrl: "https://wa.me/5534925308688",
  },
  testimonials: {
    eyebrow: "Quem já começou",
    title: "O que dizem as mulheres que",
    titleHighlight: "decidiram sair da sobrecarga",
  },
  faq: {
    eyebrow: "Dúvidas comuns",
    title: "Perguntas",
    titleHighlight: "Frequentes",
    ctaLabel: "Quero sair da sobrecarga",
  },
  finalCta: {
    title: "O primeiro passo para sair da sobrecarga",
    titleHighlight: "começa agora.",
    subtitle:
      "Agende sua primeira sessão da Rota Antiburnout. Um espaço para entender sua rotina, mapear seus gatilhos e construir um caminho prático de volta para a sua energia.",
    ctaLabel: "Quero começar agora",
  },
  // Floating WhatsApp button (bottom-left, JoinChat style with hover balloon)
  floatingWhatsapp: {
    phone: "5534925308688",
    label: "Olá! Posso te ajudar?",
    message:
      "Olá, Shelen! Vim pelo site da Rota Antiburnout e gostaria de saber mais.",
  },
};

export const problems: {
  image: string;
  alt: string;
  title: string;
  description: string;
}[] = [
  {
    image: "/images/problem-cansaco.png",
    alt: "Mulher brasileira exausta trabalhando no computador em home office",
    title: "Cansaço constante",
    description:
      "Um cansaço profundo que não passa, mesmo após uma noite inteira de sono ou um final de semana de descanso.",
  },
  {
    image: "/images/problem-sobrecarga.png",
    alt: "Mulher brasileira na cama ao amanhecer olhando o celular com olhar preocupado",
    title: "Sobrecarga diária",
    description:
      "Uma sensação de estar sempre devendo algo no trabalho ou na vida pessoal, como se a lista nunca acabasse.",
  },
  {
    image: "/images/problem-culpa.png",
    alt: "Mulher brasileira no sofá com café e celular, pensativa e inquieta",
    title: "Culpa ao relaxar",
    description:
      "Uma culpa paralisante até mesmo na hora de relaxar, como se você não tivesse o direito de fazer uma pausa.",
  },
];

export const methodology: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Radar,
    title: "Gatilhos Invisíveis",
    description:
      "Mapeamos os gatilhos da sua rotina para entender exatamente o que está drenando a sua energia e causando o esgotamento.",
  },
  {
    icon: LineChart,
    title: "Ciclos Mensuráveis",
    description:
      "Trabalhamos com ciclos práticos de 4 sessões, onde você consegue enxergar a sua evolução e reorganizar seus padrões passo a passo.",
  },
  {
    icon: Compass,
    title: "Mudanças Práticas",
    description:
      "Você aprende a colocar limites e gerenciar o estresse para recuperar sua qualidade de vida, sem precisar abandonar a sua carreira.",
  },
];

export const valueProps: { title: string; description: string }[] = [
  {
    title: "Descanso sem culpa",
    description:
      "Aprender a se desconectar de verdade ao final do dia e aproveitar seus momentos de lazer.",
  },
  {
    title: "Clareza e Limites",
    description:
      "Saber dizer 'não' de forma estratégica e lidar com as exigências do ambiente de trabalho sem absorver tudo.",
  },
  {
    title: "Evolução visível",
    description:
      "Diferente de terapias sem foco, nosso acompanhamento é guiado para resultados práticos na sua realidade.",
  },
  {
    title: "Autonomia emocional",
    description:
      "Ferramentas validadas cientificamente para você dominar a ansiedade e não deixar que o estresse dite a sua vida.",
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
      "Sessões por videochamada com a mesma estrutura e qualidade do atendimento presencial. Acesso de qualquer lugar com privacidade.",
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
    highlights: ["Botafogo - RJ", "Tijuca - RJ", "Ambiente acolhedor"],
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
    text: "Cheguei à exaustão total do trabalho. A Rota Antiburnout me ajudou a enxergar meus gatilhos e, pela primeira vez, consegui descansar sem culpa. Minha rotina hoje é outra.",
    accent: "bg-rose-200 text-rose-800",
  },
  {
    name: "Rafael T.",
    initials: "RT",
    date: "Janeiro / 2025",
    rating: 5,
    text: "A terapia foi muito prática. Em poucos ciclos de 4 sessões eu já sentia evolução visível e tinha ferramentas reais para colocar limites no trabalho.",
    accent: "bg-emerald-200 text-emerald-800",
  },
  {
    name: "Camila R.",
    initials: "CR",
    date: "Novembro / 2024",
    rating: 5,
    text: "Eu achava que descansar era perda de tempo. Hoje consigo me desconectar ao final do dia e minha vida pessoal voltou a existir de verdade.",
    accent: "bg-amber-200 text-amber-800",
  },
  {
    name: "Joana P.",
    initials: "JP",
    date: "Setembro / 2024",
    rating: 5,
    text: "Não precisei largar minha carreira para ter paz. Aprendi a dizer não de forma estratégica e a organizar meus padrões. O método é guiado e faz sentido.",
    accent: "bg-rose-200 text-rose-800",
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "Como funcionam os ciclos de 4 sessões?",
    answer:
      "A Rota Antiburnout é desenhada para ser prática. A cada 4 sessões, nós reavaliamos seus padrões de comportamento e os gatilhos mapeados, garantindo que você tenha clareza do seu progresso no alívio da sobrecarga.",
  },
  {
    question: "Qual a sua abordagem?",
    answer:
      "Trabalho com Psicologia Comportamental Baseada em Evidências por meio da Rota Antiburnout, um método focado em identificar a raiz da sua sobrecarga no trabalho e construir mudanças práticas para recuperar sua energia.",
  },
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
    question: "Como é a primeira sessão?",
    answer:
      "A primeira sessão é o momento de você se apresentar, contar sobre sua rotina e o que está sentindo. É um espaço sem compromisso, no qual começamos a mapear seus gatilhos e definimos juntos se faz sentido seguirmos.",
  },
  {
    question: "Como funciona o atendimento online?",
    answer:
      "As sessões online acontecem por videochamada em plataforma segura. Você precisa apenas de um local privado e de uma boa conexão. Atendo mulheres em todo o Brasil e no exterior.",
  },
  {
    question: "Gostaria de atendimento presencial, é possível?",
    answer:
      "Sim. Tenho atendimentos presenciais em consultórios no Rio de Janeiro (Botafogo e Tijuca). Podemos combinar o melhor dia e horário para você.",
  },
];
