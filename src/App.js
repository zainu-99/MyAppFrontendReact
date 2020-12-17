import React from 'react'
import Content from './components/Content'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Sidebar />
        <Content />
        <Footer />
      </Router>
    </div>
  )
}
