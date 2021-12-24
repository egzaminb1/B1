import React from "react";
import { connect } from "react-redux";
import { boldClass } from "../../store/actions/actionCreaters";
import AudioPlayer from '../audio/player/AudioPlayer'
import  Points  from "../points/Points";
import "./subCatA1.css";

 const SubCatA1 =(props)=>{

     const letter=(i)=>{
        switch(i){
            case 1: return 'a'; 
            case 2: return 'b'; 
            case 3: return 'c'; 
            default:return null
        }
     }
     const blockP=(bl)=>{
        let arrBl=[<h6 key={0}> {bl.pH}</h6>]
        bl.p.map((item,i)=>{
            //console.log(item)
            arrBl[i+1]=<p  key={i+1} className={item.cls} >{letter(i+1)}. {item.word}</p>
            return(i)
            })
        return(arrBl)
     }

     const block=(bl, divid)=>{
        let arrBl=[<h6 key={0}>{divid+1}. {bl.pH}</h6>]
        bl.p.map((item,i)=>{
            //console.log(item)
            arrBl[i+1]=<p style={{cursor:'pointer'}} key={i+1} className={item.cls} onClick={()=>props.boldClass(divid,i)}>{letter(i+1)}. {item.word}</p>
            return(i)
            })
        return(<div>{arrBl}</div>)
     }

     const questionsBl=(card)=>{
         let arrDiv=[]
        card.map((item, i)=>{
            arrDiv[i]=<div key={i} className='block col-sm-6 '>{block(item, i)}</div>
            return(i)
        })
        return(arrDiv)
     }
 return(
    <div className='subCatA1 '>
                {/* <div id='modal'></div> */}
                <div className='headSubCat'>
                    <h5 >{props.header1}</h5>
                    <h5>{props.header2}</h5>
                </div>
                <AudioPlayer tracks={props.trackA1} iterate={props.iterate} ></AudioPlayer>
                <div className='questions row'>
                {(props.isChecked)?<div className='mask'></div>:null}
                    <div className='col-sm-6 blPoints' style={{position:'relative'}}>
                        <Points quantity={props.quantity}
                               timerOfComponent={props.timerOfComponent}
                               isChecked={props.isChecked}
                               curRightPoints={props.curRightPoints}
                               points={props.points}
                               curCatReducer={'QuizCatA'}
                        ></Points>
                    </div>
                    <div className='template col-sm-6'>
                        <div>
                            <h5>Przykład:</h5>
                            {blockP(props.quiz.template)}
                        </div>
                    </div>
                    {questionsBl(props.quiz.card)}
                </div>
                
            </div>
    
)}

const mapStateToProps=(state)=>{
return(
    {
    iterate:state.QuizCatA.currentQuiz.template.iterate,
    trackA1:state.QuizCatA.currentQuiz.tracks,
    header1:state.QuizCatA.currentQuiz.header[0],
    header2:state.QuizCatA.currentQuiz.header[1],
    quiz:state.QuizCatA.currentQuiz,
    
    quantity:state.QuizCatA.currentQuiz.card.length,
    timerOfComponent:state.QuizCatA.timerOfComponent,
    isChecked:state.QuizCatA.isChecked,
    curRightPoints:state.QuizCatA.curRightPoints,
    points:state.QuizCatA.currentQuiz.template.point
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        boldClass:(divid,i)=>dispatch(boldClass(divid,i))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(SubCatA1)