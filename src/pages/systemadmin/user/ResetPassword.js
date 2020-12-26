import React from 'react'
import ApiService from '../../../components/utils/ApiService';
import ReactDOM from 'react-dom';
function ResetPassword({item,reload}) {
    const onSubmited = e => {
        e.preventDefault();
        let endpoint = ApiService.EndPoint.user
        item.password = "123"
        const res = ApiService.put(endpoint,item)
        res.then(res=>{
            ReactDOM.findDOMNode(document.querySelector("#btn-closemodalresetpass")).click()
            reload()
            
        })
        
    }
    return (
        <div className="modal fade" id="ResetPassFormModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <form onSubmit={onSubmited}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Reset Password?</h5>
                            <button id="btn-closemodalresetpass" type="button" className="close d-none" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-footer">
                            <button type="reset" className="btn btn-sm btn-warning text-light" data-dismiss="modal">Cancel</button>
                            <button type="submit" className="btn btn-sm btn-success">DO IT</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
