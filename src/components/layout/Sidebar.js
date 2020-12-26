import React from 'react'
import UserCookies from '../utils/UserCookies'
import Menu from './Menu'

export default function Sidebar({signOut}) {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="/#" className="brand-link" style={{ textAlign: 'center' }}>
                <span className="brand-text font-weight-light" style={{ fontWeight: 'bold!important' }}>App Core System</span>
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={process.env.PUBLIC_URL + "/dist/img/user.png"} className="img-circle elevation-2" alt="profile" />
                    </div>
                    <div className="info">
                        <a href="/#" className="d-block">{UserCookies.get().user.userid} | {UserCookies.get().user.name}</a>
                    </div>
                </div>
                <Menu signOut={signOut}/>
            </div>
        </aside>
    )
}
