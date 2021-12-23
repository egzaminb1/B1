import TextareaAutosize from "@mui/material/TextareaAutosize";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import {inpAnswB1 } from "../../store/actions/actionCreaters";
import  Points  from "../points/Points";
import "./subCatB2.css";

 const SubCatB2 =(props)=>{

    const answP=(i)=>{
        let rO=(props.isChecked )?true:false
        let sizeInp=15
        let val=(props.isChecked && props.quiz.arrAnswer[i].cls==='bGreen')?props.quiz.arrAnswer[i].answ:props.quiz.arrAnswer[i].inpWord
         val=(i===0)?props.quiz.arrAnswer[i].answ:val
         let hint=(props.hintMode && props.isChecked)?props.quiz.arrAnswer[i].answ:null
         hint=(props.quiz.arrAnswer[i].cls==='bGreen')?null:hint
        //  val=(props.hintMode && props.isChecked)?props.quiz.arrAnswer[i].answ:val
        let inp=(i===0)?<TextareaAutosize aria-label="empty textarea" className='inp'  style={{resize: 'none', width: '100%'}}  value={val}></TextareaAutosize>:
        <Fragment>
            <p className="hint">{hint}</p>
            <TextareaAutosize aria-label="empty textarea"  className={props.quiz.arrAnswer[i].cls} placeholder='.................' style={{resize: 'none', width: '100%'}}  value={val} onChange={(e)=>(props.inpAnsw(e.target.value, i))}></TextareaAutosize>
        </Fragment>
        // let inp=(i===0)?<input  className='inp' type='text'  size={(val.length<sizeInp)?sizeInp:val.length} readOnly={true} value={val}></input>:
        // <input  className={props.quiz.arrAnswer[i].cls} type='text' placeholder='.................' size={(val.length<sizeInp)?sizeInp:val.length} readOnly={rO} value={val} onChange={(e)=>(props.inpAnsw(e.target.value, i))}></input>
        return inp
    }
   
    const questionsDiv=(text)=>{
        let arrDiv=text.map((item, i)=>{
            return (
                <div key={i} className={'block'}>
                <p>{i}. {item[0]}</p>
                <p><b>{item[1]}</b></p>
                <div>{answP(i)}</div>
                {(i===0)?<hr></hr>:null}
                </div>
                )
        })
        return arrDiv
    }

    return(
    <div className='subCatB2'>
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

    quantity:state.QuizCatB.currentQuiz.text.length-1,
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

export default connect(mapStateToProps,mapDispatchToProps)(SubCatB2)