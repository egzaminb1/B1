import React from "react";
import { connect } from "react-redux";
import {inpAnswB1 } from "../../store/actions/actionCreaters";
import  Points  from "../points/Points";
import "./subCatB1.css";

 const SubCatB1 =(props)=>{
    let count=0
    let arrCount=[]

    const par=(par, num)=>{
        let arrInp=[]
        let str=''
        let arrAsist=[]
        let arrText=par.split(' ')

        arrText.map((item,i)=>{
            if(item==='....'){
               arrAsist.push(count)
                arrInp.push(str)
                str=' '
                count++
            }else{
                str=str+item+' '
            }
            return i
        })
        arrCount.push(arrAsist)

        let arrP=arrInp.map((item, i)=>{
            let arr
            // let sizeInp=11
            let sizeInp=props.quiz.arrAnswer[arrCount[num][i]].answ.length
            if(i===0 && num===0){
                arr=(<div key={i}>{item}
                <input  className='inp' type='text' size={sizeInp} value={props.quiz.arrAnswer[arrCount[num][i]].answ} readOnly={true} ></input>
                </div>)
            }else{
                let val=(props.isChecked && props.quiz.arrAnswer[arrCount[num][i]].cls==='bGreen')?props.quiz.arrAnswer[arrCount[num][i]].answ:props.quiz.arrAnswer[arrCount[num][i]].inpWord

                let hint=(props.hintMode && props.isChecked && props.quiz.arrAnswer[arrCount[num][i]].cls==='red')?props.quiz.arrAnswer[arrCount[num][i]].answ:''
                let rO=(props.isChecked)?true:false

                arr=(<div key={i}>{item}<p>
                    <i className='hint'>{hint}</i>
                    <input  className={props.quiz.arrAnswer[arrCount[num][i]].cls} type='text' placeholder='.................' size={(val.length<sizeInp)?sizeInp:val.length} readOnly={rO} value={val} onChange={(e)=>(props.inpAnsw(e.target.value, arrCount[num][i]))}></input>
                </p>
                </div>)
            }
            return arr
        })
        arrP.push(<span key={'q'}>{str}</span>)
        return arrP
    }

   const questionsDiv=(text)=>{
    let arrDiv=text.map((item, i)=>{
       let arr= <div key={i} className={'paragraf'}>{par(item, i)}</div>
        return arr
    })
        return arrDiv
    }

    return(
    <div className='subCatB1'>
        
        <div className='headSubCat'>
            <h5>{props.header1}</h5>
            <h5>{props.header2}</h5>
        </div>
        <div className='questions'>
        {(props.isChecked)?<div className='mask'></div>:null}
            <div  >
                <Points quantity={props.quantity}
                        timerOfComponent={props.timerOfComponent}
                        isChecked={props.isChecked}
                        curRightPoints={props.curRightPoints}
                        points={props.points}
                        curCatReducer={'QuizCatB'}
                ></Points>
                <hr></hr>
            </div>
            {questionsDiv(props.quiz.text)}
        </div>
    </div>
)
}

const mapStateToProps=(state)=>{
return(
    {
    header1:state.QuizCatB.currentQuiz.header[0],
    header2:state.QuizCatB.currentQuiz.header[1],
    quiz:state.QuizCatB.currentQuiz,
    isChecked:state.QuizCatB.isChecked,
    hintMode:state.QuizCatB.hintMode,

    quantity:state.QuizCatB.currentQuiz.arrAnswer.length-1,
    timerOfComponent:state.QuizCatB.timerOfComponent,
    curRightPoints:state.QuizCatB.curRightPoints,
    points:state.QuizCatB.currentQuiz.template.point
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        //boldClass:(divid,i)=>dispatch(boldClass(divid,i))
    inpAnsw:(value, countInput)=>dispatch(inpAnswB1(value, countInput))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(SubCatB1)