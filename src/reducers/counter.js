function changeState(state){
   return state+5
}

const counterReducer=(state=0,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return changeState(state)
            // return state
        case "DECREMENT":
            return state-1
        default:
            return state
    }
}

export default counterReducer