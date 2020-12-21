import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import Loading from '../../../components/utils/Loading';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import ApiService from '../../../components/utils/ApiService';
export default function Group() {    
    let api = ApiService.get("http://localhost:6969/api/group")
    const [list, setList] = useState([])
    const [item, setItem] = useState(null)
    useEffect(() => {
        api.then(res => {
            setList(res.data.data)
        })
    },[item])

    return (
        <div>
            <button className="btn btn-sm btn-info" data-toggle="modal" data-target="#CreateFormModal"><FaIcons.FaPlusCircle /> Create User</button>
            <br />
            <br />
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Remark</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((itm, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{itm.name}</td>
                                <td>{itm.remark}</td>
                                <td>
                                    <button onClick={e => setItem(itm)} data-toggle="modal" data-target="#EditFormModal" className="btn btn-xs btn-primary"><FaIcons.FaEdit /></button> <span>&nbsp;</span>  
                                    <button onClick={e => setItem(itm)} data-toggle="modal" data-target="#DeleteFormModal"   className="btn btn-xs btn-danger"><FaIcons.FaTrash /></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <Add list={{list, setList}} />
            { item !== null &&
            <div>
                <Edit item = {item} setItem={setItem} />
                <Delete item ={item} setItem={setItem}/>
            </div>
            }
        </div>
    )
}
