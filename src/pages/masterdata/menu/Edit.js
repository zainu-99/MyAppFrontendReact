import React,{ useEffect, useState } from 'react'
import ApiService from '../../../components/utils/ApiService';
import ReactDOM from 'react-dom';
function Edit({item,setItem}) {
    const [field, setField] = useState(item)
    useEffect(() => {
        setField(item)
    }, [item])
    const onSubmited = e => {
        e.preventDefault();
        const res = ApiService.put("http://localhost:6969/api/group",field)
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
                            <h5 className="modal-title" id="exampleModalLabel">Edit Group</h5>
                            <button id="btn-closemodaledit" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="form-group">
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Name </label>
                                        <input onChange={e => (setField({...field,name: e.target.value},setItem({...item,name:e.target.value})))} value={item.name} type="text" required className="form-control" name="name"  placeholder="" />
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Remark </label>
                                        <input onChange={e => (setField({...field,remark: e.target.value},setItem({...item,remark:e.target.value})))} value={item.remark} type="text" required className="form-control" name="remark"  placeholder="" />
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
