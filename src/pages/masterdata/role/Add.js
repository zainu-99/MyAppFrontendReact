import React,{ useEffect, useState } from 'react'
import ApiService from '../../../components/utils/ApiService';
import ReactDOM from 'react-dom';
function Add({list}) {
    const [field, setField] = useState(
    {
        "HaveAccessView": true,
        "HaveAccessCreate": false,
        "HaveAccessEdit": false,
        "HaveAccessDelete": false,
        "HaveAccessPrint": false,
        "HaveAccessCustom": false,
        "name": "",
        "remark": "",
        "controller": "",
        "url": "role"
    })
    useEffect(() => {
    })
    
    
    const onSubmited = e => {
        e.preventDefault();
        const res = ApiService.post("http://localhost:6969/api/role",field)
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
                            <h5 className="modal-title" id="exampleModalLabel">New Data</h5>
                            <button id="btn-closemodaladd" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="form-group">
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Name </label>
                                        <input onChange={e => setField({...field,name: e.target.value})} value={field.name} type="text" required className="form-control" name="name"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Controller </label>
                                        <input onChange={e => setField({...field,controller: e.target.value})} value={field.controller} type="text"  className="form-control" name="remark"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Url </label>
                                        <input onChange={e => setField({...field,url: e.target.value})} value={field.url} type="text"  className="form-control" name="remark"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Remark </label>
                                        <input onChange={e => setField({...field,remark: e.target.value})} value={field.remark} type="text"  className="form-control" name="remark"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Access</label><br/>
                                        View <input onChange={e => setField({...field,HaveAccessView: e.target.value})} value={field.HaveAccessView} type="checkbox"   name="remark"  placeholder="" />
                                        | Store <input onChange={e => setField({...field,HaveAccessCreate: e.target.value})} value={field.HaveAccessCreate} type="checkbox"   name="remark"  placeholder="" />
                                        | Edit <input onChange={e => setField({...field,HaveAccessEdit: e.target.value})} value={field.HaveAccessEdit} type="checkbox"   name="remark"  placeholder="" />
                                        | Delete <input onChange={e => setField({...field,HaveAccessDelete: e.target.value})} value={field.HaveAccessDelete} type="checkbox"   name="remark"  placeholder="" />
                                        | Print <input onChange={e => setField({...field,HaveAccessPrint: e.target.value})} value={field.HaveAccessPrint} type="checkbox"   name="remark"  placeholder="" />
                                        | Custom <input onChange={e => setField({...field,HaveAccessCustom: e.target.value})} value={field.HaveAccessCustom} type="checkbox"   name="remark"  placeholder="" />
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
