import React, { Fragment } from "react";
import { connect } from "react-redux";
import { boldClass } from "../../store/actions/actionCreaters";
import AudioPlayer from '../audio/player/AudioPlayer'
import  Points  from "../points/Points";
import "./subCatA7.css";

 const SubCatA7 =(props)=>{

     const questionsBl=(card)=>{
         let arrDiv=card.map((item, i)=>{
             let arr=item.p.map((item2,n)=>{
                 return <div key={n} className="col-sm-4">
                     <div onClick={()=>props.boldClass(i, n)}>
                        <span className={item2.cls}>{String.fromCharCode(65+n)}.</span>
                        <img className={item2.cls} src={item2.img} style={{maxWidth:'100%', height:'auto'}}></img>
                     </div>
                 </div>
             })

        return <div key={i} className='block row'>
                    <p>{i+1}. {item.pH}</p>
                    {arr}
                </div>
        })
        return(arrDiv)
     }


 return(
    <div className='subCatA7 '>
                <div className='headSubCat'>
                    <h5 >{props.header1}</h5>
                    <h5>{props.header2}</h5>
                </div>
                <AudioPlayer tracks={props.trackA1} iterate={props.iterate} ></AudioPlayer>
                <div className='questions row'>
                {(props.isChecked)?<div className='mask'></div>:null}
                    <div >
                        <Points quantity={props.quantity}
                               timerOfComponent={props.timerOfComponent}
                               isChecked={props.isChecked}
                               curRightPoints={props.curRightPoints}
                               points={props.points}
                               curCatReducer={'QuizCatA'}
                        ></Points>
                    </div>
                    <div className='template '>
                        <div className='blTemplate row'>
                        <h5>Przykład:</h5>
                            <p>0. {props.quiz.template.pH}</p>

                            {props.quiz.template.p.map((item2,n)=>{
                            return <div key={n} className="col-sm-4">
                                <div>
                                    <span className={item2.cls}>{String.fromCharCode(65+n)}.</span>
                                    <img className={item2.cls} src={item2.img} style={{maxWidth:'100%', height:'auto'}}></img>
                                </div>
                            </div>
                        })}
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

export default connect(mapStateToProps,mapDispatchToProps)(SubCatA7)