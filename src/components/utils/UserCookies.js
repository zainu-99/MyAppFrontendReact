import Cookies from "universal-cookie"
class UserCookies {
    static get = () => {
        const cookies = new Cookies();
        return cookies.get("AuthUser") || { token: "", user: {}, islogin: false }
    }
    static set = (auth) => {
        const cookies = new Cookies();
        cookies.set("AuthUser", auth ,{ path: '/' })
    }

}

export default UserCookies
