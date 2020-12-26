import Axios from "axios";
import EndPoint from "./EndPoint";
import UserCookies from "./UserCookies";

class ApiService {
    static get = (url,data=null) => {
        return Axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "userid": UserCookies.get().user.userid,
                "oiduser": UserCookies.get().user._id
            },
            params:data
        })
    }
    static post = (url,data=null) => {
        return Axios.post(url,data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "userid": UserCookies.get().user.userid,
                "oiduser": UserCookies.get().user._id
            }
        })
    }
    static put = (url,data=null) => {
        return Axios.put(url,data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "userid": UserCookies.get().user.userid,
                "oiduser": UserCookies.get().user._id
            }
        })
    }
    static delete = (url,data=null) => {
        return Axios.delete(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "userid": UserCookies.get().user.userid,
                "oiduser": UserCookies.get().user._id
            },
            data: data
        })
    }
    static EndPoint = EndPoint
}

export default ApiService
