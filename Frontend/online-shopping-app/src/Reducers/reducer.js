import React from 'react';
let intialState={
    'auth':true,
    'token':null
}

const reducer=(state=intialState,action)=> {
    console.log("in reducers")
    console.log(action.payload)
    
        switch(action.type){
            case 'SET_LOGIN':
                return {
                    ...intialState,
                    auth:true,
                    token:action.payload
                }
                case 'SET_LOGOUT':
                    return {
                        ...intialState,
                        auth:false,
                        token:null
                    }
        }
    
}

export default reducer;