import React from 'react'
import ApiService from '../../../components/utils/ApiService';
import ReactDOM from 'react-dom';
function Delete({item,setItem}) {
    const onSubmited = e => {
        e.preventDefault();
        const res = ApiService.delete("http://localhost:6969/api/group",item)
        res.then(res=>{
            ReactDOM.findDOMNode(document.querySelector("#btn-closemodaldelete")).click()
            setItem(null)
            
        })
        
    }
    return (
        <div className="modal fade" id="DeleteFormModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <form onSubmit={onSubmited}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Delete Data?</h5>
                            <button id="btn-closemodaldelete" type="button" className="close d-none" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
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

export default Delete
