import * as ActionTypes from '../actiontype'

export const setAlert = (values)=>(dispatch)=>{
    dispatch({type: ActionTypes.SET_ALERT, payload: values})
}

export const resetAlert = ()=>(dispatch)=>{
    dispatch({type: ActionTypes.RESET_ALERT})
}

