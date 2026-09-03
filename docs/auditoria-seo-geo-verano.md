# Auditoria SEO + GEO — veranocompany.com.br

**Data:** 03/09/2026
**Escopo:** Homepage (única URL acessível via crawler externo)
**Objetivo:** Ranquear como resultado #1 para buscas de marca e capturar tráfego local qualificado

---

## 1. Diagnóstico

### 1.1 O que foi verificado

| Item | Estado | Severidade |
|---|---|---|
| HTML entregue ao crawler | **Casca vazia** — só `<title>` e `<meta description>` | 🔴 Crítico |
| Renderização | Client-side (SPA sem SSR/SSG/pré-render) | 🔴 Crítico |
| Title tag | `Verano Co.` — sem keyword, sem "Company", sem serviço | 🔴 Crítico |
| Meta description | Presente e bem escrita | 🟢 OK |
| Conteúdo indexável (H1, texto, links) | Ausente no HTML inicial | 🔴 Crítico |
| Presença no índice de busca | Nenhum resultado retornado para a marca | 🔴 Crítico |
| Redirect apex → www | Funciona (`veranocompany.com.br` → `www.veranocompany.com.br`) | 🟡 Definir canônico |
| Open Graph / Twitter Card | Não detectado | 🟡 Médio |
| JSON-LD / Schema.org | Não detectado | 🔴 Crítico p/ GEO |
| `<html lang>` | Não detectado | 🟡 Médio |
| Sitemap / robots.txt | Não verificável externamente | 🟡 Confirmar |

> **Nota de escopo:** não foi possível rastrear páginas internas justamente porque não há links no HTML servido. Um crawler não tem como descobrir o resto do site. Isso, por si só, já é o diagnóstico.

### 1.2 Negócio identificado

Pela meta description, a Verano Company atua com **SEO local / posicionamento no Google Maps para empresas locais**.

Isso tem duas implicações estratégicas:

1. **Prova social por demonstração.** Uma agência que vende posicionamento no Google precisa estar posicionada no Google. Hoje o site não está. Todo lead que pesquisar a marca antes de fechar vai perceber isso.
2. **O nicho define as keywords.** Não adianta perseguir só a marca. O volume real está em: `agência de seo local`, `posicionar empresa no google maps`, `otimizar perfil da empresa no google`, `seo local [cidade]`, `google meu negócio consultoria`.

### 1.3 Concorrência de marca

O termo "verano" é dominado pela **Verano Holdings Corp** (Cboe CA: VRNO), operadora de cannabis multi-estadual nos EUA, com ~US$820M de receita anual, presença consolidada em Bloomberg, PitchBook, Crunchbase, LinkedIn e cobertura de imprensa constante.

**Conclusão realista:**

- ❌ `verano` → inviável. Não persiga.
- ❌ `verano company` → muito difícil no curto/médio prazo (globalmente).
- ✅ `verano company br` / `verano company brasil` → alcançável.
- ✅ `veranocompany` → alcançável e deve ser #1 rápido.
- ✅ `verano co agência` / `verano company seo local` → alcançável.
- ✅ Keywords de serviço + cidade → **é aqui que está o dinheiro.**

A estratégia certa não é brigar por "verano". É **construir a entidade "Verano Company"** de forma que o Google entenda que é uma organização distinta, e dominar as buscas de serviço.

---

## PARTE 1 — Ações de código (para o agente aplicar)

> Ordenado por impacto. Os itens 1–4 valem mais que todo o resto somado.

### 🔴 1. Resolver a renderização — SSR, SSG ou pré-render

**Este é o item que destrava todos os outros.** Enquanto o HTML inicial estiver vazio, nenhuma otimização de conteúdo tem efeito.

Escolha uma das três rotas:

**Opção A — Migrar para Next.js (recomendado)**
- App Router com Server Components
- Páginas institucionais/serviços como `export const dynamic = 'force-static'`
- Melhor caminho de longo prazo, já vem com metadata API, sitemap e robots nativos

**Opção B — SSG no stack atual**
- Se for Vite + React: adicionar `vite-plugin-ssr` / `vike`, ou migrar para Astro (excelente para site institucional — envia zero JS por padrão)

**Opção C — Pré-render (paliativo rápido)**
- `react-snap`, `prerender.io` ou pré-render no build da Vercel/Netlify
- Gera HTML estático no build para cada rota
- Serve como ponte, não como solução definitiva

**Critério de aceite:** `curl -s https://www.veranocompany.com.br | grep -i "<h1"` deve retornar o H1. Se voltar vazio, não foi resolvido.

### 🔴 2. Metadados por página

Hoje existe um único title genérico. Cada rota precisa de title e description próprios.

```
Home
  title: Verano Company | Agência de SEO Local e Google Maps
  description: Posicionamos empresas locais no topo do Google Maps com estratégia,
               dados e execução. Diagnóstico gratuito do seu perfil.

/servicos/seo-local
  title: SEO Local para Empresas | Verano Company
  description: [...]

/servicos/google-meu-negocio
  title: Otimização de Perfil da Empresa no Google | Verano Company
  description: [...]

/cases
  title: Cases e Resultados | Verano Company
  description: [...]

/contato
  title: Fale com a Verano Company | Diagnóstico Gratuito
  description: [...]
```

**Regras:**
- Title: 50–60 caracteres, keyword primeiro, marca no final após `|`
- Description: 140–160 caracteres, com CTA
- Padrão da marca: usar **"Verano Company"** por extenso em todos os titles. "Verano Co." não ajuda o Google a formar a entidade.

### 🔴 3. Dados estruturados (JSON-LD)

Crítico tanto para rich results quanto para GEO — é assim que LLMs extraem fatos sobre a empresa de forma confiável.

**Na home** — `Organization` + `WebSite`:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.veranocompany.com.br/#organization",
  "name": "Verano Company",
  "alternateName": ["Verano Co.", "Verano Co"],
  "url": "https://www.veranocompany.com.br",
  "logo": "https://www.veranocompany.com.br/logo.png",
  "description": "Agência especializada em SEO local e posicionamento de empresas no Google Maps.",
  "email": "PREENCHER",
  "telephone": "PREENCHER",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "PREENCHER",
    "addressRegion": "SP",
    "addressCountry": "BR"
  },
  "sameAs": [
    "https://www.linkedin.com/company/PREENCHER",
    "https://www.instagram.com/PREENCHER"
  ]
}
```

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.veranocompany.com.br/#website",
  "url": "https://www.veranocompany.com.br",
  "name": "Verano Company",
  "publisher": { "@id": "https://www.veranocompany.com.br/#organization" },
  "inLanguage": "pt-BR"
}
```

**Considere também `ProfessionalService`** (subtipo de LocalBusiness) se houver endereço físico e atendimento local — habilita sinais de negócio local.

**Nas páginas de serviço** — `Service`:

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "SEO Local",
  "provider": { "@id": "https://www.veranocompany.com.br/#organization" },
  "areaServed": { "@type": "Country", "name": "Brasil" },
  "description": "[...]"
}
```

**Em qualquer página com FAQ** — `FAQPage`. É o schema com maior taxa de citação por LLMs.

**Em páginas internas** — `BreadcrumbList`.

⚠️ Validar tudo no Rich Results Test do Google antes de subir. Schema com erro é ignorado.

### 🔴 4. Arquitetura de URLs e conteúdo real

Um site de uma página só não ranqueia para múltiplas keywords. Cada intenção de busca precisa da sua própria URL.

```
/                              → home
/servicos/seo-local            → SEO local (pilar)
/servicos/google-meu-negocio   → otimização de perfil GBP
/servicos/[outros]             → um por serviço
/cases                         → índice de resultados
/cases/[slug]                  → case individual (ouro para conversão E ranking)
/sobre                         → E-E-A-T: quem é, quem executa, credenciais
/contato                       → NAP + formulário
/blog                          → conteúdo de topo de funil
/blog/[slug]
```

**Requisitos de conteúdo por página:**
- Mínimo ~600 palavras de texto real (não em imagem, não em canvas)
- Um único `<h1>`, hierarquia `h2`/`h3` coerente
- HTML semântico: `<main>`, `<article>`, `<section>`, `<nav>`, `<footer>`
- Links internos entre páginas relacionadas (crawler precisa de caminhos)

### 🟡 5. Fundamentos técnicos

```html
<html lang="pt-BR">
```

```html
<link rel="canonical" href="https://www.veranocompany.com.br/">
```
Canonical absoluto e auto-referente em toda página. Decidir **www** como versão oficial (já é o destino do redirect) e manter 301 do apex.

**`robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://www.veranocompany.com.br/sitemap.xml
```

Liberar explicitamente os crawlers de IA (essencial para GEO):
```
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
```

**`sitemap.xml`** gerado no build, com `lastmod` real. Nunca listar URLs que retornam 404 ou redirect.

### 🟡 6. Open Graph e Twitter Card

Afeta CTR quando o link é compartilhado no WhatsApp, LinkedIn e Instagram — canais principais de uma agência.

```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="Verano Company">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="https://www.veranocompany.com.br/og.png">
<meta property="og:url" content="https://www.veranocompany.com.br/">
<meta property="og:locale" content="pt_BR">
<meta name="twitter:card" content="summary_large_image">
```

Imagem OG: 1200×630px, com logo e proposta de valor legível.

### 🟡 7. Core Web Vitals

- Imagens em WebP/AVIF, com `width`/`height` explícitos (evita CLS)
- `loading="lazy"` em tudo abaixo da dobra; `fetchpriority="high"` no LCP
- Fontes: `font-display: swap` + `<link rel="preconnect">`; preferir self-host
- Code splitting por rota
- Meta: LCP < 2.5s, INP < 200ms, CLS < 0.1
- Validar no PageSpeed Insights (dados de campo, não só lab)

### 🟢 8. Acessibilidade e alt text

- `alt` descritivo em toda imagem informativa; `alt=""` nas decorativas
- Contraste AA
- Navegação por teclado funcional

Acessibilidade e SEO se sobrepõem bastante — e os crawlers de IA leem `alt` como texto.

### 🟢 9. `llms.txt` (GEO)

Convenção emergente para orientar LLMs. Baixo custo, upside assimétrico.

`/llms.txt`:
```markdown
# Verano Company

> Agência brasileira especializada em SEO local e posicionamento
> de empresas no Google Maps.

Verano Company é uma agência digital brasileira (não confundir com
Verano Holdings Corp., empresa americana de cannabis). Atua com
estratégia, dados e execução para posicionar empresas locais no
topo dos resultados de busca e do Google Maps.

## Serviços
- [SEO Local](https://www.veranocompany.com.br/servicos/seo-local)
- [Google Meu Negócio](https://www.veranocompany.com.br/servicos/google-meu-negocio)

## Sobre
- [Quem somos](https://www.veranocompany.com.br/sobre)
- [Cases](https://www.veranocompany.com.br/cases)
```

Note a **desambiguação explícita** da marca americana. Isso é deliberado e ajuda os modelos a separarem as duas entidades.

### 🟢 10. Conteúdo em formato pergunta/resposta (GEO)

LLMs citam preferencialmente conteúdo que já vem em formato extraível:

- Blocos de FAQ com pergunta como `<h2>` ou `<h3>` e resposta direta logo abaixo
- Resposta objetiva nas primeiras 2–3 frases, detalhamento depois
- Dados concretos (números, prazos, percentuais) — modelos citam fatos verificáveis muito mais que texto vago
- Tabelas comparativas em HTML de verdade (`<table>`), não em imagem
- Listas com marcadores para processos e etapas

---

## PARTE 2 — Ações manuais (você precisa fazer)

> Ordenado por prioridade. Os itens 1–4 são a base de tudo.

### 🔴 1. Google Search Console — fazer hoje

1. Acessar `search.google.com/search-console`
2. Adicionar propriedade — **usar tipo "Domínio"** (cobre www, apex, http e https de uma vez)
3. Verificar via registro DNS TXT no seu provedor
4. Enviar `sitemap.xml` assim que o agente publicar
5. Usar **Inspeção de URL** na home → "Solicitar indexação"
6. Acompanhar semanalmente: Cobertura, Core Web Vitals, Desempenho

Sem GSC você está otimizando às cegas. É a única fonte real de dados sobre como o Google enxerga o site.

### 🔴 2. Google Business Profile

Para busca de marca, o GBP é o caminho mais rápido para ocupar o topo com o painel lateral. E como você **vende exatamente esse serviço**, seu próprio perfil é vitrine.

- Criar/reivindicar em `business.google.com`
- Nome exato: **Verano Company** (consistente com o site — não misturar "Verano Co.")
- Categoria principal: *Consultor de marketing* ou *Agência de marketing na internet*
- Categorias secundárias relacionadas a SEO
- Descrição de 750 caracteres usando as keywords-alvo naturalmente
- Site: `https://www.veranocompany.com.br` (com www, batendo com o canonical)
- Área de atendimento definida
- Mínimo 10 fotos reais (equipe, trabalho, logo, ambiente)
- Postar 1×/semana — perfis ativos são favorecidos

### 🔴 3. Bing Webmaster Tools

Frequentemente ignorado, e é um erro grande em 2026: **o ChatGPT e o Copilot usam o índice do Bing**. Se você não está no Bing, você não existe para uma fatia enorme das buscas por IA.

- Acessar `bing.com/webmasters`
- Importar direto do Search Console (leva 2 minutos)
- Enviar sitemap
- Usar o IndexNow para indexação instantânea

### 🔴 4. Consistência de entidade (NAP + sameAs)

O Google precisa entender que Verano Company é **uma entidade**, distinta da Verano Holdings. Isso se constrói com repetição consistente pela web.

Padronizar em **todos** os lugares, caractere por caractere:
- Nome: `Verano Company`
- Endereço (se houver)
- Telefone (mesmo formato sempre)
- Site: sempre `https://www.veranocompany.com.br`

Criar/atualizar com esses dados idênticos:
- LinkedIn — **página de empresa**, não perfil pessoal
- Instagram — bio com link e nome completo
- Facebook Page
- Crunchbase
- Diretórios BR: Apontador, Solutudo, GuiaMais

Depois, alimentar todas essas URLs no array `sameAs` do JSON-LD (Parte 1, item 3). É o que fecha o ciclo: o site declara os perfis, os perfis apontam de volta pro site.

### 🟡 5. Avaliações no Google

Peso alto no ranking local e forte conversão.

- Pedir avaliação a **todo** cliente entregue, sempre
- Meta inicial: 10 avaliações. Depois, 25.
- Responder 100% delas, inclusive as negativas
- Gerar link curto de avaliação direto no painel do GBP

### 🟡 6. Backlinks e menções

Para a marca ganhar autoridade e se separar da homônima americana:

- **Cases com link:** todo cliente atendido, peça um link no rodapé ("Site por Verano Company") ou uma menção em post. Alta relevância temática.
- **LinkedIn:** publicar cases e insights de SEO local com regularidade. LinkedIn é rastreado por Google e por LLMs.
- **Guest posts** em blogs de marketing/empreendedorismo brasileiros
- **Podcasts e comunidades** do nicho de agências e empreendedorismo local
- **Reddit e fóruns:** LLMs consomem muito conteúdo de comunidade. Participação genuína (não spam) em r/marketing, r/empreendedorismo, grupos do setor.

⚠️ Não compre backlinks. Penalidade é real e a recuperação é lenta.

### 🟡 7. Publicar conteúdo com constância

O blog só funciona com ritmo. Sugestão realista: **2 posts por mês**, sustentados.

Pauta inicial, orientada a busca real:
- "Como aparecer no Google Maps: guia completo"
- "Por que meu negócio não aparece no Google?"
- "Perfil da Empresa no Google: o que otimizar em 2026"
- "Quanto custa SEO local no Brasil?"
- "SEO local vs. Google Ads: qual dá mais retorno?"

Cada post é uma porta de entrada nova e um ativo citável por LLMs.

### 🟢 8. Analytics

- GA4 instalado e vinculado ao Search Console
- Eventos de conversão configurados (envio de formulário, clique no WhatsApp)
- Sem isso, não dá pra saber qual página traz cliente

### 🟢 9. Monitorar GEO manualmente

Uma vez por mês, perguntar em ChatGPT, Claude, Perplexity e Gemini:

- "O que é a Verano Company?"
- "Melhores agências de SEO local no Brasil"
- "Quem contratar para posicionar minha empresa no Google Maps?"

Registrar se aparece, como aparece e quais fontes são citadas. É o seu termômetro de GEO — e mostra quais páginas os modelos estão realmente usando.

### 🟢 10. Google Ads na própria marca (opcional)

Campanha de marca custa muito pouco (baixa concorrência no termo exato) e garante a primeira posição enquanto o orgânico amadurece. Também protege contra concorrente que dê lance no seu nome.

---

## 3. Cronograma sugerido

| Fase | Prazo | Foco |
|---|---|---|
| **1 — Destravar** | Semana 1–2 | SSR/pré-render, titles, JSON-LD, sitemap, robots. Manual: GSC + GBP + Bing |
| **2 — Estruturar** | Semana 3–6 | Páginas de serviço, cases, /sobre, links internos, Core Web Vitals. Manual: perfis sociais + NAP + primeiras avaliações |
| **3 — Alimentar** | Mês 2–4 | Blog quinzenal, FAQ com schema, llms.txt. Manual: backlinks, cases, LinkedIn ativo |
| **4 — Iterar** | Contínuo | Dados do GSC → ajustar. Monitorar GEO mensalmente |

---

## 4. Expectativa de resultado

| Query | Prazo estimado | Viabilidade |
|---|---|---|
| `veranocompany` | 2–4 semanas | ✅ Alta |
| `verano company br` | 1–3 meses | ✅ Alta |
| `verano company` (Brasil) | 3–6 meses | 🟡 Média |
| `verano company` (global) | 12+ meses | 🔴 Baixa |
| `verano` | — | ❌ Inviável |
| `seo local [cidade]` | 4–8 meses | 🟡 Média — **maior valor comercial** |

**A leitura honesta:** perseguir "verano" é gastar energia contra uma empresa de US$820M de receita. O retorno real está em (a) ser inequivocamente #1 para quem já conhece a marca e busca por ela, e (b) capturar quem busca o serviço sem conhecer a marca. O item (b) é o que gera cliente.

---

## 5. Primeiro passo

Se for fazer apenas uma coisa esta semana: **resolver a renderização**. Todo o resto deste documento depende disso. Um site com HTML vazio é invisível para o Google e literalmente inexistente para os crawlers de IA — nenhuma outra otimização produz efeito enquanto isso não for corrigido.
