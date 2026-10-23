import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'

/**
 * Custom Vite plugin to transparently handle .jpg <-> .jpeg extension interchangeability
 * in public/assets/images. If a user drops a .jpeg file but code requests .jpg (or vice-versa),
 * it serves the existing file automatically.
 */
function imageExtensionResolverPlugin() {
  return {
    name: 'vite-image-extension-resolver',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url || !req.url.startsWith('/assets/images/')) {
          return next()
        }

        const decodedUrl = decodeURI(req.url.split('?')[0])
        const publicPath = path.join(process.cwd(), 'public', decodedUrl.replace(/^\//, ''))

        if (fs.existsSync(publicPath)) {
          return next()
        }

        // Try alternating .jpg <-> .jpeg
        let alternatePath = null
        if (decodedUrl.endsWith('.jpg')) {
          alternatePath = path.join(process.cwd(), 'public', decodedUrl.replace(/\.jpg$/i, '.jpeg').replace(/^\//, ''))
        } else if (decodedUrl.endsWith('.jpeg')) {
          alternatePath = path.join(process.cwd(), 'public', decodedUrl.replace(/\.jpeg$/i, '.jpg').replace(/^\//, ''))
        }

        if (alternatePath && fs.existsSync(alternatePath)) {
          res.setHeader('Content-Type', 'image/jpeg')
          return fs.createReadStream(alternatePath).pipe(res)
        }

        next()
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imageExtensionResolverPlugin()],
})
