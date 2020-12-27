import React, { useEffect, useState } from 'react'
import ApiService from '../../../components/utils/ApiService';
import ReactDOM from 'react-dom';
import Option from './Option';
function Add({ reload,list }) {
    const [field, setField] = useState(
        {
            "menuText": "",
            "remark": "",
            "icon": "",
            "orderSort": "",
            "role": "",
            "parent": null,
            "children": []
        })

    const [group, setGroup] = useState([])
    const [parent, setParent] = useState([])
    useEffect(() => {
        getrel()
    }, [list])
    const getrel = ()=>{
        let endpoint = ApiService.EndPoint.group
        const resgroup = ApiService.get(endpoint, field)
        resgroup.then(res => {
            if (res.data.message === "Successfully") {
                setGroup(res.data.data)
            }
        })
        endpoint = ApiService.EndPoint.grouplevel
        const resparent = ApiService.get(endpoint, field)
        resparent.then(res => {
            if (res.data.message === "Successfully") {
                setParent(res.data.data)
            }
        })
    }

    const onSubmited = e => {
        e.preventDefault();
        console.log(field)
        let endpoint = ApiService.EndPoint.grouplevel
        const res = ApiService.post(endpoint, field)
        res.then(res => {
            ReactDOM.findDOMNode(document.querySelector("#btn-closemodaladd")).click()
            reload()
            getrel()
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
                                        <label>Group </label>
                                        <select className="form-control" onChange={e => setField({ ...field, group: e.target.value })} required>
                                            <option value >--Select Role--</option>
                                            {
                                                group.length > 0 ?
                                                group.map((itm, i) => (
                                                        <option key={i} value={itm._id}>{itm.name} | (Remark: {itm.remark})  </option>
                                                    )) : ""
                                            }
                                        </select>
                                    </div> 
                                    <div className="form-group">
                                        <label>Parent </label>
                                        <select className="form-control"  onChange={e => setField({ ...field, parent: e.target.value })}>
                                            <option value >--No Parent--</option>
                                            {
                                                parent.map((itm, i) => (
                                                    <Option key={i} item={itm} setID={null} sparator={""} />
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group" style={{ display: '' }}>
                                        <label>Remark </label>
                                        <input onChange={e => setField({ ...field, remark: e.target.value })} value={field.remark} type="text" required className="form-control" name="menuText" placeholder="" />
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
