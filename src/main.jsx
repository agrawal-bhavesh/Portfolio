// Bootstrap file: mounts the React app into the root DOM element.
// The global stylesheet is imported here so the theme and layout styles apply everywhere.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './theme.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
