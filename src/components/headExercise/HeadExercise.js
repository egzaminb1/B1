import React, { Fragment } from "react";
import { connect } from "react-redux";
import {  hintModeHandler, saveNumQuestion, saveSubCat} from "../../store/actions/actionCreaters";
import "./headExercise.css";

 const HeadExercise =(props)=>(
     <Fragment>
         <div className='groupSelects row'>
        <div className=' col text-center'>
        <label htmlFor="selSubCat" className='form-label'> Wybór zadania</label>
            <select id='selSubCat' className='form-control' name='selSubCat' value={props.numSubCat} onChange={(e)=>props.saveSubCatHandler(e, props.curCatReducer)} >
            {Object.keys(props.arrSubCat).map((item, i)=>{
                return(
                    <option key = {item} value={i} >Zadanie {item*1+1}</option>
                )
            })} 
            </select>
        </div>
        <div className=' col text-center'>
        <label htmlFor="selQuestion" className='form-label'> Wybór pytania</label>
            <select id='selQuestion' className='form-control' name='selQuestion' value={props.numQuiz} onChange={(e)=>props.saveNumQuestionHandler(e, props.curCatReducer)}  >
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
            <button id='butHint' className='form-control' onClick={()=>props.hintModeHandler(props.curCatReducer)} >{ 
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

const mapStateToProps=(state, props)=>{
   // console.log(state)
return(
    {
    curCatReducer:props.curCatReducer,
    isChecked:state[props.curCatReducer].isChecked,
    hintMode:state[props.curCatReducer].hintMode,
    arrQuizes:state[props.curCatReducer].cat.subCat[state[props.curCatReducer].selectSubCat].quizes,
    arrSubCat:state[props.curCatReducer].cat.subCat,
    numSubCat:state[props.curCatReducer].selectSubCat,
    numQuiz:state[props.curCatReducer].numQuestion,
    header:state[props.curCatReducer].cat.subCat[state[props.curCatReducer].selectSubCat].headQuiz[0],
    text:state[props.curCatReducer].cat.subCat[state[props.curCatReducer].selectSubCat].headQuiz[1]
    // isChecked:state.QuizCatA.isChecked,
    // hintMode:state.QuizCatA.hintMode,
    // arrQuizes:state.QuizCatA.catA.subCat[state.QuizCatA.selectSubCat].quizes,
    // arrSubCat:state.QuizCatA.catA.subCat,
    // numSubCat:state.QuizCatA.selectSubCat,
    // numQuiz:state.QuizCatA.numQuestion,
    // header:state.QuizCatA.catA.subCat[state.QuizCatA.selectSubCat].headQuiz[0],
    // text:state.QuizCatA.catA.subCat[state.QuizCatA.selectSubCat].headQuiz[1]
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        hintModeHandler:(curCatReducer)=>dispatch(hintModeHandler(curCatReducer)),
        // hintModeHandler:()=>dispatch(hintMode()),
        saveSubCatHandler:(event, curCatReducer)=>dispatch(saveSubCat(event.target.selectedIndex, curCatReducer)),
        saveNumQuestionHandler:(event, curCatReducer)=>dispatch(saveNumQuestion(event.target.selectedIndex, curCatReducer))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(HeadExercise)