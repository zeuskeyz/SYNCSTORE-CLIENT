import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserContextProvider } from './contexts/UserContextProvider.jsx'
import { OpenTasksContextProvider } from './contexts/OpenTasksContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <OpenTasksContextProvider>
        <App />
      </OpenTasksContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
