export const increment=(num)=>{
    return ({
        type:"INCREMENT",
        payload:num
    })
} 
 

export const decrement=()=>{
    return ({
        type:"DECREMENT"
    })
}

export const apiCall=(arr)=>{
    return ({
        type:"DONE",
        payload:arr
    }
    )
}

export const userDataAction=(mtype,val)=>{
    return ({
        type:mtype,
        payload:val
    })
}