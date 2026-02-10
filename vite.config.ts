import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const deferStylesPlugin = () => ({
  name: 'defer-styles',
  transformIndexHtml: {
    enforce: 'post',
    transform(html: string) {
      const links: string[] = []
      const updated = html.replace(/<link\\b([^>]*?)>/gi, (match, attrs) => {
        const relMatch = attrs.match(/\\brel=(\"|')stylesheet\\1/i)
        const hrefMatch = attrs.match(/\\bhref=(\"|')([^\"']+\\.css)\\1/i)
        if (!relMatch || !hrefMatch) return match

        const href = hrefMatch[2]
        links.push(href)
        const hasCrossorigin = /\\bcrossorigin\\b/i.test(attrs)
        return `<link rel=\"preload\" as=\"style\" href=\"${href}\" onload=\"this.onload=null;this.rel='stylesheet'\"${hasCrossorigin ? ' crossorigin' : ''}>`
      })

      if (!links.length) return html

      const noscript = links.map((href) => `<noscript><link rel=\"stylesheet\" href=\"${href}\"></noscript>`).join('')
      return updated.replace('</head>', `${noscript}</head>`)
    },
  },
})

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    deferStylesPlugin(),
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
