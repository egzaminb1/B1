import React  from "react";
import { connect } from "react-redux";
import { inpAnswC3 } from "../../store/actions/actionCreaters";
// import { boldClassC2 } from "../../store/actions/actionCreaters";
import  Points  from "../points/Points";
import "./subCatC3.css";

 const SubCatC3 =(props)=>{
    
    const inpTable=()=>{
        let arr=<table className="tableAnsw">
        <thead>
            <tr>
            {props.quiz.answer.map((item,i)=>{
            return <td key={i}>{i}</td>
            })
        }
            </tr>
        </thead>
        <tbody>
            <tr>
            {props.quiz.arrAnswer.map((item,i)=>{
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
                <td key={i}><input type='text' className={classInp} value={input} placeholder="..."  readOnly={rO} size='1' maxLength="1" onChange={(e)=>(props.inpAnsw(e.target.value, i))}></input></td>
            )
        })}
            </tr>
        </tbody>
    </table>
        
        return arr
    }

    return(
    <div className='subCatC3'>
        
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
                <table className="tableMain">
                    <thead>
                        <tr>
                            <td colSpan={2}>Kolumna I</td>
                            <td colSpan={2}>Kolumna II</td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.quiz.row.map((item,i)=>{
                            return(
                                <tr key={i}>
                                    <td>{i}</td>
                                    <td>{item[0]}</td>
                                    <td>{String.fromCharCode(65+i)}</td>
                                    <td>{item[1]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            {inpTable()}
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

export default connect(mapStateToProps,mapDispatchToProps)(SubCatC3)