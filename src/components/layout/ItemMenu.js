import React from 'react'
import { Link } from 'react-router-dom';
function ItemMenu({ Item }) {
    if (Item.children.length > 0) return (
        <li className="nav-item has-treeview menu-close">
            <a href="/#" className="nav-link ">
                <i className={"nav-icon fa " + Item.icon}></i>
                <p>{Item.menuText}<i className="right fas fa-angle-left" /></p>
            </a>
            <ul className="nav nav-treeview">{
                Item.children.map((itm, i) => (
                    <ItemMenu key={i} Item={itm} />
                ))
            }
            </ul>
        </li>
    )
    else return (
        <li className="nav-item">
            { Item.role != null &&
                <Link to={"/" + Item.role.url} className="nav-link">
                    <i className={"nav-icon " + Item.icon}></i>
                    <p>{Item.menuText}</p>
                </Link>
            }
        </li>
    )
}

export default ItemMenu
