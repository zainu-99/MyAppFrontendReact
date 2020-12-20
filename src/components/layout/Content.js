import React from 'react'
import User from '../../pages/systemadmin/user/User'

import { Route,  Switch } from 'react-router-dom';
import Group from '../../pages/systemadmin/group/Group';
import GroupLevel from '../../pages/masterdata/group/Group';
import Role from '../../pages/masterdata/role/Role';
import Menu from '../../pages/masterdata/menu/Menu';
export default function Content() {
    return (
        <div>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Page</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Starter Page</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-body">
                            <Switch>
                                <Route path='/user' component={User} />
                                <Route path='/grouplevel' component={Group} />
                                <Route path='/group-m' component={GroupLevel} />
                                <Route path='/role-m' component={Role} />
                                <Route path='/menu-m' component={Menu} />
                            </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
