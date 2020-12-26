import React, { useEffect, useState} from 'react'
import ApiService from '../../../components/utils/ApiService'

function UserGroup({ item, reload }) {
    let [field, setField] = useState([])
    const setFieldNoRender = (p0) => {
        field.push(p0)
    }
    const [usergroup, setUserGroup] = useState([])
    useEffect(() => {
        getrel(item._id)
    }, [item])
    const getrel = (id) => {
        let endpoint = ApiService.EndPoint.usergrouplevel
        const resgroup = ApiService.get(endpoint, { "user": id })
        resgroup.then(res => {
            setUserGroup(res.data.data)
            setField([])
        })
    }
    const OnChanged = (p0, p1, grouplevelid) => {
        field[p1] = p0.target.checked
        setField([...field,{[p1]:field[p1]}])
        let endpoint = ApiService.EndPoint.usergrouplevel
        const usergroup = {"grouplevel": grouplevelid,"user": item._id}
        // console.log(JSON.stringify(usergroup))
        const resgroup = ApiService.put(endpoint,usergroup)
        resgroup.then(res=>{
            //console.log(res.data.data)
        })
    }
    const OnClose = (e)=>{
        reload()
    }
    return (
        <div className="modal fade" id="UserGroupFormModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">User Group</h5>
                        <button type="button" onClick={ e => OnClose(e)} className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            {
                                usergroup.map((itm, i) => (
                                    <div key={i} className="col-md-6">
                                        <div key={i} className="form-group" >
                                            <strong className="label">{itm.group.name}</strong><br />
                                            <span className="label">Remark : {itm.remark}</span><br />
                                            {itm.usergrouplevels.length > 0 ?
                                                <>
                                                {setFieldNoRender((itm.usergrouplevels.length > 0))}
                                                <input name="isJoin" onChange={e => OnChanged(e,i,itm._id)} checked={field[i]} type="checkbox" /><span>&nbsp;Join</span>
                                                </> :
                                                <>
                                                {setFieldNoRender(false)}
                                                <input name="isJoin" onChange={e => OnChanged(e,i,itm._id)} checked={field[i]} type="checkbox" /><span>&nbsp;Join</span>
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

export default UserGroup
