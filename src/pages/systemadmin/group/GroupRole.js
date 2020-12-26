import React, { useEffect, useState} from 'react'
import ApiService from '../../../components/utils/ApiService'

function GroupRole({ item, reload }) {
    let [field,setField] = useState([])
    const setFieldNoRender = (p0) => {
        field.push(p0)
    }
    const [grouprole, setGroupRole] = useState([])
    useEffect(() => {
        getrel(item._id)
    }, [item])
    const getrel = (id) => {
        let endpoint = ApiService.EndPoint.grouplevelrole
        const resgroup = ApiService.get(endpoint, { "grouplevel": id })
        resgroup.then(res => {
            setGroupRole(res.data.data)
            setField([])
        })
    }
    const OnChanged = (p0, p1, roleid) => {
        field[p1][p0.target.name] = p0.target.checked
        setField([...field,{[p1]:field[p1]}])
        let endpoint = ApiService.EndPoint.grouplevelrole
        const grouprole = {"grouplevel": item._id,"role": roleid}
        grouprole[p0.target.name] =p0.target.checked
        const resgroup = ApiService.put(endpoint,grouprole)
        resgroup.then(res=>{
            console.log(res.data.data)
        })
    }
    return (
        <div className="modal fade" id="GroupRoleFormModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Group Role</h5>
                        <button id="btn-closemodaladd" type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {
                            grouprole.map((itm, i) => (
                                <div key={i}>
                                    <div key={i} className="form-group" >
                                        <strong className="label">{itm.name}</strong><br />
                                        <span className="label">Remark : {itm.remark} | Url : {itm.url}</span><br />
                                        {itm.grouplevelroles.length > 0 ?
                                            <>
                                                {setFieldNoRender(itm.grouplevelroles[0])}
                                                {itm.HaveAccessView && (<><input onChange={e => OnChanged(e,i,itm._id)} name="isViewActive" checked={field[i].isViewActive} type="checkbox" /><span>&nbsp;</span>View<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                {itm.HaveAccessCreate && (<><input onChange={e => OnChanged(e,i,itm._id)} name="isCreateActive" checked={field[i].isCreateActive} type="checkbox" /><span>&nbsp;</span>Store<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                {itm.HaveAccessEdit && (<><input onChange={e => OnChanged(e,i,itm._id)} name="isEditActive" checked={field[i].isEditActive} type="checkbox" /><span>&nbsp;</span>Edit<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                {itm.HaveAccessDelete && (<><input onChange={e => OnChanged(e,i,itm._id)} name="isDeleteActive" checked={field[i].isDeleteActive} type="checkbox" /><span>&nbsp;</span>Delete<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                {itm.HaveAccessPrint && (<><input onChange={e => OnChanged(e,i,itm._id)} name="isPrintActive" checked={field[i].isPrintActive} type="checkbox" /><span>&nbsp;</span>Print<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                {itm.HaveAccessCustom && (<><input onChange={e => OnChanged(e,i,itm._id)} name="isCustomActive" checked={field[i].isCustomActive} type="checkbox" /><span>&nbsp;</span>Custom<span>&nbsp;</span><span>&nbsp;</span></>)}
                                            </> :
                                            <>
                                                {setFieldNoRender({
                                                        "role": null,
                                                        "grouplevel": item._id,
                                                        "isViewActive": false,
                                                        "isCreateActive": false,
                                                        "isEditActive": false,
                                                        "isDeleteActive": false,
                                                        "isPrintActive": false,
                                                        "isCustomActive": false
                                                })}
                                                {itm.HaveAccessView && (<><input onChange={e => OnChanged(e,i,itm._id)} checked={field[i].isViewActive} name="isViewActive" type="checkbox" /><span>&nbsp;</span>View<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                {itm.HaveAccessCreate && (<><input onChange={e => OnChanged(e,i,itm._id)} checked={field[i].isCreateActive} name="isCreateActive" type="checkbox" /><span>&nbsp;</span>Store<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                {itm.HaveAccessEdit && (<><input onChange={e => OnChanged(e,i,itm._id)} checked={field[i].isEditActive} name="isEditActive" type="checkbox" /><span>&nbsp;</span>Edit<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                {itm.HaveAccessDelete && (<><input onChange={e => OnChanged(e,i,itm._id)} checked={field[i].isDeleteActive} name="isDeleteActive" type="checkbox" /><span>&nbsp;</span>Delete<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                {itm.HaveAccessPrint && (<><input onChange={e => OnChanged(e,i,itm._id)} checked={field[i].isPrintActive} name="isPrintActive" type="checkbox" /><span>&nbsp;</span>Print<span>&nbsp;</span><span>&nbsp;</span></>)}
                                                {itm.HaveAccessCustom && (<><input onChange={e => OnChanged(e,i,itm._id)} checked={field[i].isCustomActive} name="isCustomActive" type="checkbox" /><span>&nbsp;</span>Custom<span>&nbsp;</span><span>&nbsp;</span></>)}
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
    )
}

export default GroupRole
