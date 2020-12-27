import React, { useEffect, useState } from "react";
import Loading from '../../../components/utils/Loading';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import ApiService from '../../../components/utils/ApiService';
import Access from "../../../components/utils/Access";
import ButtonAdd from "../../../components/layout/ButtonAdd";
import ButtonEdit from "../../../components/layout/ButtonEdit";
import ButtonDelete from "../../../components/layout/ButtonDelete";
export default function Role() {
    let endpoint = ApiService.EndPoint.role
    const [list, setList] = useState([])
    const [item, setItem] = useState(null)
    useEffect(() => {
        reload()
    }, [])
    const reload = () => {
        let api = ApiService.get(endpoint)
        api.then(res => {
            if (res.data.message === "Successfully") {
                Access.set(res.data.access)
                setList(res.data.data)
            }
        })
    }

    return (
        <div>
            <ButtonAdd haveAccess={Access.get().allowCreate} />
            <br />
            <br />
            <div style={{ overflow: 'auto' }}>
                <table id="datatable" className="table table-hover">
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
                                        <td>{itm.HaveAccessView ? "✓" : ""}</td>
                                        <td>{itm.HaveAccessCreate ? "✓" : ""}</td>
                                        <td>{itm.HaveAccessEdit ? "✓" : ""}</td>
                                        <td>{itm.HaveAccessDelete ? "✓" : ""}</td>
                                        <td>{itm.HaveAccessPrint ? "✓" : ""}</td>
                                        <td>{itm.HaveAccessCustom ? "✓" : ""}</td>
                                        <td nowrap={"nowrap"}>
                                            <ButtonEdit haveAccess={Access.get().allowEdit} itm={itm} setItem={setItem} />
                                            <ButtonDelete haveAccess={Access.get().allowDelete} itm={itm} setItem={setItem} />
                                        </td>
                                    </tr>
                                )) :
                                <tr><td colSpan="8"><Loading /></td></tr>
                        }
                    </tbody>
                </table>
            </div>
            <Add reload={reload} />
            { item !== null &&
                <div>
                    <Edit item={item} reload={reload} />
                    <Delete item={item} reload={reload} />
                </div>
            }
        </div>
    )
}
