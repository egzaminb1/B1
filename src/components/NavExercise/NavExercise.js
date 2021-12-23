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
            <button className='btnLeft' onClick={()=>props.prev(props.curCatReducer)} disabled={(props.selectSubCat===0 && props.numQuestion===0)?true:false}><i className="fas fa-chevron-left"></i></button>

            <button className='btnComeOut' onClick={()=>props.copyStatistic(props.arrStatistic)}><NavLink to='./'>Wyjdż</NavLink> </button>

            <button className='btnCheck' onClick={()=>props.checkExe(UpdateTimer(), props.curCatReducer)} disabled={(props.isChecked)?true:false}>Sprawdż</button>
           
            <button className='btnRight' onClick={()=>props.next(props.curCatReducer)} disabled={(props.selectSubCat+1===props.lengthSubCat && props.numQuestion+1===props.lengthQuestions)?true:false}><i className="fas fa-chevron-right"></i></button>
            </div>
            
        </div>
    )
}
const mapStateToProps=(state, props)=>{
    //console.log(state)
return(
    {
        curCatReducer:props.curCatReducer,
        isChecked:state[props.curCatReducer].isChecked,
        lengthSubCat:state[props.curCatReducer].lengthSubCat,
        lengthQuestions:state[props.curCatReducer].lengthQuestions,
        selectSubCat:state[props.curCatReducer].selectSubCat,
        numQuestion:state[props.curCatReducer].numQuestion,
        // isChecked:state.QuizCatA.isChecked,
        // lengthSubCat:state.QuizCatA.lengthSubCat,
        // lengthQuestions:state.QuizCatA.lengthQuestions,
        // selectSubCat:state.QuizCatA.selectSubCat,
        // numQuestion:state.QuizCatA.numQuestion,
        arrStatistic:state[props.curCatReducer].arrStatistic
    }
)}
const mapDispatchToProps=(dispatch)=>(
    {
        next:(curCatReducer)=>dispatch(next(curCatReducer)),
        prev:(curCatReducer)=>dispatch(prev(curCatReducer)),
        checkExe:(time, curCatReducer)=>dispatch(checkExe(time, curCatReducer)),
        btnExit:()=>dispatch(),
        copyStatistic:(arrStatistic)=>dispatch(copyStatistic(arrStatistic))
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(NavExercise)