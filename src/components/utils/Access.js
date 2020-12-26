import React from 'react'
class Access { 
    static get = () => {
        return JSON.parse(sessionStorage.getItem("access")) || {
            allowView: false,
            allowCreate: false,
            allowEdit: false,
            allowDelete: false,
            allowPrint: false,
            allowCustom: false
        }
    }
    static set = (p0) => {
        sessionStorage.setItem("access",JSON.stringify(p0))
    }
}

export default Access
