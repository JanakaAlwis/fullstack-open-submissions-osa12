import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import App from './AppWithServer.jsx'
// import App from './AppWithServerAlter.jsx'
import App from './AppWithServerAlterStyle.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
