import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { faqs } from './src/data/faq'

// Injects FAQPage JSON-LD derived from src/data/faq.ts directly into the
// built HTML, so it's present in the raw HTML served to crawlers (this is
// still a client-rendered SPA — anything injected by React only exists
// after hydration, which crawlers may not execute).
function faqStructuredData(): Plugin {
  return {
    name: 'faq-structured-data',
    transformIndexHtml(html) {
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
      const script = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`
      return html.replace('</head>', `${script}\n    </head>`)
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    faqStructuredData(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
