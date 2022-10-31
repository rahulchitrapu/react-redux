import { act } from "react-dom/test-utils"


const userDataReducer=(state={},action)=>{
    switch(action.type){
        case "SEARCH":
            state["name"]=action.payload
            return state

        case "PASSWORD":
            state.password=action.payload
            return state

        case "SELECT":
            state.select=action.payload
            return state
        default :
            return state
    }
}

export default userDataReducer