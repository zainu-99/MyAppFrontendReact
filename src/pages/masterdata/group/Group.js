import React, { useEffect, useState } from "react";
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import ApiService from '../../../components/utils/ApiService';
import Access from "../../../components/utils/Access";
import ButtonAdd from "../../../components/layout/ButtonAdd";
import ButtonEdit from "../../../components/layout/ButtonEdit";
import ButtonDelete from "../../../components/layout/ButtonDelete";
export default function Group() {
    let endpoint = ApiService.EndPoint.group
    const [list, setList] = useState([])
    const [item, setItem] = useState(null)
    const reload = () => {
        let api = ApiService.get(endpoint)
        api.then(res => {
            if (res.data.message == "Successfully") {
                Access.set(res.data.access)
                setList(res.data.data)
            }
        })
    }
    useEffect(() => {
        reload()
    }, [])

    return (
        <div>
            <ButtonAdd haveAccess={Access.get().allowCreate} />
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
                                    <ButtonEdit haveAccess={Access.get().allowEdit} itm={itm} setItem={setItem} />
                                    <ButtonDelete haveAccess={Access.get().allowDelete} itm={itm} setItem={setItem} />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
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
