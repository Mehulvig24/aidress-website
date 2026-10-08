import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Design tokens, in styles.css order. Imported one by one (not via styles.css) because the
// Tailwind plugin can't resolve styles.css's bare `tokens/...` imports; switch to
// './styles/styles.css' once Tailwind is removed.
import './styles/tokens/fonts.css'
import './styles/tokens/colors.css'
import './styles/tokens/typography.css'
import './styles/tokens/spacing.css'
import './styles/tokens/motion.css'
import './styles/tokens/base.css'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
