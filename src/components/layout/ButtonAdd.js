import React from 'react'
import * as FaIcons from "react-icons/fa";
function ButtonAdd({haveAccess}) {
    if(haveAccess==true){
    return (
        <button className="btn btn-sm btn-info" data-toggle="modal" data-target="#CreateFormModal"><FaIcons.FaPlusCircle /> Create User</button>
    )}
    else return(
        <></>
    )
}

export default ButtonAdd
