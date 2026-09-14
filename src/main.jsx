import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.jsx'

const root = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Production builds ship prerendered HTML (scripts/prerender.mjs), so attach
// to it; `vite dev` serves an empty root and renders from scratch.
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
