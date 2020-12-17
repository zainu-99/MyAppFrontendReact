import React from 'react'
import * as FaIcons from "react-icons/fa";
import { Link} from 'react-router-dom';
export default function Menu() {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item has-treeview menu-close">
                    <a href="#" className="nav-link ">
                        <FaIcons.FaTh className="nav-icon" />
                        <p>Admin System<i className="right fas fa-angle-left" /></p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to={"/user"} className="nav-link">
                                <FaIcons.FaRegCircle className="nav-icon" />
                                <p>User</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/group"} className="nav-link">
                                <FaIcons.FaRegCircle className="nav-icon" />
                                <p>Group</p>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item has-treeview menu-close">
                    <a href="#" className="nav-link ">
                        <FaIcons.FaTh className="nav-icon" />
                        <p>Master Data<i className="right fas fa-angle-left" /></p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <Link to={"/user"} className="nav-link">
                                <FaIcons.FaRegCircle className="nav-icon" />
                                <p>User</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/group"} className="nav-link">
                                <FaIcons.FaRegCircle className="nav-icon" />
                                <p>Group</p>
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-sign-out-alt" />
                        <p>Logout</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
