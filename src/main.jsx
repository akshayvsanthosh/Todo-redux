import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './bootstrap.min.css'
import './index.css'
import { Provider } from 'react-redux'
import todoStore from './Redux/todoStore.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={todoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
)
