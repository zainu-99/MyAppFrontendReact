import React, { useState,useEffect } from 'react'
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
      setAuth({ token: res.token,oiduser: res.data._id, userid: res.data.userid, islogin: true })
      console.log(res.data._id)
      window.location.reload()
    } else {
      setAuth({ token: "",oiduser:"", userid: "", islogin: false })
    }
  }
  const signOut = () =>{
    setMessage("")
    setAuth({ token: "",oiduser:"", userid: "", islogin: false })
  }
  return ((auth.islogin) ? ( 
    <div className="wrapper">
      <Router>
        <Header/>
        <Sidebar signOut={signOut}/>
        <Main/>
        <Footer/>
      </Router>
    </div>) : (<Login verify={verify} message={message} />)
  )
}
