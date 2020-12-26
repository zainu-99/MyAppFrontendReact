import React, { useEffect, useState } from 'react'
import ApiService from '../utils/ApiService';
import ItemMenu from './ItemMenu';
export default function Menu({ signOut }) {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        let endpoint = ApiService.EndPoint.menuapp 
        const api = ApiService.get(endpoint)
        api.then(res => {
            if(res.data.message === "Successfully")
                setMenu(res.data.data)
        })
    }, [])
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {
                    menu.map((itm, i) => (
                        <ItemMenu key={i} Item={itm} />
                    ))
                }
                 <li className="nav-item">
                    <a href="/#" onClick={signOut} className="nav-link item-menu">
                        <i className="nav-icon fas fa-sign-out-alt" />
                        <p>Logout</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
