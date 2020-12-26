import React from 'react'
import * as FaIcons from "react-icons/fa";
function Item({item,setItem,sparator}) {
    return (
        <>
            <tr style={sparator===""?{fontWeight:'bold'}:{}}>
                <td>{sparator +(sparator!==""?"❯ ":"")+ item.group.name}</td>
                <td>{item.remark}</td>
                <td>  
                    <button onClick={e => setItem(item)} data-toggle="modal" data-target="#GroupRoleFormModal" className="btn btn-xs btn-info"><FaIcons.FaShieldAlt /></button> <span>&nbsp;</span>
                    <button onClick={e => setItem(item)} data-toggle="modal" data-target="#EditFormModal" className="btn btn-xs btn-primary"><FaIcons.FaEdit /></button> <span>&nbsp;</span>
                    <button onClick={e => setItem(item)} data-toggle="modal" data-target="#DeleteFormModal" className="btn btn-xs btn-danger"><FaIcons.FaTrash /></button>
                </td>
            </tr>
            {
                item.children.map((itm, i) => (
                    
                    <Item key={i} item={itm} setItem={setItem} sparator={sparator + "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"} />
                ))
            }
        </>
    )
}

export default Item
