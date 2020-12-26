import React, { useEffect, useState } from 'react'
import ApiService from '../../../components/utils/ApiService'
import Option from './Option'
import ReactDOM from 'react-dom';
function UserRole({ item, reload }) {
    let [field, setField] = useState([])

    const setFieldNoRender = (p0) => {
        field.push(p0)
    }
    const [userrole, setUserRole] = useState([])
    const [usergroup, setUserGroup] = useState([])

    useEffect(() => {
        getusergroup(item._id)
        ReactDOM.findDOMNode(document.querySelector("#cmbgrouplevel")).selectedIndex = 0
        OnChangeGroupLevel("")
    }, [item])

    const getusergroup = (id) => {
        let endpoint = ApiService.EndPoint.usergrouplevel
        const resgroup = ApiService.get(endpoint, { "user": id })
        resgroup.then(res => {
            if (res.data.message === "Successfully") {
                setUserGroup(res.data.data)
            } else {
                setUserGroup([])
            }
        })
    }
    const OnClose = (e)=>{
        reload()
    }
    const OnChangeGroupLevel = (id) => {
        getUserRole(id)
    }
    const getUserRole = (id) => {
        let endpoint = ApiService.EndPoint.userrole
        const api = ApiService.get(endpoint, { "grouplevel": id,"user":item._id })
        api.then(res => {
            if (res.data.message === "Successfully") {
                setUserRole(res.data.data)
            } else {
                setUserRole([])
            }
            setField([])
        })
    }
    const OnChanged = (p0, p1, roleid) => {
        field[p1][p0.target.name] = p0.target.checked
        setField([...field, { [p1]: field[p1] }])
        let endpoint = ApiService.EndPoint.userrole
        const userrole = {"user": item._id,"role": roleid}
        userrole[p0.target.name] =p0.target.checked
        const resgroup = ApiService.put(endpoint,userrole)
        resgroup.then(res=>{
            console.log(res.data.data)
        })
    }
    return (
        <div className="modal fade" id="UserRoleFormModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">User Role</h5>
                        <button onClick={ e => OnClose(e)} type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>Group </label>
                            <select id="cmbgrouplevel" className="form-control" onChange={e => OnChangeGroupLevel(e.target.value)}>
                                <option value >--Choose Group--</option>
                                {
                                    usergroup.filter(list => list.usergrouplevels.length > 0).map((itm, i) => (
                                        <Option key={i} item={itm} setID={null} sparator={""} />
                                    ))
                                }
                            </select>
                        </div>
                        <hr />
                        <div>
                            {
                                userrole.map((itm, i) => (
                                    <div key={i}>
                                        <div key={i} className="form-group" >
                                            <strong className="label">{itm.role.name}</strong><br />
                                            <span className="label">Remark : {itm.role.remark} | Url : {itm.role.url}</span><br />
                                            {itm.role.userroles.length > 0 ?
                                                <>
                                                    {setFieldNoRender(itm.role.userroles[0])}
                                                    {itm.isViewActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} name="allowView" checked={field[i].allowView} type="checkbox" /><span>&nbsp;</span>View<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                    {itm.isCreateActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} name="allowCreate" checked={field[i].allowCreate} type="checkbox" /><span>&nbsp;</span>Store<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                    {itm.isEditActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} name="allowEdit" checked={field[i].allowEdit} type="checkbox" /><span>&nbsp;</span>Edit<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                    {itm.isDeleteActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} name="allowDelete" checked={field[i].allowDelete} type="checkbox" /><span>&nbsp;</span>Delete<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                    {itm.isPrintActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} name="allowPrint" checked={field[i].allowPrint} type="checkbox" /><span>&nbsp;</span>Print<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                    {itm.isCustomActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} name="allowCustom" checked={field[i].allowCustom} type="checkbox" /><span>&nbsp;</span>Custom<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                </> :
                                                <>
                                                    {setFieldNoRender({
                                                        "role": null,
                                                        "user": item._id,
                                                        "allowView": false,
                                                        "allowCreate": false,
                                                        "allowEdit": false,
                                                        "allowDelete": false,
                                                        "allowPrint": false,
                                                        "allowCustom": false
                                                    })}
                                                    {itm.isViewActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} checked={field[i].allowView} name="allowView" type="checkbox" /><span>&nbsp;</span>View<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                    {itm.isCreateActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} checked={field[i].allowCreate} name="allowCreate" type="checkbox" /><span>&nbsp;</span>Store<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                    {itm.isEditActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} checked={field[i].allowEdit} name="allowEdit" type="checkbox" /><span>&nbsp;</span>Edit<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                    {itm.isDeleteActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} checked={field[i].allowDelete} name="allowDelete" type="checkbox" /><span>&nbsp;</span>Delete<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                    {itm.isPrintActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} checked={field[i].allowPrint} name="allowPrint" type="checkbox" /><span>&nbsp;</span>Print<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                    {itm.isCustomActive && (<><input onChange={e => OnChanged(e, i, itm.role._id)} checked={field[i].allowCustom} name="allowCustom" type="checkbox" /><span>&nbsp;</span>Custom<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                </>
                                            }
                                        </div>
                                        <hr />
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserRole
