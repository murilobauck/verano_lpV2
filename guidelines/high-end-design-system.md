# Sistema de Design High-End — Guia Definitivo

> **Objetivo:** Este documento serve como contexto permanente para criar sites profissionais, sofisticados e livres de aparência genérica de IA. Use-o como referência em todos os projetos para garantir consistência e qualidade premium.

---

## 1. PRINCÍPIOS FUNDAMENTAIS

### 1.1 Filosofia de Design
- **Minimalismo Sofisticado:** Menos é mais. Cada elemento deve ter propósito claro.
- **Hierarquia Visual Clara:** Guie o olhar do usuário de forma intencional.
- **Espaçamento Generoso:** Respire. Use padding e margin abundantes (py-28, gap-16, mb-20).
- **Sutileza sobre Ostentação:** Efeitos discretos e refinados, nunca exagerados.
- **Performance First:** Animações leves, imagens otimizadas, código limpo.

### 1.2 O que EVITAR (Sinais de Design Genérico)
- ❌ Gradientes vibrantes e saturados demais
- ❌ Sombras pesadas e escuras (drop-shadow-2xl)
- ❌ Animações excessivas ou chamativas
- ❌ Ícones genéricos de bibliotecas (use custom SVGs)
- ❌ Cards com bordas grossas e fundos sólidos
- ❌ Tipografia sem hierarquia ou tracking
- ❌ Espaçamentos apertados (gap-2, py-4 em seções)
- ❌ CTAs com cores berrantes sem contexto
- ❌ Layouts simétricos e previsíveis demais

---

## 2. TIPOGRAFIA

### 2.1 Fonte Base
```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```
- **Inter** é a escolha padrão: moderna, legível, profissional
- Alternativas premium: SF Pro Display, Geist, Satoshi, Cabinet Grotesk

### 2.2 Escala Tipográfica

#### Headlines (H1)
```tsx
className="text-5xl md:text-7xl lg:text-[82px] leading-[1.05] tracking-[-0.03em]"
```
- Tamanhos grandes: 48px → 56px → 82px
- Line-height apertado: 1.05 a 1.1
- Letter-spacing negativo: -0.03em a -0.02em
- Font-weight: 600 a 700 (semibold/bold)

#### Subheadings (H2)
```tsx
className="text-3xl md:text-5xl leading-tight tracking-tight"
```
- Tamanhos: 30px → 48px
- Line-height: 1.2 a 1.3
- Tracking: tight (-0.025em)

#### Body Text
```tsx
className="text-base md:text-lg text-gray-400 leading-relaxed"
```
- Tamanho: 16px → 18px
- Line-height: 1.6 a 1.7 (relaxed)
- Cor: gray-400 ou gray-500 (nunca branco puro em body)

#### Small Text / Labels
```tsx
className="text-xs uppercase tracking-[0.2em] font-semibold"
```
- Tamanho: 12px
- Sempre uppercase
- Letter-spacing largo: 0.15em a 0.25em
- Font-weight: 600 (semibold)

### 2.3 Hierarquia de Cor Tipográfica
```tsx
// Hierarquia de importância
text-white          // Títulos principais, CTAs
text-gray-200       // Subtítulos, texto secundário importante
text-gray-400       // Body text padrão
text-gray-500       // Texto de suporte, descrições
text-gray-600       // Labels, metadados, footer
```

---

## 3. PALETA DE CORES

### 3.1 Estrutura Base (Dark Theme)
```tsx
// Backgrounds
bg-black            // #000000 - Background principal
bg-neutral-950      // #0a0a0a - Seções alternadas
bg-white/[0.02]     // Hover states sutis
bg-white/[0.04]     // Cards e containers

// Borders
border-white/[0.04] // Divisores sutis
border-white/[0.06] // Borders padrão
border-white/10     // Borders com mais destaque
border-white/15     // Hover states
```

### 3.2 Cores de Acento (Adapte ao seu projeto)
```tsx
// Exemplo: Google Colors (substitua pela identidade do projeto)
#4285F4 // Azul primário
#EA4335 // Vermelho
#FBBC05 // Amarelo
#34A853 // Verde

// Uso:
text-[#4285F4]
bg-[#4285F4]/10     // Background com 10% opacity
border-[#4285F4]/40 // Border com 40% opacity
```

### 3.3 Regras de Uso de Cor
- **Fundos:** Sempre com opacidade baixa (5% a 15%)
- **Bordas:** Opacidade média (20% a 40%)
- **Texto/Ícones:** Opacidade alta (80% a 100%)
- **Shadows:** Sempre com a cor do acento + opacidade (10% a 30%)

---

## 4. ESPAÇAMENTO E LAYOUT

### 4.1 Espaçamento de Seções
```tsx
// Seções principais
className="py-28"  // 112px vertical padding (padrão)
className="py-32"  // 128px para seções hero

// Containers
className="container mx-auto px-6 max-w-7xl"

// Gaps entre elementos
gap-16  // Entre blocos grandes (64px)
gap-10  // Entre cards (40px)
gap-6   // Entre elementos relacionados (24px)
gap-3   // Entre ícone e texto (12px)
```

### 4.2 Grid Systems
```tsx
// 2 colunas
className="grid grid-cols-1 md:grid-cols-2 gap-16"

// 3 colunas (serviços, features)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px"

// Layout assimétrico (60/40)
className="grid lg:grid-cols-5 gap-16"
// Filho 1: lg:col-span-3
// Filho 2: lg:col-span-2
```

### 4.3 Max-Width por Contexto
```tsx
max-w-7xl  // Container principal (1280px)
max-w-5xl  // Conteúdo focado (1024px)
max-w-3xl  // Texto longo, FAQ (768px)
max-w-xl   // Parágrafos, descrições (576px)
max-w-md   // Forms, inputs (448px)
```

---

## 5. COMPONENTES E PADRÕES

### 5.1 Cards Premium
```tsx
<div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-8 
                hover:bg-white/[0.03] hover:border-white/[0.12] 
                transition-all duration-300">
  {/* Conteúdo */}
</div>
```

**Características:**
- Fundos sutis (2% a 4% opacity)
- Bordas finas e discretas
- Rounded generoso (rounded-2xl = 16px)
- Hover states suaves
- Padding interno amplo (p-8 = 32px)

### 5.2 Botões (CTAs)
#### Primário (Destaque)
```tsx
<a className="group relative px-8 py-4 bg-white text-black text-sm font-bold 
              rounded-xl overflow-hidden transition-all duration-300 
              hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]">
  <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4] via-[#EA4335] 
                  to-[#FBBC05] opacity-0 group-hover:opacity-15 transition-opacity" />
  <span className="relative">Texto do Botão</span>
</a>
```

#### Secundário (Outline)
```tsx
<a className="inline-flex items-center gap-2 px-8 py-4 text-sm text-gray-300 
              font-medium border border-white/10 rounded-xl 
              hover:border-white/25 hover:text-white transition-all duration-300">
  Texto do Botão
</a>
```

#### Terciário (Ghost)
```tsx
<a className="group inline-flex items-center gap-2 text-sm font-semibold 
              text-white hover:text-gray-200 transition-colors">
  Texto
  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
</a>
```

### 5.3 Badges e Tags
```tsx
<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
               border border-white/10 bg-white/5 backdrop-blur-sm 
               text-xs text-gray-400 uppercase tracking-[0.2em]">
  <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] 
                 animate-pulse shadow-[0_0_6px_#34A853]" />
  Status Text
</span>
```

### 5.4 Ícones Customizados
**NUNCA use ícones direto de bibliotecas sem customização.**

```tsx
// Exemplo de ícone custom inline
function IconCustom({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" 
         stroke={color} strokeWidth="1.8" strokeLinecap="round" 
         strokeLinejoin="round">
      <path d="..." />
    </svg>
  );
}
```

**Características:**
- Stroke-width: 1.8 a 2 (nunca padrão)
- Tamanho: 18px a 24px
- Cor dinâmica via props
- Sempre com rounded caps/joins

---

## 6. ANIMAÇÕES E TRANSIÇÕES

### 6.1 Framer Motion — Padrões
#### Fade In + Slide Up (Padrão)
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Conteúdo */}
</motion.div>
```

#### Stagger Children (Listas)
```tsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  }
};

<motion.div variants={containerVariants} initial="hidden" animate="visible">
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {/* Item */}
    </motion.div>
  ))}
</motion.div>
```

#### Accordion / Collapse
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      {/* Conteúdo */}
    </motion.div>
  )}
</AnimatePresence>
```

### 6.2 CSS Transitions (Hover, Focus)
```tsx
// Padrão universal
transition-all duration-300

// Específico (melhor performance)
transition-colors duration-200
transition-transform duration-300
transition-opacity duration-400
```

### 6.3 Easing Functions
```tsx
// Framer Motion
ease: [0.25, 0.1, 0.25, 1]  // Cubic bezier suave

// Tailwind
ease-in-out  // Padrão
ease-out     // Para entradas
```

---

## 7. EFEITOS VISUAIS

### 7.1 Backgrounds Radiais (Glows)
```tsx
// Layer 1: Glow principal
<div className="absolute inset-0 
     bg-[radial-gradient(ellipse_at_50%_0%,rgba(66,133,244,0.08)_0%,transparent_60%)]" />

// Layer 2: Glow secundário
<div className="absolute inset-0 
     bg-[radial-gradient(ellipse_at_80%_80%,rgba(234,67,53,0.06)_0%,transparent_60%)]" />

// Layer 3: Glow terciário
<div className="absolute inset-0 
     bg-[radial-gradient(ellipse_at_20%_80%,rgba(52,168,83,0.05)_0%,transparent_60%)]" />
```

**Regras:**
- Opacidade: 4% a 8% (nunca acima de 10%)
- Posições variadas: 50% 0%, 80% 80%, 20% 80%
- Múltiplas camadas para profundidade
- Cores do acento do projeto

### 7.2 Grid Pattern (Fundo)
```tsx
<div 
  className="absolute inset-0 opacity-[0.03]"
  style={{
    backgroundImage: 
      "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), 
       linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
    backgroundSize: "60px 60px"
  }}
/>
```

### 7.3 Backdrop Blur
```tsx
// Navbar, modals, overlays
className="backdrop-blur-xl"  // 24px blur
className="backdrop-blur-md"  // 12px blur
```

### 7.4 Box Shadows (Sutis)
```tsx
// Cards com glow
style={{ boxShadow: `0 0 30px ${color}15` }}

// Hover states
hover:shadow-[0_0_40px_rgba(66,133,244,0.2)]

// Navbar scrolled
shadow-[0_8px_32px_rgba(0,0,0,0.6)]
```

### 7.5 Borders com Gradiente
```tsx
// Top border sutil
<div className="absolute top-0 left-0 right-0 h-px 
     bg-gradient-to-r from-transparent via-white/10 to-transparent" />
```

---

## 8. NAVBAR / HEADER

### 8.1 Estrutura Base
```tsx
<header className="fixed top-0 left-0 right-0 z-50 flex justify-center 
                   px-4 transition-all duration-500 pt-4 md:pt-6 
                   pointer-events-none">
  <div className={`w-full transition-all duration-500 pointer-events-auto 
                   flex flex-col ${scrolled 
                     ? "max-w-5xl bg-black/40 backdrop-blur-xl border 
                        border-white/10 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] 
                        py-3 px-6" 
                     : "max-w-7xl bg-transparent border border-transparent 
                        py-4 px-2"}`}>
    {/* Logo + Nav + CTA */}
  </div>
</header>
```

**Características:**
- Fixed com padding top (pt-4 md:pt-6)
- Centralizado com justify-center
- Transição de largura e fundo no scroll
- Pointer-events-none no container, auto no conteúdo
- Rounded-2xl quando scrolled

### 8.2 Links de Navegação
```tsx
<a className="text-xs text-gray-400 hover:text-white 
              transition-all duration-300 uppercase tracking-[0.15em] 
              font-medium hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] 
              whitespace-nowrap">
  Link Text
</a>
```

### 8.3 Mobile Menu
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="lg:hidden overflow-hidden w-full"
    >
      <div className="flex flex-col gap-4 pt-6 pb-2 
                      border-t border-white/5 mt-4">
        {/* Links */}
      </div>
    </motion.div>
  )}
</AnimatePresence>
```

---

## 9. HERO SECTION

### 9.1 Estrutura Completa
```tsx
<section className="relative min-h-screen flex items-center justify-center 
                    bg-black overflow-hidden">
  {/* Backgrounds radiais */}
  {/* Grid pattern */}
  
  {/* Floating stats (desktop only) */}
  <motion.div className="absolute hidden xl:flex top-[22%] left-[5%] 
                         bg-white/[0.04] border border-white/10 
                         backdrop-blur-md rounded-2xl px-4 py-3">
    {/* Stat content */}
  </motion.div>
  
  <div className="container mx-auto px-6 relative z-[5] text-center 
                  max-w-5xl pt-20 md:pt-0">
    {/* Badge */}
    {/* Headline */}
    {/* Subheadline */}
    {/* CTAs */}
    {/* Trust bar */}
  </div>
</section>
```

### 9.2 Headline com Gradiente
```tsx
<h1 className="text-5xl md:text-7xl lg:text-[82px] text-white 
               leading-[1.05] tracking-[-0.03em] mb-7">
  Texto normal
  <br />
  Texto com{" "}
  <span className="relative inline-block">
    <span className="relative z-10 text-transparent bg-clip-text 
                     bg-gradient-to-r from-[#4285F4] via-[#EA4335] 
                     to-[#FBBC05]">
      destaque.
    </span>
  </span>
</h1>
```

### 9.3 Floating Stats/Badges
```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 1.2, duration: 0.6 }}
  className="absolute hidden xl:flex items-center gap-3 top-[22%] left-[5%] 
             bg-white/[0.04] border border-white/10 backdrop-blur-md 
             rounded-2xl px-4 py-3"
  style={{ boxShadow: `0 0 30px ${color}15` }}
>
  <div className="w-9 h-9 rounded-xl flex items-center justify-center"
       style={{ backgroundColor: `${color}20`, color: color }}>
    {icon}
  </div>
  <div>
    <p className="text-white text-sm font-bold">{value}</p>
    <p className="text-gray-400 text-xs">{label}</p>
  </div>
</motion.div>
```

**Posições sugeridas:**
- `top-[22%] left-[5%]`
- `top-[30%] right-[4%]`
- `bottom-[25%] left-[3%]`

---

## 10. SEÇÕES DE CONTEÚDO

### 10.1 Header de Seção (Padrão)
```tsx
<div className="flex flex-col lg:flex-row gap-16 mb-20">
  <motion.div className="lg:w-1/2">
    <p className="text-xs text-[#4285F4] uppercase tracking-[0.25em] 
                  font-semibold mb-4">
      Eyebrow Label
    </p>
    <h2 className="text-3xl md:text-5xl text-white leading-tight 
                   tracking-tight">
      Título Principal
      <br />
      <span className="text-gray-500">Subtítulo em cinza.</span>
    </h2>
  </motion.div>
  
  <motion.div className="lg:w-1/2 flex flex-col justify-end">
    <p className="text-gray-400 text-base leading-relaxed max-w-lg">
      Descrição da seção com contexto adicional.
    </p>
  </motion.div>
</div>
```



### 10.4 Process / Timeline
```tsx
<div className="space-y-0">
  {steps.map((step, index) => (
    <motion.div className="group relative flex gap-6 pb-12 last:pb-0">
      {/* Linha vertical */}
      {index < steps.length - 1 && (
        <div className="absolute left-5 top-12 bottom-0 w-px 
                        bg-white/[0.06]" />
      )}
      
      {/* Dot numerado */}
      <div className="relative flex-shrink-0 w-10 h-10 rounded-full 
                      flex items-center justify-center border"
           style={{ 
             backgroundColor: `${color}10`, 
             borderColor: `${color}30`,
             color: color 
           }}>
        {icon}
      </div>
      
      {/* Conteúdo */}
      <div className="flex-1 pt-1 pb-4 border-b border-white/[0.04] 
                      last:border-0">
        <h3 className="text-white text-xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  ))}
</div>
```

---

