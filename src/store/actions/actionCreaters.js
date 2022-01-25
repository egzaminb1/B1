import { AC_BOLD_CLASS, AC_BOLD_CLASS_A4, AC_BOLD_CLASS_B4, AC_BOLD_CLASS_C1, AC_BOLD_CLASS_C2, AC_BOLD_CLASS_C7, AC_CHECK_A3, AC_CHECK_A4, AC_CHECK_A5, AC_CHECK_A6, AC_CHECK_B1, AC_CHECK_B2, AC_CHECK_B4, AC_CHECK_C1, AC_CHECK_C2, AC_CHECK_C3, AC_CHECK_C5, AC_CHECK_C7, AC_CHECK_EXE,  AC_CLEAR_STATE_A, AC_CLEAR_STATE_B, AC_CLEAR_STATE_C, AC_CLEAR_STATISTIC, AC_COPY_STATISTIC, AC_HINT_MODE, AC_HINT_MODE_B, AC_HINT_MODE_C, AC_INP_ANSW, AC_INP_ANSW_B1, AC_INP_ANSW_C1, AC_INP_ANSW_C3, AC_NEXT, AC_NEXT_B, AC_NEXT_C, AC_NEXT_D, AC_NEXT_E, AC_PREV, AC_PREV_B, AC_PREV_C, AC_PREV_D, AC_PREV_E, AC_SAVE_NUMQUESTION, AC_SAVE_NUMQUESTION_B, AC_SAVE_NUMQUESTION_C, AC_SAVE_SELECT_D, AC_SAVE_SELECT_E, AC_SAVE_SUBCAT, AC_SAVE_SUBCAT_B, AC_SAVE_SUBCAT_C } from "./actionTypes";

export const hintModeHandler=(curCatReducer)=>(
    (dispatch, getState)=>{
       let QuizCat=getState()[curCatReducer]
       let isChecked=QuizCat.isChecked
       let selectSubCat=QuizCat.selectSubCat
        if(curCatReducer==='QuizCatA'){
        dispatch(hintMode())
        if(isChecked && (selectSubCat===0 || selectSubCat===1 || selectSubCat===6))
        dispatch(checkA1(0, false))
        if(isChecked && selectSubCat===3)
        dispatch(checkA4(0, false))
        }else if(curCatReducer==='QuizCatB'){
            dispatch(hintModeB())
            if(isChecked && selectSubCat===3)
            dispatch(checkB4(0, false))
        }else if(curCatReducer==='QuizCatC'){
            dispatch(hintModeC())
            if(isChecked && selectSubCat===0)
            dispatch(checkC1(0, false))
            if(isChecked && selectSubCat===1)
            dispatch(checkC2(0, false))
            if(isChecked && selectSubCat===6)
            dispatch(checkC7(0, false))
        }
    }
)

export const checkExe=(time, curCatReducer)=>(
    (dispatch,getState)=>{
        let selectSubCat
        if(curCatReducer==='QuizCatA'){
        selectSubCat=getState()[curCatReducer].selectSubCat
        if(selectSubCat===0 || selectSubCat===1 || selectSubCat===6)
        dispatch(checkA1(time))
        if(selectSubCat===2)
        dispatch(checkA3(time))
        if(selectSubCat===3)
        dispatch(checkA4(time))
        if(selectSubCat===4 || selectSubCat===5)
        dispatch(checkA5(time))
        // if(selectSubCat===5)
        // dispatch(checkA6(time))
        }
        else if(curCatReducer==='QuizCatB'){
            selectSubCat=getState()[curCatReducer].selectSubCat
            if(selectSubCat===0 || selectSubCat===2 )
            dispatch(checkB1(time))
            if(selectSubCat===1)
            dispatch(checkB2(time))
            if(selectSubCat===3)
            dispatch(checkB4(time))
        }else if(curCatReducer==='QuizCatC'){
            selectSubCat=getState()[curCatReducer].selectSubCat
            if(selectSubCat===0)
            dispatch(checkC1(time))
            if(selectSubCat===1)
            dispatch(checkC2(time))
            if(selectSubCat===2 || selectSubCat===3)
            dispatch(checkC3(time))
            if(selectSubCat===4 || selectSubCat===5)
            dispatch(checkC5(time))
            if(selectSubCat===6)
            dispatch(checkC7(time))
        }
    }
)

export const next=(curCatReducer)=>(
    (dispatch,getState)=>{
        if(curCatReducer==='QuizCatA'){
            dispatch(nextA())
        }else if(curCatReducer==='QuizCatB'){
            dispatch(nextB())
        }else if(curCatReducer==='QuizCatC'){
            dispatch(nextC())
        }
    }
)
export const prev=(curCatReducer)=>(
    (dispatch,getState)=>{
        if(curCatReducer==='QuizCatA'){
            dispatch(prevA())
        }else if(curCatReducer==='QuizCatB'){
            dispatch(prevB())
        }else if(curCatReducer==='QuizCatC'){
            dispatch(prevC())
        }
    }
)
export const saveSubCat=(numSubCat, curCatReducer)=>(
    (dispatch,getState)=>{
        if(curCatReducer==='QuizCatA'){
            dispatch(saveSubCatA(numSubCat))
        }else if(curCatReducer==='QuizCatB'){
            dispatch(saveSubCatB(numSubCat))
        }else if(curCatReducer==='QuizCatC'){
            dispatch(saveSubCatC(numSubCat))
        }
    }
)
export const saveNumQuestion=(numQuestion, curCatReducer)=>(
    (dispatch,getState)=>{
        // debugger
        if(curCatReducer==='QuizCatA'){
            dispatch(saveNumQuestionA(numQuestion))
        }else if(curCatReducer==='QuizCatB'){
            dispatch(saveNumQuestionB(numQuestion))
        }else if(curCatReducer==='QuizCatC'){
            dispatch(saveNumQuestionC(numQuestion))
        }
    }
)

// export const copyStatistic=(arrStatistic)=>(
//     (dispatch,getState)=>{
//     dispatch(copyStatisticA(arrStatistic))
//     }
// )

export const copyStatistic=(arrStatistic)=>(
    {type:AC_COPY_STATISTIC, arrStatistic}
)
export const hintMode=()=>(
    {type:AC_HINT_MODE}
)
export const saveSubCatA=(numSubCat)=>(
    {type:AC_SAVE_SUBCAT, numSubCat}
)
export const saveNumQuestionA=(numQuestion)=>(
    {type:AC_SAVE_NUMQUESTION, numQuestion}
)
export const boldClass=(keyCard, keyP)=>(
    {type:AC_BOLD_CLASS, keyCard, keyP}
)
export const nextA=()=>(
    {type:AC_NEXT}
)
export const prevA=()=>(
    {type:AC_PREV}
)
export const checkA1=(time, permit=true)=>(
    {type:AC_CHECK_EXE, time, permit}
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
export const checkA5=(time, permit=true)=>(
    {type:AC_CHECK_A5, time, permit}
)
// export const checkA6=(time, permit=true)=>(
//     {type:AC_CHECK_A6, time, permit}
// )
//---------------- D
export const saveSelectD=(numSelectExe)=>(
    {type:AC_SAVE_SELECT_D, numSelectExe}
)

export const nextD=()=>(
    {type:AC_NEXT_D}
)
export const prevD=()=>(
    {type:AC_PREV_D}
)
//---------------- E
export const saveSelectE=(numSelectExe)=>(
    {type:AC_SAVE_SELECT_E, numSelectExe}
)
export const nextE=()=>(
    {type:AC_NEXT_E}
)
export const prevE=()=>(
    {type:AC_PREV_E}
)
//---------------- B
export const inpAnswB1=(value, countInput)=>(
    {type:AC_INP_ANSW_B1, value, countInput}
)
export const checkB1=(time, permit=true)=>(
    {type:AC_CHECK_B1, time, permit}
)
export const checkB2=(time, permit=true)=>(
    {type:AC_CHECK_B2, time, permit}
)
export const checkB4=(time, permit=true)=>(
    {type:AC_CHECK_B4, time, permit}
)
export const hintModeB=()=>(
    {type:AC_HINT_MODE_B}
)
export const clearStateB=()=>(
    {type:AC_CLEAR_STATE_B}
)
export const nextB=()=>(
    {type:AC_NEXT_B}
)
export const prevB=()=>(
    {type:AC_PREV_B}
)
export const saveSubCatB=(numSubCat)=>(
    {type:AC_SAVE_SUBCAT_B, numSubCat}
)
export const saveNumQuestionB=(numQuestion)=>(
    {type:AC_SAVE_NUMQUESTION_B, numQuestion}
)
export const boldClassB4=(keyStr, keyW)=>(
    {type:AC_BOLD_CLASS_B4, keyStr, keyW}
)
//---------------- C
export const clearStateC=()=>(
    {type:AC_CLEAR_STATE_C}
)
export const inpAnswC1=(value, countInput)=>(
    {type:AC_INP_ANSW_C1, value, countInput}
)
export const inpAnswC3=(value, countInput)=>(
    {type:AC_INP_ANSW_C3, value, countInput}
)
// export const inpAnswC5=(value, countInput)=>(
//     {type:AC_INP_ANSW_C5, value, countInput}
// )
export const checkC1=(time, permit=true)=>(
    {type:AC_CHECK_C1, time, permit}
)
export const checkC2=(time, permit=true)=>(
    {type:AC_CHECK_C2, time, permit}
)
export const checkC3=(time, permit=true)=>(
    {type:AC_CHECK_C3, time, permit}
)
export const checkC5=(time, permit=true)=>(
    {type:AC_CHECK_C5, time, permit}
)
export const hintModeC=()=>(
    {type:AC_HINT_MODE_C}
)
export const nextC=()=>(
    {type:AC_NEXT_C}
)
export const prevC=()=>(
    {type:AC_PREV_C}
)
export const saveSubCatC=(numSubCat)=>(
    {type:AC_SAVE_SUBCAT_C, numSubCat}
)
export const saveNumQuestionC=(numQuestion)=>(
    {type:AC_SAVE_NUMQUESTION_C, numQuestion}
)
export const boldClassC1=(keyCard, keyP)=>(
    {type:AC_BOLD_CLASS_C1, keyCard, keyP}
)
export const boldClassC2=(keyStr, keyW)=>(
    {type:AC_BOLD_CLASS_C2, keyStr, keyW}
)
export const boldClassC7=(keyRow, keyCell)=>(
    {type:AC_BOLD_CLASS_C7, keyRow, keyCell}
)
export const checkC7=(time, permit=true)=>(
    {type:AC_CHECK_C7, time, permit}
)
