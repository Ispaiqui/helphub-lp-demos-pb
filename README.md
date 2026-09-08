# HelpHub — demos dos pacotes de landing page

Quatro landing pages de demonstração para **mostrar ao cliente** o que cada faixa do HelpHub entrega. O negócio é o mesmo em todas: **Empresa**, um serviço genérico com atendimento rápido, horário combinado e garantia por escrito.

As cores são **preto, branco e cinza de propósito**. Não há identidade do cliente, gradiente nem cor de destaque. O que muda de uma rota para a outra é densidade, copy e craft.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que o Next.js imprimir (por padrão `http://localhost:3000`).

```bash
npm run build
npm start
```

Node 20+ recomendado.

## Rotas

| Rota | Pacote | Preço de referência | O que o cliente vê |
| --- | --- | --- | --- |
| `/` | Índice HelpHub | — | Pitch curto e quatro cartões/linhas para as demos |
| `/demo/essencial` | Essencial | R$ 649,70 | Hero → benefícios → depoimento → FAQ → WhatsApp/formulário. Limpo, 1–2 cinzas, fade-up CSS. |
| `/demo/plus` | Plus | R$ 728,60 | Essencial + “como funciona” (3 passos) + regiões + oferta. CSS com stagger nos passos e bairros. |
| `/demo/avancado` | Avançado | R$ 842,30 | Dor → solução → prova → oferta → FAQ → CTA. Copy de conversão e microinterações (framer-motion). |
| `/demo/premium` | Premium | R$ 987,10 | O mesmo arco, com tipografia serifada, assimetria, CTAs em cascata, parallax leve e `next/image`. |

Cada demo leva um selo fixo no topo: `Demo HelpHub · Pacote X`, com links para as outras faixas.

## Como entregar ao cliente

1. Suba o repositório no GitHub (ou um preview da Vercel / similar).
2. Peça para abrir **no celular** e passar pelas quatro rotas, nessa ordem.
3. A conversa deixa de ser “o que vem no site” e vira “em qual faixa a gente entra”.
4. Lembre que o visual é neutro: a marca do cliente (cor, logo, tom) entra **depois** da escolha do pacote.

WhatsApp das páginas: `https://wa.me/5511999999999` (placeholder). O formulário valida no cliente e mostra um aviso de sucesso — **não há backend**.

## Pacote Avançado — Analytics e Search Console

No projeto entregue (não nesta demo), o Avançado inclui o encaixe de medição. Não inventamos IDs ao vivo aqui. Quando for publicar o site do cliente:

- **Google Analytics 4** — criar propriedade, gerar o ID `G-XXXXXXXX`, e inserir o snippet / `gtag` só em produção.
- **Google Search Console** — verificar o domínio (DNS ou arquivo HTML) e enviar o sitemap quando existir.
- Não colar IDs de outro projeto nem IDs de exemplo no código de produção.

O Premium herda esse cuidado e ainda pede fonte otimizada (`next/font`), imagens via `next/image` e JavaScript de cliente só onde precisa (formulário, WhatsApp fixo, motion).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4 (tokens em CSS variables)
- Server Components por padrão
- `framer-motion` **somente** em Avançado e Premium
- Formulário e WhatsApp flutuante são Client Components

## Escada de motion

Cada faixa sobe um degrau. `prefers-reduced-motion` desliga tudo. Sticky WhatsApp e o selo de demo não animam.

| Pacote | O que entra agora |
| --- | --- |
| Essencial | Fade-up CSS no hero, benefícios, depoimento, FAQ e contato. Zero `framer-motion`. |
| Plus | O mesmo CSS, com stagger nos 3 passos, regiões e linhas de oferta. |
| Avançado | `FadeUp` / `ProofCard` no arco inteiro (hero no mount, hover nos cartões de prova). |
| Premium | `Reveal`, `Stagger`, `RuleGrow`, `FloatCta` e parallax leve na fachada. |

**Depois (upsell, não nestas demos):** GSAP + ScrollTrigger só no Premium; Lottie/Rive pontual; MP4/WebM estático no hero; `@remotion/player` só em demo interna HelpHub.

**Nunca nestas demos:** Remotion no bundle da LP; bounce / loop infinito / autoplay com som; `framer-motion` no Essencial ou Plus; motion no índice `/`.

## Critérios desta demo

- Sem lorem ipsum
- Sem métrica inventada do tipo “+300% de conversão”
- Depoimentos concretos (inventados), sem nicho de ofício
- Tom direto, brasileiro, sem jargão de IA
