import React from 'react'

export default function Header() {
    return (
<nav className="main-header navbar navbar-expand navbar-white navbar-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" id="togglemenu" data-widget="pushmenu" href="/#" role="button"><i className="fas fa-bars" /></a>
    </li>  
  </ul>
  {/* <form className="form-inline ml-3" >
    <div className="input-group input-group-sm">
      <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
      <div className="input-group-append">
        <button className="btn btn-navbar" type="submit">
          <i className="fas fa-search" />
        </button>
      </div>
    </div>
  </form> */}
  {/* <ul className="navbar-nav ml-auto">
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="/#">
        <i className="far fa-comments" />
        <span className="badge badge-danger navbar-badge">0</span>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">  
        <a href="/#" className="dropdown-item dropdown-footer">See All Messages</a>
      </div>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link" data-toggle="dropdown" href="/#">
        <i className="far fa-bell" />
        <span className="badge badge-warning navbar-badge">0</span>
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right"> 
        <a href="/#" className="dropdown-item dropdown-footer">See All Notifications</a>
      </div>
    </li>
    <li className="nav-item">
      <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="/#" role="button"><i className="fas fa-th-large" /></a>
    </li>
  </ul> */}

</nav>

    )
}
