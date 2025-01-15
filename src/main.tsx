import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import posthog from 'posthog-js'
import './index.css'
import App from './app.tsx'

posthog.init('phc_XCqb83stKCDageElzNonWO1mbAdTp088R9axHmsPs5O',
  { api_host: 'https://eu.i.posthog.com' }
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)