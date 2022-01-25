import React  from "react";
import { connect } from "react-redux";
import { inpAnsw } from "../../store/actions/actionCreaters";
import AudioPlayer from '../audio/player/AudioPlayer'
import  Points  from "../points/Points";
import "./subCatA6.css";

 const SubCatA5 =(props)=>{
    
    const inpAnswer=()=>{
             let arr=props.quiz.arrAnswer.map((item,i)=>{
                let rO=(i===0)?true:false
                let input
                let classInp=item.cls
                if(props.isChecked){
                    if(props.hintMode){
                        input=item.answ
                        classInp='green'
                    }else if(item.cls==='green'){
                        input=item.answ
                    }else input=item.inpWord
                }else input=item.inpWord
                if(i===0){
                    input=item.answ
                    classInp='bold'
                }
            return(
                <div key={i} className='col-sm-6 '>
                    <span>{String.fromCharCode(65+i)} nr </span>
                    <input type='text' className={classInp} value={input} placeholder="..."  readOnly={rO} size='1' maxLength="1" onChange={(e)=>(props.inpAnsw(e.target.value, i))}></input>
                    <img src={props.quiz.image[i]}></img>
                </div>
            )
        })
        return arr
    }

    return(
    <div className='subCatA6'>
        
        <div className='headSubCat'>
            <h5>{props.header1}</h5>
            <h5>{props.header2}</h5>
        </div>
        <AudioPlayer tracks={props.trackA} iterate={props.iterate} ></AudioPlayer>
        <div className='questions row'>
        {(props.isChecked)?<div className='mask'></div>:null}
            <div  >
                <Points quantity={props.quantity}
                        timerOfComponent={props.timerOfComponent}
                        isChecked={props.isChecked}
                        curRightPoints={props.curRightPoints}
                        points={props.points}
                        curCatReducer={'QuizCatA'}
                ></Points>
                <hr></hr>
                <p>{props.headQuestion}</p>
            </div>
            {inpAnswer()}
        </div>
    </div>
)
}

const mapStateToProps=(state)=>{
return(
    {
    headQuestion:state.QuizCatA.currentQuiz.template.headQuestion,
    iterate:state.QuizCatA.currentQuiz.template.iterate,
    trackA:state.QuizCatA.currentQuiz.tracks,
    header1:state.QuizCatA.currentQuiz.header[0],
    header2:state.QuizCatA.currentQuiz.header[1],
    quiz:state.QuizCatA.currentQuiz,
    isChecked:state.QuizCatA.isChecked,
    hintMode:state.QuizCatA.hintMode,

    quantity:state.QuizCatA.currentQuiz.arrAnswer.length-1,
    timerOfComponent:state.QuizCatA.timerOfComponent,
    curRightPoints:state.QuizCatA.curRightPoints,
    points:state.QuizCatA.currentQuiz.template.point
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        inpAnsw:(value, countInput)=>dispatch(inpAnsw(value, countInput))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(SubCatA5)