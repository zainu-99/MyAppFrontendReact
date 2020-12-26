let baseurl ="http://localhost:6969/api/";
class EndPoint {
    static baseurl = baseurl
    static user = baseurl + "adminsys/user";
    static grouplevel = baseurl + "adminsys/grouplevel";   
    static grouplevelrole = baseurl + "adminsys/grouplevelrole";
    static userrole = baseurl + "adminsys/userrole";
    static usergrouplevel = baseurl + "adminsys/usergrouplevel";

    static group = baseurl + "master/group-m";
    static role = baseurl + "master/role-m";
    static menu = baseurl + "master/menu-m";

    static changepassword = baseurl + "setting/changepassword"

    static menuapp = "http://localhost:6969/menuapp";
}

export default EndPoint
