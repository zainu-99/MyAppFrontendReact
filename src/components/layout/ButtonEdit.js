import React from 'react'
import * as FaIcons from "react-icons/fa";
function ButtonEdit({haveAccess,itm,setItem}) {
    if (haveAccess)
        return (
            <>
                <button onClick={e => setItem(itm)} data-toggle="modal" data-target="#EditFormModal" className="btn btn-xs btn-primary"><FaIcons.FaEdit /></button> <span>&nbsp;</span>
            </>
        )
    else return (
        <></>
    )
}

export default ButtonEdit
