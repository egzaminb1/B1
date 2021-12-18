import React, { Fragment } from "react";
import { connect } from "react-redux";
import {  hintModeHandler, saveNumQuestion, saveSubCat} from "../../store/actions/actionCreaters";
import "./headExercise.css";
// import descImg from '../../assets/img/introduction.jpg'

 const HeadExercise =(props)=>(
     <Fragment>
         <div className='groupSelects row'>
        <div className=' col text-center'>
        <label htmlFor="selSubCat" className='form-label'> Wybór zadania</label>
            <select id='selSubCat' className='form-control' name='selSubCat' value={props.numSubCat} onChange={props.saveSubCatHandler} >
            {Object.keys(props.arrSubCat).map((item, i)=>{
                return(
                    <option key = {item} value={i} >Zadanie {item*1+1}</option>
                )
            })} 
            </select>
        </div>
        <div className=' col text-center'>
        <label htmlFor="selQuestion" className='form-label'> Wybór pytania</label>
            <select id='selQuestion' className='form-control' name='selQuestion' value={props.numQuiz} onChange={props.saveNumQuestionHandler}  >
            {Object.keys(props.arrQuizes).map((item, i)=>{
                return(
                    <option key = {item} value={i} >
                        Pytanie {i*1+1}</option>
                )
            })} 
            </select>
        </div>
        <div className=' col hintMode text-center'>
            <label htmlFor='butHint'  className='form-label ' >Podpowiedź <span>wyniku</span></label>
            <button id='butHint' className='form-control' onClick={()=>props.hintModeHandler()} >{ 
                (props.hintMode)?'ON':'OFF'}
            </button>
        </div>
        </div>

         <div className='headExercise'>
    <div className='desc'>
        <div className='descExercise'>
            <h4>{props.numSubCat+1}.{props.numQuiz+1}. {props.header}</h4>
            <p>{props.text}</p>
        </div>
    </div>
</div>
     </Fragment>
    
)

const mapStateToProps=(state)=>{
   // console.log(state)
return(
    {
    isChecked:state.QuizCatA.isChecked,
    hintMode:state.QuizCatA.hintMode,
    arrQuizes:state.QuizCatA.catA.subCatA[state.QuizCatA.selectSubCat].quizes,
    arrSubCat:state.QuizCatA.catA.subCatA,
    // selectSubCat:state.QuizCatA.selectSubCat,
    numSubCat:state.QuizCatA.selectSubCat,
    numQuiz:state.QuizCatA.numQuestion,
    header:state.QuizCatA.catA.subCatA[state.QuizCatA.selectSubCat].headQuiz[0],
    text:state.QuizCatA.catA.subCatA[state.QuizCatA.selectSubCat].headQuiz[1]
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        hintModeHandler:()=>dispatch(hintModeHandler()),
        // hintModeHandler:()=>dispatch(hintMode()),
        saveSubCatHandler:(event)=>dispatch(saveSubCat(event.target.selectedIndex)),
        saveNumQuestionHandler:(event)=>dispatch(saveNumQuestion(event.target.selectedIndex))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(HeadExercise)