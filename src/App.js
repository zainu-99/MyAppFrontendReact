import React, { useState, useEffect } from 'react'
import Main from './components/layout/Main'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'

import { BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login'
import UserCookies from './components/utils/UserCookies'

export default function App() {
  const userCookies = UserCookies.get()
  const [auth, setAuth] = useState(userCookies);
  const [message, setMessage] = useState("")
  useEffect(() => {
    UserCookies.set(auth)
  }, [auth])

  const verify = res => {
    setMessage(res.message)
    if (res.token !== undefined) {
      console.log(res.data)
      setAuth({ token: res.token, user: res.data, islogin: true })
      console.log(res.data._id)
      window.location.reload()
    } else {
      setAuth({ token: "", user: {}, islogin: false })
    }
  }
  const signOut = () => {
    setMessage("")
    setAuth({ token: "", user: {}, islogin: false })
  }
  return ((auth.islogin) ? (
    <div className="wrapper">
      <Router>
        <Header />
        <Sidebar signOut={signOut} />
        <Main />
        <Footer />
      </Router>
    </div>) : (<Login verify={verify} message={message} />)
  )
}
