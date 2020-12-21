import React,{ useEffect, useState } from 'react'
import ApiService from '../../../components/utils/ApiService';
import ReactDOM from 'react-dom';
function Add({list}) {
    
    const [field, setField] = useState(
    {
        "menuText": "",
        "remark": "",
        "icon": "",
        "orderSort": "",
        "role": "",
        "parent": null,
        "child": []
    })

    const [roles, setRoles] = useState([])
    const [parent, setParent] = useState([])
    useEffect(() => {
        const resrole = ApiService.get("http://localhost:6969/api/role",field)
        resrole.then(res=>{
            setRoles(res.data.data)
        })
        const resparent = ApiService.get("http://localhost:6969/api/menu",field)
        resparent.then(res=>{
            setParent(res.data.data)
        })
    }, [list])
      
    const onSubmited = e => {
        e.preventDefault();
        console.log(field)
        const res = ApiService.post("http://localhost:6969/api/menu",field)
        res.then(res=>{
            ReactDOM.findDOMNode(document.querySelector("#btn-closemodaladd")).click()
            list.setList(i => [...i, res.data.data])
        })
    }
    return (
<div className="modal fade" id="CreateFormModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <form onSubmit={onSubmited}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Create Data</h5>
                            <button id="btn-closemodaladd" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="form-group">
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>MenuText </label>
                                        <input onChange={e => setField({...field,menuText: e.target.value})} value={field.menuText} type="text" required className="form-control" name="menuText"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Role </label>
                                        <select className="form-control" onChange={e => setField({...field,role: e.target.value})} value={field.role} required>
                                            <option value="" >--Select Role--</option>
                                            {
                                                    roles.length > 0 ?
                                                    roles.map((itm, i) => (
                                                        <option key={i} value={itm._id}>{itm.name} ❯ url: {itm.url}  </option>
                                                    )) :""
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Parent </label>
                                        <select className="form-control" required>
                                            <option value="" >--Select Role--</option>
                                            {
                                                    parent.length > 0 ?
                                                    parent.map((itm, i) => (
                                                        <option key={i} value={itm._id}>{itm.menuText} </option>
                                                    )) :""
                                            }
                                        </select>
                                    </div>

                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Icon </label>
                                        <input onChange={e => setField({...field,icon: e.target.value})} value={field.icon} type="text" required className="form-control" name="icon"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Order Sort </label>
                                        <input onChange={e => setField({...field,orderSort: e.target.value})} value={field.orderSort} type="number" required className="form-control" name="ordersort"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Remark </label>
                                        <input onChange={e => setField({...field,remark: e.target.value})} value={field.remark} type="text" required className="form-control" name="remark"  placeholder="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="reset" className="btn btn-sm btn-warning text-light" data-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-sm btn-success">Save</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add
