import React from "react";
import { connect } from "react-redux";
import { boldClassC7 } from "../../store/actions/actionCreaters";
import  Points  from "../points/Points";
import "./subCatC7.css";

 const SubCatC7 =(props)=>{

    const questionsBl=(rows)=>{
        let arrTr=[]
        let tHead=<tr>
            <td ><span>0. </span>{rows[0].clause}</td>
            <td className={(rows[0].answ)?'bold':''}>P</td>
            <td className={(rows[0].answ)?'':'bold'}>F</td>
        </tr>
        arrTr=rows.map((item, i)=>{
            let x
            if (i!==0)
            x=<tr key={i}>
                <td ><span>{i}. </span>{item.clause}</td>
                <td className='prawda' onClick={()=>props.boldClass(i,'clsP')}><span className={item.clsP} >P</span></td>
                <td className='falsz' onClick={()=>props.boldClass(i,'clsF')}><span className={item.clsF} >F</span></td>
            </tr>
            return x
        }  
        )
        return <table>
            <thead>{tHead}</thead>
            
            <tbody>
                <tr>
                    <td colSpan='3'><hr/></td>
                </tr>
                {arrTr}
            </tbody>
        </table>
    }
 return(
    <div className='subCatC7 '>
                <div className='headSubCat'>
                    <h5 >{props.header1}</h5>
                    <h5>{props.header2}</h5>
                </div>
                <div className='questions'>
                {(props.isChecked)?<div className='mask'></div>:null}
                    <div className=' blPoints' >
                        <Points quantity={props.quantity}
                               timerOfComponent={props.timerOfComponent}
                               isChecked={props.isChecked}
                               curRightPoints={props.curRightPoints}
                               points={props.points}
                               curCatReducer={'QuizCatC'}
                        ></Points>
                    </div>
                    <hr/>
                    {props.quiz.text.map((item, i)=>{
                        return <p key={i}>{item}</p>
                    })}
                    {questionsBl(props.quiz.arrRows)}
                </div>
                
            </div>
    
)}

const mapStateToProps=(state)=>{
return(
    {
    header1:state.QuizCatC.currentQuiz.header[0],
    header2:state.QuizCatC.currentQuiz.header[1],
    quiz:state.QuizCatC.currentQuiz,
    
    quantity:state.QuizCatC.currentQuiz.arrRows.length-1,
    timerOfComponent:state.QuizCatC.timerOfComponent,
    isChecked:state.QuizCatC.isChecked,
    curRightPoints:state.QuizCatC.curRightPoints,
    points:state.QuizCatC.currentQuiz.template.point
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        boldClass:(keyRow,keyCell)=>dispatch(boldClassC7(keyRow,keyCell))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(SubCatC7)