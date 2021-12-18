import React from 'react'
import './navExercise.css'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { checkExe, copyStatistic, next, prev } from '../../store/actions/actionCreaters'
import { UpdateTimer } from '../Timer/Timer'


 const NavExercise = (props)=>{
    return(
        <div className='navExercise'>
            <div>
            <button className='btnLeft' onClick={props.prev} disabled={(props.selectSubCat===0 && props.numQuestion===0)?true:false}><i className="fas fa-chevron-left"></i></button>

            <button className='btnComeOut' onClick={()=>props.copyStatistic(props.arrStatistic)}><NavLink to='./'>Wyjdż</NavLink> </button>

            <button className='btnCheck' onClick={()=>props.checkExe(UpdateTimer())} disabled={(props.isChecked)?true:false}>Sprawdż</button>
           
            <button className='btnRight' onClick={props.next} disabled={(props.selectSubCat+1===props.lengthSubCat && props.numQuestion+1===props.lengthQuestions)?true:false}><i className="fas fa-chevron-right"></i></button>
            </div>
            
        </div>
    )
}
const mapStateToProps=(state, props)=>{
    //console.log(state)
return(
    {
        isChecked:state.QuizCatA.isChecked,
        lengthSubCat:state.QuizCatA.lengthSubCat,
        lengthQuestions:state.QuizCatA.lengthQuestions,
        selectSubCat:state.QuizCatA.selectSubCat,
        numQuestion:state.QuizCatA.numQuestion,
        arrStatistic:state[props.curCatReducer].arrStatistic
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        next:()=>dispatch(next()),
        prev:()=>dispatch(prev()),
        checkExe:(time)=>dispatch(checkExe(time)),
        btnExit:()=>dispatch(),
        copyStatistic:(arrStatistic)=>dispatch(copyStatistic(arrStatistic))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(NavExercise)