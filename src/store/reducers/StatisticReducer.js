import { AC_CLEAR_STATISTIC, AC_COPY_STATISTIC} from "../actions/actionTypes"

const initialState={
    arrStatistic:[],
    isStatistic:false
}

export const  StatisticReducer=(state=initialState, action)=>{
    switch(action.type){
        
        case AC_COPY_STATISTIC:
            return(
            {...state, arrStatistic:action.arrStatistic})
        case AC_CLEAR_STATISTIC:
            return(
            {...state, arrStatistic:[]})
        default:return state
    }
}