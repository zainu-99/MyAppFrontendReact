import React, { useEffect, useState } from "react";
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import Item from './Item';
import ApiService from '../../../components/utils/ApiService';
import GroupRole from "./GroupRole";
import Access from "../../../components/utils/Access";
import ButtonAdd from "../../../components/layout/ButtonAdd";
export default function Group() { 
    let endpoint = ApiService.EndPoint.grouplevel   
    const [list, setList] = useState([])
    const [item, setItem] = useState(null)
    useEffect(() => {
        reload()
    },[])
    const reload = ()=>{
        let api = ApiService.get(endpoint)
        api.then(res=>{
            if (res.data.message == "Successfully") {
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
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Remark</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((itm, i) => (
                            <Item key={i} item = {itm} setItem={setItem} sparator={""} />
                        )) 
                    }
                </tbody>
            </table>
            <Add reload={reload} list={list} />
            { item !== null &&
            <div>
                <GroupRole item = {item} reload={reload} />
                <Edit item = {item} reload={reload} />
                <Delete item ={item} reload={reload}/>
            </div>
            }
        </div>
    )
}
