import Axios from "axios";
import EndPoint from "./EndPoint";
import UserCookies from "./UserCookies";

class ApiService {
    static get = (url,data=null) => {
        return Axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "userid": UserCookies.get().userid,
                "oiduser": UserCookies.get().oiduser
            },
            params:data
        })
    }
    static post = (url,data=null) => {
        return Axios.post(url,data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "userid": UserCookies.get().userid,
                "oiduser": UserCookies.get().oiduser
            }
        })
    }
    static put = (url,data=null) => {
        return Axios.put(url,data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "userid": UserCookies.get().userid,
                "oiduser": UserCookies.get().oiduser
            }
        })
    }
    static delete = (url,data=null) => {
        return Axios.delete(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "userid": UserCookies.get().userid,
                "oiduser": UserCookies.get().oiduser
            },
            data: data
        })
    }
    static EndPoint = EndPoint
}

export default ApiService
