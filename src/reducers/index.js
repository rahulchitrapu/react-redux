import { combineReducers } from "redux";
import counterReducer from "./counter";
import dataReducer from "./data";
import isLogedReducer from "./isLoged";
import userDataReducer from "./search";


const allReducers=combineReducers({
    counter:counterReducer,
    isLoged:isLogedReducer,
    data:dataReducer,
    userData:userDataReducer
})


export default allReducers 