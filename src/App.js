import React, { useState,useEffect } from 'react'
import Content from './components/layout/Content'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'

import { BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login'
import UserCookies from './components/utils/UserCookies'

export default function App() {
  const userCookies = UserCookies.get()
  const [user, setUser] = useState(userCookies);
  const [message, setMessage] = useState("")
  useEffect(() => {
    UserCookies.set(user)
  }, [user])

  const verify = res => {
    setMessage(res.message)
    if (res.token !== undefined) {
      setUser({ token: res.token, userid: res.data.userid, islogin: true })
      window.location.reload()
    } else {
      setUser({ token: "", userid: "", islogin: false })
    }
  }
  const signOut = () =>{
    setMessage("")
    setUser({ token: "", userid: "", islogin: false })
  }
  return ((user.islogin) ? ( 
    <div>
      <Router>
        <Header/>
        <Sidebar signOut={signOut}/>
        <Content/>
        <Footer/>
      </Router>
    </div>) : (<Login verify={verify} message={message} />)
  )
}
