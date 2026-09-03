# Spec — Reforma SEO + GEO do site da Verano Company

> Base: `docs/auditoria-seo-geo-verano.md` (03/09/2026) — **Parte 1 completa**, itens 1 a 10.
> Escopo único consolidado. O fatiamento em PRs vive em `plan.md`.
> A Parte 2 da auditoria (GSC, GBP, Bing, backlinks, avaliações) é ação manual do usuário
> e está **fora** desta spec.

## Context and problem

O site `veranocompany.com.br` é invisível para busca. `dist/index.html` prova o diagnóstico:
o HTML entregue ao crawler contém `<div id="root"></div>` e nada mais — sem `<h1>`, sem texto,
sem links. Nenhuma busca pela marca retorna resultado. Não há JSON-LD, Open Graph, canonical,
`robots.txt` nem `sitemap.xml`. O `<title>` é `Verano Co.` — sem keyword, sem serviço, e usando
uma forma curta do nome que atrapalha o Google a formar a entidade.

O agravante é comercial: a Verano Company **vende posicionamento no Google Maps**. Uma agência
que vende esse serviço e não está posicionada perde o lead que pesquisa a marca antes de fechar.

Some-se a isso a herança técnica: o projeto nasceu de um export do Figma Make e declara
54 dependências para **3 efetivamente importadas**.

E há a restrição de marca: "Verano" é dominado globalmente pela Verano Holdings Corp.
(cannabis, EUA, ~US$820M de receita). A estratégia não é brigar por "verano" — é **construir
a entidade "Verano Company"** de forma inequívoca e capturar buscas de serviço.

## Acceptance criteria (verifiable)

Agrupados por frente. O mapeamento para PRs está em `plan.md`.

### A. Limpeza (pré-requisito)

- [ ] `package.json` contém exatamente 4 dependências de runtime: `lucide-react`, `motion`,
      `react-router`, `tw-animate-css` — mais `react` e `react-dom`
- [ ] `react` e `react-dom` estão em `dependencies` com versão fixa `18.3.1`;
      `peerDependencies` e `peerDependenciesMeta` não existem mais
- [ ] Nenhum arquivo `.ts`/`.tsx` em `src/` sem importador
- [ ] `.htaccess` e `public/_redirects` removidos (inertes na Vercel)
- [ ] `pnpm install` com `node_modules/` e lockfile apagados termina sem erro; `pnpm build` verde
- [ ] Tamanho de `dist/assets/` não aumentou frente ao baseline
- [ ] `package.json:name` e `README.md` descrevem o projeto real, não o boilerplate do Figma Make

### B. Fundamentos de `<head>`

- [ ] `<title>` = `Verano Company | Agência de SEO Local e Google Maps` (50–60 caracteres)
- [ ] Meta description de 140–160 caracteres, terminando em CTA
- [ ] `<link rel="canonical">` absoluto e auto-referente em toda rota
- [ ] As 8 tags Open Graph / Twitter presentes com valores reais
- [ ] `/og.png` existe, tem exatamente 1200×630px, e o Facebook Sharing Debugger o renderiza sem aviso
- [ ] Compartilhar o link no WhatsApp exibe card com imagem, título e descrição
- [ ] `/robots.txt` retorna 200 com `Allow: /` para `*`, `GPTBot`, `ClaudeBot`,
      `PerplexityBot` e `Google-Extended`, mais a linha `Sitemap:`
- [ ] `/sitemap.xml` retorna 200, XML válido, com as 3 rotas e `lastmod` real
- [ ] Nenhuma URL do sitemap retorna 404 ou 3xx (`curl -sIL` em cada uma)
- [ ] `/llms.txt` retorna 200 e contém a desambiguação explícita frente à Verano Holdings Corp.

### C. Dados estruturados (JSON-LD)

- [ ] O e-mail é idêntico em `mailto:`, no texto visível e no JSON-LD
      (**hoje há bug**: `Contact.tsx:65` usa `.com`, `Contact.tsx:74` exibe `.com.br`)
- [ ] Home serve `Organization` (`@id` `.../#organization`) com `alternateName`,
      `logo`, `email`, `telephone` e `sameAs` — **sem `address`**
- [ ] Home serve `WebSite` (`@id` `.../#website`) com `publisher` → `#organization`
      e `inLanguage: "pt-BR"`
- [ ] Home serve `ProfessionalService` com `areaServed` preenchido
- [ ] Home serve `FAQPage` **derivado do mesmo array** de `FAQ.tsx:4` — uma pergunta
      adicionada ao componente aparece no schema sem edição extra
- [ ] `/privacidade` e `/termos` servem `BreadcrumbList`
- [ ] Todos os blocos passam no Rich Results Test **sem erros e sem avisos**
- [ ] Todos passam no Schema Markup Validator (schema.org)
- [ ] Nenhum campo contém `PREENCHER` ou placeholder
- [ ] `curl -s <url> | grep -c 'application/ld+json'` ≥ 1 por rota (está no HTML servido,
      não injetado por JS)

### D. Renderização (migração Next.js)

- [ ] `curl -s https://www.veranocompany.com.br | grep -i '<h1'` retorna o H1 da Hero
      *(critério literal da auditoria)*
- [ ] `curl -s <url>` de cada rota contém o texto real das seções, não só o bundle JS
- [ ] Todas as rotas estáticas (`force-static` ou equivalente), confirmado no output do build
- [ ] Cada rota tem `title` e `description` próprios via Metadata API
- [ ] `canonical` por rota gerado pela Metadata API, não hardcoded
- [ ] `sitemap.xml` gerado por `app/sitemap.ts` com `lastMod` real
- [ ] `robots.txt` gerado por `app/robots.ts`, preservando as regras de crawler de IA
- [ ] Os blocos JSON-LD continuam no HTML servido e validando
- [ ] Rota inexistente retorna **404 real** (hoje a Vercel serve 200 — soft 404)
- [ ] `/privacidade` e `/termos` acessadas diretamente retornam 200 com conteúdo
- [ ] Paridade visual nas 3 rotas, desktop e mobile
- [ ] Menu mobile, accordion do FAQ, botão de WhatsApp e animações funcionam
- [ ] Zero erro de hidratação no console

### E. Performance e acessibilidade

- [ ] PageSpeed Insights (mobile) na home: **LCP < 2.5s, INP < 200ms, CLS < 0.1**
- [ ] Lighthouse nas 3 rotas: Performance ≥ 90, Accessibility ≥ 95, SEO = 100
- [ ] Toda imagem em WebP/AVIF com `width` e `height` explícitos
- [ ] `loading="lazy"` abaixo da dobra; `fetchpriority="high"` só no elemento LCP
- [ ] Fontes self-hosted via `next/font`, `font-display: swap`, sem request a domínio externo
      (hoje `src/styles/fonts.css:1` importa a Inter do Google Fonts por URL remota)
- [ ] `logoVerano.png` (284 KB hoje) comprimido sem perda visível
- [ ] Toda imagem informativa com `alt` descritivo; decorativas com `alt=""`
- [ ] Contraste AA (4.5:1 normal, 3:1 grande) em todo o site
- [ ] Navegação por teclado completa, com foco visível
- [ ] Menu mobile e accordion operáveis só por teclado, com `aria-expanded` correto
- [ ] `prefers-reduced-motion: reduce` respeitado
- [ ] Zero erro no axe DevTools

## Out of scope (explicit)

- **Toda a Parte 2 da auditoria** — Google Search Console, Google Business Profile, Bing
  Webmaster Tools, perfis sociais, avaliações, backlinks, blog, Google Ads, analytics
- **Item 4 da auditoria — arquitetura multi-página** (`/servicos/*`, `/cases`, `/sobre`,
  `/contato`, `/blog`): depende de produção de conteúdo (600+ palavras por página) que não existe.
  Vira spec própria quando houver texto escrito
- **Item 10 — conteúdo em formato pergunta/resposta**: o `FAQPage` desta spec cobre o FAQ
  existente; produzir conteúdo novo em Q&A não
- `Review` / `AggregateRating` — exige avaliações reais no GBP; marcar avaliação inexistente
  viola diretriz do Google
- `Service` schema — as rotas de serviço não existem nesta rodada
- Redesenhar componentes ou mudar a paleta (ajustar contraste é permitido)
- Atualizar versões de dependências (upgrade é outra demanda)
- **CI e testes automatizados** — decisão explícita do usuário: não criar em nenhuma etapa
- Backend, formulário com submit real, CMS

## Data contracts

- **Inputs:** código atual em `src/` (21 arquivos, 3 rotas), `package.json`, assets em `public/`
- **Outputs:** projeto Next.js App Router com HTML pré-renderizado, arquivos estáticos de SEO
- **Rotas a preservar:** `/`, `/privacidade`, `/termos` — **URLs idênticas**, sem redirect
- **Schemas / models affected:** nenhum — não há backend
- **External dependencies:** Vercel (build e hospedagem)

### Dados da empresa (fechados com o usuário)

| Campo | Valor | Fonte |
|---|---|---|
| `name` | `Verano Company` (sempre por extenso, nunca "Verano Co.") | definido |
| `url` | `https://www.veranocompany.com.br` | definido (www é o canônico) |
| `telephone` | `+55 19 99574-8782` | `WhatsAppButton.tsx:6` |
| `email` | `contato@veranocompany.com.br` | `Contact.tsx:74` |
| `address` | **omitido** — Campinas é base de operação, não endereço de atendimento | usuário |
| `areaServed` | `Brasil` (`@type: Country`) | decorrência da linha acima |
| `sameAs` | `https://instagram.com/veranocompany` — **item único** | `Footer.tsx:35` |
| LinkedIn | **não existe** | usuário |
| `logo` | `https://www.veranocompany.com.br/logoVerano.png` | `public/logoVerano.png` — 1080×1080 RGBA, 278 KB (mínimo do Google é 112×112) |

### Copy definido

```
title:        Verano Company | Agência de SEO Local e Google Maps
description:  Posicionamos empresas locais no topo do Google Maps com estratégia,
              dados e execução. Solicite o diagnóstico gratuito do seu perfil.
og:site_name: Verano Company
og:locale:    pt_BR
og:url:       https://www.veranocompany.com.br/
twitter:card: summary_large_image
```

### Inventário de dependências

| Grupo | Qtd | Destino |
|---|---|---|
| `@radix-ui/*` | 26 | remover |
| `@mui/*`, `@emotion/*` | 4 | remover |
| Utilitários (`clsx`, `recharts`, `react-dnd`, `react-slick`, `cmdk`, `vaul`, `sonner`, `date-fns`, `react-hook-form`, `embla-carousel-react`, `input-otp`, `next-themes`, `react-day-picker`, `react-popper`, `@popperjs/core`, `react-resizable-panels`, `react-responsive-masonry`, `class-variance-authority`, `tailwind-merge`) | 20 | remover |
| **Total a remover** | **50** | |
| `lucide-react`, `motion`, `react-router` | 3 | manter — importados em `src/` |
| `tw-animate-css` | 1 | **manter** — `@import` em `src/styles/tailwind.css:4` |

## Authorization

Não se aplica — site institucional público, sem autenticação e sem dados de usuário.

## Edge cases and failure modes

| Caso | Comportamento esperado |
|---|---|
| Pacote não importado em `.tsx` mas usado via `@import` de CSS | **Manter.** `tw-animate-css` já foi falso positivo deste levantamento — sempre auditar `src/styles/*.css` além dos imports de TS |
| Arquivo sem importador mas que é entrypoint | `src/main.tsx` não tem importador e é obrigatório — checar `index.html` e configs antes de julgar um órfão |
| Remoção de dependência quebra o build | Reverter **aquele pacote**, registrar o motivo, seguir — nunca abandonar a frente inteira |
| Diferença visual após limpeza | Falha o critério: algo removido era usado. Identificar e restaurar |
| Campo de JSON-LD sem dado real | **Omitir o campo.** Nunca placeholder — schema com dado falso é pior que schema ausente |
| Tentação de declarar `address` para ganhar sinal local | **Não fazer.** Campinas é base de operação; endereço sem atendimento presencial é risco de penalidade. Só `areaServed` |
| JSON-LD só aparece depois do React montar | Falha o critério. Antes da migração, injetar no `index.html` estático |
| `og.png` fora de 1200×630 | Falha o critério — WhatsApp e LinkedIn cortam ou ignoram |
| Acesso pelo apex `veranocompany.com.br` | 301 para `www`; canonical continua apontando para `www` |
| Componente usa `useState`/`useEffect`/`motion` no Next | `"use client"`, o mais fundo possível na árvore, para o pai server-rendered ainda emitir HTML |
| `Header.tsx` usa `window.scrollY` no `useEffect` | Precisa renderizar corretamente no estado não-scrollado, já que o efeito não roda no build |
| `<style>` inline em `App.tsx:14` | Migrar para CSS global no `layout.tsx` — `<style>` em client component causa flash |
| `motion/react` importado por server component | Quebra o build. Só em client components |
| Animação acima da dobra atrasa o LCP | Elemento LCP renderiza sem depender de animação |
| Contraste falha mas é cor de marca | Documentar como decisão explícita — não silenciar |
| Logo serve página e JSON-LD | `Organization.logo` exige PNG/JPG em URL absoluta — comprimir sim, converter para WebP não |
| Dados de campo do PSI indisponíveis (tráfego baixo) | Aceitar dados de laboratório, registrando a limitação no PR |
| Deploy quebrado em produção | Preview deployment da Vercel antes de promover; rollback = promover o deploy anterior |

## Decisions taken

| Decisão | Alternativa rejeitada | Por quê |
|---|---|---|
| Limpeza antes de tudo | Limpar depois, ou nunca | Migrar 54 dependências quando 4 são usadas é trabalho jogado fora; e a validação da migração fica mais confiável num projeto enxuto |
| `<head>` e JSON-LD **antes** da migração | Fazer tudo dentro do Next | As tags de `<head>` já são indexáveis no `index.html` do Vite. A migração leva semanas; não faz sentido manter `<title>Verano Co.</title>` esse tempo todo. O retrabalho é copiar strings e um objeto JS |
| Next.js App Router | Pré-render (react-snap), Astro | Decisão do usuário. Melhor caminho se o site virar multi-página com blog |
| `www` como versão canônica | apex | Já é o destino do redirect existente e o valor a cadastrar no GBP |
| Manter as 3 URLs atuais | Renomear para `/privacy`, `/terms` | Já em produção; renomear geraria redirect sem benefício |
| `force-static` em todas as rotas | SSR dinâmico | Site institucional sem dado por request |
| `FAQPage` derivado do array de `FAQ.tsx` | JSON escrito à mão | Fonte única — schema e página nunca divergem |
| `ProfessionalService` além de `Organization` | Só `Organization` | Subtipo de `LocalBusiness`: habilita sinais de negócio local, alinhado ao serviço vendido |
| `alternateName: ["Verano Co.", "Verano Co"]` | Só o nome por extenso | Declara a variação sem promovê-la, ajudando o Google a unificar menções antigas |
| Liberar crawlers de IA explicitamente | Só `User-agent: *` | GEO: alguns bots ignoram o wildcard; listar custa zero |
| Fontes self-hosted | Google Fonts via link | Remove um DNS lookup do caminho crítico e um vazamento de dados a terceiro |
| Alvo de acessibilidade AA | AAA | AA é o padrão legal e comercial; AAA restringiria demais a paleta escura da marca |
| Base `main` em todos os PRs | `develop` (padrão do `dev-lifecycle`) | `develop` não existe no repo e o usuário decidiu usar `main` |
| Sem CI nem testes automatizados | Criar suíte mínima | Decisão explícita do usuário. A verificação é build verde + paridade visual por screenshot |
| Omitir `address`, usar só `areaServed` | Declarar Campinas/SP | Campinas é base de operação, não endereço de atendimento presencial. Endereço declarado sem atendimento no local é risco de penalidade |
| `og.png` gerado por HTML + Chrome headless | Ferramenta de design externa | Chrome já está na máquina; gera 1200×630 exato, versionável, sem adicionar dependência ao projeto |
| Next 15 + React 19 | Next 14 + React 18 | `motion` 12.x e `lucide-react` suportam React 19; ficar no 18 seria migrar já desatualizado |
| Manter `logoVerano.png` em 1080×1080 | Redimensionar | 1080² atende `Organization.logo` com folga e serve de fonte para qualquer derivado. Só comprimir |
| Arquitetura multi-página fora do escopo | Incluir agora | É 80% redação; sem conteúdo escrito, virariam páginas vazias — pior para SEO que não existir |

## Constraints

- Performance / cost: bundle não pode crescer; nenhuma regressão de LCP/CLS frente à build atual
- Privacy / security: nenhum segredo ou variável de ambiente introduzido; sem request a
  domínio de terceiro no carregamento inicial; menos dependências = menor superfície de supply chain
- Zero downtime: preview deployment da Vercel obrigatório antes de promover a produção
- Reversibilidade: sem migrations e sem estado — reverter o PR restaura o estado anterior
- Prazo: Fases 1 e 2 da auditoria (semanas 1 a 6)

## Open questions (risks)

- [ ] **Risco alto:** regressão visual silenciosa, sem testes automatizados.
      Mitigação — screenshots baseline antes de começar, comparados a cada PR
- [ ] **Risco:** `sameAs` com um único perfil (Instagram) é sinal fraco de entidade.
      A página de empresa no LinkedIn é a ação de maior impacto da Parte 2 — quando existir, entra no schema
- [ ] **Risco:** a migração para Next não é fatiável em PRs parciais mergeáveis
      (um repo meio-migrado não faz deploy). Ver `plan.md`, bloco D
