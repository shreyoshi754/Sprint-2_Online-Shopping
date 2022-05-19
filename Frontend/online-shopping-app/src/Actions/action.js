
export const setLogin= (token) =>{
    return{
        type:'SET_LOGIN',
        payload:token
    }

}

export const setLogout= () =>{
    return{
        type:'SET_LOGOUT',
    }

}