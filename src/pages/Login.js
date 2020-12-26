import React,{useState} from 'react'
import ApiService from '../components/utils/ApiService';

export default function Login({verify,message}) {
    const [auth, setAuth] = useState({userid:"",password:""})
    
    const onSubmited = e => {
        e.preventDefault();
        const res = ApiService.post("http://localhost:6969/api/login",auth)
        res.then(res=>{
            verify(res.data)
        })
    }

    return (
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-6">
                    <br/><h1>Sign In</h1>
                    <span className="text-warni">{(message !== "")?message:""}</span>
                    <form onSubmit={onSubmited} method="post">
                        <div className="mb-3">
                            <label htmlFor="InputForEmail" className="form-label">UserID</label>
                            <input type="text" onChange={e => setAuth({...auth,userid: e.target.value})} value={auth.userid} name="userid" className="form-control" id="InputForEmail" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="InputForPassword" className="form-label">Password</label>
                            <input type="password" name="password" onChange={e => setAuth({...auth,password: e.target.value})} value={auth.password} className="form-control" id="InputForPassword" />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
