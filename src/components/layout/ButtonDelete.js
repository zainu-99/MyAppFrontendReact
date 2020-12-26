import React from 'react'
import * as FaIcons from "react-icons/fa";
function ButtonDelete({haveAccess,itm,setItem}) {
    if (haveAccess)
        return (
            <>
                <button onClick={e => setItem(itm)} data-toggle="modal" data-target="#DeleteFormModal"   className="btn btn-xs btn-danger"><FaIcons.FaTrash /></button>
            </>
        )
    else return (
        <></>
    )
}

export default ButtonDelete
