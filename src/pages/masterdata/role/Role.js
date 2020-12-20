import React, { useEffect, useState, useMemo } from "react";
import * as FaIcons from "react-icons/fa";
import Loading from '../../../components/utils/Loading';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import ApiService from '../../../components/utils/ApiService';
export default function Role() {
    let api = ApiService.get("http://localhost:6969/api/role")
    const [list, setList] = useState([])
    const [item, setItem] = useState(null)
    useEffect(() => {
        api.then(res => {
            setList(res.data.data)
        })
    }, [item])

    return (
        <div>
            <button className="btn btn-sm btn-info" data-toggle="modal" data-target="#CreateFormModal"><FaIcons.FaPlusCircle /> Create User</button>
            <br />
            <br />
            <div style={{overflow : 'auto'}}>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Controller</th>
                            <th>Url</th>
                            <th>Remark</th>
                            <th>View</th>
                            <th>Store</th>
                            <th>Edit</th>
                            <th>Delete</th>
                            <th>Print</th>
                            <th>Custom</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            list.length > 0 ?
                                list.map((itm, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{itm.name}</td>
                                        <td>{itm.controller}</td>
                                        <td>{itm.url}</td>
                                        <td>{itm.remark}</td>
                                        <td><input disabled={true} type="checkbox" checked={itm.HaveAccessView} /></td>
                                        <td><input disabled={true} type="checkbox" checked={itm.HaveAccessCreate} /></td>
                                        <td><input disabled={true} type="checkbox" checked={itm.HaveAccessEdit} /></td>
                                        <td><input disabled={true} type="checkbox" checked={itm.HaveAccessDelete} /></td>
                                        <td><input disabled={true} type="checkbox" checked={itm.HaveAccessPrint} /></td>
                                        <td><input disabled={true} type="checkbox" checked={itm.HaveAccessCustom} /></td>
                                        <td nowrap>
                                            <button onClick={e => setItem(itm)} data-toggle="modal" data-target="#EditFormModal" className="btn btn-xs btn-primary"><FaIcons.FaEdit /></button> 
                                            <button onClick={e => setItem(itm)} data-toggle="modal" data-target="#DeleteFormModal" className="btn btn-xs btn-danger"><FaIcons.FaTrash /></button>
                                        </td>
                                    </tr>
                                )) :
                                <tr><td colSpan="8"><Loading /></td></tr>
                        }
                    </tbody>
                </table>
            </div>
            <Add setItem={setItem} />
            { item !== null &&
                <div>
                    <Edit item={item} setItem={setItem} />
                    <Delete item={item} setItem={setItem} />
                </div>
            }
        </div>
    )
}
