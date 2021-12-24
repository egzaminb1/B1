import React from "react";
import { connect } from "react-redux";
import { boldClassA4 } from "../../store/actions/actionCreaters";
import AudioPlayer from '../audio/player/AudioPlayer'
import  Points  from "../points/Points";
import "./subCatA4.css";

 const SubCatA4 =(props)=>{

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
                <td className='prawda' onClick={()=>props.boldClassA4(i,'clsP')}><span className={item.clsP} >P</span></td>
                <td className='falsz' onClick={()=>props.boldClassA4(i,'clsF')}><span className={item.clsF} >F</span></td>
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
    <div className='subCatA4 '>
                <div className='headSubCat'>
                    <h5 >{props.header1}</h5>
                    <h5>{props.header2}</h5>
                </div>
                <AudioPlayer tracks={props.trackA4} iterate={props.iterate} ></AudioPlayer>
                <div className='questions'>
                {(props.isChecked)?<div className='mask'></div>:null}
                    <div className=' blPoints' >
                        <Points quantity={props.quantity}
                               timerOfComponent={props.timerOfComponent}
                               isChecked={props.isChecked}
                               curRightPoints={props.curRightPoints}
                               points={props.points}
                               curCatReducer={'QuizCatA'}
                        ></Points>
                    </div>
                    <hr/>
                    {questionsBl(props.quiz.arrRows)}
                </div>
                
            </div>
    
)}

const mapStateToProps=(state)=>{
return(
    {
    iterate:state.QuizCatA.currentQuiz.template.iterate,
    trackA4:state.QuizCatA.currentQuiz.tracks,
    header1:state.QuizCatA.currentQuiz.header[0],
    header2:state.QuizCatA.currentQuiz.header[1],
    quiz:state.QuizCatA.currentQuiz,
    
    quantity:state.QuizCatA.currentQuiz.arrRows.length-1,
    timerOfComponent:state.QuizCatA.timerOfComponent,
    isChecked:state.QuizCatA.isChecked,
    curRightPoints:state.QuizCatA.curRightPoints,
    points:state.QuizCatA.currentQuiz.template.point
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        boldClassA4:(keyRow,keyCell)=>dispatch(boldClassA4(keyRow,keyCell))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(SubCatA4)