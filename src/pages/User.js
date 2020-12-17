import Axios from 'axios';
import React, { useEffect, useState, useMemo } from "react";
export default function User() {
 
    useEffect(() => {
        const getData = () => {
            const url = "http://localhost:6969/api/user";
            const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVmZDdmNDdkNDAzMTg4MTU3Y2FhYzM1NSIsInVzZXJpZCI6ImFkbWluIiwibmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkVkU0S2p4SU9pVWFRdG90RVhpb2tFLlpUY0cxQWhsN0FvdUhFbG1sWVJEQmM3OEFuVGlDUmUiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBob25lIjoiLSIsImdlbmRlciI6Im0iLCJhZGRyZXNzIjoiLSIsImNyZWF0ZWRfYXQiOiIyMDIwLTEyLTE0VDIzOjI1OjQ5LjIzNloiLCJ1cGRhdGVkX2F0IjoiMjAyMC0xMi0xNFQyMzoyNTo0OS4yMzZaIiwiX192IjowfSwiaWF0IjoxNjA4MjQ2NzU4LCJleHAiOjE2MDgzMzMxNTh9.Q-fahs68gZfgS-8HPMU6UTB3vpPeFLZlIBzF52iqcE0"
            Axios.get(url,{
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":token
                }
            }).catch(err =>{
                console.log(err);
            })
            .then(res=>{
                console.log(res);
            })
        };
        getData();
    }, []);
    

    return (
        <div>
            Halaman User
        </div>
    )
}
