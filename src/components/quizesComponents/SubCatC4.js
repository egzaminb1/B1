import React, { Fragment }  from "react";
import { connect } from "react-redux";
import { inpAnswC3 } from "../../store/actions/actionCreaters";
import  Points  from "../points/Points";
import "./subCatC4.css";

 const SubCatC4 =(props)=>{
    
    const inpTable=(i)=>{
        let item=props.quiz.arrAnswer[i]
        let rO=(i===0)?true:false
        let input
        let classInp=item.cls
        let fontStyle
        if(props.isChecked){
            if(props.hintMode){
                input=item.answ
                classInp='green'
                fontStyle={fontStyle:"italic", fontWeight:"400"}
            }else if(item.cls==='green'){
                input=item.answ
            }else input=item.inpWord
        }else input=item.inpWord
        if(i===0){
            // console.log(item)
            input=item.answ
            classInp='bold'
            fontStyle={fontWeight:"700"}
        }
        return(
            <p >
            <span>{i}. </span>
            <input type='text' style={fontStyle} className={classInp} value={input} placeholder="..."  readOnly={rO} size='1' maxLength="1" onChange={(e)=>(props.inpAnsw(e.target.value, i))}></input>
        </p>
        )
    }
   

    return(
    <div className='subCatC4'>
        
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
                        curCatReducer={'QuizCatC'}
                ></Points>
                <hr></hr>
            </div>
                <div className="firstConformity">
                    {props.quiz.row.map((item,i)=>{
                            return(
                                <p key={i}><span>{String.fromCharCode(65+i)}. </span>{item[0]}</p>
                            )
                        })}
                </div>
                {(props.quiz.header[2])?<div className="C4_introdaction">{props.quiz.header[2]}</div>:null}
                <div className="secondConformity">
                    {props.quiz.row.map((item,i)=>{
                            return(
                                <Fragment key={i}>
                                    {inpTable(i)}
                                    <p >{item[1]}</p>
                                </Fragment>
                            )
                        })}
                </div>

        </div>
    </div>
)
}

const mapStateToProps=(state)=>{
return(
    {
    header1:state.QuizCatC.currentQuiz.header[0],
    header2:state.QuizCatC.currentQuiz.header[1],
    quiz:state.QuizCatC.currentQuiz,
    isChecked:state.QuizCatC.isChecked,
    hintMode:state.QuizCatC.hintMode,

    quantity:state.QuizCatC.currentQuiz.arrAnswer.length-1,
    timerOfComponent:state.QuizCatC.timerOfComponent,
    curRightPoints:state.QuizCatC.curRightPoints,
    points:state.QuizCatC.currentQuiz.template.point,
    // img:(state.QuizCatC.currentQuiz.img)?state.QuizCatC.currentQuiz.img:null
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        inpAnsw:(value, countInput)=>dispatch(inpAnswC3(value, countInput))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(SubCatC4)