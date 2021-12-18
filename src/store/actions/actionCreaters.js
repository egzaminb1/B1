import { AC_BOLD_CLASS, AC_BOLD_CLASS_A4, AC_CHECK_A3, AC_CHECK_A4, AC_CHECK_EXE,  AC_CLEAR_STATE_A, AC_CLEAR_STATISTIC, AC_COPY_STATISTIC, AC_HINT_MODE, AC_INP_ANSW, AC_NEXT, AC_NEXT_D, AC_NEXT_E, AC_PREV, AC_PREV_D, AC_PREV_E, AC_SAVE_NUMQUESTION, AC_SAVE_SELECT_D, AC_SAVE_SELECT_E, AC_SAVE_SUBCAT } from "./actionTypes";

export const hintModeHandler=()=>(
    (dispatch, getState)=>{
       let QuizCatA=getState().QuizCatA
       let isChecked=QuizCatA.isChecked
       let selectSubCat=QuizCatA.selectSubCat
        dispatch(hintMode())
        if(isChecked && (selectSubCat===0 || selectSubCat===1))
        dispatch(checkA1(0, false))
        if(isChecked && selectSubCat===3)
        dispatch(checkA4(0, false))
    }
)

export const checkExe=(time)=>(
    (dispatch,getState)=>{
        let selectSubCat=getState().QuizCatA.selectSubCat
        if(selectSubCat===0 || selectSubCat===1)
        dispatch(checkA1(time))
        if(selectSubCat===2)
        dispatch(checkA3(time))
        if(selectSubCat===3)
        dispatch(checkA4(time))
    }
)

export const hintMode=()=>(
    {type:AC_HINT_MODE}
)
export const saveSubCat=(numSubCat)=>(
    {type:AC_SAVE_SUBCAT, numSubCat}
)
export const saveNumQuestion=(numQuestion)=>(
    {type:AC_SAVE_NUMQUESTION, numQuestion}
)
export const boldClass=(keyCard, keyP)=>(
    {type:AC_BOLD_CLASS, keyCard, keyP}
)
export const next=()=>(
    {type:AC_NEXT}
)
export const prev=()=>(
    {type:AC_PREV}
)
export const checkA1=(time, permit=true)=>(
    {type:AC_CHECK_EXE, time, permit}
)
export const copyStatistic=(arrStatistic)=>(
    {type:AC_COPY_STATISTIC, arrStatistic}
)
export const clearStateA=()=>(
    {type:AC_CLEAR_STATE_A}
)
export const clearStatistic=()=>(
    {type:AC_CLEAR_STATISTIC}
)
export const inpAnsw=(value, countInput)=>(
    {type:AC_INP_ANSW, value, countInput}
)
export const checkA3=(time, permit=true)=>(
    {type:AC_CHECK_A3, time, permit}
)
export const boldClassA4=(keyRow, keyCell)=>(
    {type:AC_BOLD_CLASS_A4, keyRow, keyCell}
)
export const checkA4=(time, permit=true)=>(
    {type:AC_CHECK_A4, time, permit}
)
export const saveSelectD=(numSelectExe)=>(
    {type:AC_SAVE_SELECT_D, numSelectExe}
)
export const saveSelectE=(numSelectExe)=>(
    {type:AC_SAVE_SELECT_E, numSelectExe}
)
export const nextD=()=>(
    {type:AC_NEXT_D}
)
export const prevD=()=>(
    {type:AC_PREV_D}
)
export const nextE=()=>(
    {type:AC_NEXT_E}
)
export const prevE=()=>(
    {type:AC_PREV_E}
)