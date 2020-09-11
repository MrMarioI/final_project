import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import AuthProvider from './components/auth/AuthProvider'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <AuthProvider>
    <App />
    </AuthProvider>
  </Router>,
  document.getElementById('root')
)
