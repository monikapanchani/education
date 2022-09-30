import { combineReducers } from "redux";
import { alertRedecer } from "./alert.reducer";
import { catagoryreducer } from "./catagory.reducer";
import { authreducer } from "./reducer";


export const rootreducer = combineReducers({
    auth : authreducer,   
    alert : alertRedecer,
    catagory :catagoryreducer
})