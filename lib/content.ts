export const whatsappNumber = "5511999999999";

export const whatsappHref = (text?: string) => {
  const message =
    text ??
    "Olá, Oficina Norte. Quero agendar um técnico para o ar-condicionado.";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const business = {
  name: "Oficina Norte",
  offer:
    "Manutenção preventiva e reparo de ar-condicionado residencial e comercial na Zona Norte de São Paulo.",
  audience:
    "Donos de imóvel e síndicos que querem atendimento rápido, sem ficar cobrando retorno.",
  differentiators: [
    "Técnicos certificados em gases refrigerantes",
    "Agendamento no mesmo dia, quando há vaga",
    "Garantia por escrito no serviço e nas peças trocadas",
  ],
} as const;

export const testimonial = {
  quote:
    "Em 2 horas resolveram o split da sala e deixaram tudo limpo. Marquei pelo WhatsApp sem enrolação.",
  name: "Carla M.",
  role: "síndica",
  place: "Residencial Aurora",
} as const;

export const packages = [
  {
    slug: "essencial",
    href: "/demo/essencial",
    name: "Essencial",
    price: "R$ 649,70",
    positioning:
      "Página única e direta: hero, benefícios, prova, FAQ e WhatsApp.",
    density: "Limpo · 1–2 cinzas · transições CSS",
  },
  {
    slug: "plus",
    href: "/demo/plus",
    name: "Plus",
    price: "R$ 728,60",
    positioning:
      "O Essencial com passo a passo e área de atendimento — confiança de bairro.",
    density: "Layout local · ainda só CSS",
  },
  {
    slug: "avancado",
    href: "/demo/avancado",
    name: "Avançado",
    price: "R$ 842,30",
    positioning:
      "Arco de conversão completo: dor, solução, prova, oferta e microinterações.",
    density: "Copy cheia · framer-motion",
  },
  {
    slug: "premium",
    href: "/demo/premium",
    name: "Premium",
    price: "R$ 987,10",
    positioning:
      "O mesmo arco, com tipografia, assimetria e motion de um degrau acima.",
    density: "Craft editorial · performance",
  },
] as const;

export type PackageSlug = (typeof packages)[number]["slug"];

export const faqs = [
  {
    q: "Vocês atendem no mesmo dia?",
    a: "Sim, quando há vaga na agenda. Pelo WhatsApp confirmamos horário em poucos minutos — sem deixar você esperando retorno no dia seguinte.",
  },
  {
    q: "É só residência ou também comércio?",
    a: "Os dois. Apartamento, casa, escritório e loja na Zona Norte. Síndico e dono de ponto comercial falam com o mesmo time.",
  },
  {
    q: "Tem garantia?",
    a: "Tem. O serviço sai com garantia por escrito. Prazo e cobertura dependem do tipo de reparo e das peças que forem trocadas — isso fica claro antes de começar.",
  },
  {
    q: "Preciso estar no imóvel?",
    a: "Alguém precisa receber o técnico: morador, zelador ou síndico. Combinamos quem abre a porta na hora do agendamento.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Você descreve o que está acontecendo no WhatsApp ou no formulário. Passamos o valor da visita e do diagnóstico antes de qualquer peça. Nada segue sem o seu ok.",
  },
] as const;

export const neighborhoods = [
  "Santana",
  "Tucuruvi",
  "Mandaqui",
  "Casa Verde",
  "Vila Guilherme",
  "Vila Maria",
  "Jardim São Paulo",
  "Carandiru",
  "Imirim",
  "Lauzane Paulista",
  "Tremembé",
  "Jaçanã",
  "Vila Medeiros",
  "Parque Novo Mundo",
] as const;

export const steps = [
  {
    n: "01",
    title: "Você chama",
    body: "WhatsApp ou formulário. Diz o que o aparelho está fazendo — pingando, sem gelar, barulho, cheiro.",
  },
  {
    n: "02",
    title: "A gente confirma o horário",
    body: "Se houver vaga, encaixamos no mesmo dia. Você recebe o nome do técnico e a janela de chegada.",
  },
  {
    n: "03",
    title: "O técnico resolve e registra",
    body: "Diagnóstico na frente de quem receber. Peça só com aprovação. Serviço com garantia por escrito.",
  },
] as const;

export const benefits = [
  {
    n: "01",
    title: "Técnico certificado",
    body: "Quem entra no imóvel tem certificação em gases refrigerantes e sabe o que pode e o que não pode improvisar.",
  },
  {
    n: "02",
    title: "Mesmo dia, quando cabe",
    body: "Agenda aberta pelo WhatsApp. Sem formulário eterno e sem “retorno até sexta”.",
  },
  {
    n: "03",
    title: "Garantia no papel",
    body: "Você recebe o que foi feito, o que foi trocado e até quando vale a garantia. Sem letra miúda no Zap.",
  },
] as const;

export const proofPoints = [
  {
    title: "Certificação, não “experiência de anos”",
    body: "O técnico que sobe no Residencial Aurora ou entra na loja da Casa Verde tem papel de gases refrigerantes. Não mandamos ajudante sozinho no primeiro contato.",
  },
  {
    title: "Horário combinado, não “passamos aí”",
    body: "Janela de chegada no WhatsApp. Se atrasar, avisamos. Síndico e comércio não podem ficar o dia inteiro esperando.",
  },
  {
    title: "Orçamento antes da peça",
    body: "Visita e diagnóstico têm valor combinado. Compressor, placa ou gás só entram depois do seu sim. A garantia sai por escrito.",
  },
] as const;

export const offerItems = [
  {
    title: "Visita e diagnóstico",
    body: "Checagem do split, janela ou cassete. Valor da visita combinado no WhatsApp, antes de sair o técnico.",
  },
  {
    title: "Manutenção preventiva",
    body: "Limpeza, drenagem, filtros e leitura de gás. O tipo de visita que evita a sala quente no meio da semana.",
  },
  {
    title: "Reparo",
    body: "Vazamento, placa, motor, drenagem entupida. Peça só com aprovação. Residência e comércio.",
  },
] as const;
