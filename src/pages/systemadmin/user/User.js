import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import ApiService from '../../../components/utils/ApiService';
import ResetPassword from "./ResetPassword";
import UserGroup from "./UserGroup";
import UserRole from "./UserRole";
export default function User() {
    let endpoint = ApiService.EndPoint.user
    const [list, setList] = useState([])
    const [item, setItem] = useState(null)
    useEffect(() => {
        reload()
    },[])
    const reload = ()=>{
        let api = ApiService.get(endpoint)
        api.then(res=>{
            setList(res.data.data)
        })
    }

    return (
        <div>
            <button className="btn btn-sm btn-info" data-toggle="modal" data-target="#CreateFormModal"><FaIcons.FaPlusCircle /> Create User</button>
            <br />
            <br />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Adrress</th>
                        <th>Gender</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((itm, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{itm.userid}</td>
                                <td>{itm.name}</td>
                                <td>{itm.email}</td>
                                <td>{itm.phone}</td>
                                <td>{itm.address}</td>
                                <td>{itm.gender}</td>
                                <td>
                                    <button onClick={e => setItem(itm)} data-toggle="modal" data-target="#ResetPassFormModal" className="btn btn-xs btn-warning text-light"><FaIcons.FaKey /></button> <span>&nbsp;</span>
                                    <button onClick={e => setItem(itm)} data-toggle="modal" data-target="#UserRoleFormModal" className="btn btn-xs btn-info"><FaIcons.FaShieldAlt /></button> <span>&nbsp;</span>
                                    <button onClick={e => setItem(itm)} data-toggle="modal" data-target="#UserGroupFormModal" className="btn btn-xs btn-success"><FaIcons.FaUsers /></button> <span>&nbsp;</span>
                                    <button onClick={e => setItem(itm)} data-toggle="modal" data-target="#EditFormModal" className="btn btn-xs btn-primary"><FaIcons.FaEdit /></button> <span>&nbsp;</span>
                                    <button onClick={e => setItem(itm)} data-toggle="modal" data-target="#DeleteFormModal" className="btn btn-xs btn-danger"><FaIcons.FaTrash /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Add reload={reload} />
            { item !== null &&
            <div>
                <ResetPassword item = {item} reload={reload} />
                <UserRole item = {item} reload={reload} />
                <UserGroup item = {item} reload={reload} />
                <Edit item = {item} reload={reload} />
                <Delete item ={item} reload={reload}/>
            </div>
            }
        </div>
    )
}
