# Plan — Reforma SEO + GEO do site da Verano Company

> Escrito após aprovação de `spec.md` (03/09/2026).
> Este arquivo é a **fonte da verdade do fatiamento em PRs**. `tasks.md` executa nesta ordem.

## Branch and delivery

- **Base de todos os PRs:** `main`. Não existe `develop` neste repositório e o usuário
  decidiu não criá-la.
- **PR slicing:** **24 PRs.** A regra do usuário é abrir PR sempre que houver uma unidade
  mergeável — não agrupar por conveniência. Um PR só existe se, sozinho, puder ir para
  produção sem quebrar nada.
- **Cadência:** os PRs são criados em sequência, dando continuidade sem pausa de aprovação
  entre eles. A revisão acontece ao final, sobre o conjunto.
- **Dependência entre PRs:** cada bloco depende do anterior. Dentro de um bloco, os PRs
  marcados `∥` podem ser feitos em qualquer ordem.

## Technical approach

Quatro blocos em sequência, do menor risco ao maior:

1. **Limpar** o andaime do Figma Make — 50 dependências e arquivos mortos. Subtrativo puro.
2. **Ganhar SEO no stack atual** — `<head>`, arquivos estáticos e JSON-LD funcionam no
   `index.html` do Vite e já são indexáveis. Entregam valor durante as semanas da migração.
3. **Migrar para Next.js** — resolve o HTML vazio, que é a causa raiz.
4. **Polir** — Core Web Vitals e acessibilidade, aproveitando `next/image` e `next/font`.

A verificação é sempre a mesma: `pnpm build` verde, 3 rotas com paridade visual contra o
baseline, preview deployment da Vercel verde.

---

## Bloco A — Limpeza (7 PRs)

| # | Branch | Escopo | Verificação |
|---|---|---|---|
| A0 | — | **Baseline.** Screenshots de `/`, `/privacidade`, `/termos` em 1440px e 390px via **Chrome headless** (`--headless --screenshot --window-size=`), contra `pnpm dev`; anotar tamanho de `dist/assets/`. Salvar em `specs/seo-geo-overhaul/baseline/` | 6 screenshots + número do bundle. **Não é PR** |
| A1 | `chore/remove-inert-host-configs` | Apagar `.htaccess` (Apache) e `public/_redirects` (Netlify) — inertes na Vercel | Build verde; deploy preview OK |
| A2 | `chore/remove-orphan-component` | Apagar `src/app/components/common/ImageWithFallback.tsx` e o diretório se ficar vazio | `grep -rn "ImageWithFallback" src` vazio |
| A3 | `chore/remove-radix-dependencies` | Remover os 26 `@radix-ui/*` | `grep -c "@radix-ui" package.json` = 0; paridade visual |
| A4 | `chore/remove-mui-emotion-dependencies` | Remover `@mui/material`, `@mui/icons-material`, `@emotion/react`, `@emotion/styled` | Build verde; paridade visual |
| A5 | `chore/remove-unused-utility-dependencies` | Remover os 20 utilitários. ⚠️ **Reconferir `src/styles/*.css` antes** — `tw-animate-css` fica | `package.json` com exatamente 4 deps de runtime |
| A6 | `fix/declare-react-as-direct-dependency` | `react@18.3.1` e `react-dom@18.3.1` para `dependencies`; apagar `peerDependencies` e `peerDependenciesMeta`; regenerar lockfile | `pnpm install` do zero sem erro |
| A7 | `docs/replace-figma-boilerplate-identity` | `package.json:name` (hoje `@figma/my-make-file`), reescrever `README.md` (manda rodar `npm i` num projeto pnpm) | README descreve stack, comandos pnpm e Vercel |

**Ordem interna:** A1 e A2 primeiro por serem risco zero e validarem o pipeline cedo.
A3→A5 em lotes por família para que uma falha seja isolável. A6 depois das remoções, para
regenerar o lockfile uma vez só.

---

## Bloco B — SEO no stack atual (7 PRs)

> Tudo aqui vive em `index.html` e `public/`. Funciona no Vite e é portado no bloco C.

| # | Branch | Escopo | Verificação |
|---|---|---|---|
| B1 | `fix/contact-email-inconsistency` | `Contact.tsx:65` linka `mailto:contato@veranocompany.com`, `Contact.tsx:74` exibe `.com.br`. Padronizar em `.com.br` | Os dois batem; NAP consistente |
| B2 | `feat/page-title-and-description` | `<title>` e meta description novos (copy na spec) | `curl \| grep -o '<title>.*'`; 50–60 e 140–160 chars |
| B3 ∥ | `feat/canonical-url` | `<link rel="canonical">` absoluto auto-referente | Presente no HTML servido |
| B4 ∥ | `feat/open-graph-and-twitter-cards` | 8 tags OG/Twitter + `public/og.png` 1200×630 **gerado no próprio repo**: HTML com logo + proposta de valor, capturado em Chrome headless | Dimensão exata 1200×630; Facebook Sharing Debugger sem aviso; card no WhatsApp |
| B5 ∥ | `feat/robots-txt` | `public/robots.txt` com `*`, `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended` + linha `Sitemap:` | `curl /robots.txt` = 200 com as 5 regras |
| B6 ∥ | `feat/sitemap-xml` | `public/sitemap.xml` com as 3 rotas e `lastmod` real | XML válido; `curl -sIL` em cada URL sem 404/3xx |
| B7 ∥ | `feat/llms-txt` | `public/llms.txt` com desambiguação explícita da Verano Holdings Corp. | `curl /llms.txt` = 200 |

**B1 vem primeiro** porque o e-mail correto é insumo do bloco C.
B3–B7 são independentes entre si.

---

## Bloco C — Dados estruturados (4 PRs)

| # | Branch | Escopo | Verificação |
|---|---|---|---|
| C1 | `feat/organization-and-website-jsonld` | `Organization` + `WebSite` na home, com `@id` cruzados | Rich Results Test sem erro nem aviso |
| C2 | `feat/professional-service-jsonld` | `ProfessionalService` com `areaServed: Brasil`, **sem `address`** — Campinas é base de operação | Validador limpo; nenhum campo de endereço presente |
| C3 | `feat/faq-page-jsonld` | `FAQPage` **derivado** do array de `FAQ.tsx:4`, não duplicado | Adicionar pergunta no componente reflete no schema |
| C4 | `feat/breadcrumb-jsonld` | `BreadcrumbList` em `/privacidade` e `/termos` | Validador limpo nas 2 rotas |

C1 primeiro: C2 e C4 referenciam `#organization` por `@id`.

---

## Bloco D — Migração Next.js (4 PRs)

> ⚠️ **Limite honesto de fatiamento.** Um repositório meio-migrado não faz deploy: não dá
> para ter Vite e Next servindo o mesmo site. Por isso **D1 é grande e indivisível** — precisa
> conter scaffold, as 3 rotas e a remoção do Vite para ser mergeável. Os PRs seguintes são
> incrementos reais sobre um site já no ar.

| # | Branch | Escopo | Verificação |
|---|---|---|---|
| D1 | `refactor/migrate-to-nextjs-app-router` | Next App Router; `index.html`→`app/layout.tsx`; `Home`→`app/page.tsx`; `PrivacyPolicy`→`app/privacidade/page.tsx`; `TermsOfService`→`app/termos/page.tsx`; `"use client"` o mais fundo possível; `@tailwindcss/vite`→`@tailwindcss/postcss`; `<style>` de `App.tsx:14` para CSS global; remover Vite, `main.tsx`, `App.tsx`; preservar alias `@` | `curl \| grep -i '<h1'` retorna o H1; paridade visual nas 3 rotas; zero erro de hidratação |
| D2 | `feat/nextjs-metadata-api` | Portar B2–B4 para a Metadata API, com title/description/canonical **por rota** | Cada rota com metadados próprios |
| D3 ∥ | `feat/nextjs-sitemap-and-robots-routes` | `app/sitemap.ts` e `app/robots.ts`; apagar os estáticos de B5–B6 preservando as regras de IA | Mesmo output de antes, agora gerado |
| D4 ∥ | `feat/not-found-page` | `app/not-found.tsx` — hoje a Vercel devolve 200 em rota inexistente (soft 404) | Rota inexistente = **404 real** |

O JSON-LD do bloco C acompanha D1 (os componentes se movem junto); os critérios de validação
são reverificados em D1.

---

## Bloco E — Performance e acessibilidade (6 PRs)

| # | Branch | Escopo | Verificação |
|---|---|---|---|
| E1 ∥ | `perf/self-host-fonts` | Inter via `next/font`. Hoje há duas declarações: `@import` remoto em `fonts.css:1` e `fontFamily` inline em `App.tsx:11`. Unificar | Zero request a `fonts.googleapis.com` |
| E2 ∥ | `perf/optimize-logo-asset` | Comprimir `logoVerano.png` (284 KB). **Manter PNG/JPG** — `Organization.logo` não aceita WebP | Peso menor, sem perda visível |
| E3 | `perf/image-optimization` | `next/image`, WebP/AVIF, `width`/`height`, `loading="lazy"`, `fetchpriority="high"` só no LCP | Sem CLS por imagem; LCP medido, não presumido |
| E4 ∥ | `a11y/image-alt-text` | `alt` descritivo nas informativas, `alt=""` nas decorativas | axe DevTools sem erro de alt |
| E5 ∥ | `a11y/keyboard-navigation` | Tab alcança tudo, foco visível, menu mobile e accordion com `aria-expanded` | Navegação completa só por teclado |
| E6 ∥ | `a11y/color-contrast-and-reduced-motion` | Contraste AA (risco: cinzas sobre preto) + `prefers-reduced-motion` | Lighthouse A11y ≥ 95; axe limpo |

E3 depois de E2 (a logo é candidata a LCP). O restante é paralelizável.

---

## Risks and mitigation

| Risco | Mitigação |
|---|---|
| Regressão visual silenciosa — não há testes | Baseline em A0; comparar screenshots a cada PR e anexar no PR |
| Pacote usado só via CSS | Auditar os 3 arquivos de `src/styles/` antes de A5. `tw-animate-css` já foi falso positivo |
| Remoção em lote esconde qual pacote quebrou | Build verde entre lotes; bissectar dentro do lote que falhar |
| D1 é grande e não fatiável | Limite técnico real, não preguiça de escopo. Mitigar com preview deployment e comparação de screenshots antes do merge |
| Next 15 + React 19 quebrar `motion` ou `lucide-react` | Versões já decididas; validar num spike curto no início de D1. Fallback documentado: Next 15 + React 18.3.1 |
| `react`/`react-dom` como dep direta muda resolução | Fixar `18.3.1` (versão do peer atual) e validar com `node_modules/` apagado |
| Alguém reintroduzir `address` em C1/C2 | Decisão fechada: **sem `address`**. Campinas é base de operação, não ponto de atendimento |
| Deploy quebrado em produção | Preview deployment verde antes de qualquer merge |

## Rollback and reversibility

- Sem migrations, sem estado, sem backend: **reverter o PR restaura o estado anterior por completo.**
- Lockfile volta junto no revert, então as versões resolvidas ficam idênticas.
- Único PR com reversão custosa é D1 (troca de toolchain) — por isso exige preview verde
  e comparação de screenshots antes do merge.
- Nenhuma etapa é irreversível.

## Testing strategy

**Não haverá CI nem suíte de testes automatizados** — decisão explícita do usuário, válida
para todas as etapas. A verificação de cada PR é:

- `pnpm build` verde
- `pnpm dev` e as 3 rotas renderizando, console sem erro nem warning novo
- Interações: menu mobile, accordion do FAQ, botão de WhatsApp, animações de scroll
- Paridade visual contra o baseline de A0 (desktop e mobile)
- Preview deployment da Vercel verde
- Nos PRs de SEO: os `curl` e validadores listados na tabela do bloco
- Regressão de bundle: `dist/assets/` não pode crescer

> A ausência de CI é dívida conhecida e aceita. Registrar como Notable Decision nos PRs.
