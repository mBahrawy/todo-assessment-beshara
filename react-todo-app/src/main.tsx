import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@/styles.scss'
import AppReduxProvider from './components/AppReduxProvider/AppReduxProvider.component'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppReduxProvider>
      <App />
    </AppReduxProvider>
  </React.StrictMode>
)
