import React from 'react'
import { Route, Switch } from 'react-router-dom';
import ApiService from '../utils/ApiService';

import User from '../../pages/systemadmin/user/User'
import GroupLevel from '../../pages/systemadmin/group/Group';
import Group from '../../pages/masterdata/group/Group';
import Role from '../../pages/masterdata/role/Role';
import Menu from '../../pages/masterdata/menu/Menu';


export default function Content() {
    const baseurl = ApiService.EndPoint.baseurl
    const endpoint = ApiService.EndPoint
    return (
        <Switch>
            <Route path={"/"+ endpoint.user.replace(baseurl,"")} component={User} />
            <Route path={"/" + endpoint.group.replace(baseurl,"")} component={Group} />
            <Route path={"/" + endpoint.grouplevel.replace(baseurl,"")} component={GroupLevel} />
            <Route path={"/" + endpoint.role.replace(baseurl,"")} component={Role} />
            <Route path={"/" + endpoint.menu.replace(baseurl,"")} component={Menu} />
        </Switch>

    )
}
