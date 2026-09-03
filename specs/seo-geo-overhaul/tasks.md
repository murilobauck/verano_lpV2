# Tasks — Reforma SEO + GEO do site da Verano Company

> Memória persistente entre sessões. Ao iniciar uma nova sessão, leia **`spec.md` + `plan.md`
> + este arquivo** antes de qualquer coisa, e confira em qual branch você está.
> Legenda: `[ ]` pendente · `[~]` em andamento · `[x]` feito.

**Base de todos os PRs:** `main` (não existe `develop` neste repo — decisão do usuário).
**24 PRs**, um por unidade mergeável. O mapa completo está em `plan.md`.

## Regras de execução

- 1 task = 1 commit (conventional commit, **em inglês**). Nunca acumular.
- 1 PR = o conjunto de tasks marcado com o mesmo prefixo (A1, B2, …).
- Antes de marcar `[x]`: `pnpm build` verde + 3 rotas com paridade visual contra o baseline.
- **Não criar CI nem testes automatizados em nenhuma etapa** — decisão explícita do usuário.
- Os PRs são criados em sequência, **sem pausa de aprovação entre eles**. A revisão é ao final.
- Toda entrega dos blocos A e D é subtrativa ou de infraestrutura: se algo mudar visualmente,
  algo foi feito errado.

## Contexto essencial

Landing page da Verano Company (agência de SEO local / Google Maps, Campinas-SP).
Vite 6 + React 18 + react-router 7 + Tailwind 4, hospedado na **Vercel**.
Origem: export do Figma Make, que trouxe o andaime inteiro — 54 dependências para 4 usadas.
Problema raiz: SPA sem SSR, HTML servido vazio, site invisível para busca e para crawlers de IA.

---

## Bloco A — Limpeza

- [x] **A0 — Baseline** — 6 screenshots em `specs/seo-geo-overhaul/baseline/`
      (home/privacidade/termos × 1440/390). `dist/assets/`: 420K total
      (`index-D6MLuuTu.js` 378091 bytes, `index-C_gRciue.css` 47573 bytes) —
      registrado em `baseline/dist-assets-baseline.txt`.
      *Sem commit e sem PR* — é material de verificação, usado em todos os 24 PRs.

### PR A1 — `chore/remove-inert-host-configs`
- [ ] Apagar `.htaccess` e `public/_redirects` (regras Apache e Netlify, inertes na Vercel).
      Após o deploy, confirmar que o redirect apex→www **continua funcionando** — ele vive
      na configuração de domínio da Vercel, não nesses arquivos. Se quebrar, é sinal de que
      a hospedagem não é a assumida: parar e reavaliar.
      *Pronto quando:* arquivos apagados, build verde, `curl -sIL veranocompany.com.br`
      ainda redireciona para `www`.
      *Commit:* `chore: remove inert Apache and Netlify host configs`

### PR A2 — `chore/remove-orphan-component`
- [ ] Apagar `src/app/components/common/ImageWithFallback.tsx`; apagar `common/` se ficar vazio.
      *Pronto quando:* `grep -rn "ImageWithFallback" src` retorna vazio, build verde.
      *Commit:* `chore: remove unused ImageWithFallback component`

### PR A3 — `chore/remove-radix-dependencies`
- [ ] Remover os 26 `@radix-ui/*`: `react-accordion react-alert-dialog react-aspect-ratio
      react-avatar react-checkbox react-collapsible react-context-menu react-dialog
      react-dropdown-menu react-hover-card react-label react-menubar react-navigation-menu
      react-popover react-progress react-radio-group react-scroll-area react-select
      react-separator react-slider react-slot react-switch react-tabs react-toggle-group
      react-toggle react-tooltip`.
      *Pronto quando:* `grep -c "@radix-ui" package.json` = 0, build verde, paridade visual.
      *Commit:* `chore: remove unused Radix UI dependencies`

### PR A4 — `chore/remove-mui-emotion-dependencies`
- [ ] Remover `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled`.
      *Pronto quando:* build verde, paridade visual.
      *Commit:* `chore: remove unused MUI and Emotion dependencies`

### PR A5 — `chore/remove-unused-utility-dependencies`
- [ ] ⚠️ **Antes de remover:** auditar `src/styles/fonts.css`, `tailwind.css` e `theme.css`
      atrás de `@import`/`@plugin`. `tw-animate-css` (em `tailwind.css:4`) **fica**.
      *Pronto quando:* a lista de remoção está confirmada contra o CSS.
      *Sem commit* — é verificação.
- [ ] Remover os 20: `@popperjs/core class-variance-authority clsx cmdk date-fns
      embla-carousel-react input-otp next-themes react-day-picker react-dnd
      react-dnd-html5-backend react-hook-form react-popper react-resizable-panels
      react-responsive-masonry react-slick recharts sonner tailwind-merge vaul`.
      *Pronto quando:* `package.json` tem exatamente 4 deps de runtime
      (`lucide-react`, `motion`, `react-router`, `tw-animate-css`), build verde.
      *Commit:* `chore: remove unused utility dependencies`

### PR A6 — `fix/declare-react-as-direct-dependency`
- [ ] Mover `react@18.3.1` e `react-dom@18.3.1` para `dependencies`; apagar
      `peerDependencies` e `peerDependenciesMeta`.
      *Pronto quando:* ambos em `dependencies` com versão fixa, nenhum bloco de peer resta.
      *Commit:* `fix: declare react and react-dom as direct dependencies`
- [ ] Apagar `node_modules/` e `pnpm-lock.yaml`, rodar `pnpm install` + `pnpm build` + `pnpm dev`.
      Testar menu mobile, accordion do FAQ, botão de WhatsApp e animações. Comparar
      `dist/assets/` com o baseline de A0.
      *Pronto quando:* install do zero sem erro, 3 rotas idênticas ao baseline, bundle não cresceu.
      *Commit:* `chore: regenerate lockfile after dependency cleanup`

### PR A7 — `docs/replace-figma-boilerplate-identity`
- [ ] Trocar `package.json:name` (hoje `@figma/my-make-file`) pelo nome real. Reescrever
      `README.md` — o atual é boilerplate do Figma Make e manda rodar `npm i` num projeto pnpm.
      Avaliar `pnpm.overrides.vite: 6.3.5`; **na dúvida, manter** e registrar no PR.
      *Pronto quando:* build verde e o README descreve stack, comandos pnpm e Vercel.
      *Commit:* `docs: replace Figma Make boilerplate with real project identity`

---

## Bloco B — SEO no stack atual

### PR B1 — `fix/contact-email-inconsistency`
- [ ] `Contact.tsx:65` linka `mailto:contato@veranocompany.com` mas `Contact.tsx:74` exibe
      `contato@veranocompany.com.br`. Padronizar em **`.com.br`**.
      *Pronto quando:* `mailto:` e texto visível idênticos.
      *Commit:* `fix: correct inconsistent contact email address`

### PR B2 — `feat/page-title-and-description`
- [ ] `<title>` = `Verano Company | Agência de SEO Local e Google Maps`; meta description
      nova (copy em `spec.md`).
      *Pronto quando:* `curl -s <url> | grep -o '<title>.*</title>'` retorna o novo título;
      title 50–60 chars, description 140–160 chars terminando em CTA.
      *Commit:* `feat: add keyword-targeted page title and description`

### PR B3 — `feat/canonical-url`
- [ ] `<link rel="canonical" href="https://www.veranocompany.com.br/">` absoluto e auto-referente.
      *Pronto quando:* presente no HTML servido.
      *Commit:* `feat: add self-referencing canonical URL`

### PR B4 — `feat/open-graph-and-twitter-cards`
- [ ] Gerar `public/og.png` de **exatamente 1200×630px**: montar um HTML temporário no
      scratchpad com `logoVerano.png`, o nome "Verano Company" por extenso e a proposta de
      valor, sobre o preto da marca; capturar com
      `chrome --headless --disable-gpu --screenshot --window-size=1200,630`.
      Conferir as dimensões lendo o header do PNG. **Não commitar o HTML gerador** — só o PNG.
      *Pronto quando:* `og.png` existe e mede exatamente 1200×630.
      *Commit:* `feat: add Open Graph share image`
- [ ] Adicionar as 8 tags OG/Twitter (`og:type`, `og:site_name`, `og:title`, `og:description`,
      `og:image`, `og:url`, `og:locale`, `twitter:card`).
      *Pronto quando:* Facebook Sharing Debugger sem aviso e o link exibe card no WhatsApp.
      *Commit:* `feat: add Open Graph and Twitter Card meta tags`

### PR B5 — `feat/robots-txt`
- [ ] `public/robots.txt` com `Allow: /` para `*`, `GPTBot`, `ClaudeBot`, `PerplexityBot`,
      `Google-Extended`, mais a linha `Sitemap:`.
      *Pronto quando:* `curl /robots.txt` = 200 com as 5 regras e o sitemap.
      *Commit:* `feat: add robots.txt allowing search and AI crawlers`

### PR B6 — `feat/sitemap-xml`
- [ ] `public/sitemap.xml` com `/`, `/privacidade`, `/termos` e `lastmod` real.
      *Pronto quando:* XML válido e `curl -sIL` em cada URL sem 404 nem 3xx.
      *Commit:* `feat: add sitemap.xml`

### PR B7 — `feat/llms-txt`
- [ ] `public/llms.txt` com resumo do negócio, links e a **desambiguação explícita** frente
      à Verano Holdings Corp. (empresa americana de cannabis).
      *Pronto quando:* `curl /llms.txt` = 200 e contém a desambiguação.
      *Commit:* `feat: add llms.txt for AI crawler context`

---

## Bloco C — Dados estruturados

### PR C1 — `feat/organization-and-website-jsonld`
- [ ] `Organization` (`@id` `.../#organization`) com `name`, `alternateName`, `url`, `logo`,
      `description`, `email`, `telephone`, `address` (Campinas/SP/BR) e `sameAs` (Instagram).
      **Omitir campo sem dado real** — nunca placeholder.
      *Pronto quando:* Rich Results Test e Schema Markup Validator sem erro nem aviso.
      *Commit:* `feat: add Organization structured data`
- [ ] `WebSite` (`@id` `.../#website`) com `publisher` → `#organization` e `inLanguage: "pt-BR"`.
      *Pronto quando:* validadores limpos e o `@id` cruzado resolve.
      *Commit:* `feat: add WebSite structured data`

### PR C2 — `feat/professional-service-jsonld`
- [ ] `ProfessionalService` com `areaServed` = `{"@type": "Country", "name": "Brasil"}`,
      `provider` → `#organization`, e **sem nenhum campo `address`** — decisão fechada:
      Campinas é base de operação, não ponto de atendimento presencial.
      *Pronto quando:* validadores limpos e `grep -i address` no schema não retorna nada.
      *Commit:* `feat: add ProfessionalService structured data`

### PR C3 — `feat/faq-page-jsonld`
- [ ] `FAQPage` **derivado do mesmo array** de `FAQ.tsx:4` — não duplicar as perguntas à mão.
      *Pronto quando:* adicionar uma pergunta ao componente a faz aparecer no schema sem
      edição extra; validadores limpos.
      *Commit:* `feat: derive FAQPage structured data from FAQ content`

### PR C4 — `feat/breadcrumb-jsonld`
- [ ] `BreadcrumbList` em `/privacidade` e `/termos`.
      *Pronto quando:* validadores limpos nas 2 rotas.
      *Commit:* `feat: add BreadcrumbList structured data to legal pages`

---

## Bloco D — Migração Next.js

> ⚠️ **D1 é grande e indivisível por limite técnico:** um repo meio-migrado não faz deploy.
> Antes de começar, resolver a pergunta em aberto sobre versão (Next 15 exige React 19 —
> validar `motion/react` e `lucide-react`).

### PR D1 — `refactor/migrate-to-nextjs-app-router`
- [ ] Spike curto: instalar **Next 15 + React 19** (versões já decididas) e confirmar que
      `motion/react` e `lucide-react` funcionam. Fallback documentado se quebrar:
      Next 15 + React 18.3.1.
      *Pronto quando:* combinação validada e anotada aqui. *Sem commit.*
- [ ] Instalar Next, criar `next.config.ts` preservando o alias `@` → `src`, trocar
      `@tailwindcss/vite` por `@tailwindcss/postcss`.
      *Pronto quando:* `next build` roda. *Commit:* `refactor: scaffold Next.js App Router`
- [ ] `index.html` → `app/layout.tsx`; mover o `<style>` inline de `App.tsx:14` para CSS global.
      *Pronto quando:* estilos globais aplicados sem flash.
      *Commit:* `refactor: move HTML shell and global styles to app layout`
- [ ] Migrar as 3 rotas: `Home` → `app/page.tsx`, `PrivacyPolicy` → `app/privacidade/page.tsx`,
      `TermsOfService` → `app/termos/page.tsx`. `"use client"` o mais fundo possível na
      árvore, para o pai server-rendered ainda emitir HTML. Todas `force-static`.
      *Pronto quando:* `curl -s <url> | grep -i '<h1'` retorna o H1 da Hero, e cada rota
      acessada diretamente devolve 200 com conteúdo.
      *Commit:* `refactor: migrate routes to App Router file-based routing`
- [ ] Remover Vite: `vite.config.ts`, `src/main.tsx`, `src/app/App.tsx`, `vite`,
      `@vitejs/plugin-react`, `@tailwindcss/vite`, `react-router` e `pnpm.overrides.vite`.
      *Pronto quando:* nenhum resquício do Vite e build verde.
      *Commit:* `chore: remove Vite toolchain after Next.js migration`
- [ ] Verificação final do PR: paridade visual nas 3 rotas (desktop e mobile) contra o
      baseline de A0, menu mobile, accordion, WhatsApp, animações, zero erro de hidratação,
      JSON-LD do bloco C ainda no HTML servido e validando.
      *Pronto quando:* tudo confere e o preview deployment está verde. *Sem commit.*

### PR D2 — `feat/nextjs-metadata-api`
- [ ] Portar title, description, canonical e OG de B2–B4 para a Metadata API, **por rota**
      (as 3 rotas com metadados próprios).
      *Pronto quando:* cada rota serve title/description/canonical próprios e as tags
      estáticas duplicadas foram removidas do layout.
      *Commit:* `feat: migrate metadata to Next.js Metadata API`

### PR D3 — `feat/nextjs-sitemap-and-robots-routes`
- [ ] `app/sitemap.ts` com `lastMod` real e `app/robots.ts` preservando as regras de crawler
      de IA; apagar `public/sitemap.xml` e `public/robots.txt`.
      *Pronto quando:* as duas URLs servem o mesmo conteúdo de antes, agora gerado.
      *Commit:* `feat: generate sitemap and robots from App Router`

### PR D4 — `feat/not-found-page`
- [ ] `app/not-found.tsx`. Hoje a Vercel devolve 200 em rota inexistente (soft 404).
      *Pronto quando:* `curl -sI <url>/rota-inexistente` retorna **404**.
      *Commit:* `feat: add real 404 page`

---

## Bloco E — Performance e acessibilidade

### PR E1 — `perf/self-host-fonts`
- [ ] Inter via `next/font` com `font-display: swap`. Hoje há duas declarações:
      `@import` remoto em `src/styles/fonts.css:1` e `fontFamily` inline em `App.tsx:11`.
      Unificar numa só.
      *Pronto quando:* zero request a `fonts.googleapis.com` na aba Network.
      *Commit:* `perf: self-host Inter font via next/font`

### PR E2 — `perf/optimize-logo-asset`
- [ ] Comprimir `public/logoVerano.png` — hoje **1080×1080 RGBA, 278 KB**. Manter as
      dimensões (servem de fonte para derivados e superam com folga o mínimo de 112×112 do
      Google) e **manter PNG** — `Organization.logo` não aceita WebP.
      *Pronto quando:* peso menor sem perda visível, dimensões intactas, JSON-LD ainda válido.
      *Commit:* `perf: compress logo asset`

### PR E3 — `perf/image-optimization`
- [ ] Medir qual elemento é o LCP na home (**medir, não presumir**).
      *Pronto quando:* elemento identificado e anotado. *Sem commit.*
- [ ] `next/image` com WebP/AVIF, `width`/`height` explícitos, `loading="lazy"` abaixo da
      dobra e `fetchpriority="high"` só no LCP. Garantir que o LCP não dependa de animação.
      *Pronto quando:* CLS < 0.1 e LCP < 2.5s no PageSpeed mobile.
      *Commit:* `perf: optimize images with next/image`

### PR E4 — `a11y/image-alt-text`
- [ ] `alt` descritivo nas imagens informativas, `alt=""` nas decorativas
      (crawlers de IA leem `alt` como texto).
      *Pronto quando:* axe DevTools sem erro de alt.
      *Commit:* `a11y: add descriptive alt text to images`

### PR E5 — `a11y/keyboard-navigation`
- [ ] Todos os interativos alcançáveis por Tab com foco visível; menu mobile e accordion do
      FAQ operáveis só por teclado, com `aria-expanded` correto.
      *Pronto quando:* navegação completa sem mouse; axe sem erro de teclado.
      *Commit:* `a11y: fix keyboard navigation and focus states`

### PR E6 — `a11y/color-contrast-and-reduced-motion`
- [ ] Contraste AA (4.5:1 normal, 3:1 grande) — risco principal são os cinzas sobre preto.
      Se alguma falha for cor de marca, **documentar como decisão explícita**, não silenciar.
      Respeitar `prefers-reduced-motion: reduce` sem perder conteúdo.
      *Pronto quando:* Lighthouse Accessibility ≥ 95 nas 3 rotas e axe sem erro de contraste.
      *Commit:* `a11y: meet AA contrast and honor reduced motion`

---

## Fechamento

> **Sem CI e sem testes automatizados** — decisão do usuário, vale para todas as etapas.
> A linha padrão do template sobre evoluir testes/CI foi removida de propósito.

- [ ] **F1 — Verificação final** — rodar a bateria completa de aceite da `spec.md`
      (seções A a E) contra produção.
      *Pronto quando:* todos os critérios verificáveis passam, com as exceções registradas.
- [ ] **F2 — Revisão do conjunto** — apresentar ao usuário a lista dos 24 PRs com status,
      os números de antes/depois (bundle, Lighthouse, Core Web Vitals) e as pendências que
      ficaram bloqueadas por dados ou decisão.
      *Pronto quando:* usuário revisou. **Esta é a pausa de aprovação da rodada.**

## Decisões fechadas (não reabrir)

| Questão | Decisão |
|---|---|
| Campinas é endereço ou base? | **Base de operação.** JSON-LD sem `address`, só `areaServed: Brasil` |
| Quem faz a arte do `og.png`? | **O agente**, em B4 — HTML + Chrome headless, sem dependência nova |
| `logoVerano.png` serve? | **Sim** — 1080×1080, muito acima do mínimo de 112×112. Só comprimir, sem redimensionar |
| Redirect apex→www | Vive na config de domínio da Vercel. Virou passo de verificação em A1 |
| Versão de Next/React | **Next 15 + React 19.** Fallback: Next 15 + React 18.3.1 |
| Base das branches | `main` — não existe `develop` e não será criada |
| CI e testes | **Não criar em nenhuma etapa** |

## Riscos que permanecem (não bloqueiam)

- `sameAs` com um item só (Instagram) é sinal fraco de entidade. Não há LinkedIn hoje;
  quando a página de empresa existir, entra em C1
- Sem testes automatizados, a paridade visual depende da comparação manual contra o
  baseline de A0 — capturar antes de começar é o que torna os 24 PRs verificáveis
- D1 não fatia: repo meio-migrado não faz deploy (limite técnico, não escopo mal cortado)

## Done

<mover as tasks marcadas [x] para cá conforme o progresso, preservando o critério de pronto>
