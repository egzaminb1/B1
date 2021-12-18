import { catE } from "../../exercises/AllCatDef"
import { QuizE1 } from "../../exercises/quizCatE/QuizE1"
import { AC_NEXT_E, AC_PREV_E, AC_SAVE_SELECT_E } from "../actions/actionTypes"

const initialState={
    catE:catE,
    currentQuiz:{...QuizE1},
    selectExe:0
}

    let currentQuiz
    let selectExe

export const  QuizCatEReducer=(state=initialState, action)=>{
    switch(action.type){
        
        case AC_SAVE_SELECT_E:
            currentQuiz=state.catE.quizes[action.numSelectExe]
            return(
            {...state, selectExe:action.numSelectExe, currentQuiz})

        case AC_PREV_E:
            selectExe=(state.selectExe===0)?state.selectExe:state.selectExe-1
            currentQuiz=state.catE.quizes[selectExe]
            return(
            {...state,  currentQuiz, selectExe})

        case AC_NEXT_E:
            // debugger
            selectExe=(state.selectExe+1===state.catE.quizes.length)?state.selectExe:state.selectExe+1
            currentQuiz=state.catE.quizes[selectExe]
            return(
            {...state,  currentQuiz, selectExe})

        // case AC_COPY_STATISTIC:
        //     return(
        //     {...state, arrStatistic:action.arrStatistic})
        default:return state
    }
}