import { catA } from "../../exercises/AllCatDef"
import { QuizA1_1 } from "../../exercises/QuizCatA/QuizA1_1"
// import { QuizA1_3 } from "../../exercises/QuizCatA/QuizA1_3"
import { AC_BOLD_CLASS, AC_BOLD_CLASS_A4, AC_CHECK_A3, AC_CHECK_A4, AC_CHECK_EXE,  AC_CLEAR_STATE_A, AC_HINT_MODE, AC_INP_ANSW, AC_NEXT, AC_PREV, AC_SAVE_NUMQUESTION, AC_SAVE_SUBCAT } from "../actions/actionTypes"


//--------------------------------
let x1=0
let x2=0
let xState={...QuizA1_1}
    //xState.card='www'
   xState.card=[...QuizA1_1.card]
   //xState.card=[...xState.card]
   //xState.card[x1]='www'
     xState.card[x1]={...QuizA1_1.card[x1]}
    //xState.card[x1].p='cvv'
     xState.card[x1].p=[...QuizA1_1.card[x1].p]
    xState.card[x1].p[x2]={...QuizA1_1.card[x1].p[x2]}
    // xState.card[x1].p[x2]='sss'
     xState.card[x1].p[x2].cls='bold'
//--------------------------------
const initialState={
    catA:catA,
    currentQuiz:{...QuizA1_1},
    //inputCat:'selCatA',
    selectSubCat:0,
    numQuestion:0,
    hintMode:false,
    lengthSubCat:catA.subCatA.length,
    lengthQuestions:catA.subCatA[0].quizes.length,
    isChecked:false,

    timerOfComponent:0,
    // fullTime:0,
    curRightPoints:0,
    // sumRightPoints:0,
    curAllPoints:0,
    // sumAllPoints:0,
    arrStatistic:[]

}
export const  QuizCatAReducer=(state=initialState, action)=>{
    
   let numQuestion=state.numQuestion
   let selectSubCat=state.selectSubCat
   //let lengthQuestions=state.lengthQuestions
   let lengthQuestions=state.catA.subCatA[selectSubCat].quizes.length 
   let lengthSubCat=state.lengthSubCat
   let currentQuiz=state.catA.subCatA[selectSubCat].quizes[numQuestion]
   let newState={...state}
   let rightAnswers=0
   let pointForAnswer=0
    let curRightPoints=0
    let statistic={}
    let quantity=0
    let catAHeader=state.catA.catAHeader
    let headQuiz=state.catA.subCatA[selectSubCat].headQuiz[0]

    // newState.currentQuiz={...state.currentQuiz}
    // newState.currentQuiz.card=[...state.currentQuiz.card]
    // newState.currentQuiz.card.map((card,i)=>{
    //     newState.currentQuiz.card[i]={...card}
    //     newState.currentQuiz.card[i].p=[...state.currentQuiz.card[i].p]
    //     newState.currentQuiz.card[i].p.map((str,n)=>{
    //         newState.currentQuiz.card[i].p[n]={...newState.currentQuiz.card[i].p[n]}
    //         return(n)
    //     })
    //     return(i)
    // })

    const currentQuizFunc=(currentQuiz=state.currentQuiz, selectSubCat=state.selectSubCat)=>{
        //debugger
        let curQuiz
        if(selectSubCat===0 || selectSubCat===1){
            curQuiz={...currentQuiz}
            curQuiz.card=[...currentQuiz.card]
            curQuiz.card.map((nCard,i)=>{
                curQuiz.card[i]={...nCard}
                curQuiz.card[i].p=[...nCard.p]
                curQuiz.card[i].p.map((str,n)=>{
                    curQuiz.card[i].p[n]={...str}
            return(n)
        })
        return(i)
    })
        return curQuiz
        }else if(selectSubCat===2){
            curQuiz={...currentQuiz}
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

        }else if(selectSubCat===3){
            curQuiz={...currentQuiz}
           if(!currentQuiz.arrRows){
            let arrRows=curQuiz.rows.map((item, i)=>{
                // debugger
                let arrRows={clause:item[0], clsP:'', clsF:'', answ:item[1]}
                 return(arrRows)
             })
            //  debugger
             curQuiz.arrRows=arrRows
           }else{
            curQuiz.arrRows=[...currentQuiz.arrRows]
            curQuiz.arrRows.map((item, i)=>{
                curQuiz.arrRows[i]={...item}
                return(i)
            })
           }
            return curQuiz
        }
    }

    
    switch(action.type){
        
        case AC_HINT_MODE:
             let hint=(state.hintMode===true)?false:true
             //console.log(currentQuizFunc())
            //  let y=currentQuizFunc()
            //  let x=(state.catA.subCatA[0].quizes[0].card[0].p[0]===y.card[0].p[0])
            //  console.log(x)
            return(
            {...state, hintMode:hint})
        case AC_SAVE_SUBCAT:
            currentQuiz=state.catA.subCatA[action.numSubCat].quizes[0]
            currentQuiz=currentQuizFunc(currentQuiz, action.numSubCat)
            //lengthQuestions=state.catA.subCatA[action.numSubCat].quizes.length
            // console.log(currentQuiz)
            return(
            {...state, selectSubCat:action.numSubCat, numQuestion:0, isChecked:false,  lengthQuestions, currentQuiz})
        case AC_SAVE_NUMQUESTION:
             currentQuiz=state.catA.subCatA[state.selectSubCat].quizes[action.numQuestion]
             currentQuiz=currentQuizFunc(currentQuiz)
            return(
            {...state, numQuestion:action.numQuestion, isChecked:false,  currentQuiz})
        case AC_BOLD_CLASS:
            if(!state.isChecked){
            let k1=action.keyCard
            let k2=action.keyP
            currentQuiz=currentQuizFunc(state.currentQuiz)
            newState.currentQuiz={...currentQuiz}
            //console.log(curQuiz)
            newState.currentQuiz.card[k1].p[0].cls=''
            newState.currentQuiz.card[k1].p[1].cls=''
            newState.currentQuiz.card[k1].p[2].cls=''
            newState.currentQuiz.card[k1].p[k2].cls='bold'
            }
            return(newState)

            case AC_NEXT:
                 
                //debugger
                if(numQuestion+1>=lengthQuestions){
                    if(selectSubCat+1<lengthSubCat){
                        selectSubCat++
                        numQuestion=0
                    }
                }else{
                    numQuestion++
                }
                lengthQuestions=state.catA.subCatA[selectSubCat].quizes.length
                currentQuiz=state.catA.subCatA[selectSubCat].quizes[numQuestion]
                currentQuiz=currentQuizFunc(currentQuiz, selectSubCat)
                return(
                {...state, numQuestion, selectSubCat, isChecked:false,  lengthQuestions, currentQuiz})
            case AC_PREV:
                if(numQuestion<=0){
                    if(selectSubCat>0){
                        selectSubCat--
                lengthQuestions=state.catA.subCatA[selectSubCat].quizes.length 
                        numQuestion=lengthQuestions-1
                    }
                }else{
                    numQuestion--
                }
                currentQuiz=state.catA.subCatA[selectSubCat].quizes[numQuestion]
                currentQuiz=currentQuizFunc(currentQuiz, selectSubCat)
                return(
                {...state, numQuestion, selectSubCat, isChecked:false,  lengthQuestions, currentQuiz})
            case AC_CHECK_EXE:
                let arrCards
                // let rightAnswers=0
                currentQuiz=currentQuizFunc(state.currentQuiz)
                newState.currentQuiz={...currentQuiz}
                // let points=state.currentQuiz.template.point
                arrCards=state.currentQuiz.card.map((card, i)=>{
                    card.p.map((str, n)=>{
                        let newStr=newState.currentQuiz.card[i].p[n]
                        if(str.answer && str.cls.includes('bold')){
                            newStr.cls=newStr.cls+' green'
                            rightAnswers++
                        }else{
                            if(str.answer && state.hintMode)
                            newStr.cls=newStr.cls+' green'
                            else{
                                if(str.answer && !state.hintMode)
                                    newStr.cls=''
                            }
                            }
                        if(!str.answer && str.cls.includes('bold'))
                        newStr.cls=newStr.cls+' red'
                        return(newStr)
                    })
                    return(arrCards)
                })
                if(action.permit){
                pointForAnswer=newState.currentQuiz.template.point
                quantity=state.currentQuiz.card.length
                newState.isChecked=true
                newState.timerOfComponent=action.time
                curRightPoints=rightAnswers*pointForAnswer
                newState.curRightPoints=curRightPoints
                newState.arrStatistic=[...state.arrStatistic]
                statistic={catAHeader, headQuiz, selectSubCat:state.selectSubCat, numQuestion:state.numQuestion, quantity, points:pointForAnswer, curRightPoints, sumPoints:quantity*pointForAnswer, timerOfComponent:action.time }
                newState.arrStatistic.push(statistic)
                }
                return(newState)
            case AC_CLEAR_STATE_A:
                return(
                {...initialState})
            case AC_INP_ANSW:
                //  currentQuiz=state.currentQuiz
                //currentQuiz=currentQuizFunc()
                // newState={...state}
                newState.currentQuiz=currentQuizFunc()
                // newState.currentQuiz={...currentQuiz}
                //  let arrAnswer=newState.currentQuiz.arrAnswer
                // newState.currentQuiz.arrAnswer=[...arrAnswer]
                // console.log('valState= '+newState.currentQuiz.arrAnswer[1].inpWord)
                // console.log('value= '+action.value)
                // console.log('a= '+a)
                newState.currentQuiz.arrAnswer[action.countInput].inpWord=action.value.split(' ').join('')
                // newState.currentQuiz.arrAnswer[action.countInput].inpWord=action.value
                return(
                {...newState})

            case AC_CHECK_A3:
                newState.currentQuiz=currentQuizFunc()
                // let rightAnswers=0
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
                statistic={catAHeader, headQuiz, selectSubCat:state.selectSubCat, numQuestion:state.numQuestion, quantity, points:pointForAnswer, curRightPoints, sumPoints:quantity*pointForAnswer, timerOfComponent:action.time }
                newState.arrStatistic.push(statistic)
                return(newState)

            case AC_BOLD_CLASS_A4:
                newState.currentQuiz=currentQuizFunc()
                newState.currentQuiz.arrRows[action.keyRow]['clsP']=''
                newState.currentQuiz.arrRows[action.keyRow]['clsF']=''
                newState.currentQuiz.arrRows[action.keyRow][action.keyCell]='bold'
                return(newState)
            case AC_CHECK_A4:
                
                newState.currentQuiz=currentQuizFunc()
                let rowsA4=[]
                // for (let rowA4 of rowsA4)
                let oldRow=state.currentQuiz.arrRows
                rowsA4=newState.currentQuiz.arrRows.map((rowA4,i)=>{
                   // debugger
                   if(i===0)return rowA4
                    let answ=rowA4.answ
                if(oldRow[i].clsP.includes('bold')){
                    if(answ){
                    rightAnswers++
                    rowA4.clsP=rowA4.clsP+' bGreen'
                    }else rowA4.clsP=rowA4.clsP+' red'
                }
                
                if(oldRow[i].clsF.includes('bold')){
                    if(!answ){
                        rightAnswers++
                        rowA4.clsF=rowA4.clsF+' bGreen'
                    }else rowA4.clsF=rowA4.clsF+' red'
                }
                
                    if(answ && !oldRow[i].clsP.includes('bold')){
                        if(state.hintMode)
                        rowA4.clsP=rowA4.clsP+' green'
                        // else rowA4.clsP=rowA4.clsP.split(' ').splice(rowA4.clsP.split(' ').indexOf('green'),1).join(' ')
                        else rowA4.clsP=''
                    }
                    if(!answ && !oldRow[i].clsF.includes('bold')){
                        if(state.hintMode)
                        rowA4.clsF=rowA4.clsF+' green'
                        else rowA4.clsF=''
                    }
                     return rowA4
                })
                //debugger
                newState.currentQuiz.arrRows=rowsA4
                if(action.permit){
                    pointForAnswer=newState.currentQuiz.template.point
                    quantity=state.currentQuiz.rows.length-1
                    newState.isChecked=true
                    newState.timerOfComponent=action.time
                    curRightPoints=rightAnswers*pointForAnswer
                    newState.curRightPoints=curRightPoints
                    newState.arrStatistic=[...state.arrStatistic]
                    statistic={catAHeader, headQuiz, selectSubCat:state.selectSubCat, numQuestion:state.numQuestion, quantity, points:pointForAnswer, curRightPoints, sumPoints:quantity*pointForAnswer, timerOfComponent:action.time }
                    newState.arrStatistic.push(statistic)
                    }
                    
                return(newState)
            // case AC_CHECK_EXE:
            //     return(newState)
             
        default:return state
    }
}