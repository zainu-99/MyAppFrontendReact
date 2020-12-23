import React from 'react'
import * as FaIcons from "react-icons/fa";
function Option({item,setItem,sparator}) {
    return (
        <>
            <option style={sparator===""?{fontWeight:'bold'}:{}} value={item._id}>
                {sparator +(sparator!==""?"❯ ":"")+ item.group.name}
            </option>
            {
                item.child.map((itm, i) => (
                    <Option key={i} item={itm} setItem={setItem} sparator={sparator + "\u00A0"+"\u00A0"+"\u00A0"} />
                ))
            }
        </>
    )
}

export default Option
