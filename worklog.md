---
Task ID: 1
Agent: main (Z.ai Code)
Task: Analyze attached site screenshot (clinical psychologist landing page for "Bruna Chelen") and recreate it as a React + Tailwind CSS frontend in the existing Next.js 16 project.

Work Log:
- Used VLM skill (z-ai vision CLI) to analyze the uploaded screenshot at /home/z/my-project/upload/site chelen.png → produced detailed analysis at image-analysis.json (layout, palette, copy, icons, sections, style).
- Identified brand: "Bruna Chelen" psychologist, Portuguese (pt-BR) copy, sections: Hero, Problems (3 cards), Methodology (TCC, 3 steps), Value Proposition, Logistics (Online vs In-person), About, Testimonials, FAQ, repeated green CTAs.
- Used image-generation skill (z-ai image CLI) to create 6 custom images saved to /public/images/: hero-bruna.png, problem-burnout.png, problem-anxiety.png, problem-sadness.png, about-bruna.png, profile-bruna.png.
- Updated src/app/globals.css with warm wellness palette (dusty rose #c98a7e, soft beige #f3e6df, cream #faf3ef, action green #3ab777, dark text #5a463f) via custom CSS vars --brand-*.
- Updated src/app/layout.tsx: switched font to Montserrat (300-800), set lang="pt-BR", wrote proper SEO metadata.
- Built modular component architecture:
  - src/components/site/site-content.ts (single source of truth for all Portuguese copy & data)
  - src/components/site/cta-button.tsx (reusable green CTA)
  - src/components/site/section-heading.tsx (eyebrow + headline with rose gradient)
  - src/components/site/header.tsx (client, sticky, mobile menu, scroll-aware)
  - src/components/site/footer.tsx (4-col, contact, social, copyright)
  - src/components/site/sections/hero.tsx (headline, subtitle, CTAs, badges, image with floating location/online cards, social proof)
  - src/components/site/sections/problems.tsx (3 image cards with overlay + numbered badges)
  - src/components/site/sections/methodology.tsx (3 TCC step cards w/ icons + connector)
  - src/components/site/sections/value-proposition.tsx (split image+checklist layout, floating quote)
  - src/components/site/sections/logistics.tsx (Online vs Presencial comparison cards)
  - src/components/site/sections/about.tsx (image with circular profile, credentials grid, name card)
  - src/components/site/sections/testimonials.tsx (4 reviews, 5-star, quote icon)
  - src/components/site/sections/faq.tsx (shadcn Accordion, 6 PT questions)
  - src/components/site/sections/final-cta.tsx (gradient banner + working lead form)
- Added Prisma Lead model (schema.prisma) + ran `bun run db:push`.
- Added POST/GET API route at src/app/api/lead/route.ts (validates name+email, persists to SQLite).
- Wired page.tsx as server component that counts existing leads and renders all sections in order inside a min-h-screen flex-col wrapper (sticky footer pattern).
- Ran `bun run lint` → clean.
- Started dev server (port 3000) detached via `setsid bash -c 'exec bun run dev'` so it survives between bash calls.
- Self-verified with agent-browser:
  - Page loads (HTTP 200, ~440KB), all sections render.
  - VLM verification of full screenshot: "production-ready", no broken images, palette matches, hierarchy correct.
  - FAQ accordion expands/collapses (expanded=true confirmed).
  - Lead form: filled all fields, clicked Online format, clicked submit.
  - First submission failed silently — root cause: "Indiferente" button used empty-string value which failed `!form.format` validation. Fixed by changing value to "indiferente" and removing format from required validation. Re-tested → success state "Recebido com carinho!" appeared, POST /api/lead 201 in dev log, DB count went 1→2.
  - Mobile (390×844): hamburger menu opens (expanded=true, label switches to "Fechar menu").
  - Desktop (1440×900): nav link "Atendimentos" smooth-scrolls URL to /#atendimentos.
  - Final VLM check: "All good. No visual issues detected."
- No runtime/console errors throughout.

Stage Summary:
- Production-ready single-route (/) Next.js 16 landing page in Portuguese for psychologist "Bruna Chelen".
- Warm wellness palette + Montserrat font + 6 AI-generated images + shadcn Accordion.
- 9 content sections + sticky header + sticky footer + working lead form persisted to SQLite via /api/lead.
- All interactivity browser-verified (FAQ accordion, mobile menu, lead form DB write, anchor nav).
- Files of note: src/app/page.tsx, src/app/layout.tsx, src/app/globals.css, src/app/api/lead/route.ts, prisma/schema.prisma (Lead model), src/components/site/* and src/components/site/sections/*.

---
Task ID: 2
Agent: main (Z.ai Code)
Task: Atualizar a copy do site para o foco em "Rota Antiburnout" (psicoterapia para burnout em mulheres 25-45 anos), conforme 6 seções detalhadas pelo usuário.

Work Log:
- Atualizei src/components/site/site-content.ts com toda a nova copy em PT-BR:
  - Hero: "Psicoterapia focada em Burnout para quem cansou de viver no limite" + subtítulo + CTA "Quero sair da sobrecarga" + secondary CTA "Conhecer a Rota"
  - Problems: cards "Cansaço constante", "Sobrecarga diária", "Culpa ao relaxar" + texto de fechamento sobre limite do burnout
  - Methodology: "Conheça o Acompanhamento Terapêutico Rota Antiburnout" + 3 blocos (Gatilhos Invisíveis / Ciclos Mensuráveis / Mudanças Práticas) com ícones Radar/LineChart/Compass + CTA "Quero conhecer a Rota Antiburnout"
  - Benefits: 4 checks (Descanso sem culpa / Clareza e Limites / Evolução visível / Autonomia emocional) + CTA "Agendar minha primeira sessão"
  - About: "Quem irá te guiar nesta Rota?" + nova bio focada em mulheres 25-45 + credenciais atualizadas + CTA WhatsApp "Falar com a Bruna no WhatsApp"
  - Testimonials: reescritos para falar de evolução na rotina de trabalho, parar de sentir culpa ao descansar, terapia prática
  - FAQ: adicionada "Como funcionam os ciclos de 4 sessões?" no topo + atualizada "Qual a sua abordagem?" para mencionar Rota Antiburnout
  - FinalCta: novo título/subtítulo + CTA "Quero começar agora"
- Adicionei CTAs por seção (em vez do ctaLabel global único).
- Atualizei CtaButton para suportar URLs externas (WhatsApp abre em nova aba com target=_blank) e ícone customizado.
- Atualizei problems.tsx para usar novo prop closingText (texto de fechamento sobre limite do burnout).
- Atualizei methodology.tsx para usar ctaLabel (antes era hardcoded "Iniciar conversa inicial").
- Adicionei CTA button no final do value-proposition.tsx (antes não tinha).
- Adicionei CTA WhatsApp no about.tsx (variante outline, ícone MessageCircle, link externo).
- Atualizei hero.tsx para usar secondaryCtaLabel (em vez de "Conhecer o método") e troquei "Pacientes..." por "Mulheres que já começaram a Rota".
- Atualizei header.tsx (desktop + mobile) para "Quero sair da sobrecarga".
- Atualizei logistics.tsx bottom card para mencionar Rota Antiburnout.
- Atualizei final-cta.tsx social proof para "Mulheres que já começaram a Rota Antiburnout".
- Atualizei layout.tsx metadata: title "Bruna Chelen | Rota Antiburnout - Psicologia Comportamental" + description + keywords focados em burnout.
- Atualizei page.tsx para passar todos os novos props (closingText, secondaryCtaLabel, whatsappUrl, ctaLabels por seção).
- Lint: bun run lint → limpo.
- Dev server recarregou via Fast Refresh (HMR).
- Verificação com agent-browser:
  - Title do browser: "Bruna Chelen | Rota Antiburnout - Psicologia Comportamental" ✓
  - Hero headline + 2 CTAs presentes ✓
  - Problems 3 cards com novos títulos + texto de fechamento ✓
  - Methodology 3 blocos (Gatilhos Invisíveis/Ciclos Mensuráveis/Mudanças Práticas) + CTA ✓
  - Benefits 4 checks + CTA "Agendar minha primeira sessão" ✓
  - About: título "Quem irá te guiar nesta Rota?" + CTA WhatsApp href=https://wa.me/5521900000000 (externo, target=_blank) ✓
  - FAQ: "Como funcionam os ciclos de 4 sessões?" como 1ª pergunta, expande corretamente ✓
  - FAQ "Qual a sua abordagem?" resposta atualizada menciona Rota Antiburnout ✓
  - VLM final: "page renders correctly according to all specified criteria. No broken CTAs or text overflow."
  - Sem erros de console/runtime.

Stage Summary:
- Copy 100% atualizada para o posicionamento "Rota Antiburnout" (burnout em mulheres 25-45).
- 6 seções do brief do usuário + header/footer/final-cta todas alinhadas com a nova mensagem.
- CTA WhatsApp funcional (link externo abre em nova aba) na seção Sobre.
- FAQ ganhou a pergunta sobre ciclos de 4 sessões e a resposta da abordagem agora cita a Rota.
- Metadados SEO atualizados para "Rota Antiburnout".
- Tudo verificado no browser sem erros.

---
Task ID: 3
Agent: main (Z.ai Code)
Task: Remover o menu do header, colocar logo + nome "Shelen Santos" no header, remover o rodapé, e adicionar botão flutuante do WhatsApp no canto inferior esquerdo (estilo JoinChat) com balãozinho ao passar o mouse.

Work Log:
- Atualizei src/components/site/site-content.ts:
  - brand.name: "Bruna Chelen" → "Shelen Santos"
  - about.name/paragraphs/ctaLabel: "Bruna" → "Shelen" (incl. "Falar com a Shelen no WhatsApp")
  - hero.imageAlt: atualizado para "Shelen Santos"
  - Adicionei bloco floatingWhatsapp: { phone: "5521900000000", label: "Olá! Posso te ajudar?", message: "Olá, Shelen! Vim pelo site da Rota Antiburnout e gostaria de saber mais." }
- Reescrevi src/components/site/header.tsx:
  - Removi a nav (links Início/A Rota/Atendimentos/etc.) e o botão CTA "Quero sair da sobrecarga".
  - Removi o menu hambúrguer mobile e todo o estado open.
  - Mantive só o logo (ícone HeartHandshake em círculo rosa) + nome "Shelen Santos" + tagline "ROTA ANTIBURNOUT", left-aligned, com o efeito sticky/scroll-aware preservado.
  - z-40 para não sobrepor o FloatingWhatsApp (z-50).
- Criei src/components/site/floating-whatsapp.tsx (client component):
  - Botão verde fixo bottom-5 left-5, z-50, 56x56px, com SVG oficial do WhatsApp.
  - Ring pulsante (animate-ping) em verde #25D366 com opacity-40 atrás do botão.
  - Balão branco à direita do botão com seta apontando para a esquerda:
    - Texto principal: label ("Olá! Posso te ajudar?")
    - Subtexto: "Toque para conversar no WhatsApp"
    - Botão X (dismiss) no canto do balão quando auto-shown.
  - Comportamento:
    - Desktop (hover: hover): balão oculto por padrão, aparece no hover do grupo (group-hover via CSS).
    - Mobile/touch (hover: none): balão auto-aparece após 2.5s (matchMedia) e fica visível; pode ser dispensado com o X.
  - Link: https://wa.me/{phone}?text={message} com target=_blank, rel=noreferrer noopener.
  - aria-label "Falar no WhatsApp".
  - print:hidden para não aparecer em impressão.
- Atualizei src/app/page.tsx:
  - Removi import e uso de SiteFooter (rodapé removado).
  - Removi prop nav do SiteHeader.
  - Adicionei <FloatingWhatsApp phone/label/message /> como último elemento (irmão do main, fixed).
  - Como o FinalCta já tem lista de contato (telefone, e-mail, sessões, espaço seguro), ele substitui naturalmente o rodapé.
- Atualizei src/app/layout.tsx metadata: title/keywords/openGraph/twitter/author todos trocados de "Bruna Chelen" para "Shelen Santos".
- Lint: bun run lint → limpo.
- Verificação com agent-browser:
  - Desktop 1440x900: header mostra só "Shelen Santos ROTA ANTIBURNOUT" (sem nav, sem CTA) ✓; floating button verde no canto inferior esquerdo ✓; balão "Olá! Posso te ajudar?" visível ✓ (headless matchMedia trata como mobile); href do botão = https://wa.me/5521900000000?text=Olá,Shelen!... ✓; 0 tags <footer> no HTML ✓.
  - VLM desktop: confirma header sem menu, botão verde bottom-left com balão, sem footer.
  - Mobile 390x844: header só com logo+nome (sem hambúrguer) ✓; botão+balão bottom-left ✓; headline do hero completa (wrap em 5 linhas, sem corte) ✓; subtítulo e 2 CTAs visíveis ✓.
  - VLM mobile: confirma tudo; "1 Issue" badge é só o indicador do Next.js dev tools (não existe em produção).
  - Sem erros de console/runtime.

Stage Summary:
- Header minimalista: só logo + "Shelen Santos" + tagline (menu removido).
- Rodapé removido; o bloco FinalCta (com contato + formulário) funciona como fechamento da página.
- Botão flutuante do WhatsApp estilo JoinChat no canto inferior esquerdo, com balão de hover no desktop e auto-show no mobile.
- Nome da psicóloga atualizado para "Shelen Santos" em todo o site (brand, about, CTAs, metadata).
- Página agora é focada em conversão no WhatsApp: floating button sempre disponível + CTA WhatsApp na seção Sobre + seções com CTAs verdes que rolam até o formulário.

---
Task ID: 4
Agent: main (Z.ai Code)
Task: Reformulação completa e ajustes de dados em 5 seções da landing page (Hero, Problemas, Benefícios, Sobre, Agendamento) com foco em CRO.

Work Log:
- Analisei as 3 fotos oficiais anexas com VLM (Screenshot_2.png quadrada, WhatsApp (3) landscape, WhatsApp (4) portrait) → atribuição: hero=portrait, benefits=landscape, about+avatar=quadrada.
- Copiei as 3 fotos para public/images/: shelen-hero.jpg, shelen-benefits.jpg, shelen-about.jpg.
- Gerei 3 novas imagens dos cards de problema (mulheres brasileiras 25-45) via image-generation: problem-cansaco.png (exausta no computador), problem-sobrecarga.png (na cama ao amanhecer), problem-culpa.png (no sofá com café/celular pensativa).
- Criei componente reutilizável WhatsAppIcon (src/components/site/whatsapp-icon.tsx) com o SVG oficial do WhatsApp.
- Atualizei site-content.ts:
  - contact: email "shelenpsi@gmail.com", phone "+55 34 9253-0868", whatsapp "https://wa.me/5534925308688", location "Online para o Brasil & Presencial".
  - hero.image → "/images/shelen-hero.jpg", hero.imageAlt → "Shelen Santos, psicóloga, foto oficial", hero.badges atualizado.
  - problems: 3 cards com novas imagens + alts descrevendo mulheres brasileiras.
  - value.image → "/images/shelen-benefits.jpg".
  - about: image + profileImage → "/images/shelen-about.jpg"; role → "Psicóloga Comportamental • CRP-04/56080"; adicionado education[] com 2 itens (Graduação Pitágoras + Pós Venda Nova).
  - brand.role → "Psicóloga Comportamental • CRP-04/56080".
  - floatingWhatsapp.phone → "5534925308688".
  - Removido import não usado MessageCircle.
- Atualizei hero.tsx:
  - REMOVI completamente o pill/eyebrow "• ROTA ANTIBURNOUT" acima do H1 (otimização de espaço visual conforme solicitado).
  - Agora o H1 é o primeiro elemento da coluna de copy.
  - Removi a prop eyebrow do HeroProps type + do page.tsx (eyebrow ainda existe no data mas não é renderizado).
- Atualizei about.tsx:
  - Adicionei prop education[] ao tipo.
  - Substituí o card decorativo "Formação / UFRJ · TCC" por um selo de educação que lista os 2 itens: "Graduação em Psicologia: Faculdade Pitágoras de Uberlândia" + "Pós-Graduação Lato Sensu: Psicologia Comportamental e Cognitiva – Faculdade Venda Nova do Imigrante".
  - Substituí o CTA WhatsApp (que usava CtaButton com ícone MessageCircle genérico) por um <a> custom com WhatsAppIcon oficial (SVG do logo do WhatsApp), estilo outline rosa, hover preenche.
  - Aumentei altura da imagem principal para acomodar o selo de educação maior.
- Atualizei final-cta.tsx:
  - Texto de prova social: "Mais de centenas de mulheres já começaram a Rota Antiburnout." (era "Mais de X mulheres..." com número dinâmico do DB).
  - Removi a prop savedLeads (não usada) do tipo + da função + do page.tsx.
  - Removi o await db.lead.count() e o import db do page.tsx (não precisa mais do banco para essa seção).
- Refatorei floating-whatsapp.tsx para usar WhatsAppIcon (reutilizável) em vez do SVG inline.
- Atualizei layout.tsx metadata: author "Shelen Santos" (já estava), title/keywords/openGraph/twitter já tinham Shelen Santos.
- Lint: bun run lint → limpo.
- Verificação com agent-browser:
  - Hero: H1 no topo (sem pill eyebrow), imagem shelen-hero.jpg, badges ONLINE/PRESENCIAL ✓.
  - Problems: 3 imagens (problem-cansaco, problem-sobrecarga, problem-culpa) mostrando mulheres ✓.
  - Benefits: imagem shelen-benefits.jpg + balão de citação ✓.
  - About: imagem shelen-about.jpg (principal + avatar circular), selo Formação com Pitágoras + Venda Nova, CRP-04/56080, CTA WhatsApp com ícone oficial ✓.
  - Final CTA: telefone +55 34 9253-0868, email shelenpsi@gmail.com, "Mais de centenas de mulheres..." ✓.
  - Floating WhatsApp: href wa.me/5534925308688 com mensagem pré-preenchida ✓.
  - About WhatsApp CTA: href wa.me/5534925308688 ✓.
  - VLM final: "H1 at the very top, no pill above it" ✓; "All 3 cards display photos of women, no men or elderly" ✓; "FORMAÇÃO card lists Pitágoras + Venda Nova" ✓; "WhatsApp button present" ✓; "No obvious visual bugs".
  - Sem erros de console/runtime.

Stage Summary:
- 5 seções reformuladas conforme brief de CRO:
  1. Hero: eyebrow pill removido, H1 elevado, foto oficial shelen-hero.jpg, badges mantidos.
  2. Problems: 3 fotos de mulheres brasileiras 25-45 (alinhadas ao público-alvo).
  3. Benefits: foto oficial shelen-benefits.jpg + balão de citação mantido.
  4. About: foto oficial shelen-about.jpg (principal + avatar), selo de formação com 2 itens (Pitágoras + Venda Nova), CRP-04/56080, CTA WhatsApp com ícone oficial do WhatsApp (SVG).
  5. Agendamento: telefone +55 34 9253-0868, email shelenpsi@gmail.com, prova social "Mais de centenas de mulheres...".
- Componente WhatsAppIcon reutilizável criado (usado no About CTA + floating button).
- Telefone/WhatsApp consistente em todo o site (5534925308688).
- Lint limpo, sem erros, tudo verificado no browser.

---
Task ID: 5
Agent: main (Z.ai Code)
Task: Criar efeito de animação Scroll Reveal (fade in + slide up) aplicável via classe .reveal em qualquer elemento, com suporte a atraso (stagger) via .delay-100, .delay-200 etc.

Work Log:
- Adicionei ao src/app/globals.css o sistema completo de Scroll Reveal:
  - `.reveal` { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; will-change: opacity, transform; }
  - `.reveal.is-visible` { opacity: 1; transform: translateY(0); } (estado final quando o elemento entra no viewport)
  - Delays com escopo `.reveal` (maior especificidade, sem conflito com Tailwind): .delay-100 (0.1s), .delay-200 (0.2s), .delay-300 (0.3s), .delay-400 (0.4s), .delay-500 (0.5s), .delay-700 (0.7s)
  - @media (prefers-reduced-motion: reduce) → força opacity:1 + transform:none + transition:none (acessibilidade).
- Criei src/components/site/scroll-reveal.tsx (client component "renderless" — retorna null):
  - useEffect no mount: cria IntersectionObserver com threshold 0.15 e rootMargin "0px 0px -8% 0px" (dispara quando 15% do elemento está visível, ligeiramente antes de fully in view).
  - Quando um `.reveal` entra no viewport → adiciona `.is-visible` e faz unobserve (anima só uma vez, não reseta ao rolar de volta).
  - Função scan() observa todos os `.reveal:not(.is-visible)`; chamada no mount.
  - MutationObserver no body (childList + subtree) → re-scan quando novos `.reveal` são adicionados ao DOM (cobre re-renders client-side).
  - Fallback: se IntersectionObserver não existe ou prefers-reduced-motion, revela tudo imediatamente.
  - Cleanup: disconnect dos 2 observers no unmount.
- Atualizei src/app/layout.tsx:
  - Importei e adicionei <ScrollReveal /> dentro do <body> (depois de children) — roda globalmente uma única vez.
  - Adicionei <noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript> como fallback para usuários sem JS (conteúdo não fica invisível).
- Apliquei `.reveal` (+ delays de stagger) nos elementos-chave de cada seção:
  - SectionHeading (componente compartilhado): `.reveal` na raiz → todos os títulos de seção animam.
  - Hero: H1 (reveal), subtitle (delay-100), grupo de CTAs (delay-200), badges (delay-300), mini social proof (delay-500), imagem (delay-200). Cascata suave na entrada.
  - Problems: 3 cards com `reveal delay-${(i+1)*100}` (100/200/300ms stagger); closing text card com `.reveal`.
  - Methodology: intro com `.reveal`; 3 step cards com `reveal delay-${(idx+1)*100}` (stagger).
  - Value Proposition: imagem com `.reveal`; 4 benefit items com `reveal delay-${(idx+1)*100}` (stagger).
  - Logistics: 2 cards com `reveal delay-${(idx+1)*100}` (stagger).
  - About: imagem com `.reveal`; eyebrow (reveal), título (delay-100), parágrafos (delay-200), 4 credentials com `reveal delay-${(idx+1)*100}` (stagger), name card (delay-400), WhatsApp CTA (delay-500). Cascata completa do topo ao CTA.
  - Testimonials: 4 cards com `reveal delay-${idx%2===0?1:2 * 100}` (stagger 100/200 alternando, por coluna do grid 2x2).
  - FAQ: container do Accordion com `.reveal`; card "Ainda com dúvidas?" com `.reveal`.
  - Final CTA: coluna copy com `.reveal`; form card com `reveal delay-200`.
- Lint: bun run lint → limpo.
- Verificação com agent-browser:
  - Página carrega com 44 elementos `.reveal` no DOM.
  - No load: 6 elementos do hero (que estão no viewport) receberam `.is-visible` imediatamente.
  - Após scroll down 600px: 4 elementos do problems section revelados (heading + 3 cards stagger).
  - Após scroll to bottom: todos os 44 elementos com `.is-visible` (0 restantes escondidos).
  - Após scroll back to top: 44 ainda visíveis (animação é one-way, não reset — comportamento correto).
  - Sem erros de console/runtime.
  - VLM final: "page renders fully with all content visible, no blank sections, layout intact".

Stage Summary:
- Sistema de Scroll Reveal completo e reutilizável:
  - Classe `.reveal` aplicável em qualquer elemento HTML (basta adicionar a classe).
  - Animação: opacity 0→1 + translateY(30px→0), duração 0.6s, ease-out.
  - Stagger: classes `.delay-100` a `.delay-700` para entrada em cascata de cards lado a lado.
  - Dispara quando o elemento entra no viewport (IntersectionObserver, threshold 15%).
  - Anima apenas uma vez (não repete ao rolar de volta).
  - Acessível: respeita prefers-reduced-motion; tem fallback <noscript> para usuários sem JS.
  - MutationObserver pega elementos adicionados dinamicamente.
- Aplicado em ~44 elementos: títulos, cards, imagens, blocos de texto, CTAs em todas as seções.
- Lint limpo, sem erros, verificado no browser com scroll real.

---
Task ID: 6
Agent: main (Z.ai Code)
Task: Corrigir problema "o site ficou sem carregar" — a página aparecia em branco/invisível por causa do efeito Scroll Reveal.

Work Log:
- Diagnóstico: A CSS `.reveal { opacity: 0 }` escondia TODO o conteúdo por padrão. O JavaScript (IntersectionObserver) precisava rodar para revelar os elementos, mas se o JS demorava/falhava (ou antes da hidratação), a página ficava invisível.
- Confirmei o problema com agent-browser: 41 de 44 elementos `.reveal` estavam invisíveis (opacity:0) — só 3 tinham `.is-visible`.
- Apliquei o padrão correto de Progressive Enhancement (3 camadas de proteção contra página em branco):

1. CSS (globals.css): escopoei o estado oculto sob a classe `.js-ready`:
   - Antes: `.reveal { opacity: 0 }` (escondia SEMPRE, mesmo sem JS)
   - Depois: `.js-ready .reveal { opacity: 0 }` (só esconde quando JS confirma que está pronto)
   - Resultado: sem JS (ou se JS falha), o conteúdo fica visível por padrão.

2. Inline head script (layout.tsx `<head>`): roda ANTES do body renderizar:
   - `document.documentElement.classList.add('js-ready')` — ativa o estado oculto só quando JS está disponível.
   - Safety timeout de 2.5s: se 0 elementos foram revelados (JS quebrou completamente), remove `.js-ready` → tudo fica visível.

3. Body-end inline script (layout.tsx, depois de `{children}`): roda logo após o HTML ser parseado, ANTES da hidratação do React:
   - `getBoundingClientRect()` em cada `.reveal` não-revelado.
   - Se o elemento está no viewport (above the fold), adiciona `.is-visible` imediatamente.
   - Resultado: conteúdo acima da dobra é revelado sem esperar a hidratação → sem flash de página invisível.

4. ScrollReveal component (useEffect): mantém o IntersectionObserver para elementos abaixo da dobra — revela ao rolar.

- Removi o `<noscript>` fallback (não precisa mais — a CSS base já mantém conteúdo visível sem JS).
- Lint: bun run lint → limpo.
- Verificação com agent-browser (viewport 1440x900):
  - `js-ready` presente no `<html>` ✓
  - On load: 6 elementos hero revelados (H1, subtitle, CTAs, badges, social proof, imagem) ✓
  - Após scroll to bottom: todos os 44 elementos com `.is-visible`, 0 escondidos ✓
  - Após scroll back to top: 44 ainda visíveis (one-way, não reset) ✓
  - Sem erros de console/runtime ✓
  - VLM final: "Hero fully visible with headline, subtitle, CTAs, photo. No blank sections. Page looks complete and not broken."

Stage Summary:
- Problema de página em branco RESOLVIDO com 3 camadas de proteção:
  1. CSS scoped em `.js-ready` — conteúdo visível por padrão sem JS.
  2. Head script + safety timeout — ativa animação só quando JS pronto, com fallback de 2.5s.
  3. Body-end script — revela above-the-fold imediatamente (antes da hidratação), eliminando o flash invisível.
- Animação Scroll Reveal continua funcionando: above-the-fold anima na entrada, below-the-fold anima ao rolar.
- Acessível: respeita prefers-reduced-motion; sem JS o conteúdo fica todo visível.
- Lint limpo, sem erros, verificado no browser.

---
Task ID: 10
Agent: main (Z.ai Code)
Task: Substituir a foto do hero por nova foto anexada + corrigir erro de hidratação (React Hydration Error) no hero.tsx linha 44.

Work Log:
- Analisei a nova foto: Screenshot_2.png (modificada hoje 2026-10-03 14:08, 562x566). VLM confirmou: orientação vertical/retrato, enquadramento meio-corpo, blazer azul + top rosa, braços cruzados, expressão confiante/seria — adequada para hero banner.
- Substituí a foto do hero: cp Screenshot_2.png → public/images/shelen-hero.jpg (MD5 verificado: de1f4dcae5b0552e73e4c0e263b962fb). O path no site-content.ts (/images/shelen-hero.jpg) permanece o mesmo, só o arquivo foi trocado.
- Tags do hero verificadas (hero.tsx): badge "Online" = "Brasil & Mundo" ✓; badge "Presencial" = "Rio de Janeiro" ✓ (mantidas conforme solicitação do usuário).

- Diagnóstico do erro de hidratação:
  - Console do browser mostrava diff de mismatch:
    + className="reveal delay-500 mt-10 flex items-center gap-4" (servidor)
    - className="reveal delay-500 mt-10 flex items-center gap-4 is-visible" (cliente)
  - Causa: o componente ScrollReveal usava useLayoutEffect (depois useEffect) para adicionar a classe `.is-visible` via classList.add() (manipulação direta do DOM que bypassa o virtual DOM). O React 19 (modo dev) re-checa o DOM após os efeitos e detecta a classe extra `is-visible` que não estava no HTML renderizado pelo servidor → mismatch.
  
- Correção aplicada (conforme sugestão do usuário): adicionei `suppressHydrationWarning` nas tags afetadas:
  - hero.tsx: H1 (linha 44), <p> subtítulo, <div> grupo de CTAs, <ul> badges, <div> social proof, <div> container da imagem — todos os elementos com classe `reveal`.
  - section-heading.tsx: div raiz (componente compartilhado por todas as seções) — ganha `suppressHydrationWarning` para evitar mismatch em todos os títulos de seção.
  - Também mudei o ScrollReveal de useLayoutEffect → useEffect (garante que a mutação do DOM acontece após o mount + paint, claramente separada da hidratação).
  - Verifiquei aninhamento HTML do H1: <h1> contém apenas texto + <span> (válido, sem <p> dentro de <h1>).

- Lint: bun run lint → limpo.
- Verificação com agent-browser:
  - Console após reload: nenhum erro de hidratação (grep por hydrat|error|mismatch|attribute|warning retornou vazio) ✓.
  - Foto do hero: shelen-hero.jpg (nova foto) ✓.
  - Tags: "Rio de Janeiro" (Presencial) + "Brasil & Mundo" (Online) ✓.
  - VLM: confirma foto da profissional (blazer azul + top rosa, expressão confiante), dois badges flutuantes (ONLINE/Brasil & Mundo e PRESENCIAL/Rio de Janeiro), layout limpo sem problemas.
  - Scroll reveal ainda funciona: 6 elementos acima-da-dobra visíveis no load; 42 visíveis após scroll to bottom.
  - Sem erros de página/runtime.

Stage Summary:
- Foto do hero substituída pela nova foto anexada (Screenshot_2.png — profissional de blazer azul + top rosa, braços cruzados, expressão confiante).
- Tags mantidas ao redor da imagem: "Online (Brasil & Mundo)" e "Presencial (Rio de Janeiro)".
- Erro de hidratação RESOLVIDO: adicionei `suppressHydrationWarning` nos elementos `.reveal` do hero + no SectionHeading (compartilhado), e mudei o ScrollReveal para `useEffect` (mutação DOM após mount/paint, separada da hidratação). Aninhamento HTML do H1 verificado (válido).
- Lint limpo, sem erros de console, verificado no browser.
