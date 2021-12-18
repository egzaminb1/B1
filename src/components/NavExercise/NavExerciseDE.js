import React from 'react'
import './navExerciseDE.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {  nextD, nextE, prevD, prevE, saveSelectD, saveSelectE } from '../../store/actions/actionCreaters'
// import { UpdateTimer } from '../Timer/Timer'


 const NavExerciseDE = (props)=>{
    return(
        <div className='navExerciseDE'>
            <div>
            <button className='btnLeft' onClick={(props.curCatReducer==='QuizCatD')?props.prevD:props.prevE} disabled={(props.selectExe===0)?true:false}><i className="fas fa-chevron-left"></i></button>

            <button className='btnComeOut' ><NavLink to='./'>Wyjdż</NavLink> </button>

            {/* <button className='btnCheck' onClick={()=>props.checkExe(UpdateTimer())} disabled={(props.isChecked)?true:false}>Sprawdż</button> */}
            <div className='btnSelect text-center'>
                {/* <label htmlFor="selQuestion" className='form-label'> Wybór pytania</label> */}
                <select id='selQuestion' className='form-control' name='selQuestion' value={props.selectExe} onChange={(props.curCatReducer==='QuizCatD')?props.saveSelectD:props.saveSelectE}  >
                {Object.keys(props.arrQuizes).map((item, i)=>{
                    return(
                        <option key = {item} value={i} >
                            {(i===0 )?'Wzór':'Zadanie '+i}</option>
                    )
                })} 
                </select>
            </div>
           
            <button className='btnRight' onClick={(props.curCatReducer==='QuizCatD')?props.nextD:props.nextE} disabled={(props.selectExe+1===props.lengthQuizes)?true:false}><i className="fas fa-chevron-right"></i></button>
            </div>
            
        </div>
    )
}
const mapStateToProps=(state, props)=>{
    // console.log(state)
return(
    {
        // isChecked:state.QuizCatA.isChecked,
        // lengthSubCat:state.QuizCatA.lengthSubCat,
        // lengthQuestions:state.QuizCatA.lengthQuestions,
        // selectSubCat:state.QuizCatA.selectSubCat,
        // numQuestion:state.QuizCatA.numQuestion,
        // arrStatistic:state[props.curCatReducer].arrStatistic,
        
        curCatReducer:props.curCatReducer,
        selectExe:state[props.curCatReducer].selectExe,
        arrQuizes:state[props.curCatReducer][props.curCat].quizes,
        lengthQuizes:state[props.curCatReducer][props.curCat].quizes.length
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        nextD:()=>dispatch(nextD()),
        prevD:()=>dispatch(prevD()),
        nextE:()=>dispatch(nextE()),
        prevE:()=>dispatch(prevE()),
        saveSelectD:(event)=>dispatch(saveSelectD(event.target.selectedIndex)),
        saveSelectE:(event)=>dispatch(saveSelectE(event.target.selectedIndex))
        // checkExe:(time)=>dispatch(checkExe(time)),
        // btnExit:()=>dispatch(),
        // copyStatistic:(arrStatistic)=>dispatch(copyStatistic(arrStatistic))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(NavExerciseDE)