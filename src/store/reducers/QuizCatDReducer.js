import { catD } from "../../exercises/AllCatDef"
import { QuizD1 } from "../../exercises/quizCatD/QuizD1"
import { AC_NEXT_D, AC_PREV_D, AC_SAVE_SELECT_D } from "../actions/actionTypes"

const initialState={
    catD:catD,
    currentQuiz:{...QuizD1},
    selectExe:0
}

    let currentQuiz
    let selectExe

export const  QuizCatDReducer=(state=initialState, action)=>{
    switch(action.type){
        
        case AC_SAVE_SELECT_D:
            currentQuiz=state.catD.quizes[action.numSelectExe]
            return(
            {...state, selectExe:action.numSelectExe, currentQuiz})

        case AC_PREV_D:
            selectExe=(state.selectExe===0)?state.selectExe:state.selectExe-1
            currentQuiz=state.catD.quizes[selectExe]
            return(
            {...state,  currentQuiz, selectExe})

        case AC_NEXT_D:
            // debugger
            selectExe=(state.selectExe+1===state.catD.quizes.length)?state.selectExe:state.selectExe+1
            currentQuiz=state.catD.quizes[selectExe]
            return(
            {...state,  currentQuiz, selectExe})

        // case AC_COPY_STATISTIC:
        //     return(
        //     {...state, arrStatistic:action.arrStatistic})
        default:return state
    }
}