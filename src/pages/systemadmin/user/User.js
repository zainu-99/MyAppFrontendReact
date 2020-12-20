import Axios from 'axios';
import React, { useEffect, useState, useMemo } from "react";
import * as FaIcons from "react-icons/fa";
import Loading from '../../../components/utils/Loading';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import ApiService from '../../../components/utils/ApiService';
export default function User() {
    let api = ApiService.get("http://localhost:6969/api/user")
    const [list, setList] = useState([])
    const [usr, setUsr] = useState(null)
    useEffect(() => {
        api.then(res => {
            setList(res.data.data)
        })
    }, [usr])

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
                        list.length > 0 ?
                        list.map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.userid}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{item.gender}</td>
                                <td>
                                    <button onClick={e => setUsr(item)} data-toggle="modal" data-target="#EditFormModal" className="btn btn-xs btn-primary"><FaIcons.FaEdit /></button> | 
                                    <button onClick={e => setUsr(item)} data-toggle="modal" data-target="#DeleteFormModal"   className="btn btn-xs btn-danger"><FaIcons.FaTrash /></button>
                                </td>
                            </tr>
                        )) :
                       <tr><td colSpan="8"><Loading/></td></tr>
                    }
                </tbody>
            </table>
            <Add setUsr={setUsr} />
            { usr !== null &&
            <div>
                <Edit p0 = {usr} setUsr={setUsr} />
                <Delete p0 ={usr} setUsr={setUsr}/>
            </div>
            }
        </div>
    )
}
