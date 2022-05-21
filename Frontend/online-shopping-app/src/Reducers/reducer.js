import React from 'react';
let intialState={
    'auth':false,
    'token':null,
    'user':null
}

const reducer=(state={...intialState},action)=> {
    console.log("in reducers")
    console.log(state);
    
        switch(action.type){
            case 'SET_LOGIN':
                return state={
                    ...intialState,
                    auth:true,
                    token:action.payload,
                    user:action.user
                }
                case 'SET_LOGOUT':
                    return state={
                        ...intialState,
                        auth:false,
                        token:null,
                        user:null,
                    }
                default:
                    return state
        }
    
}

export default reducer;