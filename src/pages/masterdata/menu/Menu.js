import React, { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import Loading from '../../../components/utils/Loading';
import Add from './Add';
import Edit from './Edit';
import Delete from './Delete';
import Item from './Item';
import ApiService from '../../../components/utils/ApiService';
export default function Menu() {    
    let api = ApiService.get("http://localhost:6969/api/menu")
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
                        <th>MenuText</th>
                        <th>Role</th>
                        <th>Url</th>
                        <th>Icon</th>
                        <th>Sort</th>
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
