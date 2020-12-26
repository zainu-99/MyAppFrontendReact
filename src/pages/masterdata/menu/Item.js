import React from 'react'
import ButtonDelete from '../../../components/layout/ButtonDelete';
import ButtonEdit from '../../../components/layout/ButtonEdit';
import Access from '../../../components/utils/Access';
function Item({ item, setItem, sparator }) {
    return (
        <>{ item.role !== null &&
            <tr style={sparator === "" ? { fontWeight: 'bold' } : {}}>
                <td>{sparator + (sparator !== "" ? "❯ " : "") + item.menuText}</td>
                <td>{item.role.name}</td>
                <td>{item.role.url}</td>
                <td>{item.icon}</td>
                <td>{item.orderSort}</td>
                <td>
                    <ButtonEdit haveAccess={Access.get().allowEdit} itm={item} setItem={setItem} />
                    <ButtonDelete haveAccess={Access.get().allowDelete} itm={item} setItem={setItem} />
                </td>
            </tr>
        }
            {
                item.children.map((itm, i) => (
                    <Item key={i} item={itm} setItem={setItem} sparator={sparator + "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"} />
                ))
            }
        </>
    )
}

export default Item
