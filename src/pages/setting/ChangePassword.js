import React,{useState} from 'react'
import ApiService from '../../components/utils/ApiService';
import UserCookies from '../../components/utils/UserCookies';


function ChangePassword() {
    const [message, setMessage] = useState("")
    const [auth, setAuth] = useState({ userid: UserCookies.get().user.userid, password: "" })
    const [password, setPassword] = useState({ newPassword: "", confirmPassword:"" })
    const onSubmited = e => {
        e.preventDefault();
        const res = ApiService.post("http://localhost:6969/api/login", auth)
        res.then(res => {
            verify(res.data)
        })
    }
    const verify = res => {
        setMessage(res.message)
        if (res.message === "Password wrong") setMessage(res.message)
        else {
            if(password.newPassword !== password.confirmPassword){
                setMessage("New Password and Confrim Password Not Match")
            }else{
                let endpoint = ApiService.EndPoint.user
                const res = ApiService.put(endpoint,{password: password.newPassword,_id:UserCookies.get().user._id})
                res.then(res=>{
                    setMessage(res.data.message)
                })
            }
        }
    }
    return (
        <div>
            <h4>Change Password</h4><hr/>
            <p className="text-warni">{(message !== "") ? message : ""}</p>
            <form method="post" onSubmit={e => onSubmited(e)}>
                <div className="form-group">
                    <div className="form-group" style={{ display: '' }}>
                        <label>Old Password </label>
                        <input type="password" name="password" onChange={e => setAuth({ ...auth, password: e.target.value })} value={auth.password} className="form-control" id="InputForPassword" required />
                    </div>
                    <div className="form-group" style={{ display: '' }}>
                        <label>New Password </label>
                        <input onChange={e => setPassword({ ...password, newPassword: e.target.value })} value={password.newPassword} type="password" required className="form-control" name="remark" placeholder="" required />
                    </div>
                    <div className="form-group" style={{ display: '' }}>
                        <label>Confirm Password </label>
                        <input onChange={e => setPassword({ ...password, confirmPassword: e.target.value })} value={password.confirmPassword} type="password" required className="form-control" name="remark" placeholder="" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword
