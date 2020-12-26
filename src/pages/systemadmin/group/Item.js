import React from 'react'
import * as FaIcons from "react-icons/fa";
import ButtonDelete from '../../../components/layout/ButtonDelete';
import ButtonEdit from '../../../components/layout/ButtonEdit';
import Access from '../../../components/utils/Access';
function Item({ item, setItem, sparator }) {
    return (
        <>
            <tr style={sparator === "" ? { fontWeight: 'bold' } : {}}>
                <td>{sparator + (sparator !== "" ? "❯ " : "") + item.group.name}</td>
                <td>{item.remark}</td>
                <td>
                    <button onClick={e => setItem(item)} data-toggle="modal" data-target="#GroupRoleFormModal" className="btn btn-xs btn-info"><FaIcons.FaShieldAlt /></button> <span>&nbsp;</span>
                    <ButtonEdit haveAccess={Access.get().allowEdit} itm={item} setItem={setItem} />
                    <ButtonDelete haveAccess={Access.get().allowDelete} itm={item} setItem={setItem} />
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
