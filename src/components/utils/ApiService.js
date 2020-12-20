import Axios from "axios";
import UserCookies from "./UserCookies";

class ApiService {
    static get = (url,data=null) => {
        return Axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "UserID": UserCookies.get().userid
            }
        })
    }
    static post = (url,data=null) => {
        return Axios.post(url,data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "UserID": UserCookies.get().userid
            }
        })
    }
    static put = (url,data=null) => {
        return Axios.put(url,data, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "UserID": UserCookies.get().userid
            }
        })
    }
    static delete = (url,data=null) => {
        return Axios.delete(url, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": UserCookies.get().token,
                "UserID": UserCookies.get().userid
            },
            data: data
        })
    }
}

export default ApiService
