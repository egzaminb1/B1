import { catB} from "../../exercises/AllCatDef"
import { QuizB1_1 } from "../../exercises/quizCatB/QuizB1_1"
import { AC_CHECK_B1, AC_CHECK_B2, AC_CLEAR_STATE_B, AC_HINT_MODE_B, AC_INP_ANSW_B1, AC_NEXT_B, AC_PREV_B, AC_SAVE_NUMQUESTION_B, AC_SAVE_SUBCAT_B } from "../actions/actionTypes"

const initialState={
    cat:catB,
    currentQuiz:{...QuizB1_1},
    selectSubCat:0,
    numQuestion:0,
    hintMode:false,
    lengthSubCat:catB.subCat.length,
    lengthQuestions:catB.subCat[0].quizes.length,
    isChecked:false,

    timerOfComponent:0,
    curRightPoints:0,
    curAllPoints:0,
    arrStatistic:[]
}

export const  QuizCatBReducer=(state=initialState, action)=>{
    let numQuestion=state.numQuestion
   let selectSubCat=state.selectSubCat
   let lengthQuestions=state.cat.subCat[selectSubCat].quizes.length 
   let lengthSubCat=state.lengthSubCat
   let currentQuiz=state.cat.subCat[selectSubCat].quizes[numQuestion]
   let newState={...state}
   let rightAnswers=0
   let pointForAnswer=0
    let curRightPoints=0
    let statistic={}
    let quantity=0
    let catHeader=state.cat.catHeader
    let headQuiz=state.cat.subCat[selectSubCat].headQuiz[0]

    const currentQuizFunc=(currentQuiz=state.currentQuiz, selectSubCat=state.selectSubCat)=>{
        //  debugger
        let curQuiz={...currentQuiz}
         if(selectSubCat===0){
            // curQuiz={...currentQuiz}
           if(!currentQuiz.arrAnswer){
            let arrAnswer=curQuiz.answer.map((item, i)=>{
                let arrAnswer={inpWord:'', cls:'', answ:item}
                 return(arrAnswer)
             })
             curQuiz.arrAnswer=arrAnswer
           }else{
            curQuiz.arrAnswer=[...currentQuiz.arrAnswer]
            curQuiz.arrAnswer.map((item, i)=>{
                curQuiz.arrAnswer[i]={...item}
                return(i)
            })
           }
            return curQuiz
        }else if (selectSubCat===1){
            if(!currentQuiz.arrAnswer){
                let arrAnswer=curQuiz.text.map((item, i)=>{
                     return{inpWord:'', cls:'', answ:item[2]}
                 })
                 curQuiz.arrAnswer=arrAnswer
               }else{
                curQuiz.arrAnswer=[...currentQuiz.arrAnswer]
                curQuiz.arrAnswer.map((item, i)=>{
                    curQuiz.arrAnswer[i]={...item}
                    return(i)
                })
               }
               return curQuiz
        }
    }
    //  debugger
    // if(!state.currentQuiz.arrAnswer){
    //     currentQuiz=currentQuizFunc()
    //     return{...state,  currentQuiz}
    // }
    

    switch(action.type){
        case AC_SAVE_SUBCAT_B:
            currentQuiz=state.cat.subCat[action.numSubCat].quizes[0]
            currentQuiz=currentQuizFunc(currentQuiz, action.numSubCat)
            return(
            {...state, selectSubCat:action.numSubCat, numQuestion:0, isChecked:false, hintMode:false, lengthQuestions, currentQuiz})

        case AC_SAVE_NUMQUESTION_B:
             currentQuiz=state.cat.subCat[state.selectSubCat].quizes[action.numQuestion]
             currentQuiz=currentQuizFunc(currentQuiz)
            return(
            {...state, numQuestion:action.numQuestion, isChecked:false, hintMode:false, currentQuiz})

        case AC_NEXT_B:
            if(numQuestion+1>=lengthQuestions){
                if(selectSubCat+1<lengthSubCat){
                    selectSubCat++
                    numQuestion=0
                }
            }else{
                numQuestion++
            }
            lengthQuestions=state.cat.subCat[selectSubCat].quizes.length
             currentQuiz=state.cat.subCat[selectSubCat].quizes[numQuestion]
            currentQuiz=currentQuizFunc(currentQuiz, selectSubCat)
            return(
            {...state, numQuestion, selectSubCat, isChecked:false, hintMode:false, lengthQuestions, currentQuiz})
        case AC_PREV_B:
            if(numQuestion<=0){
                if(selectSubCat>0){
                    selectSubCat--
            lengthQuestions=state.cat.subCat[selectSubCat].quizes.length 
                    numQuestion=lengthQuestions-1
                }
            }else{
                numQuestion--
            }
             currentQuiz=state.cat.subCat[selectSubCat].quizes[numQuestion]
            currentQuiz=currentQuizFunc(currentQuiz, selectSubCat)
            return(
            {...state, numQuestion, selectSubCat, isChecked:false, hintMode:false, lengthQuestions, currentQuiz})

        case AC_HINT_MODE_B:
             let hint=(state.hintMode===true)?false:true
            return(
            {...state, hintMode:hint})
        
        case AC_INP_ANSW_B1:
            newState.currentQuiz=currentQuizFunc()
            newState.currentQuiz.arrAnswer[action.countInput].inpWord=action.value
            // newState.currentQuiz.arrAnswer[action.countInput].inpWord=action.value.split(' ').join('')
            //  debugger
            return(
            {...newState})
        
        case AC_CHECK_B1:
            newState.currentQuiz=currentQuizFunc()
                let x
                for(x of newState.currentQuiz.arrAnswer){
                    if(x.answ.toLowerCase()===x.inpWord.toLowerCase()){
                        x.cls='bGreen'
                        rightAnswers++
                    }else x.cls='red'
                }
                pointForAnswer=newState.currentQuiz.template.point
                quantity=state.currentQuiz.arrAnswer.length-1
                newState.isChecked=true
                newState.timerOfComponent=action.time
                curRightPoints=rightAnswers*pointForAnswer
                newState.curRightPoints=curRightPoints
                newState.arrStatistic=[...state.arrStatistic]
                statistic={catHeader, headQuiz, selectSubCat:state.selectSubCat, numQuestion:state.numQuestion, quantity, points:pointForAnswer, curRightPoints, sumPoints:quantity*pointForAnswer, timerOfComponent:action.time }
                newState.arrStatistic.push(statistic)
                return(newState)

        case AC_CHECK_B2:
            newState.currentQuiz=currentQuizFunc()
                for(let x of newState.currentQuiz.arrAnswer){
                    let b2_answ=x.answ.toLowerCase().split('')
                    .filter(function(n) { return n !== ' ' && n !== '' && n !== '"' && n !== `'` && n !== `,` && n !== `;` && n !== `:`  && n !== `.`}).join('')
                    let b2_inpWord=x.inpWord.toLowerCase().split('')
                    .filter(function(n) { return n !== ' ' && n !== '' && n !== '"' && n !== `'` && n !== `,` && n !== `;` && n !== `:`  && n !== `.`}).join('')
                    
                    if(b2_answ===b2_inpWord){
                        x.cls='bGreen'
                        rightAnswers++
                    }else x.cls='red'
                }
                pointForAnswer=newState.currentQuiz.template.point
                quantity=state.currentQuiz.arrAnswer.length-1
                newState.isChecked=true
                newState.timerOfComponent=action.time
                curRightPoints=rightAnswers*pointForAnswer
                newState.curRightPoints=curRightPoints
                newState.arrStatistic=[...state.arrStatistic]
                statistic={catHeader, headQuiz, selectSubCat:state.selectSubCat, numQuestion:state.numQuestion, quantity, points:pointForAnswer, curRightPoints, sumPoints:quantity*pointForAnswer, timerOfComponent:action.time }
                newState.arrStatistic.push(statistic)
                return(newState)

        case AC_CLEAR_STATE_B:
            currentQuiz=state.cat.subCat[0].quizes[0]
            currentQuiz=currentQuizFunc(currentQuiz, 0)
            return(
            // {...initialState})
            {...initialState, currentQuiz})

        // case AC_COPY_STATISTIC:
        //     return(
        //     {...state, arrStatistic:action.arrStatistic})
        default:return state
    }
}