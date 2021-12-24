import React from "react";
import { connect } from "react-redux";
import {boldClassC1 } from "../../store/actions/actionCreaters";
import  Points  from "../points/Points";
import "./subCatC1.css";

 const SubCatC1 =(props)=>{

     const letter=(i)=>{
        switch(i){
            case 1: return 'a'; 
            case 2: return 'b'; 
            case 3: return 'c'; 
            default:return null
        }
     }
     const blockP=(bl)=>{
        let arrBl=[<h6 key={0}> {bl.pH}</h6>, <h6 key={1}> {bl.pQ}</h6>]
        bl.p.map((item,i)=>{
            //console.log(item)
            arrBl[i+2]=<p  key={i+2} className={item.cls} >{letter(i+1)}. {item.word}</p>
            return(i)
            })
        return(arrBl)
     }

     const block=(bl, divid)=>{
        let arrBl=[<h6 key={0}>{divid+1}. {bl.pH}</h6>, <h6 key={1}> {bl.pQ}</h6>]
        bl.p.map((item,i)=>{
            //console.log(item)
            arrBl[i+2]=<p style={{cursor:'pointer'}} key={i+2} className={item.cls} onClick={()=>props.boldClass(divid,i)}>{letter(i+1)}. {item.word}</p>
            return(i)
            })
        return(<div>{arrBl}</div>)
     }

     const questionsBl=(card)=>{
         let arrDiv=[]
        card.map((item, i)=>{
            arrDiv[i]=<div key={i} className='block col-md-6 '>{block(item, i)}</div>
            return(i)
        })
        return(arrDiv)
     }
 return(
    <div className={(props.quantity===20)?'subCatC1 one':'subCatC1 '}>
                {/* <div id='modal'></div> */}
                <div className='headSubCat'>
                    <h5 >{props.header1}</h5>
                    <h5>{props.header2}</h5>
                </div>
                <div className='questions row'>
                {(props.isChecked)?<div className='mask'></div>:null}
                    <div className='col-md-6 blPoints' style={{position:'relative'}}>
                        <Points quantity={props.quantity}
                               timerOfComponent={props.timerOfComponent}
                               isChecked={props.isChecked}
                               curRightPoints={props.curRightPoints}
                               points={props.points}
                               curCatReducer={'QuizCatC'}
                        ></Points>
                    </div>
                    <div className='template col-md-6'>
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
    iterate:state.QuizCatC.currentQuiz.template.iterate,
    trackA1:state.QuizCatC.currentQuiz.tracks,
    header1:state.QuizCatC.currentQuiz.header[0],
    header2:state.QuizCatC.currentQuiz.header[1],
    quiz:state.QuizCatC.currentQuiz,
    
    
    quantity:state.QuizCatC.currentQuiz.card.length,
    timerOfComponent:state.QuizCatC.timerOfComponent,
    isChecked:state.QuizCatC.isChecked,
    curRightPoints:state.QuizCatC.curRightPoints,
    points:state.QuizCatC.currentQuiz.template.point
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        boldClass:(divid,i)=>dispatch(boldClassC1(divid,i))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(SubCatC1)