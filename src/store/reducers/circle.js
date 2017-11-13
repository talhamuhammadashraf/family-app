const Initial_State={
    error:false,
    members:null,
    admin:"",
    myCircles:[],
    CircleName:"",
    InviteKey:null
}

export const circle =(state=Initial_State,action)=>{
    switch(action.type){
        case "Create Circle":
        return{...state}
        case "Create Circle Success":
        return{...state,CircleName:action.payload}
        case "Create Circle Fail":
        return{...state,error:true}
        case "My Circle":
        return{...state}
        case "My Circle Success":
        return{...state,myCircles:action.payload}
        case "Get Members":
        return{...state}
        case "Get Members Success":
        return{...state,members:action.members,admin:action.admin}
        case "Invite":
        return{...state}
        case "Invite Success":
        return{...state,InviteKey:action.payload}
        case "Join":
        return{...state}
        case "Join Success":
        return{...state}
        default:
        return{...state}
    }
}
