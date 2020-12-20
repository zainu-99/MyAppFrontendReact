import Cookies from "universal-cookie"
class UserCookies{
    static get = ()=>{
        const cookies = new Cookies();
        return cookies.get("user_login") || { token: "", userid: "", islogin: false }
    }
    static set = (user)=>{
        const cookies = new Cookies();
        cookies.set("user_login",user)
    }
    
}

export default UserCookies
