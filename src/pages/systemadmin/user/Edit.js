import React,{ useEffect, useState } from 'react'
import ApiService from '../../../components/utils/ApiService';
import ReactDOM from 'react-dom';
function Edit({item,reload}) {
    const [field, setField] = useState(item)
    useEffect(() => {
        setField(item)
    }, [item])
    const onSubmited = e => {
        e.preventDefault();
        let endpoint = ApiService.EndPoint.user
        const res = ApiService.put(endpoint,field)
        res.then(res=>{
            ReactDOM.findDOMNode(document.querySelector("#btn-closemodaledit")).click()    
            reload()
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
                                        <label>User ID </label>
                                        <input onChange={e => setField({...field,userid: e.target.value})} value={field.userid}  type="text" required className="form-control" name="userid"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Name </label>
                                        <input onChange={e => setField({...field,name: e.target.value})} value={field.name} type="text" required className="form-control" name="name"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Email </label>
                                        <input onChange={e => setField({...field,email: e.target.value})} value={field.email} type="email" required className="form-control" name="email"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>No HP </label>
                                        <input onChange={e => setField({...field,phone: e.target.value})} value={field.phone} type="telp" required className="form-control" name="no_hp"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Address </label>
                                        <input onChange={e => setField({...field,address: e.target.value})} value={field.address} required className="form-control" name="address"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Gender </label>
                                        <div>
                                            <div className="checkbox">
                                                <input onChange={e => setField({...field,gender: (e.target.checked===false?"F":"M")})} checked={field.gender==="M"?true:false} value="M"  name="gender" type="radio" /> Male &nbsp;
                                                <input onChange={e => setField({...field,gender: (e.target.checked===false?"M":"F")})} checked={field.gender==="F"?true:false}  name="gender" type="radio" value="F" /> Female
                                            </div>
                                        </div>
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
