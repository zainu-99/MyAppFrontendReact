import React,{ useEffect, useState } from 'react'
import ApiService from '../../../components/utils/ApiService';
import ReactDOM from 'react-dom';
import Option from './Option';
function Edit({item,setItem}) {
    const [field, setField] = useState(item)

    useEffect(() => {
        setField(item)
    }, [item])
    
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
    },[])

    const onSubmited = e => {
        e.preventDefault();
        const res = ApiService.put("http://localhost:6969/api/menu",field)
        res.then(res=>{
            ReactDOM.findDOMNode(document.querySelector("#btn-closemodaledit")).click()    
            setItem(null)
        })
        
    }
    
    return (
<div className="modal fade" id="EditFormModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <form onSubmit={onSubmited}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit Data</h5>
                            <button id="btn-closemodaledit" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="form-group">
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>MenuText </label>
                                        <input onChange={e => (setField({...field,menuText: e.target.value}),setItem({...item,menuText: e.target.value}))} value={item.menuText} type="text" required className="form-control" name="menuText"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Role </label>
                                        <select className="form-control" onChange={e => (setField({...field,role: e.target.value}),setItem({...item,role: e.target.value}))} value={item.role._id} required>
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
                                        <select className="form-control"  onChange={e => (setField({...field,parent: e.target.value}),setItem({...item,parent: e.target.value}))} value={item.parent}>
                                        <option value="" >--No Parent--</option>
                                            {
                                                parent.map((itm, i) => (
                                                    <Option key={i} item={itm} setItem={setParent} sparator={""} />
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Icon </label>
                                        <input onChange={e => (setField({...field,icon: e.target.value}),setItem({...item,icon: e.target.value}))} value={item.icon} type="text" required className="form-control" name="icon"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Order Sort </label>
                                        <input onChange={e => (setField({...field,orderSort: e.target.value}),setItem({...item,orderSort: e.target.value}))} value={item.orderSort} type="number" required className="form-control" name="ordersort"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Remark </label>
                                        <input onChange={e => (setField({...field,remark: e.target.value}),setItem({...item,remark: e.target.value}))} value={item.remark} type="text" required className="form-control" name="remark"  placeholder="" />
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

export default Edit
